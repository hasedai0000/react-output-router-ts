/**
 * useTodo
 *
 * @package hooks
 */
import { useState, useCallback } from 'react';
import { INIT_TODO_LIST } from '../constants/data';

/**
 * useTodo
 */
export const useTodo = () => {
  /* todolist */
  const [todoList, setTodoList] = useState(INIT_TODO_LIST);

  /* actions */
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

  console.log(todoList);

  return {
    todoList,
    deleteTodo,
  };
};
