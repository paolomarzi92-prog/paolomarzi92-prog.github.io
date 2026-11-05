(function(){
 const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('.nav');
 toggle?.addEventListener('click',()=>{let open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',open?'true':'false');toggle.textContent=open?'Close':'Menu';});
 document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.textContent='Menu';}));
 const buttons=[...document.querySelectorAll('.filter-btn')],items=[...document.querySelectorAll('.pub-item')],search=document.querySelector('#pub-search'),empty=document.querySelector('#empty');let category='All';
 function filter(){let query=(search.value||'').trim().toLowerCase(),count=0;for(const item of items){let ok=(category==='All'||(item.dataset.categories||'').split('|').includes(category))&&(!query||item.dataset.search.includes(query));item.hidden=!ok;if(ok)count++;}empty.hidden=!!count;document.querySelector('#pub-count').textContent=count+' articles';}
 buttons.forEach(btn=>btn.addEventListener('click',()=>{category=btn.dataset.filter;buttons.forEach(b=>{b.classList.toggle('active',b===btn);b.setAttribute('aria-pressed',b===btn?'true':'false')});filter()}));search.addEventListener('input',filter);filter();
 document.getElementById('year').textContent=new Date().getFullYear();
})();