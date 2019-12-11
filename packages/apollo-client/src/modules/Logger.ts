import { IS_PRODUCTION } from 'constants/env';

export default class Logger {
  public static log(message?: any, ...optionalParams: any[]) {
    if (!IS_PRODUCTION) {
      // tslint:disable-next-line:no-console
      console.log(message, ...optionalParams);
    }
  }

  public static error(message?: any, ...optionalParams: any[]) {
    // tslint:disable-next-line:no-console
    console.error(message, ...optionalParams);
  }
}