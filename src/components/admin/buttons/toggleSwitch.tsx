import React from 'react'

type Switcher4Props = {
    isChecked: boolean;
    onToggle: () => void;
  };

const Switcher4 = ({ isChecked, onToggle }: Switcher4Props) => {  

  return (
    <>
      <label className='flex cursor-pointer select-none items-center'>
        <div className='relative'>
          <input
            type='checkbox'
            checked={isChecked}
            onChange={onToggle}
            className='sr-only'
          />
          <div
            className={`box block h-6 w-12 rounded-full ${
              isChecked ? 'bg-blueB' : 'bg-grayA'
            }`}
          ></div>
          <div
            className={`absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-grayL transition ${
              isChecked ? 'translate-x-full' : ''
            }`}
          ></div>
        </div>
      </label>
    </>
  )
}

export default Switcher4
