// Put your photo of the two of you in this folder and name it couple.jpeg inside the images folder
const COUPLE_PHOTO='images/couple.jpeg';
const tap=document.getElementById('tap-diya'),reveal=document.getElementById('reveal'),pic=document.getElementById('pic'),hint=document.getElementById('hint');
tap.innerHTML=diya('t');
let started=false;
function start(){
 if(started)return;started=true;
 tap.classList.add('lit');hint.style.opacity=0;
 const img=new Image();img.alt='Diya and Devam';
 img.onerror=()=>{pic.innerHTML=ART[9]};
 img.src=COUPLE_PHOTO;pic.appendChild(img);
 setTimeout(()=>reveal.classList.add('show'),1200);
 setTimeout(()=>{location.href='home.html'},1200+5000);
}
tap.addEventListener('click',start);
tap.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();start()}});
