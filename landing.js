// navbar logic
document.addEventListener("DOMContentLoaded", function() {
    var icon1 = document.getElementById("toggle1");
    var icon2 = document.getElementById("toggle2");
    const arrowDowns = document.querySelectorAll(".arrow-down i");
    

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

    arrowDowns.forEach(arrowDown => {
      arrowDown.addEventListener('click', function() {
        arrowDown.classList.toggle('fa-angle-down');
        arrowDown.classList.toggle('fa-angle-up');
        
        const content2a = document.getElementById('dropdown-content2a');
        const content2b = document.getElementById('dropdown-content2b');

        if(arrowDown.classList.contains('fa-angle-down')) {
          content2a.style.display = 'none'
          content2b.style.display = 'none'
        }else if (arrowDown.classList.contains('dropA') & arrowDown.classList.contains('fa-angle-up')) {
          content2a.style.display = 'block';
          content2b.style.display = 'none';
        }else if(arrowDown.classList.contains('dropB') &  arrowDown.classList.contains('fa-angle-up')) {
          content2a.style.display = 'none';
          content2b.style.display = 'block';
        } 
      });
    });
})
