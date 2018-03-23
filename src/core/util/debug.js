import { noop } from '../../shared/util';

/* eslint-disable import/no-mutable-exports */
/** 在非生产环境种进行警告 */
export let warn = noop;

if (process.env.NODE_ENV !== 'production') {
  warn = (msg) => {
    /* eslint-disable no-console */
    console.error(`[Vue warn]:${msg}`);
  };
}

export default {
  warn,
};
