addEventListener("DOMContentLoaded",function(){
  localStorage.clear()
}); //ONLOAD DELETE ALL LOCALSTORAGE DATA

function validate(){
  let isValidName;
  let isValidMail;
  let isValidNum;
  const inputs = document.querySelectorAll('input')
  let rePattern = {
    name:/\w/,
    phnNum:/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]{8,10}$/g,
    mail:/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  }


  if(inputs[0].value == ''){
    isValidName = false;
    document.getElementById('clientName').style.border = '1px solid hsl(354, 84%, 57%)';
    document.getElementById('nameSpn').style.color = 'hsl(354, 84%, 57%)';
    document.getElementById('nameSpn').innerHTML = 'This field is required';
  }else if(rePattern.name.test(inputs[0].value)){
    isValidName = true;
    document.getElementById('clientName').style.border = '1px solid hsl(229, 24%, 87%)';
    document.getElementById('nameSpn').innerHTML = '';
  }else{
      isValidName = false;
      document.getElementById('clientName').style.border = '1px solid hsl(354, 84%, 57%)';
      document.getElementById('nameSpn').style.color = 'hsl(354, 84%, 57%)';
      document.getElementById('nameSpn').innerHTML = 'This field is required';
    }//VALIDATE NAME INPUT
    
    
    if(inputs[1].value == ''){
      isValidMail = false;
      document.getElementById('email').style.border = '1px solid hsl(354, 84%, 57%)';
      document.getElementById('mailSpn').style.color = 'hsl(354, 84%, 57%)';
      document.getElementById('mailSpn').innerHTML = 'This field is required';
    }else if(rePattern.mail.test(inputs[1].value)){
      isValidMail = true;
      document.getElementById('email').style.border = '1px solid hsl(229, 24%, 87%)';
      document.getElementById('mailSpn').innerHTML = '';
    }else{
      isValidMail = false;
      document.getElementById('email').style.border = '1px solid hsl(354, 84%, 57%)';
      document.getElementById('mailSpn').style.color = 'hsl(354, 84%, 57%)';
      document.getElementById('mailSpn').innerHTML = 'This field is required';
    }//VALIDATE EMAIL INPUT
    
    if(inputs[2].value == ''){
      isValidNum = false;
      document.getElementById('phnNumber').style.border = '1px solid hsl(354, 84%, 57%)';
      document.getElementById('numSpn').style.color = 'hsl(354, 84%, 57%)';
      document.getElementById('numSpn').innerHTML = 'This field is required';
    }else if(rePattern.phnNum.test(inputs[2].value)){
      isValidNum = true;
      document.getElementById('phnNumber').style.border = '1px solid hsl(229, 24%, 87%)';
      document.getElementById('numSpn').innerHTML = '';
    }else{
      isValidNum = false;
      console.log('maybe')
      document.getElementById('phnNumber').style.border = '1px solid hsl(354, 84%, 57%)';
      document.getElementById('numSpn').style.color = 'hsl(354, 84%, 57%)';
      document.getElementById('numSpn').innerHTML = 'This field is required';
    }//VALIDATE NUMBER INPUT

  




  if(isValidName == false||isValidMail == false||isValidNum == false ){
    return false;
  }else{
    location.replace('plan.html')
    return true;
  };
}; //CLIENT VALIDATION PAGE 1


const asideZ = document.querySelector('aside');
let numz = asideZ.querySelectorAll('h2');
numz[0].style.backgroundColor = 'hsl(206, 94%, 87%)'
numz[0].style.color = 'hsl(243, 100%, 62%)'



