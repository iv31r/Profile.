
document.addEventListener('DOMContentLoaded', function(){

  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();


  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  if(navToggle && mainNav){
    navToggle.addEventListener('click', function(){
      mainNav.classList.toggle('open');
      navToggle.classList.toggle('open');
    });
  }

 
  const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        const bars = entry.target.querySelectorAll('.progress');
        bars.forEach(p=>{
          const percent = p.getAttribute('data-percent') || '0';
          const bar = p.querySelector('.progress-bar');
          if(bar) bar.style.width = percent+'%';
        });
        observer.unobserve(entry.target);
      }
    });
  }, {threshold: 0.25});

  const skillsSection = document.getElementById('skills');
  if(skillsSection) observer.observe(skillsSection);

  
  document.querySelectorAll('input,textarea').forEach(el=>{
    el.addEventListener('focus', ()=> el.style.boxShadow = '0 4px 18px rgba(11,115,255,0.08)');
    el.addEventListener('blur', ()=> el.style.boxShadow = 'none');
  });

});
