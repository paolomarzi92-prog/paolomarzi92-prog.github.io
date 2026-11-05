(()=>{'use strict';
const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav');
function close(focus=false){if(!toggle||!nav)return;nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.textContent='Menu';if(focus)toggle.focus()}
if(toggle&&nav){
 toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'Close':'Menu'});
 nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>close()));
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open'))close(true)});
 document.addEventListener('click',e=>{if(nav.classList.contains('open')&&!nav.contains(e.target)&&!toggle.contains(e.target))close()});
 window.addEventListener('resize',()=>{if(window.matchMedia('(min-width: 841px)').matches)close()});
}
const buttons=[...document.querySelectorAll('.filter-btn')],items=[...document.querySelectorAll('.pub-item')];
const search=document.getElementById('pub-search'),empty=document.getElementById('empty'),countLabel=document.getElementById('pub-count');
if(search&&empty&&countLabel){let category='All';
 function filter(){const query=(search.value||'').trim().toLocaleLowerCase();let count=0;
  for(const item of items){const ok=(category==='All'||(item.dataset.categories||'').split('|').includes(category))&&(!query||(item.dataset.search||'').toLocaleLowerCase().includes(query));item.hidden=!ok;if(ok)count++}
  empty.hidden=count!==0;countLabel.textContent=count+(count===1?' article':' articles')}
 buttons.forEach(btn=>btn.addEventListener('click',()=>{category=btn.dataset.filter;buttons.forEach(b=>{const active=b===btn;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active))});filter()}));
 search.addEventListener('input',filter);filter();
}
})();
