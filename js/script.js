const logo=document.querySelector('.brand img')?.src || '';
let current=0;
const mobile=document.getElementById('mobile');
const hamb=document.getElementById('hambBtn');
function openMobile(){ if(!mobile||!hamb)return; mobile.hidden=false; mobile.setAttribute('aria-hidden','false'); hamb.setAttribute('aria-expanded','true'); hamb.setAttribute('aria-label','Fechar menu'); }
function closeMobile(){ if(!mobile||!hamb)return; mobile.hidden=true; mobile.setAttribute('aria-hidden','true'); hamb.setAttribute('aria-expanded','false'); hamb.setAttribute('aria-label','Abrir menu'); }
function toggleMobile(){ if(!mobile)return; mobile.hidden ? openMobile() : closeMobile(); }
if(hamb){ hamb.addEventListener('click',toggleMobile); }
document.querySelectorAll('#mobile a').forEach(a=>a.addEventListener('click',closeMobile));
document.addEventListener('click',e=>{ if(mobile && hamb && !mobile.hidden && !mobile.contains(e.target) && !hamb.contains(e.target)) closeMobile(); });
window.addEventListener('resize',()=>{ if(window.innerWidth>900) closeMobile(); });
window.addEventListener('scroll',()=>document.getElementById('header').classList.toggle('scrolled',scrollY>20));
const visuals=[
()=>`<img class="lightbox-image" src="${logo}" alt="Identidade da casa">`,
()=>`<img class="lightbox-image" src="assets/images/banca-de-recepcao.jpg" alt="Pizza Il Forno">`,
()=>`<img class="lightbox-image" src="assets/images/unnamed.jpg" alt="Forno">`,
()=>`<img class="lightbox-image" src="assets/images/fundo kk.jpg" alt="Experiência">`
];
function openLight(i){current=i;document.getElementById('lightContent').innerHTML=visuals[i]();document.getElementById('lightbox').style.display='flex'}
function closeLight(i){document.getElementById('lightbox').style.display='none'}
function nextLight(i){current=(current+1)%visuals.length;openLight(current)}
function prevLight(i){current=(current-1+visuals.length)%visuals.length;openLight(current)}
document.addEventListener('keydown',e=>{if(document.getElementById('lightbox').style.display==='flex'){if(e.key==='Escape')closeLight();if(e.key==='ArrowRight')nextLight();if(e.key==='ArrowLeft')prevLight()}})
