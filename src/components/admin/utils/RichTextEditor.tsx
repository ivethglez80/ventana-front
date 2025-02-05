import React, { useCallback, useMemo } from 'react';
import isHotkey from 'is-hotkey';
import { Editable, withReact, useSlate, Slate } from 'slate-react';
import {
  Editor,
  Transforms,
  createEditor,
  Descendant,
  Element as SlateElement,
  Text,
} from 'slate';
import { withHistory } from 'slate-history';
import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaCode,
  FaHeading,
  FaListUl,
  FaListOl,
  FaQuoteLeft,
} from 'react-icons/fa';

const HOTKEYS: Record<string, keyof CustomText> = {
  'mod+b': 'bold',
  'mod+i': 'italic',
  'mod+u': 'underline',
  'mod+`': 'code',
};

const LIST_TYPES = ['numbered-list', 'bulleted-list'];

export interface CustomElement extends SlateElement {
  type: string;
  align?: string;
  children: Descendant[];
}

interface CustomText extends Text {
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  code?: boolean;
}

interface RichTextEditorProps {
    initialValue: Descendant[]; 
    onChange: (value: Descendant[]) => void;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({ initialValue, onChange }) => {
  const renderElement = useCallback((props: any) => <Element {...props} />, []);
  const renderLeaf = useCallback((props: any) => <Leaf {...props} />, []);
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);

  return (
    <Slate editor={editor} initialValue={initialValue} onChange={onChange}>
      {/* 🔹 Agregamos la barra de herramientas aquí */}
      <Toolbar editor={editor} />
      <Editable
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        placeholder="Escribe aquí..."
        spellCheck
        autoFocus
        onKeyDown={(event) => {
          for (const hotkey in HOTKEYS) {
            if (isHotkey(hotkey, event)) {
              event.preventDefault();
              const mark = HOTKEYS[hotkey as keyof typeof HOTKEYS];
              toggleMark(editor, mark);
            }
          }
        }}
      />
    </Slate>
  );
};

// 🔹 Definir la barra de herramientas
const Toolbar = ({ editor }: { editor: Editor }) => {
  return (
    <div className="mb-2 flex gap-2 border-b pb-2">
      <MarkButton editor={editor} format="bold" icon={<FaBold />} />
      <MarkButton editor={editor} format="italic" icon={<FaItalic />} />
      <MarkButton editor={editor} format="underline" icon={<FaUnderline />} />
      <MarkButton editor={editor} format="code" icon={<FaCode />} />
      <BlockButton editor={editor} format="heading-one" icon={<FaHeading />} />
      <BlockButton editor={editor} format="bulleted-list" icon={<FaListUl />} />
      <BlockButton editor={editor} format="numbered-list" icon={<FaListOl />} />
      <BlockButton editor={editor} format="block-quote" icon={<FaQuoteLeft />} />
    </div>
  );
};

// 🔹 Botón para modificar estilo de texto
const MarkButton = ({ editor, format, icon }: { editor: Editor; format: keyof CustomText; icon: JSX.Element }) => {
  return (
    <button
      className={`px-2 py-1 border rounded ${isMarkActive(editor, format) ? "bg-blue-500 text-white" : "bg-gray-200"}`}
      onMouseDown={(event) => {
        event.preventDefault();
        toggleMark(editor, format);
      }}
    >
      {icon}
    </button>
  );
};

// 🔹 Botón para modificar bloques de texto
const BlockButton = ({ editor, format, icon }: { editor: Editor; format: string; icon: JSX.Element }) => {
  return (
    <button
      className={`px-2 py-1 border rounded ${isBlockActive(editor, format) ? "bg-blue-500 text-white" : "bg-gray-200"}`}
      onMouseDown={(event) => {
        event.preventDefault();
        toggleBlock(editor, format);
      }}
    >
      {icon}
    </button>
  );
};

// 🔹 Función para alternar estilos de texto
const toggleMark = (editor: Editor, format: keyof CustomText) => {
  const isActive = isMarkActive(editor, format);
  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
};

// 🔹 Función para alternar bloques de texto
const toggleBlock = (editor: Editor, format: string) => {
  const isActive = isBlockActive(editor, format);
  const isList = LIST_TYPES.includes(format);

  Transforms.unwrapNodes(editor, {
    match: (n) => !Editor.isEditor(n) && SlateElement.isElement(n) && LIST_TYPES.includes((n as CustomElement).type || ""),
    split: true,
  });

  let newProperties: Partial<CustomElement>;
  newProperties = { type: isActive ? "paragraph" : isList ? "list-item" : format };

  Transforms.setNodes(editor, newProperties);

  if (!isActive && isList) {
    const block: CustomElement = { type: format, children: [{ text: "" }] };
    Transforms.wrapNodes(editor, block);
  }
};

// 🔹 Comprobar si un estilo de texto está activo
const isMarkActive = (editor: Editor, format: string) => {
    const marks = Editor.marks(editor) as CustomText; 
    return marks ? marks[format as keyof CustomText] === true : false; 
  };

// 🔹 Comprobar si un bloque está activo
const isBlockActive = (editor: Editor, format: string) => {
  const { selection } = editor;
  if (!selection) return false;
  const [match] = Array.from(
    Editor.nodes(editor, {
      at: Editor.unhangRange(editor, selection),
      match: (n) => !Editor.isEditor(n) && SlateElement.isElement(n) && (n as CustomElement).type === format,
    })
  );
  return !!match;
};

const Element = ({ attributes, children, element }: { attributes: any; children: any; element: CustomElement }) => {
  switch (element.type) {
    case "block-quote":
      return <blockquote {...attributes} className="border-l-4 pl-4 italic text-gray-600">{children}</blockquote>;
    case "bulleted-list":
      return <ul {...attributes} className="list-disc pl-5">{children}</ul>;
    case "numbered-list":
      return <ol {...attributes} className="list-decimal pl-5">{children}</ol>;
    case "heading-one":
      return <h1 {...attributes} className="text-xl font-bold">{children}</h1>;
    case "list-item":
      return <li {...attributes}>{children}</li>;
    default:
      return <p {...attributes}>{children}</p>;
  }
};

const Leaf = ({ attributes, children, leaf }: { attributes: any; children: any; leaf: CustomText }) => {
  if (leaf.bold) children = <strong>{children}</strong>;
  if (leaf.italic) children = <em>{children}</em>;
  if (leaf.underline) children = <u>{children}</u>;
  if (leaf.code) children = <code className="bg-gray-200 px-1">{children}</code>;
  return <span {...attributes}>{children}</span>;
};

export default RichTextEditor;
