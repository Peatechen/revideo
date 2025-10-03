import fs from 'fs';
import path from 'path';

export function getVersions() {
  return {
    core: loadVersion('@flammable7841/core'),
    two: loadVersion('@flammable7841/2d'),
    ui: loadVersion('@flammable7841/ui'),
    vitePlugin: loadVersion('..'),
  };
}

function loadVersion(module: string): string | null {
  try {
    const modulePath = path.dirname(require.resolve(`${module}/package.json`));
    const packageJsonPath = path.resolve(modulePath, 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath).toString());
    return packageJson.version ?? null;
  } catch (_) {
    return null;
  }
}
