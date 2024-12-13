/**
 * navigation
 *
 * @package constants
 */

/**
 * ベースPATH
 * @type {string}
 */
export const BASE_PATH = '/react-output-router-ts';

/**
 * リンク先一覧
 * 遷移先定義の際に使用
 * @type {{ TOP: string; CREATE: string }}
 */
export const NAVIGATION_LIST = {
  TOP: `${BASE_PATH}/`,
  CREATE: `${BASE_PATH}/create`,
};

/**
 * パス一覧
 * 画面遷移時に使用
 * @type {{ TOP: string; CREATE: string }}
 */
export const NAVIGATION_PATH = {
  TOP: `${BASE_PATH}/`,
  CREATE: `${BASE_PATH}/create`,
};
