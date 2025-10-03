import {Color} from '@flammable7841/core';
import {signal, wrapper} from './signal';

export function colorSignal(): PropertyDecorator {
  return (target, key) => {
    signal()(target, key);
    wrapper(Color)(target, key);
  };
}
