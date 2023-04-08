var x = document.getElementById('nav-mob-list');

function openmenu(){

   if(x.style.display=='none')
      x.style.display='block';
   else{
      x.style.display='none';
   }
      // document.getElementById('nav-mob-list').style.display='none';
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos < currentScrollPos) {
   x.style.display='none';
    
  }
}