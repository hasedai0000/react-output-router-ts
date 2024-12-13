/**
 * index
 *
 * @package routers
 */

import { createBrowserRouter } from 'react-router-dom';
import { NAVIGATION_LIST } from '../constants/navigation';
import { TodoPage } from '../pages/todo';
import { TodoCreatePage } from '../pages/create';

/**
 * index
 */
export const router = createBrowserRouter([
  {
    path: NAVIGATION_LIST.TOP,
    element: <TodoPage />,
  },
  {
    path: NAVIGATION_LIST.CREATE,
    element: <TodoCreatePage />,
  },
]);
