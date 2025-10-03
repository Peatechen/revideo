import type {Project} from '@flammable7841/core';

export function editor(project: Project): void;

export function index(
  projects: {
    name: string;
    url: string;
  }[],
): void;
