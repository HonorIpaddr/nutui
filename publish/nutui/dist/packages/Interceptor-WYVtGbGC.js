import { f as isPromise } from "./util-4Jkyw4BJ.js";
const funInterceptor = (interceptor, {
  args = [],
  done,
  canceled
}) => {
  if (interceptor) {
    const returnVal = interceptor.apply(null, args);
    if (isPromise(returnVal)) {
      returnVal.then((value) => {
        if (value) {
          done(value);
        } else if (canceled) {
          canceled();
        }
      }).catch(() => {
      });
    } else if (returnVal) {
      done();
    } else if (canceled) {
      canceled();
    }
  } else {
    done();
  }
};
export {
  funInterceptor as f
};