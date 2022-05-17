const _error = {
	template: `
    <section class="w-full h-screen flex motion-safe:transition-all">
      <article class="m-auto">
        <router-link to="/" class="fixed top-3 left-3">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" role="img" class="w-8 h-auto">
            <title>qrayg - Twitch Streamer, Gamer, UX Designer, UI Developer</title>
            <g fill="currentColor">
              <circle cx="98.1" cy="98.1" r="6" opacity=".25" />
              <path d="M109.402699,94.0592724 C116.085856,84.3838 120,72.6489986 120,60 C120,26.862915 93.137085,0 60,0 C26.862915,0 0,26.862915 0,60 C0,93.137085 26.862915,120 60,120 C72.6489986,120 84.3838,116.085856 94.0592724,109.402699 C90.049715,107.969131 87.0258166,104.462602 86.278593,100.174129 C78.7292272,105.12235 69.7006692,108 60,108 C33.490332,108 12,86.509668 12,60 C12,33.490332 33.490332,12 60,12 C86.509668,12 108,33.490332 108,60 C108,69.7006692 105.12235,78.7292272 100.174122,86.2786024 C104.462602,87.0258166 107.969131,90.049715 109.402699,94.0592724 Z" />
            </g>
          </svg>
        </router-link>
        <h1 class="my-6 bg(gradient-to-r clip-text) text([calc(10vw+10vh)] transparent) from-red-100 to-red-600 font-black"><small class="font-normal inline-block">#</small>404</h1>
      </article>
    </section>
  `,
  props: [],
  mounted() {
    document.title = 'qrayg - Error',
    document.querySelector("link[rel~='icon']").href = '/favicon.ico'
  },
};