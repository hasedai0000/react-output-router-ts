/**
 * useTodoList
 *
 * @package components
 */
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { NAVIGATION_PATH } from '../../../constants/navigation';

type ActionType = {
  handleMoveDetailPage: (id: number) => void;
};

/**
 * useTodoList
 *
 * @package hooks
 */
export const useTodoList = () => {
  const navigate = useNavigate();

  const handleMoveDetailPage = useCallback(
    (id: number) => {
      navigate(`${NAVIGATION_PATH.DETAIL}${id}`);
    },
    [navigate]
  );

  const actions: ActionType = {
    handleMoveDetailPage,
  };

  return [actions] as const;
};
