import { Button, Select, Table } from '@mantine/core';
import { useState } from 'react';
import { useGetPostsQuery, useGetUsersQuery } from '../../state/endpoints/endpoints.api';
import { PostRows } from './post-rows';
import { LoaderComponent } from '../loader';

import styles from './posts.module.css';

export const Posts = () => {
  const [value, setValue] = useState<string | null>(null);

  const { data } = useGetPostsQuery({ userId: value ? +value : undefined });
  const { data: usersData } = useGetUsersQuery(null, { skip: !value });

  if (!data) return <LoaderComponent />;

  return (
    <>
      {usersData && (
        <div className={styles.selectUserWrapper}>
          <Select
            value={value}
            onChange={setValue}
            className={styles.select}
            label='Пользователи'
            placeholder='Выберите пользователя'
            data={usersData}
          />
          <Button onClick={() => setValue(null)}>Сбросить</Button>
        </div>
      )}
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Заголовок</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <PostRows key={item.id} {...item} />
          ))}
        </tbody>
      </Table>
    </>
  );
};
