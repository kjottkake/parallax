//selecting first image
let bg = document.getElementById("oceanbg");
let fg = document.getElementById("oceanfg");
let rock = document.getElementById("oceanob");

//selecting second image
let wavebg = document.getElementById("wavebg");
let wavefg = document.getElementById("wavefg");

//selecting third image element
let trash = document.getElementById("trashbg");


//function for when mouse scrolls, then object moves.
let parallax1 = window.addEventListener('scroll', function(){
    var value1 = window.scrollY;
    console.log("windowY: "  +value1)
    //first image element
    bg.style.top = value1 * 0.3 + 'px';
    fg.style.top = value1 * 0.15 + 'px';
    rock.style.top = value1 * 0.1 + 'px';
})


let parallax2 = window.addEventListener('scroll', function(){
    var value2 = window.scrollY;
    console.log("windowY2: " +value2)
    if (value2 >= 1300){
    //first image element
    wavebg.style.top= (value2 - 1300)  * 0.3 + 'px';
    wavefg.style.top = (value2 - 1300) * 0.15 + 'px';
    }
})


let parallax3 = window.addEventListener('scroll', function(){
    var value3 = window.scrollY - 2500;
    console.log("windowY3: " +value3)
    //first image element
    // trash.style.left = value3 * 0.3 + 'px';
})
