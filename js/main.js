document.getElementById('blue').addEventListener('click',function(){
    document.getElementById('phone-case').src = 'images/Iphone6_Blue.png';
    document.getElementById('phone-case').alt = 'blue phone case picture';
    document.getElementById('price').innerHTML = '8 UltraMillion';
  
})

document.getElementById('red').addEventListener('click',function(){
    document.getElementById('phone-case').src = 'images/Iphone6_Red.png';
    document.getElementById('phone-case').alt = 'Red phone case picture';
    document.getElementById('price').innerHTML = '7 MultiMillion';
})

document.getElementById('green').addEventListener('click',function(){
    document.getElementById('phone-case').src = 'images/Iphone6_Green.png';
    document.getElementById('phone-case').alt = 'Green phone case picture';
    document.getElementById('price').innerHTML = '2 Chickens'
})

document.getElementById('pink').addEventListener('click',function(){
    document.getElementById('phone-case').src = 'images/Iphone6_Pink.png'
    document.getElementById('phone-case').alt = 'ink phone case picture'
    document.getElementById('price').innerHTML = '22 Billion'
})