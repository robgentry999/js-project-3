//console.log('Test');
//GLOBAL VARIABLES
const userName = document.getElementById('name');
const jobRole = document.getElementById('title');
const shirtColor = document.getElementById('shirt-colors');
const designSelect = document.getElementById('design');
const colorSelect = document.getElementById('color');
const childColor = colorSelect.children; 
const otherTextField = document.getElementById('other-job-role');
const other = document.getElementById('other');

//STEP 3 Adds focus to username input and sets other input to none
userName.focus();
otherTextField.style.display = "none";
shirtColor.style.display = "none";
//


//STEP 4 function to add other field text
jobRole.addEventListener('change', e => {
    if (jobRole.value == "other") {
        otherTextField.style.display = "block";
    }
    else {
        otherTextField.style.display = "none";
    }
})
//
//STEP 5 allows certain colors to be displayed after t 
//shirt design selected

//Variables for step 5
const jspuns = document.getElementsByClassName('jspuns');
console.log(jspuns);

designSelect.addEventListener('change', (e) => {

for(let i = 1; i < childColor.length; i++){
    let targetValue = e.target.value
    let child = childColor[i];
    let dataTheme = child.getAttribute('data-theme');

    if(dataTheme === targetValue){
        shirtColor.style.display = "block";
        child.hidden = false; 
        child.setAttribute('data-theme', dataTheme)
        child.selected = true;
    }else{
        child.hidden = true;
    }
}
});
//

//Variables for step 6
const registerbox = document.querySelectorAll('checkbox');
const registergroup = document.getElementById('activities');
const totalp = document.getElementById('activities-cost');
let total = 0;
//STEP 6 
registergroup.addEventListener('change', (e) => {
    let datacost = parseInt(e.target.getAttribute('data-cost')); 
    if (e.target.checked){
        total += datacost;
    }else{
        total -= datacost;
    }
    totalp.innerHTML = `Total: $${total}` 
})

//Variables for step 7
const paymentselect = document.getElementById('payment');
const creditcard = document.getElementById('credit-card');
const paypal = document.getElementById('paypal');
const bitcoin = document.getElementById('bitcoin');
//STEP 7 defaults payment method to credit card, 
//if other chosen then respected content displayed
paypal.style.display = "none";
bitcoin.style.display = "none";

paymentselect[1].setAttribute('selected', '')


paymentselect.addEventListener('change', (e) => {
    //selected payment method
    let selected = e.target.value;

    if (selected === 'paypal') {
        paypal.style.display = 'block';
        creditcard.style.display = 'none'; 
        bitcoin.style.display = 'none'
    }
    else if (selected === 'bitcoin') {
        paypal.style.display = 'none';
        creditcard.style.display = 'none'; 
        bitcoin.style.display = 'block'      
    }
    else {
        paypal.style.display = 'none';
        creditcard.style.display = 'block'; 
        bitcoin.style.display = 'none'      
    }
})
//

//Variables for Step 8
//const userName = document.getElementById('name');
//const registergroup = document.getElementById('activities');
const userCard = document.getElementById('cc-num');
const userZip = document.getElementById('zip');
const userCcv = document.getElementById('cvv');
const userEmail = document.getElementById('email');
const form = document.querySelector('form');

//STEP 8
//for each funtion, tests if user input matches with the regex, and adds error message if wrong
function isValidName () {
    //regex matches beginning of string with word + whitespace + word and ends, 
    const nameRegEx = /^[\w]+\s*[\w]+$/.test(userName.value);
    if (nameRegEx === true) {
        //adds valid class, and sets comment display to none
        userName.parentNode.className='valid';
        userName.parentNode.lastElementChild.style.display = 'none';
        return nameRegEx
    } else {
        //adds not-valid class, sets style to block, and sets text to error message
        userName.parentNode.className='not-valid';
        userName.parentNode.lastElementChild.style.display = 'block';
        userName.parentNode.lastElementChild.textContent = 'You sure this is your name?'
        return nameRegEx
    }
}

function isValidEmail () {
    //regex matches beginning of string with any character + @ character + . + letters from a-z
    const emailRegEx =  /^[^@]+@[^@.]+\.[a-z]+$/i.test(userEmail.value);
    if (emailRegEx === true) {
        userEmail.parentNode.className='valid';
        userEmail.parentNode.lastElementChild.style.display = 'none';
        return emailRegEx
    } else {
        userEmail.parentNode.className='not-valid';
        userEmail.parentNode.lastElementChild.style.display = 'block';
        userEmail.parentNode.lastElementChild.textContent = 'Please insert correct email'
        return emailRegEx
    }
}

function isValidActivities () {
    let activitiesBox = document.getElementById("activities-box")
    //if value of activities does not equal 0, returns true
    if (total !== 0) {
        //replaces the not valid class name with valid, 
        activitiesBox.parentNode.classList.replace('not-valid', 'valid');
        activitiesBox.parentNode.lastElementChild.style.display = 'none';
        return true
    } else {
        //adds not-valid class to activities box
        activitiesBox.parentNode.classList.add('not-valid');
        activitiesBox.parentNode.lastElementChild.style.display = 'block';
        activitiesBox.parentNode.lastElementChild.textContent = 'Please choose at least one'
    }
}

function isValidCardNumber () {
    //regex tests start of string,matches any digits between 13 and 16 characters 
    const cardNumberRegEx = /^\d{13,16}$/.test(userCard.value)
    if (cardNumberRegEx === true) {
        userCard.parentNode.className='valid';
        userCard.parentNode.lastElementChild.style.display = 'none';
        return cardNumberRegEx
    } else {
        userCard.parentNode.className='not-valid';
        userCard.parentNode.lastElementChild.style.display = 'block';
        userCard.parentNode.lastElementChild.textContent = 'Hmm, this dosent look correct, try again?'
        return cardNumberRegEx
    }
}
function isValidZipCode () {
    //regex tests start of string, matches number with 5 digits
    const zipRegEx = /^[0-9]{5}$/.test(userZip.value)
    if (zipRegEx === true) {
        userZip.parentNode.className='valid';
        userZip.parentNode.lastElementChild.style.display = 'none';
        return zipRegEx
    } else {
        userZip.parentNode.className='not-valid';
        userZip.parentNode.lastElementChild.style.display = 'block';
        userZip.parentNode.lastElementChild.textContent = 'Please insert valid zip code'
        return zipRegEx
    }
}

function isValidCvv () {
    //regex tests start of string, matches number with 3 digits
    const CvvRegEx = /^\d{3}$/.test(userCcv.value)
    if (CvvRegEx === true) {
        userCcv.parentNode.className='valid';
        userCcv.parentNode.lastElementChild.style.display = 'none';
        return CvvRegEx
    } else {
        userCcv.parentNode.className='not-valid';
        userCcv.parentNode.lastElementChild.style.display = 'block';
        userCcv.parentNode.lastElementChild.textContent = 'Please insert valid ccv'
        return CvvRegEx
    }
}

//tests for payment section, returns true if all payment items are correct

function isValidPayment () {
    if (paymentselect.value === 'credit-card') {
        isValidCardNumber()
        isValidCvv()
        isValidZipCode()  
        }  
    return true     
    }

    
 // Event listener for submitting the form   

form.addEventListener('submit', (e) => {
    
    if (isValidName() && isValidEmail() && isValidActivities() && isValidPayment()) {
        alert('form submited');
        e.preventDefault();
    } else {
        e.preventDefault();
        isValidName();
        isValidEmail(); 
        isValidPayment();
        isValidActivities();
        isValidCvv();
        isValidZipCode(); 
        alert('Incorrect user inputs');
    }
});
