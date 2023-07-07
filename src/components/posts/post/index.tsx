import { Button, Text, Title } from '@mantine/core';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetPostQuery, useGetUserQuery } from '../../../state/endpoints/endpoints.api';
import { Comments } from '../../comments';
import { CommentForm } from '../../comments/comment-form';
import { toast } from 'react-toastify';
import { LoaderComponent } from '../../loader';

import styles from './post.module.css';

export const Post = () => {
  const navigate = useNavigate();
  const paramId = useParams();

  const id = Number(paramId.id);

  const { data: postData } = useGetPostQuery({ id }, { skip: !id });
  const { data: userData } = useGetUserQuery({ id: +postData?.userId! });

  const handleRedirectToMain = () => {
    navigate('/');
    toast.success('Вы на главной странице');
  };

  if (!postData) return <LoaderComponent />;

  return (
    <div className={styles.root}>
      {postData && (
        <div className={styles.postWrapper}>
          <Title order={1} className={styles.postInfo}>
            Пост № {id}, владелец: {userData?.username}
          </Title>
          <div>
            <Title order={2}>{postData.title.at(0)?.toUpperCase() + postData.title.slice(1)}</Title>
            <Text fz='lg'>{postData.body}</Text>
          </div>
          <Comments postId={id} />
          <Title order={1} className={styles.commentFormTitle}>
            Добавьте комментарий
          </Title>
          <CommentForm postId={id} />
        </div>
      )}
      <Button className={styles.redirectBtn} onClick={handleRedirectToMain}>
        На главную
      </Button>
    </div>
  );
};
