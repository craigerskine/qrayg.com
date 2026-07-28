// instant page
import 'instant.page';

// icons
import 'iconify-icon';

// sounds
import { bind, play } from 'cuelume';
bind();

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
import persist from '@alpinejs/persist';

document.addEventListener('alpine:init', () => {
  Alpine.data('app', function() {
    return {
      theme: this.$persist('dark'),
      themes: [
        'light',
        'dark',
        'abyss',
        'acid',
        'black',
        'business',
        'caramellatte',
        'coffee',
        'dim',
        'dracula',
        'fantasy',
        'forest',
        'garden',
        'halloween',
        'lemonade',
        'luxury',
        'nord',
        'silk',
        'sunset',
        'synthwave',
        'valentine',
        'winter',
      ],
    }
  });
});

Alpine.plugin([persist]);
window.Alpine = Alpine;
Alpine.start();
