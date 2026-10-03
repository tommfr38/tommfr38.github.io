// c = category. Entries with `links` have several destinations instead of one `u`.
const projects = [
  { t: 'toexe', c: 'tools', u: 'https://tommfr38.com/toexe/', d: 'Turn a Mac .app into a Windows .exe (Electron and Java apps), from the terminal.' },
  { t: 'NeverFap', c: 'tools', u: 'https://tommfr38.github.io/neverfap/', d: 'Stop gooning. Live healthier.' },
  { t: 'Relocate', c: 'tools', u: 'https://tommfr38.github.io/relocate/', d: "Change your phone's GPS location with ease." },
  { t: 'Cutout', c: 'tools', u: 'https://tommfr38.github.io/cutout/', d: 'Remove the background of any image.' },
  {
    t: 'card2.0',
    c: 'tools',
    d: 'Custom Apple Wallet card art and lock screen passcode themes for macOS. Based on AirCard by mak5er.',
    links: [
      { t: 'install', u: 'https://tommfr38.com/card2.0/' },
      { t: 'source', u: 'https://github.com/tommfr38/card2.0' },
    ],
  },
  {
    t: 'MC Mods',
    c: 'mods',
    d: 'My Minecraft mods. Twilight Forest Boss: all rights to @D_ANGRY_MODDER.',
    links: [
      { t: 'zenith mod', u: 'https://github.com/tommfr38/ZenithMod/' },
      { t: 'twilight forest boss', u: 'https://github.com/tommfr38/TwilightForestFinalBoss' },
    ],
  },
  { t: 'QuikWeb', c: 'tools', u: 'https://tommfr38.github.io/QuikWeb/', d: 'Search the web, one shortcut away.' },
  { t: 'PropertyMP3', c: 'tools', u: 'https://tommfr38.github.io/PropertyMP3/', d: "Edit your song's details with a clean UI." },
  { t: 'CaseSim', c: 'games', u: 'https://tommfr38.github.io/CaseSim/', d: 'Simulate opening Counter-Strike cases without spending a penny.' },
  { t: 'TypeTest nano', c: 'games', u: 'https://tommfr38.github.io/typetestnano/', d: 'Test how fast and accurate your typing is.' },
  { t: 'CleanTube', c: 'tools', u: 'https://tommfr38.github.io/cleantube/', d: 'Watch YouTube without ads, cookies, and trackers.' },
  { t: 'Siri VS EU', c: 'info', u: 'https://tommfr38.github.io/sirivseu/', d: 'Latest news on the Siri AI release in the EU.' },
  { t: 'Christmas Countdown', c: 'info', u: 'https://tommfr38.github.io/ChristmasEveCountdown/', d: 'Countdown to Christmas Eve.' },
  { t: 'Mines', c: 'games', u: 'https://tommfr38.github.io/mines/', d: 'Play Mines without losing all your money.' },
  { t: 'Clock Countdown', c: 'tools', u: 'https://tommfr38.github.io/clockcountdown/', d: 'Set a timer.' },
  { t: 'Hangman', c: 'games', u: 'https://tommfr38.github.io/hangman/', d: 'Hangman in your browser.' },
  { t: 'Text Analyzer', c: 'tools', u: 'https://tommfr38.github.io/textanalyzer/', d: 'Paste text to see word counts, character counts and more.' },
  { t: 'Simple Calculator', c: 'tools', u: 'https://tommfr38.github.io/CalculatorSimple/', d: 'Basic web calculator.' },
  { t: 'Status Switcher', c: 'discord', u: 'https://tommfr38.github.io/statusswitcher/', d: 'Automate your Discord status without hassle.' },
  { t: 'Click Me', c: 'fun', u: 'https://tommfr38.github.io/clickme/', d: "A dumb little button that reacts when you won't stop clicking it." },
  { t: 'Text Planner', c: 'tools', u: 'https://tommfr38.github.io/textplanner/', d: "Plan text here to make sure you don't make a mistake." },
  { t: 'Stopwatch', c: 'tools', u: 'https://tommfr38.github.io/stopwatch/', d: 'Simple stopwatch.' },
  { t: 'YMDP', c: 'tools', u: 'https://tommfr38.github.io/YMDP/', d: 'Your Mini Draw Page.' },
  { t: 'Roll a Die', c: 'games', u: 'https://tommfr38.github.io/rolladie/', d: 'Roll dice digitally.' },
  { t: 'TIDG', c: 'fun', u: 'https://tommfr38.github.io/TIDG/', d: 'My depression generator.' },
  { t: 'Discord Embed Editor', c: 'discord', u: 'https://tommfr38.github.io/discordembededitor', d: 'Quick editor to build Discord embed messages without guessing JSON.' },
  { t: 'Rock Paper Scissors', c: 'games', u: 'https://tommfr38.github.io/rockpaperscissors', d: 'Rock, paper, scissors against a simple bot.' },
  { t: 'Download More RAM', c: 'fun', u: 'https://tommfr38.github.io/downloadmoreram', d: 'Joke site pretending to let you "download" extra RAM.' },
  { t: 'One Hour Progress Bar', c: 'fun', u: 'https://tommfr38.github.io/onehourprogressbar', d: 'A progress bar that fills up over the course of one hour.' },
  { t: 'OnlyCats404', c: 'fun', u: 'https://onlycats404.github.io/', d: 'Only cats (not adult content!).' },
  { t: 'WebGate', c: 'tools', u: 'https://tommfr38.github.io/WebGate/', d: 'Open websites from a program.' },
  { t: 'True or Not?', c: 'fun', u: 'https://tommfr38.github.io/trueornot/', d: 'Enter a statement to find out the truth.' },
  { t: 'IP Checker', c: 'tools', u: 'https://tommfr38.github.io/ipchecker/', d: 'Shows info about an IP address.' },
  { t: 'IP Lookup', c: 'tools', u: 'https://tommfr38.github.io/iplookup/', d: 'Shows your current IP address.' },
  { t: 'iOS 26 Beta Timeline', c: 'info', u: 'https://tommfr38.github.io/ios26beta/', d: 'Timeline that tracks iOS 26 beta releases.' },
  { t: 'Clan Tag Center', c: 'discord', u: 'https://clantagcenter.github.io/', d: 'Collection of clan tags for Discord.' },
  { t: 'Password Generator', c: 'tools', u: 'https://tommfr38.github.io/passwordgenerator/', d: 'Generates random passwords with chosen length and options.' },
  { t: 'Web TextEdit', c: 'tools', u: 'https://tommfr38.github.io/WebTextEdit/', d: 'Simple in-browser text editor for quick notes.' },
  { t: 'Cursor Finder', c: 'tools', u: 'https://tommfr38.github.io/cursorfinder/', d: 'Helps you find your cursor.' },
  { t: 'Dexter Ratings', c: 'info', u: 'https://tommfr38.github.io/dexterratings/', d: 'See the IMDb ratings of Dexter episodes.' },
  { t: 'Dexter OS Ratings', c: 'info', u: 'https://tommfr38.github.io/dexterosrater/', d: 'Shows the IMDb ratings of Dexter OS episodes.' },
  { t: 'BotSend', c: 'discord', u: 'https://tommfr38.github.io/botsend/', d: 'Send text messages with a Discord bot easily.' },
  { t: 'PassNote', c: 'tools', u: 'https://tommfr38.github.io/passnote/', d: 'Hide information unsecurely.' },
  { t: 'Magic 8 Ball', c: 'fun', u: 'https://tommfr38.github.io/magic8ball/', d: 'Browser-based magic 8 ball that gives random answers to questions.' },
  { t: 'GTA VI Countdown', c: 'info', u: 'https://tommfr38.github.io/gta6/', d: 'Countdown to GTA VI (if it even releases).' },
];

