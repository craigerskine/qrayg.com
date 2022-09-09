const Ux = {
	template: `
    <section class="container m-auto p-4 w-full min-h-screen flex(& col) motion-safe:transition-all">
      <header class="py-12 px-4 w-full text-center md:(py-24 flex items-center justify-center)">
        <router-link to="/" class="m-auto p-4 inline-flex md:(m-0)"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" role="img" class="w-16 h-auto inline-flex align-middle"><title>qrayg - Twitch Streamer, Gamer, UX Designer, UI Developer</title> <g fill="currentColor"><circle cx="98.1" cy="98.1" r="6" opacity=".25"></circle> <path d="M109.402699,94.0592724 C116.085856,84.3838 120,72.6489986 120,60 C120,26.862915 93.137085,0 60,0 C26.862915,0 0,26.862915 0,60 C0,93.137085 26.862915,120 60,120 C72.6489986,120 84.3838,116.085856 94.0592724,109.402699 C90.049715,107.969131 87.0258166,104.462602 86.278593,100.174129 C78.7292272,105.12235 69.7006692,108 60,108 C33.490332,108 12,86.509668 12,60 C12,33.490332 33.490332,12 60,12 C86.509668,12 108,33.490332 108,60 C108,69.7006692 105.12235,78.7292272 100.174122,86.2786024 C104.462602,87.0258166 107.969131,90.049715 109.402699,94.0592724 Z"></path></g></svg></router-link>
        <h1 class="mx-5 text(3xl gray-200) font-black md:(text([4vw]))">UX <b class="inline-flex text-gray-500 font-thin tracking-tight">Experiments</b></h1>
      </header>
      <ul class="m-auto w-full max-w-sm text-center flex-1 divide(y gray-500 opacity-25)">
        <li v-for="(entry, index) in entries" class="py-4">
          <a :href="entry.url" class="group p-1 text-cyan-500 inline-flex relative motion-safe:transition hover:(text-cyan-300)">
            {{ entry.title }}
            <b class="w-0 h-px bg-current absolute bottom-0 left-0 opacity-0 motion-safe:transition-all group-hover:(w-full opacity-100)"></b>
          </a>
        </li>
      </ul>
      <footer class="mt-auto p-4 w-full text-xs text-center font-bold uppercase"> Made with <svg xmlns="http://www.w3.org/2000/svg" class="mx-1 text-red-400 align-top inline-block" width="16" height="16" viewBox="0 0 16 16" role="img" aria-labelledby="foot-love"><title id="foot-love">Love</title><polygon class="fill-current" fill-rule="evenodd" points="8 6 11 3 15 7 8 14 1 7 5 3"></polygon></svg> by <a href="http://craigerskine.com/" class="mx-1">Craig Erskine (qrayg)</a></footer>
    </section>
  `,
  props: [],
  data() {
    return {
      entries: [
        { title: 'Twind Contrast - Beta', url: 'twind-contrast-beta.html'},
        { title: 'Twind / Vue - Themer', url: 'twind-vue-themer.html'},
        { title: 'Tailwind Prose - Example', url: 'tw-prose.html'},
        { title: 'Tailwind Contrast Color - Suggestion', url: 'request-tw-contrastcolor.html'},
      ],
    }
  },
  methods: {},
  mounted() {
    document.title = 'qrayg - UX Experiments',
    document.querySelector("link[rel~='icon']").href = '/favicon.ico'
  },
};