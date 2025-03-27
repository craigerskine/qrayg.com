// instant page
import 'instant.page';

// icons
import 'iconify-icon';

// twind
import { install, injectGlobal } from '@twind/core';
import presetAutoprefix from '@twind/preset-autoprefix';
import presetTailwind from '@twind/preset-tailwind';
install({
  presets: [presetAutoprefix(), presetTailwind()],
  darkMode: 'class',
  hash: false,
  theme: {
    extend: {
      colors: ({ theme }) => ({
        gray: theme('colors.zinc'),
      }),
      fontFamily: ({ theme }) => ({
        sans: ['Inter', ...theme('fontFamily.sans')],
        mono: ['Inconsolata', ...theme('fontFamily.mono')],
        roboto: ['Roboto Mono', ...theme('fontFamily.mono')],
      }),
      boxShadow: {
        'up': '0 -5px 15px 0 rgba(0,0,0,.2)',
      },
      keyframes: {
        blob: {
          '15%': { 'transform-origin': 'center center', transform: 'scale(1.4, 1.2)', },
          '40%': { 'transform-origin': 'center center', transform: 'scale(.9, .9)', },
          '75%': { 'transform-origin': 'center center', transform: 'scale(1.08, 1)', },
          '100%': { 'transform-origin': 'center center', transform: 'scale(1, 1)', },
        },
        'anim_ping-sm': {
          '75%, 100%': {
            transform: 'scale(1.5)',
            opacity: '0',
          },
        },
        'anim_throb': {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1.001)' },
        },
        'anim_spin': {
          '0%, 90%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        blob: 'blob .3s ease-in-out',
        'ping-sm': 'anim_ping-sm 1s cubic-bezier(0, 0, 0.2, 1) infinite',
        'throb': 'anim_throb 3s ease-in-out infinite',
        'spin': 'anim_spin 8s ease-in-out infinite',
      },
    },
  },
  rules: [
    [ 'bg-grid', { 'background-image': 'url("data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 4 4\' width=\'4\' height=\'4\'><rect x=\'0\' y=\'0\' width=\'2\' height=\'2\' fill=\'rgba(5,5,5,.33)\'></rect></svg>")', } ],
  ],
});
injectGlobal`
  @layer base {
    .social a b { @apply w-full h-full absolute top-0 left-0 index-10 opacity-0 rounded-full; }
    .social .active b,.social a:hover b,.social a:focus b { @apply bg-current opacity-75 shadow-xl motion-safe:transition-all scale-150; }
    .social a iconify-icon { @apply text-white opacity-50 relative z-20 motion-safe:transition-all; }
    .social .active,.social a:hover,.social a:focus { @apply motion-safe:animate-blob; }
    .social .active iconify-icon,.social a:hover iconify-icon,.social a:focus iconify-icon { @apply text-white opacity-100; }
  }
`

// particles - https://github.com/VincentGarreau/particles.js/
import 'particles.js';
import particlesOptions from '../_app/configs/particles.json';
if(document.querySelector('#particles')) {
  particlesJS('particles', particlesOptions, function() {
    // callback
  });
}

// alpinejs
import Alpine from 'alpinejs';
import focus from '@alpinejs/focus';
Alpine.plugin([focus]);
window.Alpine = Alpine;
Alpine.start();
