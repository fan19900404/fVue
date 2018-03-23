import { warn } from '../util/index';

/**
 * vue构造函数
 *
 * @param {any} options 配置选项
 */
function Vue(options) {
  // process.env.NODE_ENV 是由rollup进行替换
  if (process.env.NODE_ENV !== 'production' && !(this instanceof Vue)) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  console.log(options);
}

export default Vue;
