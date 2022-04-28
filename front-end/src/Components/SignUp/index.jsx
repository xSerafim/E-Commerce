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
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Nome" {...register('firstName')} />
        <p>{errors?.firstName?.message}</p>
        <input type="text" placeholder="Sobrenome" {...register('lastName')} />
        <p>{errors?.lastName?.message}</p>
        <input type="text" placeholder="E-mail" {...register('email')} />
        <p>{errors?.email?.message}</p>
        <input type="password" placeholder="Senha" {...register('password')} />
        <p>{errors?.password?.message}</p>
        {userNotFound && <p>E-mail já cadastrado</p>}
        <input type="submit" />
      </form>
    </div>
  );
}
