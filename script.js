// بسيط: تحريك أشرطة المهارات عند الظهور + تفعيل قائمة الموبايل + سنة الفوتر
document.addEventListener('DOMContentLoaded', function(){
  // تعيين سنة الفوتر
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // قائمة الجوال
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  if(navToggle && mainNav){
    navToggle.addEventListener('click', function(){
      mainNav.classList.toggle('open');
      navToggle.classList.toggle('open');
    });
  }

  // تحريك أشرطة التقدّم عند تمرير الصفحة
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

  // تجربة خفيفة للتأكد من وجود input focus style
  document.querySelectorAll('input,textarea').forEach(el=>{
    el.addEventListener('focus', ()=> el.style.boxShadow = '0 4px 18px rgba(11,115,255,0.08)');
    el.addEventListener('blur', ()=> el.style.boxShadow = 'none');
  });
});