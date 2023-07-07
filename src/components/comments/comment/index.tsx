import React from 'react';
import { CommentDTO } from '../../../state/endpoints/endpoints.types';
import { Text } from '@mantine/core';

import styles from './comment.module.css';

export const Comment = ({ email, body }: CommentDTO) => {
  return (
    <div className={styles.root}>
      <Text fz='lg' fw={700}>
        user: {email}
      </Text>
      <Text className={styles.comment} fz='md'>
        {body}
      </Text>
    </div>
  );
};
