/* eslint-disable no-underscore-dangle */
import { initMixin } from './init';
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
  this._init(options);
}

initMixin(Vue); // 初始化Vue

export default Vue;
