/**
 * useTodo
 *
 * @package hooks
 */
import { useState, useCallback } from 'react';
import { INIT_TODO_LIST, INIT_UNIQUE_ID } from '../constants/data';

/**
 * useTodo
 */
export const useTodo = () => {
  /* todolist */
  const [todoList, setTodoList] = useState(INIT_TODO_LIST);
  /* uniqueId */
  const [uniqueId, setUniqueId] = useState(INIT_UNIQUE_ID);

  /* actions */
  /**
   * Todo追加処理
   * @param { string } title
   * @param { string } content
   */
  const addTodo = useCallback(
    (title: string, content: string) => {
      if (title === '' || content === '') return;
      const newUniqueId = uniqueId + 1;
      const newTodoList = [
        ...todoList,
        {
          id: newUniqueId,
          title: title,
          content: content,
        },
      ];
      setTodoList(newTodoList);
      setUniqueId(newUniqueId);
    },
    [todoList, uniqueId]
  );

  /**
   * Todo削除処理
   * @param { number } targetId
   * @param { string }targetTitle
   */
  const deleteTodo = useCallback(
    (targetId: number, targetTitle: string) => {
      if (window.confirm(`「${targetTitle}」のtodoを削除しますか？`)) {
        const newTodoList = todoList.filter((todo) => todo.id !== targetId);
        setTodoList(newTodoList);
      }
    },
    [todoList]
  );

  return {
    todoList,
    addTodo,
    deleteTodo,
  };
};
