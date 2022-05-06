const Currently = {
	template: `
    <section class="w-full h-screen font-roboto flex(& col) divide(y gray-500 opacity-10) transition-all">
      <section class="clock w-full h-full flex-1 flex flex-col justify-center">
        <h1 class="time w-full text-5xl font-thin leading-none flex divide(x gray-500 opacity-10) md:(text-[calc(5vw+5vh+.5vmin)])">
          <span class="hours w-full text-center flex-1"></span>
          <span class="minutes w-full text-center flex-1"></span>
          <span class="seconds w-full text-center flex-1"></span>
          <!-- <span class="milliseconds w-64"></span> -->
        </h1>
        <ul class="binary-digits w-full flex divide(x gray-500 opacity-10)">
          <li class="w-full py-4 lg:py-8 flex-1 flex items-end">
            <ul class="hour-1 px-4 w-full flex-1 flex flex-col space-y-2">
              <li class="tick hrs-1-2 ml-auto w-4 h-1 rounded-full transition-all"></li>
              <li class="tick hrs-1-1 ml-auto w-4 h-1 rounded-full transition-all"></li>
            </ul>
            <ul class="hour-2 px-4 w-full flex-1 flex flex-col space-y-2">
              <li class="tick hrs-2-8 w-4 h-1 rounded-full transition-all"></li>
              <li class="tick hrs-2-4 w-4 h-1 rounded-full transition-all"></li>
              <li class="tick hrs-2-2 w-4 h-1 rounded-full transition-all"></li>
              <li class="tick hrs-2-1 w-4 h-1 rounded-full transition-all"></li>
            </ul>
          </li>
          <li class="w-full py-4 lg:py-8 flex-1 flex items-end">
            <ul class="minute-1 px-4 w-full flex-1 flex flex-col space-y-2">
              <li class="tick min-1-4 ml-auto w-4 h-1 rounded-full transition-all"></li>
              <li class="tick min-1-2 ml-auto w-4 h-1 rounded-full transition-all"></li>
              <li class="tick min-1-1 ml-auto w-4 h-1 rounded-full transition-all"></li>
            </ul>
            <ul class="minute-2 px-4 w-full flex-1 flex flex-col space-y-2">
              <li class="tick min-2-8 w-4 h-1 rounded-full transition-all"></li>
              <li class="tick min-2-4 w-4 h-1 rounded-full transition-all"></li>
              <li class="tick min-2-2 w-4 h-1 rounded-full transition-all"></li>
              <li class="tick min-2-1 w-4 h-1 rounded-full transition-all"></li>
            </ul>
          </li>
          <li class="w-full py-4 lg:py-8 flex-1 flex items-end">
            <ul class="second-1 px-4 w-full flex-1 flex flex-col space-y-2">
              <li class="tick sec-1-4 ml-auto w-4 h-1 rounded-full transition-all"></li>
              <li class="tick sec-1-2 ml-auto w-4 h-1 rounded-full transition-all"></li>
              <li class="tick sec-1-1 ml-auto w-4 h-1 rounded-full transition-all"></li>
            </ul>
            <ul class="second-2 px-4 w-full flex-1 flex flex-col space-y-2">
              <li class="tick sec-2-8 w-4 h-1 rounded-full transition-all"></li>
              <li class="tick sec-2-4 w-4 h-1 rounded-full transition-all"></li>
              <li class="tick sec-2-2 w-4 h-1 rounded-full transition-all"></li>
              <li class="tick sec-2-1 w-4 h-1 rounded-full transition-all"></li>
            </ul>
          </li>
        </ul>
      </section>
      <section class="misc w-full flex flex-col justify-center">
        <ul class="font-bold sm:(flex) lg:(text-4xl)">
          <li class="py-4 border(b gray-500 opacity-10) transition hover:(text-gray-700) dark:(hover:(text-gray-300)) sm:(w-1/3 border(r)) lg:(py-32)" title="Internet/Beat Time">
            <h4 class="internet pl-5 flex items-center justify-center">
              <sup class="mr-2 text(sm gray-400 opacity-50) font-black uppercase">@</sup>
              <b class="beats font-black">&nbsp;</b>
            </h4>
          </li>
          <li class="w-full flex-1 transition hover:(text-gray-700) dark:(hover:(text-gray-300))">
            <ul class="date flex">
              <li class="py-4 lg:py-32 flex-1 flex items-center justify-center" title="Month">
                <b class="date-m font-black">&nbsp;</b>
                <sup class="date-mm ml-2 text(sm gray-400 opacity-50) uppercase">&nbsp;</sup>
              </li>
              <li class="w-px bg(gray-500 opacity-10) transform -skew-x-12"></li>
              <li class="py-4 lg:py-32 flex-1 flex items-center justify-center" title="Day">
                <b class="date-d font-black">&nbsp;</b>
                <sup class="date-dd ml-2 text(sm gray-400 opacity-50) uppercase">&nbsp;</sup>
              </li>
              <li class="w-px bg(gray-500 opacity-10) transform -skew-x-12"></li>
              <li class="py-4 lg:py-32 flex-1 flex items-center justify-center" title="Year">
                <b class="date-y font-black">&nbsp;</b>
                <sup class="date-yy ml-2 text(sm gray-400 opacity-50) uppercase">AD</sup>
              </li>
            </ul>
          </li>
        </ul>
      </section>

      <router-link to="/" class="w-12 h-12 text-grey-darker hover:text-white focus:text-white flex items-center justify-center fixed right-0 top-0 z-20 transition-all">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" role="img" class="fill-current w-5 h-auto block"><title>qrayg - Twitch Streamer, Gamer, UX Designer, UI Developer</title> <g><circle cx="98.1" cy="98.1" r="6" opacity=".25"></circle> <path d="M109.402699,94.0592724 C116.085856,84.3838 120,72.6489986 120,60 C120,26.862915 93.137085,0 60,0 C26.862915,0 0,26.862915 0,60 C0,93.137085 26.862915,120 60,120 C72.6489986,120 84.3838,116.085856 94.0592724,109.402699 C90.049715,107.969131 87.0258166,104.462602 86.278593,100.174129 C78.7292272,105.12235 69.7006692,108 60,108 C33.490332,108 12,86.509668 12,60 C12,33.490332 33.490332,12 60,12 C86.509668,12 108,33.490332 108,60 C108,69.7006692 105.12235,78.7292272 100.174122,86.2786024 C104.462602,87.0258166 107.969131,90.049715 109.402699,94.0592724 Z"></path></g></svg>
      </router-link>

    </section>
  `,
  props: [],
  data() {
    return {}
  },
  methods: {},
  mounted() {
    document.title = 'Currently',
    document.querySelector("link[rel~='icon']").href = '/favicon.ico',

    // jquery-like selector
    window.$_ = function(selector, next) {
      var selectors = document.querySelectorAll(selector);
      [].forEach.call(selectors, next);
    };

    function now(){
      var date = new Date();

      // date/time/beats
      var hours = date.getHours() % 12;
      hours = hours ? hours : 12;
      var minutes = date.getMinutes();
      var seconds = date.getSeconds();
      var milliseconds = (date.getMilliseconds()/10).toFixed(0);
      var beatHours = (date.getUTCHours() == 23) ? 0 : date.getUTCHours() + 1;
      var beats = Math.abs(((((beatHours * 60) + date.getUTCMinutes()) * 60) + date.getUTCSeconds()) / 86.4).toFixed(2);

      $_('.hours', function(e){e.innerHTML = pad(hours)});
      $_('.minutes', function(e){e.innerHTML = pad(minutes)});
      $_('.seconds', function(e){e.innerHTML = pad(seconds)});
      $_('.milliseconds', function(e){e.innerHTML = pad(milliseconds)});
      $_('.beats', function(e){e.innerHTML = beats});
      $_('.date-m', function(e){e.innerHTML = date.toLocaleDateString("en-US", {month: '2-digit'})});
      $_('.date-mm', function(e){e.innerHTML = date.toLocaleDateString("en-US", {month: 'short'})});
      $_('.date-d', function(e){e.innerHTML = date.toLocaleDateString("en-US", {day: '2-digit'})});
      $_('.date-dd', function(e){e.innerHTML = date.toLocaleDateString("en-US", {weekday: 'short'})});
      $_('.date-y', function(e){e.innerHTML = date.toLocaleDateString("en-US", {year: 'numeric'})});

      // binary
      var sec2 = seconds % 10;
      var sec1 = (seconds - sec2) / 10 % 10;
      var min2 = minutes % 10;
      var min1 = (minutes - min2) / 10 % 10;
      var hrs2 = hours % 10;
      var hrs1 = (hours - hrs2) / 10 % 10;

      binary(sec1, 'sec-1');
      binary(sec2, 'sec-2');
      binary(min1, 'min-1');
      binary(min2, 'min-2');
      binary(hrs1, 'hrs-1');
      binary(hrs2, 'hrs-2');

    }

    function pad(num){
      return ('0' + num).slice(-2);
    }

    var binary = function(n,t) {
      const tickOn = ['bg-blue-400', 'animate-tick'];
      const tickOff = ['ring-1', 'ring-gray-500', 'ring-opacity-25'];
      if(n == 1) {
        $_('.'+t+'-1', function(e){e.classList.add(...tickOn); e.classList.remove(...tickOff)});
        $_('.'+t+'-2', function(e){e.classList.add(...tickOff); e.classList.remove(...tickOn)});
        $_('.'+t+'-4', function(e){e.classList.add(...tickOff); e.classList.remove(...tickOn)});
        $_('.'+t+'-8', function(e){e.classList.add(...tickOff); e.classList.remove(...tickOn)});
      } else if(n == 2) {
        $_('.'+t+'-1', function(e){e.classList.add(...tickOff); e.classList.remove(...tickOn)});
        $_('.'+t+'-2', function(e){e.classList.add(...tickOn); e.classList.remove(...tickOff)});
        $_('.'+t+'-4', function(e){e.classList.add(...tickOff); e.classList.remove(...tickOn)});
        $_('.'+t+'-8', function(e){e.classList.add(...tickOff); e.classList.remove(...tickOn)});
      } else if(n == 3) {
        $_('.'+t+'-1', function(e){e.classList.add(...tickOn); e.classList.remove(...tickOff)});
        $_('.'+t+'-2', function(e){e.classList.add(...tickOn); e.classList.remove(...tickOff)});
        $_('.'+t+'-4', function(e){e.classList.add(...tickOff); e.classList.remove(...tickOn)});
        $_('.'+t+'-8', function(e){e.classList.add(...tickOff); e.classList.remove(...tickOn)});
      } else if(n == 4) {
        $_('.'+t+'-1', function(e){e.classList.add(...tickOff); e.classList.remove(...tickOn)});
        $_('.'+t+'-2', function(e){e.classList.add(...tickOff); e.classList.remove(...tickOn)});
        $_('.'+t+'-4', function(e){e.classList.add(...tickOn); e.classList.remove(...tickOff)});
        $_('.'+t+'-8', function(e){e.classList.add(...tickOff); e.classList.remove(...tickOn)});
      } else if(n == 5) {
        $_('.'+t+'-1', function(e){e.classList.add(...tickOn); e.classList.remove(...tickOff)});
        $_('.'+t+'-2', function(e){e.classList.add(...tickOff); e.classList.remove(...tickOn)});
        $_('.'+t+'-4', function(e){e.classList.add(...tickOn); e.classList.remove(...tickOff)});
        $_('.'+t+'-8', function(e){e.classList.add(...tickOff); e.classList.remove(...tickOn)});
      } else if(n == 6) {
        $_('.'+t+'-1', function(e){e.classList.add(...tickOff); e.classList.remove(...tickOn)});
        $_('.'+t+'-2', function(e){e.classList.add(...tickOn); e.classList.remove(...tickOff)});
        $_('.'+t+'-4', function(e){e.classList.add(...tickOn); e.classList.remove(...tickOff)});
        $_('.'+t+'-8', function(e){e.classList.add(...tickOff); e.classList.remove(...tickOn)});
      } else if(n == 7) {
        $_('.'+t+'-1', function(e){e.classList.add(...tickOn); e.classList.remove(...tickOff)});
        $_('.'+t+'-2', function(e){e.classList.add(...tickOn); e.classList.remove(...tickOff)});
        $_('.'+t+'-4', function(e){e.classList.add(...tickOn); e.classList.remove(...tickOff)});
        $_('.'+t+'-8', function(e){e.classList.add(...tickOff); e.classList.remove(...tickOn)});
      } else if(n == 8) {
        $_('.'+t+'-1', function(e){e.classList.add(...tickOff); e.classList.remove(...tickOn)});
        $_('.'+t+'-2', function(e){e.classList.add(...tickOff); e.classList.remove(...tickOn)});
        $_('.'+t+'-4', function(e){e.classList.add(...tickOff); e.classList.remove(...tickOn)});
        $_('.'+t+'-8', function(e){e.classList.add(...tickOn); e.classList.remove(...tickOff)});
      } else if(n == 9) {
        $_('.'+t+'-1', function(e){e.classList.add(...tickOn); e.classList.remove(...tickOff)});
        $_('.'+t+'-2', function(e){e.classList.add(...tickOff); e.classList.remove(...tickOn)});
        $_('.'+t+'-4', function(e){e.classList.add(...tickOff); e.classList.remove(...tickOn)});
        $_('.'+t+'-8', function(e){e.classList.add(...tickOn); e.classList.remove(...tickOff)});
      } else {
        $_('.'+t+'-1', function(e){e.classList.add(...tickOff); e.classList.remove(...tickOn)});
        $_('.'+t+'-2', function(e){e.classList.add(...tickOff); e.classList.remove(...tickOn)});
        $_('.'+t+'-4', function(e){e.classList.add(...tickOff); e.classList.remove(...tickOn)});
        $_('.'+t+'-8', function(e){e.classList.add(...tickOff); e.classList.remove(...tickOn)});
      };
    };

    now();
    setInterval(now, 1);
  },
};