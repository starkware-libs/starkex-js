import jsLogger, {ILogger, ILogLevel} from 'js-logger';

jsLogger.useDefaults({defaultLevel: jsLogger.ERROR});

const getLogger = (name?: string): ILogger => {
  if (!name) {
    return jsLogger;
  }
  return jsLogger.get(name);
};

const getLogLevel = (name?: string): ILogLevel => {
  return getLogger(name).getLevel();
};

const setLogLevel = (level: ILogLevel, name?: string): void => {
  getLogger(name).setLevel(level);
};

export {getLogger, getLogLevel, setLogLevel, ILogger};
