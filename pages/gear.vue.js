const Gear = {
	template: `
    <section class="gear mx-auto px-4 w-full max-w-screen-lg font-mono relative z-20 motion-safe:transition-all">
      <header class="mb-8 pt-12">
        <section class="mx-auto w-full md:(flex divide(x gray-500 opacity-25))">
          <router-link to="/" class="text-white self-center flex items-center justify-center relative opacity-50 hover:(opacity-100) focus:(opacity-100) motion-safe:transition">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" role="img" class="w-10 h-10">
              <title>qrayg</title>
              <g class="fill-current">
                <circle cx="98.1" cy="98.1" r="6" opacity=".25"></circle>
                <path d="M109.402699,94.0592724 C116.085856,84.3838 120,72.6489986 120,60 C120,26.862915 93.137085,0 60,0 C26.862915,0 0,26.862915 0,60 C0,93.137085 26.862915,120 60,120 C72.6489986,120 84.3838,116.085856 94.0592724,109.402699 C90.049715,107.969131 87.0258166,104.462602 86.278593,100.174129 C78.7292272,105.12235 69.7006692,108 60,108 C33.490332,108 12,86.509668 12,60 C12,33.490332 33.490332,12 60,12 C86.509668,12 108,33.490332 108,60 C108,69.7006692 105.12235,78.7292272 100.174122,86.2786024 C104.462602,87.0258166 107.969131,90.049715 109.402699,94.0592724 Z"></path>
              </g>
            </svg>
          </router-link>
          <h1 class="py-2 text-5xl tracking-wider uppercase flex-1 flex items-center flex-col md:(ml-6 py-0 items-end)">
            <b>qrayg<sup class="text-base opacity-80">'s</sup></b>
            <i class="text-xl font-black not-italic tracking-normal opacity-75 block">Gear/Rig: PC &middot; Streaming &middot; Music</i>
          </h1>
        </section>
      </header>
      <section v-for="(group, index) in rig" :id="group.category.replace(' ', '-').toLowerCase().trim()" class="mb-10 py-4 xl:(mb-32 py-8)">
        <article>
          <a :href="'#'+ group.category.replace(' ', '-').toLowerCase().trim()" :class="['text-'+ group.color, 'mb-5 text-xl uppercase flex items-center']">
            <em class="mr-4 text-5xl"><i :class="['fa-fw '+ group.ico]" aria-hidden="true"></i></em>
            <b class="tracking-widest flex-1 flex items-center justify-center"> <b class="font-black">{{ group.category }}</b> <b class="ml-4 border(t current) flex-1 opacity-25"></b></b>
          </a>
          <ul v-if="group.hardware" :class="['grid(& flow-row cols-1) gap-x-6 lg:(pl-16 grid-cols-2)', {'line-through opacity-50': group.category == 'Obsolete'}]">
            <li v-for="(hardware, index) in group.hardware" class="flex">
              <a :href="hardware.link" :class="['border-'+ group.color, 'hover:bg-'+ group.color, 'focus:bg-'+ group.color, 'hover:text-'+ group.color, 'focus:text-'+ group.color, 'group py-3 px-5 border(l b opacity-25) w-full bg-transparent motion-safe:transition-all hover:(border-l-4 bg-opacity-10) focus:(border-l-4 bg-opacity-10) md:(px-0 flex space-x-4)']">
                <b class="font-black tracking-wider uppercase block opacity-80 group-hover:(text-white) group-focus:(text-white) md:(w-1/4 text-right)">
                  <b class="text-sm">{{ hardware.type }}</b>
                  <small v-if="hardware.soon" class="uppercase leading-none tracking-wider flex justify-end">
                    <b class="px-1 py-px font-black text-yellow-300 ring(1 current inset) block relative">Pending <b class="ring(1 current inset) absolute inset-0 motion-safe:animate-ping-sm z-[-1]" aria-hidden="true"></b></b>
                  </small>
                </b>
                <div :class="['border-'+ group.color, 'mt-2 border w-2 h-2 rounded-full relative top-px hidden md:(block)']"></div>
                <i class="not-italic md:tracking-tight flex-1">
                  {{ hardware.name }}
                  <small v-if="hardware.sub" class="uppercase leading-none tracking-wider flex flex-wrap">
                    <b v-for="(sub, index) in hardware.sub" class="mb-1 mr-1 py-px font-black text-current opacity-60 inline-block">
                      {{ sub }}<i v-if="hardware.sub.length > (index + 1)">, </i>
                    </b>
                  </small>
                </i>
              </a>
            </li>
          </ul>
        </article>
      </section>
    </section>
  `,
  props: [],
  data() {
    return {
      rig: [
        {
          category: 'PC',
          ico: 'fa-brands fa-windows',
          color: 'blue-400',
          hardware: [
            { type: 'Case', name: 'SSUPD › Meshlicious', sub: ['White'], link: 'https://ssupd.com/products/meshlicious', },
            { type: 'MB', name: 'Asus › ROG Strix Z390-I', sub: ['ITX'], link: 'https://amzn.com/dp/B07HM57LVH?tag=qrayg-20', },
            { type: 'CPU', name: 'Intel › Core i5-8400', sub: ['2.8-4.0 GHz', '6 Cores'], link: 'https://amzn.com/dp/B0759FGJ3Q?tag=qrayg-20', },
            { type: 'Cooler', name: 'Noctua › NH-L9i', sub: ['chromax.Black'], link: 'https://amzn.com/dp/B07Y892M38?tag=qrayg-20', },
            { type: 'GPU', name: 'NVIDIA › RTX 3060 Ti', sub: ['Founders Edition'], link: 'https://amzn.com/dp/B08PW559LL?tag=qrayg-20', },
            { type: 'RAM', name: 'Corsair › Vengeance LPX', sub: ['16GB'], link: 'https://amzn.com/dp/B0134EW7G8?tag=qrayg-20', },
            { type: 'PSU', name: 'Corsair › SF 450', sub: ['80+ Gold'], link: 'https://amzn.com/dp/B01CGGOXWQ?tag=qrayg-20', },
            { type: 'M.2', name: 'Samsung › 970 Evo Plus', sub: ['250GB'], link: 'https://amzn.com/dp/B07MG119KG?tag=qrayg-20', },
          ]
        },
        {
          category: 'Mac',
          ico: 'fa-brands fa-apple',
          color: 'gray-300',
          hardware: [
            { type: 'Laptop', name: 'MacBook › Pro', sub: ['2021', 'M1 Pro', '14"', '8-core'], link: 'https://amzn.com/dp/B09JQL8KP9?tag=qrayg-20', },
            { type: 'Dock', name: 'Brydge › Stone Pro', sub: ['Thunderbolt 3'], link: 'https://amzn.com/dp/B08G9WDH6B?tag=qrayg-20', },
            { type: 'Hub', name: 'Satechi › Stand', sub: ['3x USB3', '1x USBC', 'SD/microSD'], link: 'https://amzn.com/dp/B07GX1WW47?tag=qrayg-20', },
            { type: 'External SSD', name: 'Samsung › T7', sub: ['500GB'], link: 'https://amzn.com/dp/B0874XN4D8?tag=qrayg-20', },
          ]
        },
        {
          category: 'Accessories',
          ico: 'fa-thin fa-computer-speaker',
          color: 'red-400',
          hardware: [
            { type: 'Display 1', name: 'LG › 27GL83A-B', sub: ['27"', '144hz'], link: 'https://amzn.com/dp/B07YGZL8XF?tag=qrayg-20', },
            { type: 'Display 2', name: 'LG › 27GL83A-B', sub: ['27"', '144hz'], link: 'https://amzn.com/dp/B07YGZL8XF?tag=qrayg-20', },
            { type: 'Speakers', name: 'Audioengine › A2+', sub: ['+ S1 Sub'], link: 'https://amzn.com/dp/B07MYW4Q8S?tag=qrayg-20', },
            { type: 'Headphones', name: 'Bowers & Wilkins › PX-7', sub: ['Over Ear'], link: 'https://amzn.com/dp/B07WK6SGZC?tag=qrayg-20', },
            { type: 'USB Switch', name: 'UGreen › USB3 Switch', sub: ['4x USB3', 'Mac ↔ PC'], link: 'https://amzn.com/dp/B01N6GD9JO?tag=qrayg-20', },
            { type: 'Chair', name: 'Steelcase › Reply Mesh', sub: ['Gray', 'Black'], link: 'https://store.steelcase.com/Store/seating/office-chairs/reply-mesh-back-chair', },
          ]
        },
        {
          category: 'Keyboards',
          ico: 'fa-thin fa-keyboard',
          color: 'green-500',
          hardware: [
            { type: 'KB', name: 'Apple › Wireless', sub: ['100%', 'Space Gray', 'Touch ID'], link: 'https://amzn.com/dp/B09V3JXSS9?tag=qrayg-20', },
            { type: 'KB', name: 'GMMK › Pro', sub: ['75%', 'Black', 'Boba U4'], link: 'https://www.pcgamingrace.com/products/glorious-gmmk-pro-75-barebone-black', },
            { type: 'KB', name: 'Keychron › Q2', sub: ['65%', 'Carbon Black', 'Knob', 'Silent Alpaca'], link: 'https://keychron.com/products/keychron-q2-qmk-custom-mechanical-keyboard', },
            { type: 'KB', name: 'Keychron › K7', sub: ['65%', 'Hotswap', 'RGB', 'Banana'], link: 'https://keychron.com/pages/keychron-k7-wireless-mechanical-keyboard', },
            { type: 'KB', name: 'Keychron › K14', sub: ['65%', 'Hotswap', 'RGB', 'Red'], link: 'https://keychron.com/pages/keychron-k14-wireless-mechanical-keyboard', },
            //{ type: 'KB', name: 'Satechi › Slim X1', sub: ['Wireless', 'Backlit'], link: 'https://satechi.net/products/slim-x1-bluetooth-backlit-keyboard', },
            { type: 'KB', name: 'MelGeek › Z70', sub: ['65%', 'Black', 'Healio', '63.5g'], link: 'https://melgeek.com/products/melgeek-z70-ultra-65-rgb-custom-mechanical-keyboard-kit', },
            { type: 'KB', name: 'IKKI68 › Aurora', sub: ['65%', 'Snow', 'TBD'], link: 'https://shop.wuquestudio.com/pages/ikki68-aurora', },
            { type: 'KB', name: 'NK65 › Entry Edition', sub: ['65%', 'Fire', 'Milky Yellow'], link: 'https://novelkeys.xyz/collections/keyboards/products/nk65-entry-edition', },
            { type: 'KB', name: 'Leopold › FC660C', sub: ['65%', 'White', 'Topre Silent', 'Extended2048'], link: 'https://amzn.com/dp/B07QKXC6WC?tag=qrayg-20', },
            { type: 'KB', name: 'Morgrie', sub: ['65%', 'Clicky'], link: 'https://morgrie.com/', },
            { type: 'KB', name: 'Candybar', sub: ['50%', 'Black', 'Summer', 'Outemu Tactile'], link: 'https://thekey.company/collections/candybar-round-3/', },
            { type: 'KB', name: 'Keychron › Q9', sub: ['45%', 'Silver', 'Knob', 'Silent Alpaca'], link: 'https://keychron.com/products/keychron-q9-qmk-custom-mechanical-keyboard', },
            { type: 'KB', name: 'Cajal', sub: ['45%', 'Space Grey', 'Silent Sky'], link: 'https://walletburner.co/pages/cajal', },
            { type: 'KB', name: 'UT47.2', sub: ['40%', 'Alu', 'Kailh Copper'], link: 'https://keyhive.xyz/shop/ut472-kit', },
            { type: 'KB', name: 'Planck EZ › Glow x2', sub: ['40%', 'Black - Kaihl Gold', 'White - Zilent'], link: 'https://ergodox-ez.com/pages/planck', },
            { type: 'KB', name: 'Vortex › Core', sub: ['40%', 'Cherry Blue', 'Bamboo'], link: 'https://amzn.com/dp/B01MS3PWS0?tag=qrayg-20', },
            { type: 'KB', name: 'MiniVan › KUMO', sub: ['40%', 'Purple Tactile', 'Walnut'], link: 'https://thekey.company/products/minivan', },
            { type: 'KB', name: 'MiniVan › JetVan', sub: ['40%', 'Aliaz', 'White'], link: 'https://thekey.company/products/minivan', },
            { soon: true, type: 'KB', name: 'Work Louder › Creator Micro', sub: ['Pad', 'RGB'], link: 'https://worklouder.cc/creator-micro/', },
            { type: 'Caps', name: 'R1', sub: ['NP/XDA'], link: 'https://kbdfans.com/collections/np-pg-da-profile/products/np-pbt-grey-and-blue-keycaps-set', },
            { type: 'Caps', name: 'DSA Light Cycle', sub: ['Control the System'], link: 'https://drop.com/buy/lightcycle-dsa-custom-keycap-set-for-the-minivan', },
            { type: 'Caps', name: 'biip MT3 Extended 2048', sub: ['Modifiers', 'Icono', 'Media Icons'], link: 'https://drop.com/buy/drop-biip-mt3-extended-custom-keycap-set', },
            { type: 'Caps', name: 'Plastic', sub: ['Clone', 'XDA'], link: 'https://amzn.com/dp/B08ZMR1651?tag=qrayg-20', },
            { type: 'Caps', name: 'GMK Dolch 2', sub: ['Modern', 'Standard', 'Obscure'], link: 'https://omnitype.com/', },
            { type: 'Caps', name: 'DSA Milkshake', sub: ['Weirdo', 'Spacebars', 'Fruit'], link: 'https://novelkeys.com/collections/keycaps/products/dsa-milkshake', },
            { type: 'Caps', name: 'Less But Better', sub: ['Novelties', 'Extras'], link: 'https://kono.store/products/epbt-less-but-better', },
            { soon: true, type: 'Caps', name: 'Domikey Ghost', sub: ['Extension'], link: 'https://cannonkeys.com/collections/group-buy/products/gb-domikey-ghost', },
            { soon: true, type: 'Caps', name: 'kam_superuser', sub: ['Mods Highlight', '40\'s Highlight', 'Spacebars', 'Novelties'], link: 'https://novelkeys.com/products/kam-superuser', },
          ]
        },
        {
          category: 'Streaming',
          ico: 'fa-thin fa-waveform-path',
          color: 'purple-500',
          hardware: [
            { type: 'Capture', name: 'Elgato › HD60 S', sub: ['USB'], link: 'https://amzn.com/dp/B01DRWCOGA?tag=qrayg-20', },
            { type: 'Cam', name: 'Lumina › AI Webcam', sub: ['USB', 'Grey'], link: 'https://getlumina.com/', },
            { type: 'Mic', name: 'Shure › MV7', sub: ['USB', 'XLR'], link: 'https://amzn.com/dp/B08G7RG9ML?tag=qrayg-20', },
            { type: 'Strip HDCP', name: 'OREI › HD-102', sub: ['HDMI'], link: 'https://amzn.com/dp/B005HXFARS?tag=qrayg-20', },
            { type: 'Misc', name: 'LaMetric › Time', sub: ['Smart Clock'], link: 'https://amzn.com/dp/B01IVTVK3W?tag=qrayg-20', },
            { type: 'Game Room', name: 'Web › pxl.media', sub:['Game / console collection'], link: 'https://pxl.media/', },
          ]
        },
        {
          category: 'Home Theater',
          ico: 'fa-thin fa-speakers',
          color: 'pink-500',
          hardware: [
            { type: 'AV Receiver', name: 'Marantz › NR1711', sub: ['Black'], link: 'https://amzn.com/dp/B0786M9ZZS?tag=qrayg-20', },
            { type: 'Front', name: 'Wharfedale › EM 95', sub: ['Speakers'], link: 'https://amzn.com/dp/B00004SY59?tag=qrayg-20', },
            { type: 'Center', name: 'Klipsch › R-52C', sub: ['Speaker'], link: 'https://amzn.com/dp/B07FK41FGL?tag=qrayg-20', },
            { type: 'Rear', name: 'Klipsch › R-41M', sub: ['Speakers'], link: 'https://amzn.com/dp/B07FKH3VPV?tag=qrayg-20', },
            { type: 'Subwoofer', name: 'Yamaha › YST-SW90', sub: ['Powered'], link: 'https://amzn.com/dp/B00FRET3RA?tag=qrayg-20', },
            { type: 'Phono', name: 'Pro-Ject › T1', sub: ['Walnut'], link: 'https://amzn.com/dp/B07Z8NHNZZ?tag=qrayg-20', },
          ]
        },
        {
          category: 'Music',
          ico: 'fa-thin fa-amp-guitar',
          color: 'yellow-400',
          hardware: [
            { type: 'Guitar', name: 'Ibanez › QX52', sub: ['2021', 'Black'], link: 'https://amzn.com/dp/B09JGQ3WWR?tag=qrayg-20', },
            { type: 'Guitar', name: 'Kiesel › Vader', sub: ['2021', 'Custom 6', 'Fishman Fluence'], link: 'https://craigerskine.github.io/prototypes/kiesel/order-sheet/', },
            { type: 'Guitar', name: '.strandberg* › Boden', sub: ['2020', 'Metal 6', 'Black Pearl'], link: 'https://strandbergguitars.com/product-category/family/boden-metal/', },
            { type: 'Amp', name: 'Positive Grid › Spark 40', sub: ['40 watt'], link: 'https://amzn.com/dp/B08HQCG79H?tag=qrayg-20', },
            { type: 'Amp', name: 'Positive Grid › Spark MINI', sub: ['10 watt'], link: 'https://www.positivegrid.com/spark-mini', },
            { type: 'Amp', name: 'Boss › Katana MINI', sub: ['7 watt'], link: 'https://amzn.com/dp/B072XKP8TH?tag=qrayg-20', },
            { type: 'Modeling', name: 'Line 6 › HX Stomp', sub: ['USB'], link: 'https://amzn.com/dp/B07J2LV1N1?tag=qrayg-20', },
            { type: 'Plugins', name: 'Neural DSP › Archetype', sub: ['Petrucci', 'Tim Henson'], link: 'https://neuraldsp.com/plugins', },
            { type: 'Sequencer', name: 'Arturia › Keystep', sub: ['MIDI Controller'], link: 'https://amzn.com/dp/B01BPSBU40?tag=qrayg-20', },
            { type: 'Interface', name: 'AXE › I/O Solo', sub: ['Bus Powered'], link: 'https://amzn.com/dp/B085JDFLLD?tag=qrayg-20', },
          ]
        },
      ]
    }
  },
  mounted() {
    document.title = 'qrayg\'s PC, Streaming, Music Gear/Rig',
    document.querySelector("link[rel~='icon']").href = '/favicon.ico'
  },
};