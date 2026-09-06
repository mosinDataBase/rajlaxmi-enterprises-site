(() => {
  const c = window.RAJLAXMI_CONFIG;
  const $ = (s, root=document) => root.querySelector(s);
  const $$ = (s, root=document) => [...root.querySelectorAll(s)];
  const isPlaceholder = v => !v || /^\[.*\]$/.test(v.trim());
  const showToast = msg => { const t=$('#site-toast'); if(!t)return; t.textContent=msg; t.classList.add('show'); clearTimeout(window.__toast); window.__toast=setTimeout(()=>t.classList.remove('show'),3200); };
  window.showSiteToast = showToast;

  $$('[data-config]').forEach(el => { const key=el.dataset.config; if(c[key]!==undefined) el.textContent=c[key]; });

  const phoneEntries = Object.entries(c.phones || {}).filter(([,value]) => !isPlaceholder(value));
  const phoneLabels = { primary: 'Primary', secondary: 'Secondary', alternate: 'Alternate' };
  $$('[data-phone-list]').forEach(el => {
    if (!phoneEntries.length) {
      el.innerHTML = '<span class="needs-config-text">[PRIMARY PHONE NUMBER]<br>[SECONDARY PHONE NUMBER]<br>[ALTERNATE PHONE NUMBER]</span>';
      return;
    }
    el.innerHTML = phoneEntries.map(([key,value]) => {
      const clean=value.replace(/[^0-9+]/g,'');
      return `<span class="phone-line"><strong>${phoneLabels[key] || key}:</strong> <a href="tel:${clean}">${value}</a></span>`;
    }).join('');
  });
  $$('[data-address]').forEach(el => el.innerHTML = `${c.addressLines.join('<br>')}<br>${c.pinCode}<br>India`);
  $$('[data-map-link]').forEach(el => { el.href=c.mapsUrl; el.target='_blank'; el.rel='noopener'; });

  function setupContact(el, type){
    const value = type==='phone' ? (phoneEntries[0]?.[1] || '[PRIMARY PHONE NUMBER]') : c[type];
    if(isPlaceholder(value)){
      el.setAttribute('href','#'); el.setAttribute('aria-disabled','true'); el.classList.add('needs-config');
      el.addEventListener('click',e=>{e.preventDefault();showToast(`${type==='phone'?'Phone':'WhatsApp'} contact is not configured yet. Update assets/js/config.js.`)});
    } else {
      const clean=value.replace(/[^0-9+]/g,'');
      if(type==='phone') el.href=`tel:${clean}`;
      else { const msg=encodeURIComponent('Hello RAJLAXMI ENTERPRISES, I would like to check availability for: '); el.href=`https://wa.me/${clean.replace('+','')}?text=${msg}`; el.target='_blank'; el.rel='noopener'; }
    }
  }
  $$('[data-call]').forEach(el=>setupContact(el,'phone'));
  $$('[data-whatsapp]').forEach(el=>setupContact(el,'whatsapp'));

  const menuBtn=$('.menu-btn'), nav=$('.nav');
  if(menuBtn&&nav){menuBtn.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',String(open));}); $$('.nav a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuBtn.setAttribute('aria-expanded','false')}));}
  $$('.faq-button').forEach(btn=>btn.addEventListener('click',()=>{const panel=document.getElementById(btn.getAttribute('aria-controls')); const expanded=btn.getAttribute('aria-expanded')==='true'; btn.setAttribute('aria-expanded',String(!expanded)); panel.hidden=expanded; btn.querySelector('span:last-child').textContent=expanded?'+':'−';}));
  const io = 'IntersectionObserver' in window ? new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.12}) : null;
  $$('.reveal').forEach(el=>io?io.observe(el):el.classList.add('visible'));
  $('#year')?.append(document.createTextNode(new Date().getFullYear()));
})();
