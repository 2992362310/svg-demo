import { defineConfig } from 'windicss/helpers';
import formsPlugin from 'windicss/plugin/forms';
import scrollSnapPlugin from 'windicss/plugin/scroll-snap';

function withOpacityValue(variable) {
  return (val) => {
    if (val.opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgb(var(${variable}) / ${val.opacityValue})`;
  };
}

export default defineConfig({
  darkMode: 'class',
  safelist: 'p-3 p-4 p-5 w-1/2 w-2/3',
  theme: {
    extend: {
      colors: {
        primary: {
          extralight: withOpacityValue('--color-primary-extralight'),
          light: withOpacityValue('--color-primary-light'),
          medium: withOpacityValue('--color-primary-medium'),
          origin: withOpacityValue('--color-primary'),
          dark: withOpacityValue('--color-primary-dark'),
        },
      },
    },
  },
  alias: {
    hstack: 'flex items-center gap-2',
    vstack: 'flex flex-col gap-2',
    'flex-center': 'flex items-center justify-center gap-2',
    'flex-between': 'flex items-center justify-between gap-2',
    'app-icon': 'cursor-pointer p-1 rounded border hover:bg-gray-200',
    'app-border': 'border-gray-200 dark:border-dark-300',
  },
  plugins: [formsPlugin, scrollSnapPlugin],
  extract: {
    include: ['src/**/*.{vue,html,jsx,tsx}'],
    exclude: ['node_modules', '.git'],
  },
});
