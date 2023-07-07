import { PostDTO } from '../../state/endpoints/endpoints.types';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import styles from './posts.module.css';

export const PostRows = ({ id, title }: PostDTO) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/post/${id}`);
    toast.success(`Вы на странице поста № ${id}`);
  };

  return (
    <tr className={styles.postRow} onClick={handleNavigate}>
      <td>{id}</td>
      <td>{title}</td>
    </tr>
  );
};
