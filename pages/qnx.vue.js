const Qnx = {
	template: `
    <section class="bg-cream text(gray-900 xs) font-tahoma transition-all">
      <div class="bg-gradient-to-br from-qnx-cream to-[#BFB6A9] fixed inset-0">
        <div class="fixed inset-0 opacity-75" style="background-image: url(/assets/qnx/img/bg-fabric.png);"></div>
      </div>
      <div class="w-48 h-48 bg(cover no-repeat) absolute -top-24 -left-24 rounded-full shadow-2xl sm:(w-64 h-64 -top-32 -left-32)" style="background-image: url('/assets/qnx/img/star.png')"></div>
      <div class="min-h-screen flex(& col) relative">
        <header class="py-16 px-4 w-full text-center">
          <div class="md:(flex items-center justify-center space-x-10)">
            <h1 class="text(5xl qnx-line) leading-none font-sketch md:(text-[6vw])"><b class="font-normal inline-block opacity-50">q</b>Skins</h1>
            <img src="/assets/qnx/img/header.png" alt="QNX Chrome" class="inline-block" />
          </div>
          <section class="mx-auto pt-8 max-w-prose text(sm center) md:(text(base left))">
            <hr class="my-5 border-qnx-dark" />
            <p>Welcome QNX fans! Just a heads up... all of the skins, themes, icons, &amp; wallpapers on this site are super old and problably will not work with modern OS's or their required software anymore. You have been warned.</p>
          </section>
        </header>
        <section class="py-8 px-4 w-full flex-1">
          <section class="container mx-auto space-y-10 flex flex-col items-center md:(flex-row items-start justify-center space-x-10 space-y-0)">
            <nav class="w-[150px] leading-tight shadow-md">
              <div>
                <div class="border(1 qnx-line)">
                  <div class="border(b qnx-line)">
                    <qnx-bevel>
                      <div class="w-full h-3 bg-gradient-to-b from-transparent via-transparent to-white opacity-50"></div>
                    </qnx-bevel>
                  </div>
                  <qnx-bevel>
                    <ul class="pt-2 w-full relative">
                      <li v-for="(entry, index) in entries" :class="['pb-2 px-2', (index + 1) === entries.length ? 'border(b qnx-dark)' : '']">
                        <a href="#" @click.prevent="qnxActive = index" :class="['group py-1 px-2 w-full flex items-center space-x-2 transition hover:(bg-qnx-theme) focus:(bg-qnx-theme)', qnxActive === index ? 'bg-qnx-theme' : 'bg-qnx-item']">
                          <img :src="'/assets/qnx/img/ico-'+ entry.ico +'.png'" :alt="entry.title" class="w-[16px] h-[16px] object-contain object-center opacity-50 transition group-hover:(opacity-100) group-focus:(opacity-100)" />
                          <span class="flex-1">{{ entry.title }}</span>
                          <b class="w-[9px] h-[9px] bg-white text-qnx-line flex ring(1 current) rounded-full"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 7" class="m-auto w-[7px] h-[7px] fill-current" aria-hidden="true"><polygon points="3 7 3 5 0 5 0 2 3 2 3 0 7 3.5" /></svg></b>
                        </a>
                      </li>
                    </ul>
                  </qnx-bevel>
                </div>
              </div>
            </nav>
            <article class="w-[150px] bg(repeat-y center) shadow-md" style="background-image: url('/assets/qnx/img/win-bg.png');">
              <div class="window border(1 qnx-line) shadow-md">
                <div class="header h-4 qnx-bg-title flex relative">
                  <div class="title flex">
                    <b class="pl-1.5 pr-2 qnx-bg-title-active flex-1 flex">
                      <i class="my-auto mr-12 w-2 h-2 bg(black opacity-50) flex ring(1 white opacity-75) rounded-full shadow">
                        <i class="m-auto w-[2px] h-1 bg-[#FFEB00] rounded-full"></i>
                      </i>
                    </b>
                    <i class="flex -space-x-[8px] relative -left-[2px]">
                      <i class="w-[10px] qnx-bg-title rounded-[12px/40px]"></i>
                      <i class="w-[10px] qnx-bg-title-active rounded-[12px/40px]"></i>
                      <i class="w-[10px] qnx-bg-title rounded-[12px/40px]"></i>
                      <i class="w-[10px] qnx-bg-title-active rounded-[12px/40px]"></i>
                      <i class="w-[10px] qnx-bg-title rounded-[12px/40px]"></i>
                    </i>
                  </div>
                  <i class="my-auto ml-auto mr-1.5 w-2 h-2 bg(black opacity-50) flex ring(1 white opacity-75) rounded-full shadow">
                    <i class="m-auto w-1 h-[2px] bg-[#FFEB00] rounded-full"></i>
                  </i>
                  <b class="r w-px bg(black opacity-25) absolute inset-y-0 right-0"></b>
                  <b class="b h-px bg(black opacity-25) absolute inset-x-0 bottom-0"></b>
                  <b class="l w-px bg(white opacity-25) absolute inset-y-0 left-0"></b>
                  <b class="t h-px bg(white opacity-25) absolute inset-x-0 top-0"></b>
                </div>
                <div class="body p-[2px] pt-0 bg-qnx-base relative">
                  <b class="r w-px bg(black opacity-25) absolute inset-y-0 right-0"></b>
                  <b class="b h-px bg(black opacity-25) absolute inset-x-0 bottom-0"></b>
                  <b class="l w-px bg(white opacity-25) absolute inset-y-0 left-0"></b>
                  <b class="notch w-[2px] h-3 bg-[#2C4A70] absolute -top-px left-0">
                    <b class="w-px bg(white opacity-25) absolute left-0 inset-y-0"></b>
                  </b>
                  <div class="border(1 qnx-line) bg-qnx-cream">
                    <div v-for="(entry, index) in entries" v-show="qnxActive === index">
                      <ul class="bg-qnx-cream divide(y qnx-dark)">
                        <li v-for="(file, index) in entry.files" class="p-2">
                          <a :href="'/assets/qnx/files/'+ slug(entry.title) +'-'+ slug(file.title) +'.zip'" class="group inline-flex items-center space-x-2 transition hover:(text-blue-500) focus:(text-blue-500)" download>
                            <img :src="'/assets/qnx/img/ico-'+ entry.ico +'.png'" :alt="entry.title" class="w-[16px] h-[16px] object-contain object-center opacity-50 transition group-hover:(opacity-100) group-focus:(opacity-100)" />
                            <span>{{ file.title }}</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </section>
        </section>
        <footer class="mt-auto pt-[6px] w-full bg(repeat-x [#C0C0C0]) flex items-center" style="background-image: url('/assets/qnx/img/footer-bg.png');">
          <div class="shadow">
            <qnx-bevel>
              <ul class="pr-px flex">
                <li class="border(r qnx-line) flex">
                  <qnx-bevel>
                    <div class="group m-px py-1 px-2 w-full flex items-center relative transition md:(text-sm space-x-2)">
                      <img src="/assets/qnx/img/ico-qnx.png" alt="Launch" class="w-[16px] h-[16px] object-contain object-center" />
                    </div>
                  </qnx-bevel>
                </li>
                <li v-for="(entry, index) in entries" class="border(r qnx-line) flex">
                  <qnx-bevel>
                    <div class="p-1 flex">
                      <qnx-bevel sunk>
                        <div v-if="qnxActive !== index" class="flex absolute inset-px"><qnx-bevel></qnx-bevel></div>
                        <a href="#" @click.prevent="qnxActive = index" :class="['group m-px py-1 px-3 w-full flex items-center relative transition md:(text-sm space-x-2)', qnxActive === index ? 'bg-qnx-dark shadow-inner' : '']">
                          <img :src="'/assets/qnx/img/ico-'+ entry.ico +'.png'" :alt="entry.title" class="w-[16px] h-[16px] object-contain object-center opacity-50 transition group-hover:(opacity-100) group-focus:(opacity-100)" />
                          <span class="hidden md:(inline-block)">{{ entry.title }}</span>
                        </a>
                      </qnx-bevel>
                    </div>
                  </qnx-bevel>
                </li>
              </ul>
            </qnx-bevel>
          </div>
          <p class="ml-auto px-2 text-center"><span class="hidden sm:(inline-block)">site by</span> <router-link to="/" class="font-bold transition hover:(text-blue-600) focus:(text-blue-600)">qrayg</router-link></p>
        </footer>
      </div>
    </section>
  `,
  props: [],
  data() {
    return {
      qnxActive: 0,
      entries: [
        {
          title: 'Skins',
          ico: 'window',
          desc: '...',
          files: [
            { title: 'ICQ Plus', },
            { title: 'NS QNX', },
            { title: 'NS QNX2', },
            { title: 'NS QNX3', },
            { title: 'NS QNX_RTP', },
            { title: 'ObjectBar', },
            { title: 'Opera Toolbar', },
            { title: 'WinAmp', },
            { title: 'WindowBlinds', },
          ],
        },
        {
          title: 'Themes',
          ico: 'mask',
          desc: '...',
          files: [
            { title: 'Windows XP', },
          ],
        },
        {
          title: 'Icons',
          ico: 'tool',
          desc: '...',
          files: [
            { title: 'Windows', },
            { title: 'IconPhile', },
          ],
        },
        {
          title: 'Wallpapers',
          ico: 'wall',
          desc: '...',
          files: [
            { title: 'Fold', },
            { title: 'Momentics', },
            { title: 'Orange', },
            { title: 'Checked', },
          ],
        },
      ],
    }
  },
  methods: {
    slug: function(text) {
      const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìıİłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
      const b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------'
      const p = new RegExp(a.split('').join('|'), 'g')
      return text.toString().toLowerCase()
        .replace(/\s+/g, '-')                    // Replace spaces with -
        .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
        .replace(/&/g, '-and-')                  // Replace & with 'and'
        .replace(/[^\w\-]+/g, '')                // Remove all non-word characters
        .replace(/\-\-+/g, '-')                  // Replace multiple - with single -
        .replace(/^-+/, '')                      // Trim - from start of text
        .replace(/-+$/, '')                      // Trim - from end of text
    },
  },
  mounted() {
    document.title = 'qrayg - QNX Style Skins',
    document.querySelector("link[rel~='icon']").href = '/assets/qnx/favicon.ico'
  },
};