(() => {
 const items=[...document.querySelectorAll('.gallery-item')], box=document.querySelector('.lightbox'), img=box?.querySelector('img'), close=box?.querySelector('.lightbox-close'), prev=box?.querySelector('.lightbox-prev'), next=box?.querySelector('.lightbox-next');
 if(!box||!items.length)return; let index=0,touchX=0;
 const show=i=>{index=(i+items.length)%items.length; const source=items[index].querySelector('img'); img.src=source.src; img.alt=source.alt; box.hidden=false; close.focus(); document.body.style.overflow='hidden';};
 const hide=()=>{box.hidden=true;document.body.style.overflow='';items[index].focus()};
 items.forEach((it,i)=>it.addEventListener('click',()=>show(i))); close.addEventListener('click',hide); prev.addEventListener('click',()=>show(index-1)); next.addEventListener('click',()=>show(index+1));
 box.addEventListener('click',e=>{if(e.target===box)hide()}); document.addEventListener('keydown',e=>{if(box.hidden)return;if(e.key==='Escape')hide();if(e.key==='ArrowLeft')show(index-1);if(e.key==='ArrowRight')show(index+1)});
 box.addEventListener('touchstart',e=>touchX=e.changedTouches[0].clientX,{passive:true}); box.addEventListener('touchend',e=>{const dx=e.changedTouches[0].clientX-touchX;if(Math.abs(dx)>50)show(index+(dx<0?1:-1))},{passive:true});
})();
