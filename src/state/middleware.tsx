const showLog = true;

const logger = (config: any) => (set: any, get: any, api: any) => config((args: any) => {
  if (showLog && process.env.NODE_ENV !== 'production') console.log('%c applying  ', 'background: #4C2929; color: yellow', args);
  set(args);
  if (showLog && process.env.NODE_ENV !== 'production') console.log('%c new state ', 'background: #4C2929; color: lightgreen', get());
}, get, api);

const test = () => console.log('test');

export { logger, test };
