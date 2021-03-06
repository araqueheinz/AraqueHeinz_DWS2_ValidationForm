
/* /////////////////////////////////////////////////////////////////////// */
/* /                          COLOR BUTTONS CONTROLS                     / */
/* /////////////////////////////////////////////////////////////////////// */


document.getElementById('blue').addEventListener('click',function(){
    document.getElementById('phone-case').src = 'images/Iphone6_Blue.png';
    document.getElementById('phone-case').alt = 'blue phone case picture';
    document.getElementById('price').innerHTML = '$13.00';  
    document.getElementById('total').innerHTML = 'Price: $13.00';   
    document.getElementById('selected-product').innerHTML = 'Case color: Blue';
  
})

document.getElementById('red').addEventListener('click',function(){
    document.getElementById('phone-case').src = 'images/Iphone6_Red.png';
    document.getElementById('phone-case').alt = 'Red phone case picture';
    document.getElementById('price').innerHTML = '$15.00';
    document.getElementById('total').innerHTML = 'Price: $15.00'; 
    document.getElementById('selected-product').innerHTML = 'Case color: Red';
})

document.getElementById('green').addEventListener('click',function(){
    document.getElementById('phone-case').src = 'images/Iphone6_Green.png';
    document.getElementById('phone-case').alt = 'Green phone case picture';
    document.getElementById('price').innerHTML = '$11.00';
    document.getElementById('total').innerHTML = 'Price: $11.00'; 
    document.getElementById('selected-product').innerHTML = 'Case color: Green';
})

document.getElementById('pink').addEventListener('click',function(){
    document.getElementById('phone-case').src = 'images/Iphone6_Pink.png'
    document.getElementById('phone-case').alt = 'Pink phone case picture'
    document.getElementById('price').innerHTML = '$16.00';
    document.getElementById('total').innerHTML = 'Price: $16.00'; 
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


/* /////////////////////////////////////////////////////////////////////// */
/* /                          VERIFICATION CONTROLS                      / */
/* /////////////////////////////////////////////////////////////////////// */



document.getElementById('name').addEventListener('blur', function(event){
   
    var userName = document.getElementById('name').value;

    if(userName){
        document.querySelector('label[for=name]').classList.remove('wrong-input');
        document.getElementById('user-name').innerHTML =`Name: ${userName}`;
    }
    else{
        document.querySelector('label[for=name]').classList.add('wrong-input');   
    }
})

document.getElementById('email').addEventListener('blur', function(event){

    
    const userEmail = document.getElementById('email').value;
    const patt = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi;

    const validation = patt.test(userEmail);
    if(validation){
        document.querySelector('label[for=email]').classList.remove('wrong-input');
        document.getElementById('user-email').innerHTML =`<p>Email: ${userEmail}`
    }
    else{

        document.querySelector('label[for=email]').classList.add('wrong-input');
    }

})


document.getElementById('address').addEventListener('blur', function(event){
    var userAddress = document.getElementById('address').value;

    if(userAddress){
        document.querySelector('label[for=address]').classList.remove('wrong-input');
        document.getElementById('user-address').innerHTML = `<p>Address: ${userAddress}`
        
    }
    else{
        document.querySelector('label[for=address]').classList.add('wrong-input');   
    }

})


document.getElementById('city').addEventListener('blur', function(event){

    var userCity = document.getElementById('city').value;
    const patt = /^([A-Z][-a-zA-Z]+)+(?:[\s-][A-Z][-a-zA-Z]+){0,2}$/gm;
    const validation = patt.test(userCity);
 
    
    if(validation){
        document.querySelector('label[for=city]').classList.remove('wrong-input');
        document.getElementById('user-city').innerHTML = `<p>City: ${userCity}`;
    }
    else{
        document.querySelector('label[for=city]').classList.add('wrong-input');
    }

})

document.getElementById('state').addEventListener('blur', function(event){

    var userState = document.getElementById('state').value.toUpperCase();
    const patt = /^((A[AEKLPRSZ])|(C[AOT])|(D[EC])|(F[LM])|(G[AU])|(HI)|(I[ADLN])|(K[SY])|(LA)|(M[ADEHINOST])|(N[CDEHJMVY])|(MP)|(O[HKR])|(P[ARW])|(RI)|(S[CD])|(T[NX])|(UT)|(V[AIT])|(W[AIVY]))$/gm;
    const validation = patt.test(userState);
    

    if(validation){
        document.querySelector('label[for=state]').classList.remove('wrong-input');
        document.getElementById('user-state').innerHTML = `<p>State: ${userState}`;
    }
    else{
        document.querySelector('label[for=state]').classList.add('wrong-input');
    }

})

document.getElementById('zip').addEventListener('blur', function(event){

    var userZip = document.getElementById('zip').value;
    const patt = /^\d{5}(\-?\d{4})?$/gm;
    const validation = patt.test(userZip);

    if(validation){
        document.querySelector('label[for=zip]').classList.remove('wrong-input');
        document.getElementById('user-zip').innerHTML = `<p>Zip: ${userZip}`;
    }
    else{
        document.querySelector('label[for=zip]').classList.add('wrong-input');
    }

})
 
document.querySelector('form').addEventListener('submit', function(event){
    event.preventDefault();


    var userName = document.getElementById('name').value;
    var userEmail = document.getElementById('email').value;
    var userAddress = document.getElementById('address').value;
    var userCity = document.getElementById('city').value;
    var userState = document.getElementById('state').value.toUpperCase();
    var userZip = document.getElementById('zip').value;
    var userCountry = document.getElementById('country').value;

    var checkEmail = document.querySelector('label[for=email]').classList.length;
    var checkCity = document.querySelector('label[for=city]').classList.length;
    var checkState = document.querySelector('label[for=state]').classList.length;
    var checkZip = document.querySelector('label[for=zip]').classList.length;
    
    if(userName && userEmail && userAddress && userCity && userState && userZip){

        if(checkEmail == 0 && checkCity == 0 && checkState == 0 && checkZip == 0){

            document.getElementById('form-product').innerHTML = `
            <h1>Order Completeted </h1>
            <h2>Order Summary</h2>
            <p>${userName}</p>
            <p>${userEmail}</p>
            <p>${userAddress}</p>
            <p>${userCity}</p>
            <p>${userState}</p>
            <p>${userZip}</p>
            <p>${userCountry}</p>
            `
        }
    }
    else{
        
    }
})