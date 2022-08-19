
// step 1 : add click event handler with the submit button 
const loginButtonHere = document.getElementById('loginButton');
loginButtonHere.addEventListener('click', function () {
    // step 2  get the email address inside the input field
    // always remember to use .value to get text form an input field
    const emailLogin = document.getElementById('emailLogin');
    const email = emailLogin.value;
    // console.log(email);

    // step 3  get password 
    // 3. a. set id on the html email 
    // 3. b. get the element 
    // 3. c. get the value from the element 

    const passWordField = document.getElementById('passWordField');
    const password = passWordField.value;
    console.log(email, password);

    if (email == 'sultanakh223@gmail.com' && password == 'Sultana1@') {
        console.log('Valid User');
    }
    else {
        alert('This is Wrong !! Please get correct Input')
    }
})



// How to Connect Href : check : window.location.href='index.html' and another window.location.href='bank.html'