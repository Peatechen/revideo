import {makeScene2D} from '@flammable7841/2d';
import {createRef, waitFor} from '@flammable7841/core';
import {Switch} from '@flammable7841/examples/src/components/Switch';
// see this import for the component ^

// usage of the component:
export default makeScene2D('components', function* (view) {
  const switchRef = createRef<Switch>();

  view.add(<Switch ref={switchRef} initialState={true} />);

  yield* switchRef().toggle(0.6);
  yield* waitFor(1);
  yield* switchRef().toggle(0.6);
  yield* waitFor(1);
});
