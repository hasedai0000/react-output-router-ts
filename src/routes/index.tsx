/**
 * index
 *
 * @package routers
 */

import { createBrowserRouter } from 'react-router-dom';
import { NAVIGATION_LIST } from '../constants/navigation';
import { TodoListPage } from '../pages/todo';
import { TodoCreatePage } from '../pages/create';
import { TodoDetailPage } from '../pages/detail';
import { TodoEditPage } from '../pages/edit';

/**
 * index
 */
export const router = createBrowserRouter([
  {
    path: NAVIGATION_LIST.TOP,
    element: <TodoListPage />,
  },
  {
    path: NAVIGATION_LIST.CREATE,
    element: <TodoCreatePage />,
  },
  {
    path: NAVIGATION_LIST.DETAIL,
    element: <TodoDetailPage />,
  },
  {
    path: NAVIGATION_LIST.EDIT,
    element: <TodoEditPage />,
  },
]);
