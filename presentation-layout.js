/* Measures header height for responsive spacing only. No room state or handlers changed. */
(()=>{const header=document.querySelector('.top');let frame;const measure=()=>{cancelAnimationFrame(frame);frame=requestAnimationFrame(()=>document.documentElement.style.setProperty('--header-height',`${Math.ceil(header.getBoundingClientRect().height)}px`));};new ResizeObserver(measure).observe(header);addEventListener('resize',measure);measure();})();

/* Measures the frozen view area so jumps to a panel section land below it. */
(()=>{const f=document.getElementById('freeze');if(!f)return;let fr;const m=()=>{cancelAnimationFrame(fr);fr=requestAnimationFrame(()=>document.documentElement.style.setProperty('--freeze-height',`${Math.ceil(f.getBoundingClientRect().height)}px`));};new ResizeObserver(m).observe(f);addEventListener('resize',m);m();})();
