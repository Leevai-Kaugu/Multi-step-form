let duration = sessionStorage.getItem("durationPlan")||'Monthly';
let plan = sessionStorage.getItem("planCard")||'Arcade';
let addOnsArrayFinish = JSON.parse(sessionStorage.getItem("ADD_ONS"))||'';
let addOnPlan = JSON.parse(sessionStorage.getItem("ADD_ON_PLAN"))||'';
console.log(addOnsArrayFinish)



const loadingBtn = document.querySelector('#add')
loadingBtn.addEventListener('click',()=>{
  let planText = document.querySelector('#text-1');
  let textTwo = document.querySelector('#text-2');
  let textThree = document.querySelector('#text-3');
  let textFour = document.querySelector('#text-4');
  let addOneCost = document.querySelector('#amount-2');
  let addTwoCost = document.querySelector('#amount-3');
  let addThreeCost = document.querySelector('#amount-4');
  let totalText = document.querySelector('#total-text')
  let planCost = document.querySelector('#amount-1');
  let box1 = document.querySelector('.one');
  let box2 = document.querySelector('.two');
  let box3 = document.querySelector('.three'); 
  

  // PLAN AND DURATION TEXT GENERATION

  // PLAN AND DURATION TEXT GENERATION

  // PLAN AND DURATION PRICE GENERATION
  


  // PLAN AND DURATION PRICE GENERATION
  textTwo.innerText = `${addOnsArrayFinish[0]}`;
  textThree.innerText = `${addOnsArrayFinish[1]}`;
  textFour.innerText = `${addOnsArrayFinish[2]}`;

  planCost.innerText = ``;
  addOneCost.innerText = ``;
  addTwoCost.innerText = ``;
  addThreeCost.innerText = ``;
  totalText.innertext = ``;

});

// addEventListener('load',function(){
//   let planText = document.querySelector('#text-1');
//   let addOne = document.querySelector('#text-2');
//   let addTwo = document.querySelector('#text-3');
//   let addThree = document.querySelector('#text-4');
//   let addOneCost = document.querySelector('#amount-2');
//   let addTwoCost = document.querySelector('#amount-3');
//   let addThreeCost = document.querySelector('#amount-4');
//   let totalText = document.querySelector('#total-text')
//   let planCost = document.querySelector('#amount-1');
//   let box1 = document.querySelector('.one');
//   let box2 = document.querySelector('.two');
//   let box3 = document.querySelector('.three');
  
//   planText.innerText = `${plan}(${duration})`
//   addOne.innerText = `${addOnsArrayFinish[0]}`
//   addTwo.innerText = `${addOnsArrayFinish[1]}`
//   addThree.innerText = `${addOnsArrayFinish[2]}`

//   addOneCost.innerText = `${addOnPlan[0]}`
//   addTwoCost.innerText = `${addOnPlan[1]}`
//   addThreeCost.innerText = `${addOnPlan[2]}`

//   // totalText.innerText = `${parseInt(`${addOnPlan[0]}`)+ parseInt(`${addOnPlan[1]}`) + parseInt(`${addOnPlan[2]}`) + parseInt(`${calcPrice()}`)}`
//   totalText.innerText = `${calcTotal()}`
  
 
  

//  if(duration ==='Yearly'){
//   planCost.innerText = `$${calcPrice()}/yr`;
//   addOneCost.innerText = `+$${parseInt(addOnPlan[0])}/yr`
//   addTwoCost.innerText = `+$${parseInt(addOnPlan[1])}/yr`
//   addThreeCost.innerText = `+$${parseInt(addOnPlan[2])}/yr`
//  }else{
//   planCost.innerText = `$${calcPrice()}/mo`
//   addOneCost.innerText = `+$${parseInt(addOnPlan[0])}/mo`
//   addTwoCost.innerText = `+$${parseInt(addOnPlan[1])}/mo`
//   addThreeCost.innerText = `+$${parseInt(addOnPlan[2])}/mo`
//  }
 
//  if(addOnsArrayFinish.length === 2 ){
//   box3.style.display = 'none'
//  }else if(addOnsArrayFinish.length === 1){
//   box2.style.display = 'none';
//   box3.style.display = 'none';
//  }
//  if(addOnPlan.length === 0){
//   let hiddenGem = document.querySelector('.add-amount');
//   hiddenGem.style.display = 'none'
//  }
 


//  const addMonthly ={
//   Online: 1,
//   Storage: 2,
//   Custom: 2,
// }
// const addYearly = {
//   Online: 10,
//   Storage: 20,
//   Custom: 20,
// }



  
// })



// function addPrice(){
//   const addMonthly ={
//     Online: 1,
//     Storage: 2,
//     Custom: 2,
//   }
//   const addYearly = {
//     Online: 10,
//     Storage: 20,
//     Custom: 20,
//   }
 

 
  
// }

// function calcPrice(){
//   const monthlyPricing = {
//     arcade: 9,
//     advanced: 12,
//     pro: 15,
//   }
  
//   const yearlyPricing = {
//     arcade: 90,
//     advanced: 120,
//     pro:150,
//   }
  
//   let pricing;

//   if(duration === 'Yearly'){
//     if(plan==='Arcade'){pricing = yearlyPricing.arcade;}
//     if(plan==='Advanced'){pricing = yearlyPricing.advanced}
//     if(plan==='Pro'){pricing = yearlyPricing.pro}
//     return pricing
//   }
  
//   if(duration === 'Monthly'){
//     if(plan==='Arcade'){pricing = monthlyPricing.arcade;}
//     if(plan==='Advanced'){pricing = monthlyPricing.advanced}
//     if(plan==='Pro'){pricing = monthlyPricing.pro}
//     return pricing
//   }
  
  
// }

// calcTotal = () => {
//   if( duration === 'Yearly' && Selected === 'Tripple'){
//     addOnsTotal = 50
//   }else if( duration ==='Yearly' && Selected === 'Double'){
//     addOnsTotal = 30
//   }else if( duration ==='Yearly' && Selected === 'Single Online'){
//     addOnsTotal = 10
//   }else if( duration ==='Yearly' && Selected === 'Double 2'){
//     addOnsTotal = 40
//   }else if( duration ==='Yearly' && Selected === 'Single 2'){
//     addOnsTotal = 20
//   }else if( duration ==='Yearly' && Selected === 'none'){
//     addOnsTotal = 0
//   }else if( duration ==='Monthly' && Selected === 'Tripple'){
//     addOnsTotal = 5
//   }else if( duration ==='Monthly' && Selected === 'Double'){
//     addOnsTotal = 3
//   }else if( duration ==='Monthly' && Selected === 'Single Online'){
//     addOnsTotal = 1
//   }else if( duration ==='Monthly' && Selected === 'Double 2'){
//     addOnsTotal = 4
//   }else if( duration ==='Monthly' && Selected === 'Single 2'){
//     addOnsTotal = 2
//   }else if( duration ==='Monthly' && Selected === 'none'){
//     addOnsTotal = 0
//   }
//   console.log(addOnsTotal)

//   let total = addOnsTotal + parseInt(`${calcPrice()}`)
//   return total;
// }


                        // SWITCH TO PREVIOUS CARD
  const prev_addOn_Btn = document.querySelector('#finish-back-btn')
  prev_addOn_Btn.addEventListener('click',()=>{
    const prevCard = document.querySelector('#add')
    const currentCard = document.querySelector('#finish_up')

    currentCard.style.display = 'none'
    prevCard.style.display = 'block'
  })
                        // SWITCH TO PREVIOUS CARD