const t = document.getElementById("touch");
const t2 = document.getElementById("touch-2");
const nav = document.querySelector("nav");

    t.addEventListener('click', function() {
        nav.style.display = "flex";
        t.style.opacity = 0;
        window.addEventListener('scroll', function(event) {
            event.preventDefault();
          });
    });
    
    t2.addEventListener('click', function() {
        nav.style.display = "none";
        t.style.opacity = 1;
    });