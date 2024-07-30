let caja = document.querySelector('.caja');
let b = document.querySelector('body');
let p = document.querySelector('p');
let img = document.querySelector('img');

caja.addEventListener('click',()=>{
 caja.classList.add('mover')
 p.classList.add('texto')
 img.src = 'img2.png';
 img.classList.add('img2')
});

caja.addEventListener('dblclick',()=>{
 caja.classList.remove('mover')
 p.classList.remove('texto')
 img.src = 'img.png';
 img.classList.remove('img2')
});


 for(let i = 0; i < 20; i++){
   let c = ['blue','red','#aaa']
   let aa = Math.floor(Math.random()*c.length);
   let n = document.createElement('div');
   b.appendChild(n);
   n.classList.add('cajas')
   n.style.background = c[aa];
   n.style.border = "solid 1px yellow";
  
   setInterval(()=>{   
 let uno = Math.floor(Math.random()*innerWidth);
 let dos = Math.floor(Math.random()*innerHeight);
   let ta = Math.random()*20+'px';
   let z = -Math.random()*50+Math.random()*50;
   let a = Math.floor(Math.random()*c.length);
   n.style.left = uno+'px';
   n.style.top = dos+'px';
   n.style.width = ta;
   n.style.height = ta;
   n.style.transform = `translatez(${z}px)`;
   },3000);    
};











