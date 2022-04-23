let bg = document.getElementById("oceanbg");
let fg = document.getElementById("oceanfg");
let rock = document.getElementById("oceanob");
let wavebg = document.getElementById("wavebg");
let wavefg = document.getElementById("wavefg");

//function for when mouse scrolls, then object moves.
window.addEventListener('scroll', function(){
    var value = window.scrollY;
    //first image element
    bg.style.top = value * 0.3 + 'px';
    fg.style.top = value * 0.15 + 'px';
    rock.style.top = value * 0.1 + 'px';
})
