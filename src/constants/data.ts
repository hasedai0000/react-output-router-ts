/**
 * data
 *
 * @package constants
 */

/**
 * Todoリストの処置値
 */
export const INIT_TODO_LIST: Array<TodoType> = [
  {
    id: 1,
    title: 'Todo1',
    content: 'Todo1 content',
  },
  {
    id: 2,
    title: 'Todo2',
    content: 'Todo2 content',
  },
];

/**
 * Todo採番IDの初期値
 */
export const INIT_TODO_ID = INIT_TODO_LIST.length;
