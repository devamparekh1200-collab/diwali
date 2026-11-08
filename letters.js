const env=document.getElementById('env'),note=document.getElementById('note');
L.forEach((t,i)=>{
 const b=document.createElement('button');
 b.textContent='✉';b.setAttribute('aria-label','Letter '+(i+1));
 b.onclick=()=>{b.classList.add('read');
  note.innerHTML=`<small>Letter ${i+1} of 10</small><p>${t}</p><b>Always yours, Devam</b>`;
  note.classList.remove('pop');void note.offsetWidth;note.classList.add('pop')};
 const c=document.createElement('div');c.className='col';c.appendChild(b);env.appendChild(c);
});
