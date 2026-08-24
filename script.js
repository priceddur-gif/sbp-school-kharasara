function toggleMenu(){document.getElementById('navLinks').classList.toggle('open')}
let hindi=false;
function toggleLanguage(){
  hindi=!hindi;
  document.getElementById('langBtn').textContent=hindi?'English':'हिन्दी';
  document.querySelectorAll('[data-en]').forEach(el=>el.textContent=hindi?el.dataset.hi:el.dataset.en);
  document.querySelectorAll('.en').forEach(el=>el.style.display=hindi?'none':'block');
  document.querySelectorAll('.hi').forEach(el=>el.style.display=hindi?'block':'block');
}
document.getElementById('year').textContent=new Date().getFullYear();
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>document.getElementById('navLinks').classList.remove('open')));
