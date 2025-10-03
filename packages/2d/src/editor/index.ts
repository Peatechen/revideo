import './index.css';

import {makeEditorPlugin} from '@flammable7841/ui';
import {NodeInspectorConfig} from './NodeInspectorConfig';
import {PreviewOverlayConfig} from './PreviewOverlayConfig';
import {Provider} from './Provider';
import {SceneGraphTabConfig} from './SceneGraphTabConfig';

export default makeEditorPlugin(() => {
  return {
    name: '@flammable7841/2d',
    provider: Provider,
    previewOverlay: PreviewOverlayConfig,
    tabs: [SceneGraphTabConfig],
    inspectors: [NodeInspectorConfig],
  };
});
