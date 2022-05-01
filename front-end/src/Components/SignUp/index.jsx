import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import './style.css';

import { signUpSchema } from '../../Utils/Validations';
import { handleFetch } from '../../Services/Api';
import { url } from '../../Utils/Endpoints';
import { method } from '../../Utils/Methods';

export default function SignUp() {
  const [userNotFound, setUserNotFound] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data) => {
    const response = await handleFetch(method.POST, url.user, data);
    if (!response) {
      setUserNotFound(true);
    } else {
      setUserNotFound(false);
    }
  };

  return (
    <div className="sign-up">
      <h1>Criar conta</h1>
      <form className="login-logout" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Nome" {...register('firstName')} />
        <p id="error-message">{errors?.firstName?.message}</p>
        <input type="text" placeholder="Sobrenome" {...register('lastName')} />
        <p id="error-message">{errors?.lastName?.message}</p>
        <input type="text" placeholder="E-mail" {...register('email')} />
        <p id="error-message">{errors?.email?.message}</p>
        <input type="password" placeholder="Senha" {...register('password')} />
        <p id="error-message">{errors?.password?.message}</p>
        {userNotFound && <p>E-mail já cadastrado</p>}
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
