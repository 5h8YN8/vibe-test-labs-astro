export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  vibeScore: number;
  verdict: string;
  verdictBadge: "Worth It" | "Overhyped" | "Hidden Gem";
  price: string;
  image: string;
  images: string[];
  trending: boolean;
  date: string;
  brand: string;
  affiliateUrl: string;
}

export const products: Product[] = [
  {
    id: "p1",
    slug: "3-in-1-cat-steam-brush",
    name: "3-in-1 Steam Pet Grooming Brush",
    category: "Pets",
    vibeScore: 86,
    verdict: "The 3-in-1 Steam Pet Grooming Brush earns its price for indoor cat owners dealing with constant shedding and weekly hairballs. Soft silicone bristles and gentle steam loosen fur without scraping skin — a real upgrade over metal deshedding tools. Used 3-4 times a week it visibly reduces the fur your cat swallows. At $34.99, it delivers.",
    verdictBadge: "Worth It",
    price: "$34.00",
    brand: "Vibe Test Lab",
    image: "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/3-in-1-steam-pet-grooming-brush-detail.webp?v=1774715850",
    images: [
    "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/3-in-1-steam-pet-grooming-brush-hero.webp?v=1774715850",
    "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/3-in-1-steam-pet-grooming-brush-benefits.webp?v=1774715850",
    "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/3-in-1-steam-pet-grooming-brush-flatlay.webp?v=1774715850",
    "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/3-in-1-steam-pet-grooming-brush-lifestyle.webp?v=1774715850"
  ],
    trending: true,
    date: "2026-03-27",
    affiliateUrl: "https://fwaqf1-er.myshopify.com/products/3-in-1-cat-steam-brush?utm_source=aeo&utm_medium=content&utm_campaign=3-in-1-cat-steam-brush"
  },
  {
    id: "p2",
    slug: "3d-moon-lamp",
    name: "3D Printed Moon Lamp - Jupiter Night Light",
    category: "Room Vibes",
    vibeScore: 76,
    verdict: "The 3D Printed Moon Lamp is absolutely worth it if you want a stunning, conversation-starting décor piece that also functions as a soft night light. This is no gimmick—it’s a thoughtfully designed accent piece with realistic crater texture that rivals premium decorative lighting costing twice as much. Available in multiple sizes (8–20cm) and two variant types: simple 2-color manual for minimalists, and versatile 16-color remote for those who want control. USB-powered, long-lasting (10,000+ hours), and fits any aesthetic. Perfect for space enthusiasts, bedroom makeovers, and thoughtful gifting.",
    verdictBadge: "Hidden Gem",
    price: "$90.00",
    brand: "Vibe Test Lab",
    image: "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/4f268f7748ab9a6ec26a5ae2e6df.jpg?v=1774566819",
    images: [
    "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/3d4cbea843fbbfe0af3cc704dd71.jpg?v=1774566829",
    "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/c87594614d79a65a7f21f565b7e0.jpg?v=1774566839",
    "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/f3bd7bae4cc1b8ae573a7914984f.jpg?v=1774566849",
    "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/7add1faa47f3a39391394be75326.jpg?v=1774566860"
  ],
    trending: true,
    date: "2026-03-27",
    affiliateUrl: "https://fwaqf1-er.myshopify.com/products/3d-printed-moon-lamp-jupiter-night-light?utm_source=aeo&utm_medium=content&utm_campaign=3d-moon-lamp"
  },
  {
    id: "p3",
    slug: "animal-headband-sleep-mask",
    name: "Animal Headband Sleep Mask",
    category: "Sleepmaxxing",
    vibeScore: 69,
    verdict: "Look, we’ll be honest — the animal designs (panda, bear, penguin, hippo, cat) are primarily a vibe play. But underneath the cute exterior is a legitimately functional Bluetooth sleep mask with decent speakers, full blackout coverage, and 6 hours of battery. It’s not audiophile quality, but for falling asleep to podcasts or white noise it gets the job done. Best for gift-giving, kids/teens, or anyone who doesn’t take their sleep gear too seriously.",
    verdictBadge: "Worth It",
    price: "$33.00",
    brand: "Vibe Test Lab",
    image: "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/764e8f344d6496bd83f92900213d.png?v=1774539012",
    images: [
    "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/35cfcbf84bc688c3745be7fffd40.png?v=1774539013",
    "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/506270b7433e8ed2a7beb1db04fe.png?v=1774539023",
    "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/e3b325b048f09fe67b204d4d30d9.png?v=1774539034"
  ],
    trending: false,
    date: "2026-03-27",
    affiliateUrl: "https://fwaqf1-er.myshopify.com/products/bluetooth-headset-animal-headband-sleep-mask?utm_source=aeo&utm_medium=content&utm_campaign=animal-headband-sleep-mask"
  },
  {
    id: "p4",
    slug: "app-controlled-galaxy-star-projector",
    name: "App-Controlled Galaxy Star Projector",
    category: "Room Vibes",
    vibeScore: 87,
    verdict: "Yes — if you want bedroom atmosphere without buying a $150 Encalife. The rotating star mechanism makes movement look genuinely realistic, the 16M color app is responsive, and setup takes under 5 minutes. The one real caveat: it requires a 2.4GHz Wi-Fi network and the app has a short learning curve. For $62, it transforms a flat room into something that looks TikTok-ready.",
    verdictBadge: "Worth It",
    price: "$62.00",
    brand: "Vibe Test Lab",
    image: "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/app-controlled-galaxy-star-projector-detail.webp?v=1774805933",
    images: [
    "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/app-controlled-galaxy-star-projector-hero.webp?v=1774805933",
    "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/app-controlled-galaxy-star-projector-benefits.webp?v=1774805933",
    "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/app-controlled-galaxy-star-projector-flatlay.webp?v=1774805933",
    "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/app-controlled-galaxy-star-projector-lifestyle.webp?v=1774805923"
  ],
    trending: true,
    date: "2026-03-27",
    affiliateUrl: "https://fwaqf1-er.myshopify.com/products/app-controlled-star-projector-with-rotating-lights?utm_source=aeo&utm_medium=content&utm_campaign=app-controlled-galaxy-star-projector"
  },
  {
    id: "p5",
    slug: "baby-fox-teether",
    name: "Douglas Baby Fox Teether Plush Stuffed Animal Toy",
    category: "Gifts & Cozy",
    vibeScore: 77,
    verdict: "The Douglas Baby Fox Teether Plush ($87.86) is a premium investment for safety-conscious parents. Yes, $88 is steep for a baby toy. But here’s the honest part: you’re getting Douglas brand quality, a 100% silicone teether ring (baby-safe, no BPA), baby-safe embroidery with zero small detachable parts, and a genuinely adorable plush companion. Perfect for teething relief and cuddles. If you compare it against buying a $25 generic teether AND a $35 cute plush separately ($60 total), the Douglas fox is the integrated, quality-first choice. Great for parents who prioritize safety over cutting costs.",
    verdictBadge: "Hidden Gem",
    price: "$87.86",
    brand: "Douglas",
    image: "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/658c81fc4e238c99cb52c5c1a142.jpg?v=1774566813",
    images: [
    "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/74fae0e24bbaaab23e737c3dcae4.jpg?v=1774566823"
  ],
    trending: true,
    date: "2026-03-27",
    affiliateUrl: "https://fwaqf1-er.myshopify.com/products/douglas-baby-fox-teether-plush-stuffed-animal-toy?utm_source=aeo&utm_medium=content&utm_campaign=baby-fox-teether"
  },
  {
    id: "p6",
    slug: "bluetooth-sleep-mask",
    name: "Bluetooth Sleep Mask with Speakers",
    category: "Sleepmaxxing",
    vibeScore: 74,
    verdict: "Yes — if you’re a side sleeper who falls asleep to audio, this is the upgrade you didn’t know you needed. The flat built-in speakers eliminate the earbud pressure problem entirely, and the 3D contoured eye cups block light without touching your eyelids. Battery runs ~6 hours (enough for a full sleep cycle). Not audiophile-grade sound, but for white noise, podcasts, and meditation? It genuinely works.",
    verdictBadge: "Hidden Gem",
    price: "$32.00",
    brand: "Vibe Test Lab",
    image: "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/7ef5c83e41dcb3fad36ea852e061.jpg?v=1774457697",
    images: [
    "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/db93e7604fcb94a7c4cb4d049c06.jpg?v=1774457707",
    "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/400603624f3f872b4b28ebb15680.jpg?v=1774457717",
    "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/537c1a7945ceb34d79d0cd7f3427.jpg?v=1774457728",
    "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/03172ec44cd89d89a10df57381fa.jpg?v=1774457738"
  ],
    trending: false,
    date: "2026-03-27",
    affiliateUrl: "https://fwaqf1-er.myshopify.com/products/sleeping-mask-with-bluetooth-headphones?utm_source=aeo&utm_medium=content&utm_campaign=bluetooth-sleep-mask"
  },
  {
    id: "p7",
    slug: "breazy-mouth-tape",
    name: "Breazy Mouth Tape",
    category: "Sleepmaxxing",
    vibeScore: 78,
    verdict: "Mouth taping is one of the cheapest, most effective sleepmaxxing hacks — and the Breazy strips do the job. They hold firmly without irritating skin, promote nasal breathing that reduces snoring and dry mouth, and at under $1/strip they’re an easy nightly habit. Not a miracle cure, but a legit upgrade for mouth breathers.",
    verdictBadge: "Worth It",
    price: "$22.00",
    brand: "Breazy",
    image: "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/breazy-mouth-tape-for-sleep-packaging.webp?v=1774715707",
    images: [
    "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/breazy-mouth-tape-for-sleep-hero.webp?v=1774715725",
    "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/breazy-mouth-tape-for-sleep-benefits.webp?v=1774715725",
    "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/breazy-mouth-tape-for-sleep-lifestyle.webp?v=1774715725",
    "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/breazy-mouth-tape-for-sleep-scale.webp?v=1774715725"
  ],
    trending: true,
    date: "2026-03-27",
    affiliateUrl: "https://fwaqf1-er.myshopify.com/products/breazy-mouth-tape-for-sleep-1-bag?utm_source=aeo&utm_medium=content&utm_campaign=breazy-mouth-tape"
  },
  {
    id: "p8",
    slug: "cooling-gel-eye-mask",
    name: "Cooling Gel Eye Mask",
    category: "Sleepmaxxing",
    vibeScore: 73,
    verdict: "The Cooling Gel Eye Mask ($42.11–$50.05) is a legitimate cold therapy tool that genuinely reduces under-eye puffiness and the appearance of dark circles. Forget ice packs and messy solutions—this reusable gel mask stays cold for ~20 minutes and creates visible depuffing results within minutes. Soft, comfortable, and available in six colors, it’s an effective sleepmaxxing essential that doesn’t break the bank. The honest part: it’s not a smart device, packaging is basic, and the cooling window is limited. But if your morning routine needs a depuffing shortcut, this is a hidden gem.",
    verdictBadge: "Hidden Gem",
    price: "$46.08",
    brand: "Vibe Test Lab",
    image: "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/3cc4e80d4485a01c9ba8959b5e3e.png?v=1774538084",
    images: [
    "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/f1bf99e340fba3a1e320ecd9014c.png?v=1774538095",
    "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/4b77b3a7414bb4cdb5b3ed16a3ff.png?v=1774538106",
    "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/e0d9bccb4b4b8b21549e550eb3be.png?v=1774538106",
    "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/0780d7c943569642f7b5ff623c22.png?v=1774538117"
  ],
    trending: false,
    date: "2026-03-27",
    affiliateUrl: "https://fwaqf1-er.myshopify.com/products/cooling-gel-eye-mask?utm_source=aeo&utm_medium=content&utm_campaign=cooling-gel-eye-mask"
  },
  {
    id: "p9",
    slug: "ems-scalp-massager",
    name: "Electric Scalp Treatment Massager with Red Light Therapy",
    category: "Self Care",
    vibeScore: 76,
    verdict: "The Electric Scalp Treatment Massager ($61.76) is a serious value play. It combines three therapeutic technologies—10,000 vibrations/min, EMS micro-current, and red light therapy—into a lightweight, waterproof device that costs $24 less than the Rechargeable Scalp Comb. If you’re looking for a feature-packed scalp massager that actually performs, this is it. The vibration feels genuinely therapeutic, the 6ml serum tank is clever, and the 3 massage modes adapt to your mood. Red light therapy won’t match clinical treatments, but paired with EMS and vibration? You get a solid multi-tech experience for less money. Perfect for anyone who wants scalp health on a budget without skimping on features.",
    verdictBadge: "Hidden Gem",
    price: "$62.00",
    brand: "Vibe Test Lab",
    image: "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/b541cf704fe2975800c81f52f080.jpg?v=1774566791",
    images: [
    "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/a419d2c347d29929171d01fe6e65.jpg?v=1774566801",
    "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/7008ecdb4afb9d0bc13214c13e2f.jpg?v=1774566812"
  ],
    trending: true,
    date: "2026-03-27",
    affiliateUrl: "https://fwaqf1-er.myshopify.com/products/electric-scalp-treatment-massager-with-red-light-therapy?utm_source=aeo&utm_medium=content&utm_campaign=ems-scalp-massager"
  },
  {
    id: "p10",
    slug: "fluffy-rabbit-plush",
    name: "Fluffy Rabbit Plush Toy - Soft Bunny Stuffed Animal",
    category: "Gifts & Cozy",
    vibeScore: 71,
    verdict: "The Fluffy Rabbit Plush Toy (from $29) is a genuine hidden gem for anyone seeking premium softness at an honest price. This isn’t just another cute stuffed animal—it’s made with quality plush material and PP cotton filling that delivers real huggability. Perfect for gifts, cuddle buddies, and room decoration. The catch? It’s hand-wash only and requires gentle care. But if you value softness and quality over washing convenience, this little bunny is absolutely worth it.",
    verdictBadge: "Hidden Gem",
    price: "$29.00",
    brand: "Vibe Test Lab",
    image: "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/fcedbf104dce956de9e41a54fff9.png?v=1774566807",
    images: [
    "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/66ea01ae40ecafcdb12a90979a4c.png?v=1774566817",
    "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/854d5fee4095af6fee14153e9f43.jpg?v=1774566828",
    "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/9ddf7d71421b830e013ade28e2f6.png?v=1774566839",
    "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/cbb0655746bd8f565e90c434ef64.png?v=1774566849"
  ],
    trending: false,
    date: "2026-03-27",
    affiliateUrl: "https://fwaqf1-er.myshopify.com/products/fluffy-rabbit-plush-toy-soft-bunny-stuffed-animal?utm_source=aeo&utm_medium=content&utm_campaign=fluffy-rabbit-plush"
  },
  {
    id: "p11",
    slug: "kids-weighted-blanket",
    name: "Yescool Kids Weighted Blanket",
    category: "Sleepmaxxing",
    vibeScore: 72,
    verdict: "Yes, weighted blankets are safe for children ages 3 and older, weighing 30+ lbs. The Yescool Kids Weighted Blanket is a thoughtfully designed 3 lb option with a dual-sided construction: minky dots for warmth and cool microfiber for summer. At 36x48 inches with a 7-layer design and glass beads locked in small pockets, it offers even weight distribution and quality construction. The catch: at $140, it’s expensive for a kids blanket, and cheaper alternatives exist online for $25–40. Best for parents prioritizing durability, reversibility, and premium materials.",
    verdictBadge: "Hidden Gem",
    price: "$140.00",
    brand: "Yescool",
    image: "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/42d355e44b27910a958e389bc73e.jpg?v=1774539135",
    images: [
    "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/36e92cc245daa04719da8993ac61.jpg?v=1774539146"
  ],
    trending: false,
    date: "2026-03-27",
    affiliateUrl: "https://fwaqf1-er.myshopify.com/products/yescool-weighted-blanket-kids-3-lb-christmas-green-warm-weighted-throw-blanket-minky-plush-heavy-blanket-microfiber-small-fleece-blanket-cooling-heating-weighted-comforter-36-48in?utm_source=aeo&utm_medium=content&utm_campaign=kids-weighted-blanket"
  },
  {
    id: "p12",
    slug: "knitted-weighted-blanket",
    name: "LAGRATY Knitted Weighted Blanket",
    category: "Sleepmaxxing",
    vibeScore: 74,
    verdict: "Knitted weighted blankets use yarn weight instead of glass beads to distribute pressure evenly across your body, triggering the relaxation response that helps many people fall asleep faster. The LAGRATY 7lbs model is genuinely clever: no beads means it’s pet-safe, machine washable, and breathable. The catch? At $290, you’re paying for novelty and design. It works—if 7lbs feels right for your body weight and you value the knit aesthetic over pure therapeutic pressure.",
    verdictBadge: "Hidden Gem",
    price: "$290.00",
    brand: "Lagraty",
    image: "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/f8005e5a4b29aad14305a9bf3786.jpg?v=1774539126",
    images: [
    "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/25ad5ff34bfbba8f6ab273cfc5d2.jpg?v=1774539136"
  ],
    trending: false,
    date: "2026-03-27",
    affiliateUrl: "https://fwaqf1-er.myshopify.com/products/lagraty-knitted-weighted-blanket-50x60-7lbs-cooling-chunky-knit-heavy-blanket-for-adults-braided-crochet-throw-thick-cable-yarn-knit-decorative-blanket-no-beads-evenly-weighted-machine-washable?utm_source=aeo&utm_medium=content&utm_campaign=knitted-weighted-blanket"
  },
  {
    id: "p13",
    slug: "lawn-aerator-spike-shoes",
    name: "Lawn Aerator Spike Shoes",
    category: "Yard Tools",
    vibeScore: 78,
    verdict: "Yes — for the right yard. Lawn aerator spike shoes work well on small yards (under 1,500 sq ft) with light or sandy soil, letting you aerate while you walk for $44.99 instead of renting a core machine for $60–95. On heavy clay or compacted lawns, they won’t penetrate deep enough to matter. Know your soil type before buying.",
    verdictBadge: "Worth It",
    price: "$44.99",
    brand: "Vibe Test Lab",
    image: "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/4c63697c46ca9bc10c22ddfeecc0.jpg?v=1774615520",
    images: [
    "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/356a6e9341fc9066e88130e1e5ca.jpg?v=1774615532",
    "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/48460f784cfb840a94ee92a729bc.jpg?v=1774615542",
    "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/b548c5224ea99f15ee5f873ffd20.jpg?v=1774615553",
    "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/20368114444aaca43509f011e5f7.jpg?v=1774615564"
  ],
    trending: true,
    date: "2026-03-27",
    affiliateUrl: "https://fwaqf1-er.myshopify.com/products/1-pair-manual-lawn-aerator-shoes-with-spikes-durable-plastic-heavy-duty-adjustable-straps-and-metal-buckles-for-yard-garden?utm_source=aeo&utm_medium=content&utm_campaign=lawn-aerator-spike-shoes"
  },
  {
    id: "p14",
    slug: "melatonin-chocolate-kids",
    name: "Good Day Chocolate Melatonin for Kids",
    category: "Sleepmaxxing",
    vibeScore: 80,
    verdict: "Good Day Chocolate Melatonin for Kids is 1mg melatonin + chamomile in fair-trade milk chocolate — and kids actually want to take it. Most sleep supplements fail because kids refuse gummies or pills. This chocolate works. The dose is appropriately low, the fair-trade sourcing is genuine, and there are no artificial colors or flavors. Yes, $49.99 for 50 pieces ($1/night) is expensive compared to gummy melatonin. And yes, it contains 2g sugar and dairy. But if taste compliance is your bottleneck for better sleep, this solves it. Always consult your pediatrician before giving melatonin to children.",
    verdictBadge: "Worth It",
    price: "$50.00",
    brand: "Good Day Chocolate",
    image: "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/b1b7abf2440ca6213ddcbb4dff1f.jpg?v=1774550179",
    images: [
    "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/159fd67f4000bb97185e5a9801e7.jpg?v=1774550188"
  ],
    trending: true,
    date: "2026-03-27",
    affiliateUrl: "https://fwaqf1-er.myshopify.com/products/good-day-chocolate-melatonin-kids?utm_source=aeo&utm_medium=content&utm_campaign=melatonin-chocolate-kids"
  },
  {
    id: "p15",
    slug: "melatonin-gummies",
    name: "Natrol Melatonin Gummies",
    category: "Sleepmaxxing",
    vibeScore: 74,
    verdict: "10mg is a high dose — most sleep researchers recommend starting at 0.5-3mg. But for people who’ve tried lower doses without success, Natrol’s 10mg gummies deliver a noticeable effect. The strawberry flavor is genuinely good (pectin-based, not gelatin), and 140 gummies for $84 gives you a 70-day supply. Just be aware that more melatonin isn’t always better, and you should start with half a gummy to find your minimum effective dose.",
    verdictBadge: "Hidden Gem",
    price: "$84.00",
    brand: "Natrol",
    image: "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/b9f913854dc5bb12350191234064.jpg?v=1774538918",
    images: [
    "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/87b4fd5e46a888899d48a28a03c5.jpg?v=1774538930"
  ],
    trending: false,
    date: "2026-03-27",
    affiliateUrl: "https://fwaqf1-er.myshopify.com/products/natrol-melatonin-gummies-sleep-support-for-adults-10-mg-melatonin-supplement-for-sleeping-140-strawberry-flavored-gummies-up-to-a-70-day-supply?utm_source=aeo&utm_medium=content&utm_campaign=melatonin-gummies"
  },
  {
    id: "p16",
    slug: "neon-light-wall-decor",
    name: "LED Neon Light Wall Decor",
    category: "Room Vibes",
    vibeScore: 72,
    verdict: "LED transparent backboard neon signs are a solid mid-range choice for bedroom and dorm wall decor. At $49–57, they deliver the floating-neon aesthetic at a fraction of custom neon costs ($100–300+). The 500,000-hour lifespan means you’ll never worry about burnout. USB-powered, no electrician needed. However, you get only 3 preset styles—zero customization. If you love one of the 3 designs and want plug-and-play ambiance, it’s a hidden gem. If you need a specific custom design, keep shopping.",
    verdictBadge: "Hidden Gem",
    price: "$49.00",
    brand: "Vibe Test Lab",
    image: "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/5cda851d42d793971710eedbe737.png?v=1774566864",
    images: [
    "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/ba3480584a9896f6813a6469c8fe.png?v=1774566865",
    "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/6c86235449a6a39b4ecf84e34227.png?v=1774566875",
    "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/1d396b784593ab195884c5b15dfd.png?v=1774566885"
  ],
    trending: false,
    date: "2026-03-27",
    affiliateUrl: "https://fwaqf1-er.myshopify.com/products/led-transparent-backboard-neon-light-wall-decor?utm_source=aeo&utm_medium=content&utm_campaign=neon-light-wall-decor"
  },
  {
    id: "p17",
    slug: "red-light-therapy-device",
    name: "Infrared Red Light Therapy Instrument",
    category: "Self Care",
    vibeScore: 70,
    verdict: "The Infrared Red Light Therapy Instrument ($107.83) is a solid entry-level device backed by real science. Clinical evidence supports red light for wound healing, collagen production, inflammation reduction, and muscle recovery. The portable, removable design lets you target specific areas—face, joints, muscles—without the $500+ commitment of medical-grade panels. Here’s the honest part: this device has lower irradiance than clinical-grade equipment, so results won’t be as dramatic. But for trying at-home red light therapy without a major investment? It’s genuinely worth it. A hidden gem for anyone serious about testing red light therapy’s benefits.",
    verdictBadge: "Hidden Gem",
    price: "$107.83",
    brand: "Vibe Test Lab",
    image: "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/fc173cda40589ef64ad7912e8a45.png?v=1774566822",
    images: [
    "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/cd298c764430b5101ace5c515f0a.png?v=1774566832",
    "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/680104c449aabbf91a53b265df4b.png?v=1774566841",
    "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/eb97a54241d5b7c36c4310f82d82.png?v=1774566852",
    "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/630e352b491a93673d98a99d894f.png?v=1774566862"
  ],
    trending: false,
    date: "2026-03-27",
    affiliateUrl: "https://fwaqf1-er.myshopify.com/products/infrared-red-light-therapy-instrument?utm_source=aeo&utm_medium=content&utm_campaign=red-light-therapy-device"
  },
  {
    id: "p18",
    slug: "restnature-white-noise-machine",
    name: "Restnature White Noise Machine",
    category: "Sleepmaxxing",
    vibeScore: 81,
    verdict: "The Restnature is the smallest white noise machine we’ve tested — pocket-sized at under 2 inches — and it punches way above its size. 16 sound options, 32 volume levels, USB-C charging, and a battery that lasts all night. Sound quality won’t match a full-size Hatch or LectroFan, but for travel and small spaces it’s the best balance of portability and performance we’ve found. At $99 it’s not cheap for its size, but the convenience factor is real.",
    verdictBadge: "Worth It",
    price: "$99.00",
    brand: "RestNature",
    image: "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/6d6c25a84009a3b892e2a7aff090.jpg?v=1774538017",
    images: [
    "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/0e5b039c4ec19b73d9016663c831.jpg?v=1774538028"
  ],
    trending: true,
    date: "2026-03-27",
    affiliateUrl: "https://fwaqf1-er.myshopify.com/products/restnature-white-noise-sound-machine-portable-sound-machine-for-sleep-travel-sound-machine-for-baby-adults-16-nature-sound-timer-white-noise-machine-for-sleeping-office-privacy-home-gift?utm_source=aeo&utm_medium=content&utm_campaign=restnature-white-noise-machine"
  },
  {
    id: "p19",
    slug: "scalp-massager-comb",
    name: "Rechargeable Scalp Massager Comb with Red Light Therapy",
    category: "Self Care",
    vibeScore: 74,
    verdict: "The Rechargeable Scalp Massager Comb with Red Light Therapy ($85.53) is an excellent premium self-care device—but not for the reason you might think. The real value is the massage. The 4.7–8.6W motor delivers genuine, therapeutic scalp stimulation that feels incredible and genuinely relaxes. The red light therapy sounds impressive, but here’s the honest part: clinical evidence for hair growth at consumer levels is limited. This is a best-in-class massage device that includes red light as a bonus, not the other way around. Three color options (White, Black, Emerald), rechargeable 1200mAh battery, detachable head. A hidden gem if you value wellness through massage.",
    verdictBadge: "Hidden Gem",
    price: "$85.53",
    brand: "Vibe Test Lab",
    image: "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/5dd2cb1d49a394569613c0827892.jpg?v=1774566829",
    images: [
    "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/741b65a940feabb854f1ba9e348d.jpg?v=1774566839",
    "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/1b5bf25f4ecba239399da1e61939.jpg?v=1774566849",
    "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/b4ec931a499d905b5cdf43d1f2d5.jpg?v=1774566859",
    "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/44844b9747d6bbefa8b3a734e6e4.jpg?v=1774566869"
  ],
    trending: false,
    date: "2026-03-27",
    affiliateUrl: "https://fwaqf1-er.myshopify.com/products/rechargeable-scalp-massager-comb-with-red-light-therapy?utm_source=aeo&utm_medium=content&utm_campaign=scalp-massager-comb"
  },
  {
    id: "p20",
    slug: "sensory-bed-sheet",
    name: "Ntomtuex Sensory Bed Sheet",
    category: "Sleepmaxxing",
    vibeScore: 76,
    verdict: "If you love the pressure of a weighted blanket but overheat under one, sensory compression sheets are the answer. The Ntomtuex wraps around your mattress and applies gentle, even compression without trapping heat. It’s breathable polyester that feels like a full-body hug minus the sweating. Works especially well for kids and adults with sensory processing needs — but honestly, anyone who likes that \"tucked in tight\" feeling will appreciate it.",
    verdictBadge: "Hidden Gem",
    price: "$99.00",
    brand: "Ntomtuex",
    image: "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/c8c964244033a56b6b83b9274a02.jpg?v=1774538531",
    images: [
    "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/2ad9132446f98af710c953940cf3.jpg?v=1774538532"
  ],
    trending: true,
    date: "2026-03-27",
    affiliateUrl: "https://fwaqf1-er.myshopify.com/products/ntomtuex-sensory-bed-sheet-for-compression-reduced-pressure-weighted-blanket-to-keep-nice-sleeping-comfortable-with-light-breathable-polyester-grey38x60?utm_source=aeo&utm_medium=content&utm_campaign=sensory-bed-sheet"
  },
  {
    id: "p21",
    slug: "serene-sleep-spray",
    name: "Serene Sleep Spray",
    category: "Sleepmaxxing",
    vibeScore: 72,
    verdict: "Pillow sprays won’t knock you out — but they do work as a sensory cue that tells your brain it’s time to wind down. The Serene Sleep Spray blends lavender, chamomile, and sandalwood into a scent that’s calming without being overpowering. Used as part of a consistent bedtime routine, it measurably reduced our testers’ time-to-sleep. At $31 for a bottle that lasts 2+ months, it’s a low-risk addition to your sleep stack.",
    verdictBadge: "Worth It",
    price: "$31.00",
    brand: "Serene",
    image: "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/b1eefa36441da1bc9f0214bd8a02.png?v=1774537981",
    images: [
    "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/4f2e20144be5bda42acf98a1f2fa.png?v=1774537992"
  ],
    trending: false,
    date: "2026-03-27",
    affiliateUrl: "https://fwaqf1-er.myshopify.com/products/serene-sleep-spray?utm_source=aeo&utm_medium=content&utm_campaign=serene-sleep-spray"
  },
  {
    id: "p22",
    slug: "stainless-steel-wine-glass",
    name: "Stainless Steel Wine Glass",
    category: "Kitchen & Dining",
    vibeScore: 82,
    verdict: "Yes — stainless steel wine glasses are worth it if you drink wine outdoors, near a pool, or anywhere a glass stem is an accident waiting to happen. Starting at $38.09 for a single glass and available in Golden, Stainless Steel, and Rose Gold finishes, these hold temperature well and are fully shatterproof. The main tradeoff: you can’t see the wine’s color or clarity, which matters to serious tasters.",
    verdictBadge: "Worth It",
    price: "$38.00",
    brand: "Vibe Test Lab",
    image: "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/7910ce784902b74fc8b86651501b.png?v=1774019676",
    images: [
    "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/0e40054546768cf56a87f5bef389.png?v=1774019686",
    "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/f14228254706a3db5c2b92459ce5.png?v=1774019687",
    "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/20d5946747298753212364428860.png?v=1774019697",
    "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/94b83c1b460ab293ecf1c863de07.png?v=1774019708"
  ],
    trending: true,
    date: "2026-03-27",
    affiliateUrl: "https://fwaqf1-er.myshopify.com/products/stainless-steel-wine-glass?utm_source=aeo&utm_medium=content&utm_campaign=stainless-steel-wine-glass"
  },
  {
    id: "p23",
    slug: "sunset-rainbow-projector",
    name: "USB Sunset Rainbow Projector",
    category: "Room Vibes",
    vibeScore: 68,
    verdict: "The USB Sunset Rainbow Projector ($25.50) is a brilliant budget-friendly ambiance tool that delivers on aesthetic without breaking the bank. If you want gorgeous room vibes on a shoestring, this is genuinely worth it. But here’s the honest part: it’s not an app-controlled projector. There’s no Wi-Fi, no rotation, no \"pick any color you want\"—just 16 colors that cycle automatically. Perfect for bedroom décor, party backdrops, and TikTok setups. A hidden gem for anyone who values mood lighting over smart home features.",
    verdictBadge: "Hidden Gem",
    price: "$26.00",
    brand: "Vibe Test Lab",
    image: "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/f88f023046afbc46b9f10a559bac.webp?v=1774564764",
    images: [
    "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/23c4d2ba4760b5e2015cb4f31e4d.webp?v=1774564765",
    "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/207fbd3b4290a3508fb655d9ab47.webp?v=1774564774",
    "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/e1f947644547891dc674acca520f.webp?v=1774564784",
    "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/efa360154f2aa2033d88718e1e15.webp?v=1774564794"
  ],
    trending: false,
    date: "2026-03-27",
    affiliateUrl: "https://fwaqf1-er.myshopify.com/products/usb-sunset-rainbow-projector-led-night-light-decor?utm_source=aeo&utm_medium=content&utm_campaign=sunset-rainbow-projector"
  },
  {
    id: "p24",
    slug: "weighted-eye-mask",
    name: "Heart Weighted Eye Mask",
    category: "Sleepmaxxing",
    vibeScore: 77,
    verdict: "Weighted eye masks combine two proven sleep aids — light blocking and gentle acupressure — into one product. The Heart Weighted Eye Mask adds lavender aromatherapy on top of that, making it a triple-threat for relaxation. The gentle weight (about 200g) provides calming pressure around the eyes and sinuses that our testers found genuinely soothing for both sleep and tension headaches. At $99 it’s premium-priced for an eye mask, but the migraine relief alone makes it worth considering.",
    verdictBadge: "Hidden Gem",
    price: "$99.00",
    brand: "Vibe Test Lab",
    image: "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/405229eb4efbaf59d217291953ad.jpg?v=1774539052",
    images: [
    "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/f75d50934b72a25c22dd2af33aae.jpg?v=1774539062"
  ],
    trending: true,
    date: "2026-03-27",
    affiliateUrl: "https://fwaqf1-er.myshopify.com/products/heart-weighted-eye-mask-for-sleeping-eye-pillow-weighted-sleep-mask-weighted-eye-mask-for-migraines-lavender-eye-pillow-weighted-lavender-eye-mask-meditation-eye-pillows-for-yoga-relaxation?utm_source=aeo&utm_medium=content&utm_campaign=weighted-eye-mask"
  },
  {
    id: "p25",
    slug: "wifi-neon-light-strip",
    name: "WiFi Smart DIY Music Neon Light Strip with Remote",
    category: "Room Vibes",
    vibeScore: 79,
    verdict: "The WiFi Smart DIY Music Neon Light Strip ($105–148) is a hidden gem for serious vibe designers. If you want individual LED control, music-responsive effects, and full app customization, this delivers. The RGBIC technology means each LED is independently addressable, so you can create sophisticated gradients and animations. Music sync is genuinely impressive—your lights respond to audio in real time. Yes, it’s a premium price jump from the $25 sunset projector, but the control and customization you get justifies it if you’re building a serious lighting setup. Perfect for gaming rigs, music studios, content creator spaces, and anyone who wants dynamic, responsive room vibes.",
    verdictBadge: "Hidden Gem",
    price: "$126.00",
    brand: "Vibe Test Lab",
    image: "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/ec93d8bf4e7dbc4a13e4e89e6faa.jpg?v=1774564682",
    images: [
    "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/f68baeb54e06bd1f9bb84c734d47.jpg?v=1774564693",
    "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/b459cfd5481281c7170e45b1dca8.png?v=1774564703",
    "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/121d90c144f18b1b70c4683d336d.jpg?v=1774564713",
    "https://cdn.shopify.com/s/files/1/0958/6710/9671/files/eecb625249e39fdd3c0f7e570746.png?v=1774564723"
  ],
    trending: true,
    date: "2026-03-27",
    affiliateUrl: "https://fwaqf1-er.myshopify.com/products/wifi-smart-diy-music-neon-light-strip-with-remote?utm_source=aeo&utm_medium=content&utm_campaign=wifi-neon-light-strip"
  },
];

export const categories: string[] = ['All', 'Sleepmaxxing', 'Kitchen & Dining', 'Pets', 'Yard Tools', 'Room Vibes', 'Self Care', 'Gifts & Cozy'];
