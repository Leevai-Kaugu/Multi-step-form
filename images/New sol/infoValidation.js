const form = document.getElementById('info');
const username = document.getElementById('username');
const useremail = document.getElementById('useremail');
const number = document.getElementById('number');
 


form.addEventListener('submit', e=>{
  e.preventDefault();



  if(validateInputs()===true){switchCards()};
});


const setError = (element,message)=>{
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error')

  errorDisplay.innerText = message;
  inputControl.classList.add('error')
  inputControl.classList.add('input-error')
  inputControl.classList.remove('success')
}

const SetSuccess = element => {
  const inputControl=element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');
  
  errorDisplay.style.display = 'none'
  inputControl.classList.remove('input-error')

  // // errorDisplay.innerText = message;
  // inputControl.classList.add('success')
  // inputControl.classList.remove('error')
  // 
}

const isValidEmail = email =>{
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const isValidNumber = number => {
  const re = /^\d{10}$/;
  return re.test(String(number));
}



const validateInputs = ()=>{
  const usernamevalue = username.value.trim();
  const emailvalue = useremail.value.trim();
  const numbervalue = number.value.trim();
  let valid 

  if(usernamevalue===''){
    valid=false;  
    setError(username,'Username is required')
  } else{
    valid=true; 
    SetSuccess(username)
  }

  if(emailvalue===''){
    valid=false; 
    setError(useremail, 'Email is required')
  } else if(!isValidEmail(emailvalue)) {
    valid=false; 
    setError(useremail, 'provide a valid email address')
  } else{
    valid=true;
    SetSuccess(useremail);
  }

  if( numbervalue===''){
    valid=false;
    setError(number, 'phone number is required');
  } else if(!isValidNumber(numbervalue)){
    valid=false;
    setError(number,'provide a valid phone number')
  } else{
    valid=true;
    SetSuccess(number);
  }

  return valid;
}



const switchCards =()=>{
  const next = document.querySelector('.plan')
  const now = document.querySelector('.Info')

  now.style.display = 'none'
  next.style.display = 'block'

}