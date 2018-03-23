var Vue = (function () {
  'use strict';

  /**
   * 不执行任何操作
   *
   * @export
   */
  function noop() {}

  /* eslint-disable import/no-mutable-exports */
  var warn = noop;

  {
    warn = function warn(msg) {
      /* eslint-disable no-console */
      console.error('[Vue warn]:' + msg);
    };
  }

  /**
   * vue构造函数
   *
   * @param {any} options 配置选项
   */
  function Vue(options) {
    // "development" 是由rollup进行替换
    if ("development" !== 'production' && !(this instanceof Vue)) {
      warn('Vue is a constructor and should be called with the `new` keyword');
    }
    console.log(options);
  }

  // Vue核心入口文件

  Vue.version = '__VERSION__'; // 暂时不知道这个版本是什么意思

  // 全局vue入口文件

  return Vue;

}());
