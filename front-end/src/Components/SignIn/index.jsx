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
    if (response) {
      localStorage.setItem('token', response.data.message);
      navigate('/');
    } else {
      setUserNotFound(true);
    }
  };

  return (
    <div className="sign-in">
      <h1>Já sou cliente</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="email" placeholder="E-mail" {...register('email')} />
        <p>{errors?.email?.message}</p>
        <input type="password" placeholder="Senha" {...register('password')} />
        <p>{errors?.password?.message}</p>
        {userNotFound && <p>Email ou senha inválidos</p>}
        <input type="submit" />
      </form>
    </div>
  );
}