const CATEGORIES = ['tools', 'games', 'discord', 'fun', 'info', 'mods'];

const list = document.getElementById('list');
const filter = document.getElementById('filter');
const count = document.getElementById('count');
const chipBox = document.getElementById('chips');

let activeCat = 'all';

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function shortUrl(u) {
  return u.replace(/^https?:\/\//, '').replace(/\/$/, '');
}

function makeCard(p, index) {
  const li = el('li');
  const num = el('i', null, '#' + String(index).padStart(2, '0'));

  const top = el('div', 'card-top');
  const name = el('span', 'card-name');
  name.append(num, p.t);
  top.append(name, el('span', 'card-cat', p.c));

  const desc = el('p', 'card-desc', p.d);
  const foot = el('div', 'card-foot');

  let card;
  if (p.links) {
    card = el('div', 'card');
    const multi = el('span', 'multi');
    for (const l of p.links) {
      const a = el('a', null, l.t + ' ↗');
      a.href = l.u;
      a.target = '_blank';
      a.rel = 'noreferrer';
      multi.append(a);
    }
    foot.append(multi);
  } else {
    card = el('a', 'card');
    card.href = p.u;
    card.target = '_blank';
    card.rel = 'noreferrer';
    foot.append(el('span', 'url', shortUrl(p.u)), el('span', 'go', '↗'));
  }

  card.append(top, desc, foot);
  li.append(card);
  return li;
}

function render() {
  const q = filter.value.trim().toLowerCase();
  list.replaceChildren();

  let shown = 0;
  projects.forEach((p, i) => {
    if (activeCat !== 'all' && p.c !== activeCat) return;
    const hay = [p.t, p.d, p.c, ...(p.links || []).map((l) => l.t)].join(' ').toLowerCase();
    if (q && !hay.includes(q)) return;
    list.append(makeCard(p, i + 1));
    shown++;
  });

  if (!shown) list.append(el('li', 'empty', 'no matches'));
  count.textContent = `showing ${shown} of ${projects.length}`;
}

function makeChip(key, label, n) {
  const b = el('button', 'chip', label);
  b.type = 'button';
  b.setAttribute('aria-pressed', String(key === activeCat));
  b.append(el('b', null, String(n)));
  b.addEventListener('click', () => {
    activeCat = key;
    for (const c of chipBox.children) c.setAttribute('aria-pressed', String(c === b));
    render();
  });
  return b;
}

chipBox.append(makeChip('all', 'all', projects.length));
for (const cat of CATEGORIES) {
  chipBox.append(makeChip(cat, cat, projects.filter((p) => p.c === cat).length));
}

filter.addEventListener('input', render);
render();

// Hero: live project count and a peek at the first few names
document.querySelectorAll('[data-count]').forEach((n) => (n.textContent = projects.length));
const peek = document.getElementById('peek');
for (const p of projects.slice(0, 5)) {
  peek.append(el('li', null, p.t.toLowerCase().replace(/[^a-z0-9.]+/g, '-').replace(/^-|-$/g, '') + '/'));
}

document.getElementById('year').textContent = new Date().getFullYear();

// Mark the current section in the nav
const spy = [...document.querySelectorAll('[data-spy]')];
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        for (const a of spy) {
          if (a.dataset.spy === e.target.id) a.setAttribute('aria-current', 'true');
          else a.removeAttribute('aria-current');
        }
      }
    },
    { rootMargin: '-40% 0px -55% 0px' }
  );
  for (const a of spy) {
    const section = document.getElementById(a.dataset.spy);
    if (section) observer.observe(section);
  }
}
