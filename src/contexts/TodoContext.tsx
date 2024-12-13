/**
 * TodoContext
 *
 * @package contexts
 */
import { createContext, FC, useContext } from 'react';
import { useTodo } from '../hooks/useTodo';
import { TodoType } from '../interfaces/Todo';

type Props = {
  children: React.ReactNode;
};

interface ContextInterface {
  todoList: Array<TodoType>;
  deleteTodo: (targetId: number, targetTitle: string) => void;
}

/**
 * TodoContext
 */
const TodoContext = createContext({} as ContextInterface);

/**
 * TodoProvider
 * @param children
 * @constructor
 */
export const TodoProvider: FC<Props> = ({ children }) => {
  // カスタムフックから状態とロジックを呼び出してコンテキストプロバイダーにあてがう
  const { todoList, deleteTodo } = useTodo();

  return <TodoContext.Provider value={{ todoList, deleteTodo }}>{children}</TodoContext.Provider>;
};

/**
 * useTodoContext
 * @returns
 */
export const useTodoContext = () => {
  return useContext(TodoContext);
};
