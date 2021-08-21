const toggler = document.querySelector('.navbar-toggler-icon');
 const menu = document.querySelector('.menu');
const nav = document.querySelector('#hmenu');
toggler.addEventListener('click', ()=>{
   // console.log('hi')
  menu.classList.toggle('d-none');
  const text = nav.innerHTML;
  menu.innerHTML = text;
})