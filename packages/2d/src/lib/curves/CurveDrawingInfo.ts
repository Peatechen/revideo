import type {Vector2} from '@flammable7841/core';

export interface CurveDrawingInfo {
  path: Path2D;
  arrowSize: number;
  endPoint: Vector2;
  endTangent: Vector2;
  startPoint: Vector2;
  startTangent: Vector2;
  startOffset: number;
}
