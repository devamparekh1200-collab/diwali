const grid=document.getElementById('grid'),letter=document.getElementById('letter'),count=document.getElementById('count');
let lit=new Set();
function show(i){
 letter.innerHTML=`<div class="ph"><img src="${PHOTOS[i]}" alt="Diya and Devam" onerror="this.parentNode.innerHTML=ART[${i}]"></div><small>Picture ${i+1} of 10</small>`;
 letter.classList.remove('pop');void letter.offsetWidth;letter.classList.add('pop');
}
function light(i,read){
 const el=grid.children[i].firstChild;
 el.classList.add('lit');el.setAttribute('aria-pressed','true');
 lit.add(i);count.textContent=lit.size+' of 10 lit';
 if(read)show(i);
 if(lit.size===10)document.getElementById('end').classList.add('show');
}
L.forEach((t,i)=>{
 const b=document.createElement('button');
 b.className='d';b.setAttribute('aria-label','Diya '+(i+1));b.setAttribute('aria-pressed','false');
 b.innerHTML=diya(i)+`<span>${i+1}</span>`;
 b.onclick=()=>light(i,true);
 const c=document.createElement('div');c.className='col';c.appendChild(b);grid.appendChild(c);
});
document.getElementById('all').onclick=()=>{
 L.forEach((_,i)=>setTimeout(()=>light(i,false),i*120));
 setTimeout(()=>{show(9);document.getElementById('end').scrollIntoView({behavior:'smooth'})},10*150+400);
};
