/* SCRIPT.JS  */
(function(){
  // mobile menu toggle
  const toggle = document.querySelector('.mobile-toggle');
  toggle && toggle.addEventListener('click', ()=>{
    document.body.classList.toggle('show-menu');
  });

  // smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (e)=>{
      e.preventDefault();
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
      // hide mobile menu
      document.body.classList.remove('show-menu');
    });
  });

})();





