import {renderVideo} from '@flammable7841/renderer';

async function render() {
  console.log('Rendering video...');

  const file = await renderVideo({
    projectFile: './src/project.ts',
    variables: {fill: 'orange'},
    settings: {
      logProgress: true,
      renderSettings: {
        exporter: {
          name: '@flammable7841/core/wasm',
          options: {
            format: 'mp4',
          },
        },
      },
    },
  });

  console.log(`Rendered video to ${file}`);
}

render();
