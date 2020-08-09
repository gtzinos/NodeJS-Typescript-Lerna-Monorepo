const CYAN = '\x1b[36m';
const RED = '\x1b[31m';
const YELLOW = '\x1b[33m';

const log = (color: any, ...args: any) => console.log(color + '%s', ...args);

export class logger {

    static info = (...args: any) => log(CYAN, ...args);
    static warn = (...args: any) => log(YELLOW, ...args);
    static error = (...args: any) => log(RED, ...args);
    static error2 = (...args: any) => log(RED, ...args);
}