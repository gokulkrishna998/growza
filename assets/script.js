const toggle=document.querySelector('.menu-toggle');
const links=document.querySelector('.nav-links');
if(toggle&&links){toggle.addEventListener('click',()=>{links.classList.toggle('open');toggle.setAttribute('aria-expanded',links.classList.contains('open'));});}
document.querySelectorAll('.faq-q').forEach(q=>q.addEventListener('click',()=>{const item=q.closest('.faq-item');item.classList.toggle('open');q.setAttribute('aria-expanded',item.classList.contains('open'));}));
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const parallax=document.querySelector('.hero');
if(parallax&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){window.addEventListener('scroll',()=>{const y=window.scrollY;if(y<850)parallax.style.setProperty('--scroll-y',y*.22+'px');},{passive:true});}
const form=document.querySelector('[data-demo-form]');
if(form){form.addEventListener('submit',e=>{e.preventDefault();const success=form.querySelector('.success');if(success)success.style.display='block';form.reset();});}
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
