import React from 'react';
import { Loader, Text } from '@mantine/core';

import styles from './loader.module.css';

export const LoaderComponent = () => {
  return (
    <div className={styles.root}>
      <Loader size='xl' />
      <Text fz='xl'>Идет Загрузка...</Text>
    </div>
  );
};
