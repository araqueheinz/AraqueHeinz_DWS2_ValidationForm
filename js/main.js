
/* /////////////////////////////////////////////////////////////////////// */
/* /                          COLOR BUTTONS CONTROLS                     / */
/* /////////////////////////////////////////////////////////////////////// */


document.getElementById('blue').addEventListener('click',function(){
    document.getElementById('phone-case').src = 'images/Iphone6_Blue.png';
    document.getElementById('phone-case').alt = 'blue phone case picture';
    document.getElementById('price').innerHTML = '$13.00';
    document.getElementById('selected-product').innerHTML = 'Case color: Blue';
  
})

document.getElementById('red').addEventListener('click',function(){
    document.getElementById('phone-case').src = 'images/Iphone6_Red.png';
    document.getElementById('phone-case').alt = 'Red phone case picture';
    document.getElementById('price').innerHTML = '$15.00';
    document.getElementById('selected-product').innerHTML = 'Case color: Red';
})

document.getElementById('green').addEventListener('click',function(){
    document.getElementById('phone-case').src = 'images/Iphone6_Green.png';
    document.getElementById('phone-case').alt = 'Green phone case picture';
    document.getElementById('price').innerHTML = '$11.00';
    document.getElementById('selected-product').innerHTML = 'Case color: Green';
})

document.getElementById('pink').addEventListener('click',function(){
    document.getElementById('phone-case').src = 'images/Iphone6_Pink.png'
    document.getElementById('phone-case').alt = 'ink phone case picture'
    document.getElementById('price').innerHTML = '$16.00';
    document.getElementById('selected-product').innerHTML = 'Case color: Pink';
})


/* /////////////////////////////////////////////////////////////////////// */
/* /                          IPHONE TYPE CONTROLS                       / */
/* /////////////////////////////////////////////////////////////////////// */

document.getElementById('iphone-6').addEventListener('click',function(){
    document.getElementById('selected-phone').innerHTML = 'For: iPhone 6';
})

document.getElementById('iphone-7').addEventListener('click',function(){
    document.getElementById('selected-phone').innerHTML = 'For: iPhone 7';
})

document.getElementById('iphone-8').addEventListener('click',function(){
    document.getElementById('selected-phone').innerHTML = 'For: iPhone 8';
})