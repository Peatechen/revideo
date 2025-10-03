import {useScene} from '@flammable7841/core';
import type {Scene2D} from './Scene2D';

export function useScene2D(): Scene2D {
  return <Scene2D>useScene();
}
