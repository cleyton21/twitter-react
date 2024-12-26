import React from 'react';

const Home = () => {
  return (
    <div className="h-screen w-full bg-gray-200">
      {/* Div flex com estilo especificado */}
      <div className="flex w-full h-[45px] p-[8px] px-[20px] py-[9px] border-b border-[#E5E7EB] bg-white opacity-100">
        <h1 className="text-[18px] font-normal leading-[28px] text-left text-[#0EA5E9]">
          Aluritter
        </h1>

        <div
          style={{
            width: '255.1px',
            height: '28px',
            top: '8px',
            right: '20px',  // Adicionando um espaço de 20px do lado direito
            padding: '0px',
            gap: '0px',
            position: 'absolute',
            display: 'flex',  // Usado para alinhar o conteúdo
            justifyContent: 'flex-end',  // Alinha o conteúdo no final (direita)
            alignItems: 'center',  // Centraliza o conteúdo verticalmente
          }}
        >
        <p className="w-[205px] h-[20px] mt-[3.5px] mr-[10px] opacity-100 font-['Roboto'] text-[14px] font-normal leading-[20px] text-right text-gray-500">
          cfernando_21@hotmail.com
        </p>
        
        <button className="ml-auto w-[39.24px] h-[28px] p-[3.5px] px-[8.24px] rounded-[4px] bg-[#EF4444] flex items-center justify-center opacity-100">
                <span className="text-[14px] font-normal leading-[20px] text-white">
                  Sair
                </span>
        </button>
      </div>

      </div>

      {/* Div.container centralizada */}
      <div className="flex justify-center items-center w-full mt-12">
        {/* Form dentro da div.container */}
        <form className="w-[1200px] h-[196px] flex justify-center items-center">
          {/* Textarea dentro do form */}
          <textarea
            className="w-[1200px] h-[114px] gap-0 rounded-tl-md rounded-tr-none rounded-bl-none rounded-br-none border border-[#E5E7EB] bg-[#FFFFFF] opacity-100"
          ></textarea>
        </form>
      </div>

      
    </div>
  );
};

export default Home;
