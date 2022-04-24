import * as z from 'zod';

export const signInSchema = z.object({
  email: z
    .string()
    .email('Email inválido.')
    .nonempty('O campo E-mail é obrigatório.'),
  password: z.string().nonempty('O campo Senha é obrigatório.'),
});

export const signUpSchema = z.object({
  firstName: z.string().nonempty('O campo Nome é obrigatório.'),
  lastName: z.string().nonempty('O campo Sobrenome é obrigatório.'),
  email: z
    .string()
    .email('Email inválido.')
    .nonempty('O campo E-mail é obrigatório.'),
  password: z
    .string()
    .min(6, { message: 'O campo Senha precisa ter pelo menos 6 caracteres.' })
    .nonempty('O campo Senha é obrigatório.'),
});
