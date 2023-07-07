import { useGetCommentsQuery } from '../../state/endpoints/endpoints.api';
import { Comment } from './comment';
import { Title } from '@mantine/core';

import styles from './comments.module.css';

interface Props {
  postId: number;
}

export const Comments = ({ postId }: Props) => {
  const { data = [] } = useGetCommentsQuery({ postId });

  return (
    <div className={styles.root}>
      <Title order={1}>Комментарии</Title>
      {data.map((item, index) => (
        <Comment key={item.id} {...item} />
      ))}
    </div>
  );
};
