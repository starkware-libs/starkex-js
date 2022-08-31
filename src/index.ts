import {StarkExClient} from './lib';
import {getLogger, printPackageInfo, setLogLevel} from './utils';

declare const __VERSION__: string;
declare const __NAME__: string;
declare const __NODE_ENV__: string;

printPackageInfo(__NAME__, __VERSION__, '#734d7e');

export default StarkExClient;

if (__NODE_ENV__ === 'development') {
  setLogLevel(getLogger().DEBUG);
}
