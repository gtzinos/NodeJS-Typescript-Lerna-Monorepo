
const CYAN = '\x1b[36m';
const RED = '\x1b[31m';
const YELLOW = '\x1b[33m';

const log = (color: any, ...args: any) => console.log(color + '%s', ...args);

exports.info = (...args: any) => log(CYAN, ...args);
exports.warn = (...args: any) => log(YELLOW, ...args);
exports.error = (...args: any) => log(RED, ...args);