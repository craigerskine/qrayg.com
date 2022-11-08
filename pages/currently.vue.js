const Currently = {
	template: `
    <section class="w-full h-screen font-roboto flex(& col) divide(y gray-500 opacity-10) motion-safe:transition-all">
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
              <li class="tick hrs-1-2 ml-auto w-4 h-1 rounded-full motion-safe:transition-all"></li>
              <li class="tick hrs-1-1 ml-auto w-4 h-1 rounded-full motion-safe:transition-all"></li>
            </ul>
            <ul class="hour-2 px-4 w-full flex-1 flex flex-col space-y-2">
              <li class="tick hrs-2-8 w-4 h-1 rounded-full motion-safe:transition-all"></li>
              <li class="tick hrs-2-4 w-4 h-1 rounded-full motion-safe:transition-all"></li>
              <li class="tick hrs-2-2 w-4 h-1 rounded-full motion-safe:transition-all"></li>
              <li class="tick hrs-2-1 w-4 h-1 rounded-full motion-safe:transition-all"></li>
            </ul>
          </li>
          <li class="w-full py-4 lg:py-8 flex-1 flex items-end">
            <ul class="minute-1 px-4 w-full flex-1 flex flex-col space-y-2">
              <li class="tick min-1-4 ml-auto w-4 h-1 rounded-full motion-safe:transition-all"></li>
              <li class="tick min-1-2 ml-auto w-4 h-1 rounded-full motion-safe:transition-all"></li>
              <li class="tick min-1-1 ml-auto w-4 h-1 rounded-full motion-safe:transition-all"></li>
            </ul>
            <ul class="minute-2 px-4 w-full flex-1 flex flex-col space-y-2">
              <li class="tick min-2-8 w-4 h-1 rounded-full motion-safe:transition-all"></li>
              <li class="tick min-2-4 w-4 h-1 rounded-full motion-safe:transition-all"></li>
              <li class="tick min-2-2 w-4 h-1 rounded-full motion-safe:transition-all"></li>
              <li class="tick min-2-1 w-4 h-1 rounded-full motion-safe:transition-all"></li>
            </ul>
          </li>
          <li class="w-full py-4 lg:py-8 flex-1 flex items-end">
            <ul class="second-1 px-4 w-full flex-1 flex flex-col space-y-2">
              <li class="tick sec-1-4 ml-auto w-4 h-1 rounded-full motion-safe:transition-all"></li>
              <li class="tick sec-1-2 ml-auto w-4 h-1 rounded-full motion-safe:transition-all"></li>
              <li class="tick sec-1-1 ml-auto w-4 h-1 rounded-full motion-safe:transition-all"></li>
            </ul>
            <ul class="second-2 px-4 w-full flex-1 flex flex-col space-y-2">
              <li class="tick sec-2-8 w-4 h-1 rounded-full motion-safe:transition-all"></li>
              <li class="tick sec-2-4 w-4 h-1 rounded-full motion-safe:transition-all"></li>
              <li class="tick sec-2-2 w-4 h-1 rounded-full motion-safe:transition-all"></li>
              <li class="tick sec-2-1 w-4 h-1 rounded-full motion-safe:transition-all"></li>
            </ul>
          </li>
        </ul>
      </section>
      <section class="misc w-full flex flex-col justify-center">
        <ul class="font-bold sm:(flex) lg:(text-4xl)">
          <li class="py-4 border(b gray-500 opacity-10) motion-safe:transition hover:(text-gray-700) dark:(hover:(text-gray-300)) sm:(w-1/3 border(r)) lg:(py-32)" title="Internet/Beat Time">
            <h4 class="internet pl-5 flex items-center justify-center">
              <sup class="mr-2 text(sm gray-400 opacity-50) font-black uppercase">@</sup>
              <b class="beats font-black">&nbsp;</b>
            </h4>
          </li>
          <li class="w-full flex-1 motion-safe:transition hover:(text-gray-700) dark:(hover:(text-gray-300))">
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
      let selectors = document.querySelectorAll(selector);
      [].forEach.call(selectors, next);
    };

    function now(){
      let date = new Date();

      // date/time/beats
      let hours = date.getHours() % 12;
      hours = hours ? hours : 12;
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();
      let milliseconds = (date.getMilliseconds()/10).toFixed(0);
      let beatHours = (date.getUTCHours() == 23) ? 0 : date.getUTCHours() + 1;
      let beats = Math.abs(((((beatHours * 60) + date.getUTCMinutes()) * 60) + date.getUTCSeconds()) / 86.4).toFixed(2);

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
      let sec2 = seconds % 10;
      let sec1 = (seconds - sec2) / 10 % 10;
      let min2 = minutes % 10;
      let min1 = (minutes - min2) / 10 % 10;
      let hrs2 = hours % 10;
      let hrs1 = (hours - hrs2) / 10 % 10;

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

    function binary(n,t) {
      let tickOn = ['bg-blue-400', 'motion-safe:animate-tick'];
      let tickOff = ['ring-1', 'ring-gray-500', 'ring-opacity-25'];
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