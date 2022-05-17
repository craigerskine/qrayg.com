const Twitch = {
	template: `
    <section class="m-auto p-4 w-full max-w-md motion-safe:transition-all">
      <h1 class="text-purple-400 flex items-center space-x-4 uppercase">
        <svg class="w-10 h-10 inline-block text-purple-500" role="presentation" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M391.17,103.47H352.54v109.7h38.63ZM285,103H246.37V212.75H285ZM120.83,0,24.31,91.42V420.58H140.14V512l96.53-91.42h77.25L487.69,256V0ZM449.07,237.75l-77.22,73.12H294.61l-67.6,64v-64H140.14V36.58H449.07Z"></path></svg>
        <b class="font-black text-2xl leading-none">Twitch Chat <small class="text-base block opacity-80">Popout Launcher</small></b>
        <b class="py-px flex-1 bg-purple-500 bg-opacity-50"></b>
      </h1>
      <fieldset class="py-8 relative">
        <label class="w-10 h-10 flex items-center justify-center absolute top-1/2 left-0 transform -translate-y-5" for="u"><b class="relative z-20">@</b></label>
        <input v-model="twitchUser" @keypress.enter="twitchUser.length ? pop('https://twitch.tv/popout/'+ twitchUser.toString().toLowerCase() +'/chat', 'chat-'+ twitchUser.toString().toLowerCase()) : null" @keydown.space="(event) => event.preventDefault()" type="text" id="u" class="p-3 pl-10 w-full bg-white bg-opacity-10 text-gray-300 placeholder-current focus:(bg(purple-200 opacity-20) text-purple-100 outline-none ring(4 purple-200 opacity-20) placeholder(purple-100 opacity-30)) rounded-md motion-safe:transition duration-300" placeholder="Type username + enter/go" pattern="[a-zA-Z0-9-_]+" required />
      </fieldset>
      <ul class="list-favs list-none text-xs font-bold flex space-x-2">
        <li class="my-1 py-1 opacity-75"><small class="uppercase">Favs:</small></li>
        <li class="flex-1">
          <ul class="flex flex-wrap">
            <li v-for="(fav, index) in favs" class="m-1"><a @click.prevent="pop('https://twitch.tv/popout/'+ fav.user +'/chat', 'chat-'+ fav.user)" :href="'https://twitch.tv/popout/'+ fav.user +'/chat'" class="px-2 py-1 hover:(bg(purple-600 opacity-75) text-white) focus:(bg(purple-600 opacity-75) text-white) inline-block rounded motion-safe:transition duration-300"><i class="mr-px not-italic opacity-50">@</i>{{ fav.user }}</a></li>
          </ul>
        </li>
      </ul>
    </section>
  `,
  props: [],
  data() {
    return {
      twitchUser: '',
      favs: [
        // add/remove your own favs
        { user: 'sdshepard', },
        { user: 'chainbrain', },
        { user: 'mcrocklin', },
        { user: 'mst3k', },
      ]
    }
  },
  methods: {
    pop: function(url, name){
      window.open(url.toString().toLowerCase(), name.toString().toLowerCase(), 'width=480,height=600,top=100,left=100,toolbar=0,location=0,status=0,menubar=0,scrollbars,resizable')
    }
  },
  mounted() {
    document.title = 'qrayg - Twitch Chat Popout',
    document.querySelector("link[rel~='icon']").href = '/favicon-twitch.ico'
  },
};