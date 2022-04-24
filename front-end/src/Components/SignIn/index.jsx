import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { signInSchema } from '../../utils/validations';

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = (data) => console.log(data);

  console.log(errors);
  return (
    <div>
      <h1>Já sou cliente</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="email" placeholder="E-mail" {...register('email')} />
        <p>{errors?.email?.message}</p>
        <input type="password" placeholder="Senha" {...register('password')} />
        <p>{errors?.password?.message}</p>
        <input type="submit" />
      </form>
    </div>
  );
}
