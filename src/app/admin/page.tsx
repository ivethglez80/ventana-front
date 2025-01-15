"use client";

import Image from "next/image";
import { useState } from "react";
import { TbLogin2 } from "react-icons/tb";
import Link from "next/link";

export default function Dashboard() {
    const initialForm  ={
        email:"",
        password:""
    };
    const [formData, setFormData] = useState(initialForm);
  const [emailError, setEmailError] = useState("");
 
  // const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const email = e.target.value;
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
  //   if (!email || emailRegex.test(email)) {
  //     setEmailError("");
  //   } else {
  //     setEmailError("Por favor, ingresa un correo válido."); 
  //   }
  //   setFormData({ ...formData, email });
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email.trim() || !formData.password.trim()) {
      alert("Por favor, completa los campos obligatorios: Email y password.");
      return; 
    }
    if (emailError) {
      alert("Por favor corrige los errores antes de enviar.");
      return;
    }
    // const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!; 
    // const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!; 
    // const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!; 

    // try {
    //   const response = await emailjs.send(
    //     serviceID,
    //     templateID,
    //     {          
    //       email: formData.email,         
    //       password: formData.password,
    //     },
    //     userID
    //   );
    //   console.log("Correo enviado:", response.text);
    //   alert("¡Formulario enviado exitosamente!");
    //   setFormData(initialForm);
    // } catch (error) {
    //   console.error("Error al enviar el formulario:", error);
    //   alert("Hubo un problema al enviar el formulario. Inténtalo más tarde.");
    // }
    alert("Datos recibidos. Email y contraseña enviados correctamente.");
  };

  return (
    <div className="mt-0 pt-0 bg-blueD h-screen w-screen flex justify-center items-center font-poppins">
      <div className="w-[28%] h-[85%] bg-grayD rounded-xl flex justify-center items-center">
        <span className="w-[80%] h-[80%]">
          <span className="flex flex-row justify-between items-center">
            <Image
              src="/dashbrd/lineaB.png"
              alt="decorative line"
              height={43}
              width={527}
              className="w-1/3 h-full object-contain"
            />
            <p className=" text-grayL text-2xl font-medium tracking-wider">
                LOGIN
            </p>
            <Image
              src="/dashbrd/lineaB.png"
              alt="decorative line"
              height={43}
              width={527}
              className="w-1/3 h-full object-contain"
            />
          </span>

          <span>
            <input 
            type="email" 
            placeholder="usuario"
            className="bg-grayM rounded-lg p-2 text-grayM text-base w-full mt-6"
            />
             <input 
            type="text" 
            placeholder="password"
            className="bg-grayM rounded-lg p-2 text-grayM text-base w-full mt-4"
            />
            <span className="flex justify-center">
            <div
            onClick={handleSubmit}
            className="bg-blueB rounded-md text-white py-4 px-6 flex flex-row gap-2 w-2/3 items-center mt-6"
            >
                <TbLogin2 className="font-poppins text-lg font-semibold tracking-wide"/>
                    INICIAR SESIÓN
                </div>
            </span>

            <span className="flex justify-center pt-6">
                <Image
                src="/logo.png"
                alt="la ventana logo"
                height={90}
                width={167}
                className=""
                />
            </span>

            <span className="flex flex-row text-blueM pt-6 justify-center">
                <p className="font-medium">
                Desarrollado por&nbsp;  
                </p>
                <Link 
                href="https://www.pixtudios.net/" 
                target="_blank"
                >
                <p className="hover:text-blueB hover:underline font-extralight">
                Pixtudios
                </p>
                </Link>
            </span>
            <p className="text-blueM pt-2">
            ©2023 Todos los derechos reservados.
            </p>
          </span>
        </span>
      </div>
    </div>
  );
}
