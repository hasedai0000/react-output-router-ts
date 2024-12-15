/**
 * useTodoCreateTemplate
 *
 * @package hooks
 */

import { useCallback, useState } from 'react';
import { EventType } from '../../../interfaces/Event';
import { useNavigate } from 'react-router-dom';
import { NAVIGATION_PATH } from '../../../constants/navigation';

type Props = {
  addTodo: (title: string, content: string) => void;
};

type StatesType = {
  title: string;
  content: string;
};

type ActionsType = {
  handleChangeTitle: EventType['onChangeInput'];
  handleChangeContent: EventType['onChangeTextArea'];
  handleCreateTodo: EventType['onSubmit'];
};
/**
 * useTodoCreateTemplate
 */
export const useTodoCreateTemplate = ({ addTodo }: Props) => {
  const navigate = useNavigate();
  /* Todoのタイトル */
  const [title, setTitle] = useState('');
  /* Todoの内容 */
  const [content, setContent] = useState('');

  /**
   * Todoタイトル変更処理
   * @param {*} e
   */
  const handleChangeTitle: EventType['onChangeInput'] = useCallback((e) => setTitle(e.target.value), []);

  /**
   * Todoエリア変更処理
   * @param {*} e
   */
  const handleChangeContent: EventType['onChangeTextArea'] = useCallback((e) => setContent(e.target.value), []);

  /**
   * Todo作成処理
   */
  const handleCreateTodo: EventType['onSubmit'] = useCallback(
    (e) => {
      e.preventDefault();
      if (title !== '' && content !== '') {
        addTodo(title, content);
        navigate(NAVIGATION_PATH.TOP);
      }
    },
    [title, content, addTodo]
  );

  const states: StatesType = {
    title,
    content,
  };

  const actions: ActionsType = {
    handleChangeTitle,
    handleChangeContent,
    handleCreateTodo,
  };

  return [states, actions] as const;
};
