let isToggleChecked =()=>{
  let isChecked = document.querySelector('#checkBoxed').checked;
  localStorage.setItem("TOGGLE",`${isChecked}`)
  addEventListener("DOMContentLoaded",()=>{
    localStorage.removeItem('TOGGLE')
  });

  if(isChecked){
    document.querySelector('.arcSpn').innerHTML = '$90/yr';
    document.querySelector('.arcSpn').style.color = 'hsl(231, 11%, 63%)';
    document.querySelector('.arcSpn1').innerHTML = '2 months free';
    document.querySelector('.arcSpn1').style.color = 'hsl(213, 96%, 18%)';
    document.querySelector('.advSpn').innerHTML = '$120/yr';
    document.querySelector('.advSpn').style.color = 'hsl(231, 11%, 63%)';
    document.querySelector('.advSpn1').innerHTML = '2 months free';
    document.querySelector('.advSpn1').style.color = 'hsl(213, 96%, 18%)';
    document.querySelector('.proSpn').innerHTML = '$150/yr';
    document.querySelector('.proSpn').style.color = 'hsl(231, 11%, 63%)';
    document.querySelector('.proSpn1').innerHTML = '2 months free';
    document.querySelector('.proSpn1').style.color = 'hsl(213, 96%, 18%)';
  }else{
    document.querySelector('.arcSpn').innerHTML = '$9/mo';
    document.querySelector('.arcSpn').style.color = 'hsl(231, 11%, 63%)';
    document.querySelector('.arcSpn1').innerHTML = '';
    document.querySelector('.advSpn').innerHTML = '$12/mo';
    document.querySelector('.advSpn').style.color = 'hsl(231, 11%, 63%)';
    document.querySelector('.advSpn1').innerHTML = '';
    document.querySelector('.proSpn').innerHTML = '$15/mo'
    document.querySelector('.proSpn').style.color = 'hsl(231, 11%, 63%)'
    document.querySelector('.proSpn1').innerHTML = '';
}; //SUBSCRIPTION PRICING BASED ON CHECKBOX

if(isChecked){
  document.getElementById('yearlyP').style.color = ' hsl(213, 96%, 18%)';
  document.getElementById('monthlyP').style.color = ' hsl(231, 11%, 63%)';
}else{
   document.getElementById('monthlyP').style.color = 'hsl(213, 96%, 18%)';
   document.getElementById('yearlyP').style.color = ' hsl(231, 11%, 63%)';
}



function selectPlan(){
  // let arcade = document.querySelector('#arcade');
  // let advanced = document.querySelector('#advanced');
  // let pro = document.querySelector('#pro');
  
  
  // let planWrap = document.getElementById('planOptions')
  console.log('planWrap')

}}; //I DON'T KNOW WHAT THIS DOES EXACTLY BUT IT HELPS WITH THE PLAN SELECTION FUNCTION

let plans = document.querySelector('#planOptions');
let optns = plans.querySelectorAll('div')
optns.forEach(function(div){
  div.addEventListener("click",function(){
    optns[0].classList.remove('selectedBorder');
    optns[1].classList.remove('selectedBorder');
    optns[2].classList.remove('selectedBorder');
    this.classList.add('selectedBorder');
    selectedPlan = this.id
    localStorage.setItem('SELECTEDPLAN',`${selectedPlan}`)
  })
}); //SELECT & SAVE PLAN

const asideZ = document.querySelector('aside');
let numz = asideZ.querySelectorAll('h2');
numz[1].style.backgroundColor = 'hsl(206, 94%, 87%)'
numz[1].style.color = 'hsl(243, 100%, 62%)'



function prev_page_vrfy(){
  location.replace('index.html')
}
function next_page_addOns(){
  location.replace('add-ons.html')
}
//SWITCH TO ADD-ONS