// 本文件主要进行Vue初始化构造

/* eslint-disable func-names */

let uid = 0; // 实例id

/**
 * vue的真正初始化内容
 *
 * @param {any} Vue 全局vue对象
 */
export const initMixin = (Vue) => {
  Vue.prototype._init = function (options) {
    const vm = this; // 对象实例
    vm._uid = uid + 1; // 自增

    // 是否启用observed的标记
    vm._isVue = true;
  };
};

export default {
  initMixin,
};
