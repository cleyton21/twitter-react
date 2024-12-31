import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../index.js'; // Certifique-se de que o caminho está correto
import { Link, useNavigate } from 'react-router-dom';



const SignUp = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();  

  function handleSignUp(event) {
    event.preventDefault();
    createUserWithEmailAndPassword(email, password);
  }

  useEffect(() => {
      if (user) {
        navigate('/');
      }
    }, [user, navigate]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <h1 className="text-4xl text-[#0EA5E9]">
        Aluritter
      </h1>

      <form className="flex flex-col items-center mt-8 w-[378px] h-[114px] opacity-100">
        <input
          type="email"
          name='email'
          id='email'
          placeholder="email@exemplo.com"
          className="w-[378px] h-[42px] p-[8.5px] border border-[#94A3B8] rounded-[4px] mb-4 opacity-100 focus:border-blue-500"
          onChange={(event) => setEmail(event.target.value)}
        />

        <input
          type="password"
          name='password'
          id='password'
          placeholder="Senha"
          className="w-[378px] h-[42px] p-[8.5px] border border-[#94A3B8] rounded-[4px] opacity-100 focus:border-blue-500"
          onChange={(event) => setPassword(event.target.value)}
        />
      </form>

      <button onClick={handleSignUp}
        className="w-[378px] h-[40px] bg-[#10B981] text-white rounded-[4px] opacity-100 hover:bg-[#0EA5E9] flex items-center justify-center"
      >
        <span className="text-[16px] font-normal leading-[24px]">
          Criar uma nova conta
        </span>
      </button>

      <span className="mt-4 text-sm text-[#000000] opacity-100">
      Já possui uma conta? <span className="text-[#0EA5E9]"><Link to="/Sign-In">Acesse agora!</Link></span>
      </span>
    </div>
  );
};

export default SignUp;