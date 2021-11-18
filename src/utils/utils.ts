import {getLogger, getLogLevel, setLogLevel} from './logger';

const toUnderscore = (s: string): string =>
  s.replace(/([A-Z])/g, '_$1').toLowerCase();

const camelToUnderscore = (obj: Record<string, any>): Record<string, any> => {
  const res: Record<string, any> = {};
  Object.keys(obj).forEach(key => {
    res[toUnderscore(key)] =
      typeof obj[key] === 'object' ? camelToUnderscore(obj[key]) : obj[key];
  });
  return res;
};

const capitalize = (s: string): string => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const printPackageInfo = (
  name: string,
  version: string,
  color?: string
): void => {
  const currentLogLevel = getLogLevel();
  setLogLevel(getLogger().INFO);
  getLogger().log(
    `%c ${name} v${version}`,
    `color: ${color || '#ff98f9'};  font-size: large`
  );
  setLogLevel(currentLogLevel);
};

export {camelToUnderscore, capitalize, printPackageInfo};
