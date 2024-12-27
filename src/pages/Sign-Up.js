import React from 'react';
import { useForm } from 'react-hook-form';

const SignUp = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <h1 className="text-4xl text-[#0EA5E9]">
        Aluritter
      </h1>

      <form className="flex flex-col items-center mt-8 w-[378px] h-[114px] opacity-100">
        <input
          type="email"
          placeholder="email@exemplo.com"
          className="w-[378px] h-[42px] p-[8.5px] border border-[#94A3B8] rounded-[4px] mb-4 opacity-100 focus:border-blue-500"
        />

        <input
          type="password"
          placeholder="Senha"
          className="w-[378px] h-[42px] p-[8.5px] border border-[#94A3B8] rounded-[4px] opacity-100 focus:border-blue-500"
        />
      </form>

      <button
        type="submit"
        className="w-[378px] h-[40px] bg-[#10B981] text-white rounded-[4px] opacity-100 hover:bg-[#0EA5E9] flex items-center justify-center"
      >
        <span className="text-[16px] font-normal leading-[24px]">
          Criar uma nova conta
        </span>
      </button>

      <span className="mt-4 text-sm text-[#000000] opacity-100">
      Já possui uma conta? <span className="text-[#0EA5E9]">Acesse agora!</span>
      </span>
    </div>
  );
};

export default SignUp;