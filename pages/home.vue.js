const Home = {
	template: `
    <section class="landing m-auto text-center relative z-20 transition-all">
      <h1 class="logo group pt-4 pb-24 flex justify-center relative">
        <router-link to="/" class="mx-4 text-white block animate-spin">
          <b class="animate-throb inline-block">
            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120" role="img" class="w-24 md:(w-32) h-auto inline-block align-middle">
              <title>qrayg - Twitch Streamer, Gamer, UX Designer, UI Developer</title>
              <g fill="currentColor">
                <circle cx="98.1" cy="98.1" r="6" opacity=".25" />
                <path d="M109.402699,94.0592724 C116.085856,84.3838 120,72.6489986 120,60 C120,26.862915 93.137085,0 60,0 C26.862915,0 0,26.862915 0,60 C0,93.137085 26.862915,120 60,120 C72.6489986,120 84.3838,116.085856 94.0592724,109.402699 C90.049715,107.969131 87.0258166,104.462602 86.278593,100.174129 C78.7292272,105.12235 69.7006692,108 60,108 C33.490332,108 12,86.509668 12,60 C12,33.490332 33.490332,12 60,12 C86.509668,12 108,33.490332 108,60 C108,69.7006692 105.12235,78.7292272 100.174122,86.2786024 C104.462602,87.0258166 107.969131,90.049715 109.402699,94.0592724 Z" />
              </g>
            </svg>
          </b>
        </router-link>
        <b class="flex items-center justify-center opacity-[.0001] absolute bottom-0 inset-x-0 translate-y-1 transition-all group-hover:(opacity-100 -translate-y-1) group-focus:(opacity-100 -translate-y-1)"><b class="usr pb-8 text-xl md:(text-2xl) font-black "><small class="text(red-500 base)">@</small> <b class="logo-usr" title="qrayg - Twitch Streamer, Gamer, UX Designer, UI Developer">qrayg</b></b></b>
      </h1>
      <ul class="social mb-16 flex justify-center relative">
        <li v-for="(soc, index) in social" class="mx-3 md:mx-8" @mouseover="socialLoopPaused = true, socialActive = null" @mouseout="socialLoopPaused = false">
          <a :href="soc.url" :class="['w-8 h-8 md:(w-12 h-12) flex relative transition-all text-'+ soc.color, socialActive === (index + 1) ? 'active' : '']" :aria-label="soc.name">
            <template v-if="soc.name !== 'Gumroad'">
              <i :class="['m-auto inline-block align-middle fa-fw text-2xl md:(text-3xl)', soc.icon]" aria-hidden="true"></i>
            </template>
            <template v-else>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-hidden="true" focusable="false" role="img" class="svg-inline--fa fa-w-16 fa-fw m-auto fill-current inline-block align-middle fa-fw text-2xl md:(text-3xl)">
                <path d="m226.175328 461c-110.925333 0-176.175328-89.196961-176.175328-200.149878 0-115.302334 71.775063-208.850122 208.799984-208.850122 141.37533 0 189.226009 95.723247 191.399986 150.111226h-102.224652c-2.175341-30.45711-28.275339-76.143252-91.350675-76.143252-67.424654 0-110.924514 58.739306-110.924514 130.531776 0 71.792742 43.49986 130.531639 110.924514 130.531639 60.899996 0 86.999994-47.860919 97.875334-95.723202h-97.875334v-39.160174h205.375357v200.149878h-90.100024v-126.181267c-6.524659 45.686415-34.799998 134.883376-145.724648 134.883376z" />
              </svg>
            </template>
            <b></b>
          </a>
        </li>
      </ul>
      <p v-show="$route.hash === '#start' || $route.hash === '#end'" class="message mb-16 pt-8 text(4xl center) opacity-50">
        <b class="font-black">
          <template v-if="$route.hash === '#start'">Stream starting soon!, It won't be long now...</template>
          <template v-if="$route.hash === '#end'">Thanks for watching!, Come back soon...</template>
        </b>
      </p>
    </section>
  `,
  props: [],
  data() {
    return {
      social: [
        { name: 'Twitch', icon: 'fa-brands fa-twitch', color: 'purple-500', url: 'https://twitch.tv/qrayg/', },
        { name: 'YouTube', icon: 'fa-brands fa-youtube', color: 'red-700', url: 'https://youtube.com/c/qrayg/', },
        { name: 'Discord', icon: 'fa-brands fa-discord', color: 'indigo-500', url: 'https://discord.gg/Pa9X3C8', },
        { name: 'Gumroad', icon: null, color: 'gray-600', url: 'http://qrayg.gumroad.com', },
        { name: 'Patreon', icon: 'fa-brands fa-patreon', color: 'red-400', url: 'https://patreon.com/qrayg/', },
      ],
      socialActive: null,
      socialLoopPaused: false,
    }
  },
  methods: {
    socialLoop() {
      setInterval(() => {
        if(!this.socialLoopPaused) {
          if(this.socialActive < this.social.length) {
            this.socialActive++
          } else {
            this.socialActive = null
          }
        }
      }, 1500);
    }
  },
  mounted() {
    document.title = 'qrayg - Twitch Streamer, Gamer, UX Designer, UI Developer',
    document.querySelector("link[rel~='icon']").href = '/favicon.ico',
    this.socialLoop()
  },
};