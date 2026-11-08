const hero=document.getElementById('hero-diya');
hero.innerHTML=diya('h');
hero.querySelector('.fl').style.cssText='opacity:1;animation:flick 1.6s ease-in-out infinite;transform-origin:50% 100%';
hero.querySelector('.gl').style.opacity=1;
