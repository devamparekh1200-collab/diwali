const PHOTOS=Array.from({length:10},(_,i)=>`images/photo${i+1}.jpeg`); // put your photos in the images folder
const L=[
"My baby Diya, I have been sitting here trying to find the right words, and I think the truth is that no word is big enough. You are the first light I look for when I wake up and the last one I want to see before I sleep. Before you, my days were just lit. With you, they glow. Thank you for walking into my life so softly that I did not even notice the darkness leaving. I love you more than I know how to write.",
"Diya, do you know what you do to an ordinary day? You turn it into a festival. A random evening, a cup of chai, a silly joke, and suddenly it feels like the whole street is lit up with lamps. I never knew one person could do that to a day, baby. Every time I think about how lucky I am, I end up smiling like a fool, and that is entirely your fault. Please never stop being the reason.",
"Remember the times we laughed until we could not breathe, baby? The kind of laugh where your eyes close, your shoulders shake and you forget what started it? I think about those moments more than you know. I would trade every firecracker in the world for one more evening like that with you. Those little, silly, perfect moments are the real Diwali for me, and you are the one who lights every one of them.",
"Baby, you take care of me in so many quiet ways that you never announce. The way you remember what I like, the way you check if I have eaten, the way you notice when I am tired even before I say it. I see every single one, Diya, and I am more grateful than I ever say out loud. I promise I will try to take care of you the same way, every day, in every small thing, for as long as you let me.",
"Do you want to know a secret, baby? My favourite colour is whatever you are wearing. Tonight I hope it is red or gold, and I hope you look into the mirror and see even half of what I see when I look at you. You do not need diyas to glow, Diya. The lamps are only there to try and keep up with you. Every festival feels brighter because you are in it, and every photo of you is my favourite photo.",
"I am not perfect, baby, and you know that better than anyone. I get quiet when I should talk, I get stubborn when I should listen, and sometimes I forget to say the things that matter most. But loving you is the one thing I have always gotten right. Thank you for being patient with my silences and generous with my mistakes, Diya. You make me want to be better, softer and braver, and I am trying every day to deserve you.",
"If sweets could say how I feel about you, the whole box would still be too small, baby. Diwali has always been about mithai, lights and family, but this year it is about you. The best part of every celebration is the moment I look across the room and find you already looking at me. That tiny second feels sweeter than any ladoo, and I would happily spend every Diwali of my life collecting more seconds like it, Diya.",
"Even on the quiet and tired days, being near you feels like home, Diya. We do not have to talk, we do not have to go anywhere, we do not have to do anything special. You just sit next to me and the whole world slows down and becomes gentle. I used to think home was a place, baby, but now I know it is a person. Mine has your smile, your voice and your warm hand in mine, and I never want to leave it.",
"Thank you, baby. Thank you for every hug that fixed a bad day, for every late-night talk that made me feel less alone, and for every time you believed in me when I did not believe in myself. You have seen my best and my worst, and you stayed. Do you know how rare and precious that is, Diya? You are the best part of my life, and every good thing I do from now on carries a little of your light inside it.",
"Happy Diwali, my baby Diya. Tonight, when you light your lamps, I hope you make a wish, and I hope it comes true. May your life glow brighter every year. May your dreams grow bigger and your worries grow smaller. May you always be as happy as you make me. And if you have room for one more wish, I hope it is for us, because I want to light a thousand more diyas with you, beside you, holding your hand through all of them. I love you, forever and always. Yours, Devam."
];
const S=(a,b,x)=>`<svg viewBox="0 0 200 150" preserveAspectRatio="xMidYMid slice" width="100%" height="100%"><defs><linearGradient id="sk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient></defs><rect width="200" height="150" fill="url(#sk)"/>${x}</svg>`;
const rep=(n,f)=>Array.from({length:n},(_,i)=>f(i)).join('');
const stars=rep(18,i=>`<circle cx="${(i*47)%200}" cy="${(i*31)%70}" r="${1+i%2}" fill="#fff" opacity=".7"/>`);
const fl=(x,y,k=1)=>`<g transform="translate(${x} ${y}) scale(${k})"><path d="M0 -26C9 -12 10 -4 0 6C-10 -4 -9 -12 0 -26Z" fill="#ffd36b"/><path d="M0 -12C5 -6 5 0 0 5C-5 0 -5 -6 0 -12Z" fill="#ff7a1a"/></g>`;
const bowl=(x,y,k=1)=>`<g transform="translate(${x} ${y}) scale(${k})"><path d="M-30 0Q0 34 30 0Q0 6 -30 0Z" fill="#c9622e"/><ellipse cx="0" cy="0" rx="30" ry="5" fill="#f2a45a"/></g>`;
const burst=(x,y,r,c)=>rep(14,i=>{const t=i*Math.PI/7;return `<line x1="${x+Math.cos(t)*r*.3}" y1="${y+Math.sin(t)*r*.3}" x2="${x+Math.cos(t)*r}" y2="${y+Math.sin(t)*r}" stroke="${c}" stroke-width="2" stroke-linecap="round"/>`});
const petals=(x,y,n,rx,ry,off,c)=>rep(n,i=>`<ellipse cx="${x}" cy="${y-off}" rx="${rx}" ry="${ry}" fill="${c}" transform="rotate(${i*360/n} ${x} ${y})"/>`);
const ART=[
S('#2d1647','#1a0f2e',stars+'<circle cx="100" cy="70" r="55" fill="#ff8a1f" opacity=".25"/>'+fl(100,78,1.9)+bowl(100,96,1.6)),
S('#0d0a24','#2a1250',burst(60,55,32,'#f6b93b')+burst(140,45,26,'#e8557a')+burst(105,95,30,'#7fd6ff')+stars),
S('#fbd6e0','#f7b5a0',petals(100,75,12,10,30,34,'#e8557a')+petals(100,75,8,7,20,18,'#f6b93b')+'<circle cx="100" cy="75" r="9" fill="#7a2a8f"/>'),
S('#101a44','#2a1250',stars+rep(3,i=>{const x=45+i*55,y=45+(i%2)*30;return `<circle cx="${x}" cy="${y}" r="26" fill="#ff8a1f" opacity=".25"/><rect x="${x-10}" y="${y-14}" width="20" height="28" rx="5" fill="#f6b93b"/><rect x="${x-10}" y="${y-4}" width="20" height="4" fill="#e8557a"/>`})),
S('#2d1647','#1a0f2e',stars+'<path d="M100 60C70 30 60 62 100 92C140 62 130 30 100 60Z" fill="#e8557a"/>'+fl(55,100,1.2)+bowl(55,108)+fl(145,100,1.2)+bowl(145,108)),
S('#14123a','#3a1b5c','<circle cx="150" cy="38" r="20" fill="#fbf0dc"/><circle cx="160" cy="33" r="18" fill="#14123a"/>'+stars+rep(5,i=>fl(25+i*37,112,.8)+bowl(25+i*37,118,.55))),
S('#f6d6a8','#e8a05a','<ellipse cx="100" cy="95" rx="75" ry="26" fill="#fbf0dc"/><ellipse cx="100" cy="90" rx="62" ry="19" fill="#f2c27a"/>'+rep(7,i=>`<circle cx="${52+i*16}" cy="${86+(i%2)*8}" r="9" fill="#e8861f"/>`)),
S('#0d0a24','#1a0f2e','<line x1="60" y1="130" x2="112" y2="70" stroke="#c9a46a" stroke-width="3"/>'+burst(115,66,34,'#ffd36b')+burst(115,66,20,'#fff')+stars),
S('#1f3a5c','#0f2038','<ellipse cx="100" cy="112" rx="90" ry="22" fill="#2a5a7a" opacity=".6"/>'+petals(100,100,8,13,32,28,'#f7a6c0')+petals(100,100,5,9,24,18,'#e8557a')),
S('#2d1647','#1a0f2e',stars+'<path d="M0 40Q100 85 200 40" stroke="#f6b93b" fill="none" stroke-width="2"/>'+rep(7,i=>{const x=15+i*28,y=40+Math.sin(i/6*Math.PI)*22;return `<circle cx="${x}" cy="${y+8}" r="7" fill="${i%2?'#ff8a1f':'#ffd36b'}"/>`})+'<text x="100" y="118" text-anchor="middle" font-family="Cormorant Garamond,Georgia,serif" font-style="italic" font-size="24" fill="#f6b93b">Diya ♥ Devam</text>')
];
const diya=(id,lit)=>`<svg viewBox="0 0 100 90" aria-hidden="true">
<defs><radialGradient id="g${id}"><stop offset="0" stop-color="#ffb347" stop-opacity=".85"/><stop offset="1" stop-color="#ff8a1f" stop-opacity="0"/></radialGradient>
<linearGradient id="b${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d9743a"/><stop offset="1" stop-color="#8c3a1a"/></linearGradient></defs>
<circle class="gl" cx="50" cy="34" r="34" fill="url(#g${id})"/>
<g class="fl"><path d="M50 8C60 22 62 32 50 42C38 32 40 22 50 8Z" fill="#ffd36b"/><path d="M50 22C55 29 56 35 50 41C44 35 45 29 50 22Z" fill="#ff7a1a"/></g>
<path d="M10 48Q50 92 90 48Q50 56 10 48Z" fill="url(#b${id})"/>
<ellipse cx="50" cy="48" rx="40" ry="6" fill="#f2a45a"/>
<rect x="48" y="40" width="4" height="9" rx="2" fill="#3b1d12"/>
<circle cx="50" cy="72" r="2.5" fill="#ffd36b"/><circle cx="36" cy="66" r="2" fill="#ffd36b"/><circle cx="64" cy="66" r="2" fill="#ffd36b"/>
</svg>`;
// drifting letters
const sky=document.getElementById('sky'),chars="HAPPYDIWALI♥LOVEYOUशुभदीपावली";
const cs=[...chars];
for(let i=0;i<55;i++){
 const s=document.createElement('span');
 s.textContent=cs[Math.floor(Math.random()*cs.length)];
 s.style.left=Math.random()*100+'%';
 s.style.fontSize=(18+Math.random()*34)+'px';
 s.style.animationDuration=(12+Math.random()*16)+'s';
 s.style.animationDelay=(-Math.random()*28)+'s';
 sky.appendChild(s);
}
