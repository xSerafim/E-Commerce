import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import './style.css';

import { signInSchema } from '../../Utils/Validations';
import { handleFetch } from '../../Services/Api';
import { url } from '../../Utils/Endpoints';
import { method } from '../../Utils/Methods';

export default function SignIn() {
  const [userNotFound, setUserNotFound] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = async (data) => {
    const response = await handleFetch(method.POST, url.userLogin, data);

    if (!response.message.includes('not found') && response.role === 'user') {
      localStorage.setItem('token', response.message);
      navigate('/');
    } else if (
      !response.message.includes('not found') &&
      response.role === 'admin'
    ) {
      localStorage.setItem('token', response.message);
      navigate('/dashboard');
    } else {
      setUserNotFound(true);

      setTimeout(() => {
        setUserNotFound(false);
      }, 2000);
    }
  };

  return (
    <div className="sign-in">
      <h1>Já sou cliente</h1>
      <form className="login-logout" onSubmit={handleSubmit(onSubmit)}>
        <input type="email" placeholder="E-mail" {...register('email')} />
        <p id="error-message">{errors?.email?.message}</p>
        <input type="password" placeholder="Senha" {...register('password')} />
        <p id="error-message">{errors?.password?.message}</p>
        {userNotFound && <p id="error-message">Email ou senha inválidos</p>}
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
