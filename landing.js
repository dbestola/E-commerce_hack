// navbar logic
document.addEventListener("DOMContentLoaded", function() {
    var icon1 = document.getElementById("toggle1");
    var icon2 = document.getElementById("toggle2");
    const arrowDown =  document.querySelectorAll(".arrow-down i")

    icon1.addEventListener("click", function() {
      icon1.style.display = "none";
      document.querySelector('.carousel').style.display = 'none'
      document.querySelector('.mini-catalogue').style.display = 'none';

      document.querySelector('.nav-links2').style.display = 'block'
      icon2.style.display = "block";
    });
  
    icon2.addEventListener("click", function() {
      icon2.style.display = "none"
      document.querySelector('.nav-links2').style.display = 'none';

      icon1.style.display = "block"
      document.querySelector('.carousel').style.display = 'block'
      document.querySelector('.mini-catalogue').style.display = 'block';
    });

    arrowDown.forEach(arrowDowns =>{
      arrowDowns.addEventListener('click', function(){
      arrowDowns.classList.toggle('fa-angle-down')
      arrowDowns.classList.toggle('fa-angle-up')
})})

});
