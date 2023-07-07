import { Button, TextInput, Textarea } from '@mantine/core';
import { useForm } from 'react-hook-form';
import { FormFields } from './comment-form.types';
import { zodResolver } from '@hookform/resolvers/zod';
import { schema } from './comment-form.schema';
import { useAddCommentMutation } from '../../../state/endpoints/endpoints.api';
import { toast } from 'react-toastify';

import styles from './comment-form.module.css';

interface Props {
  postId: number;
}

export const CommentForm = ({ postId }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormFields>({
    defaultValues: {
      name: '',
      email: '',
      body: '',
    },
    resolver: zodResolver(schema),
    mode: 'all',
    reValidateMode: 'onSubmit',
  });

  const [addComment] = useAddCommentMutation();

  const onSubmit = (values: FormFields) => {
    addComment({ ...values, postId })
      .then(() => toast.success(`Комментарий успешно добавлен`))
      .catch(() => toast.error('Произошла ошибка, попробуйте еще раз'))
      .finally(() => reset());
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.root}>
      <TextInput {...register('email')} error={errors.email?.message} placeholder='Введите email' />
      <TextInput {...register('name')} error={errors.name?.message} placeholder='Введите тему' />
      <Textarea {...register('body')} error={errors.body?.message} placeholder='Введите текст' />
      <Button type='submit'> Добавить</Button>
    </form>
  );
};
