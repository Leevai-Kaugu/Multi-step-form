let toggleChecked = localStorage.getItem("TOGGLE");
let selectedPlan = localStorage.getItem("SELECTEDPLAN")||'Arcade';
let toggle = localStorage.getItem("TOGGLE")||'false';
let add_ons = JSON.parse(localStorage.getItem("ADD-ONS"))||'';
let add_value = JSON.parse(localStorage.getItem("ADDVALUE"))||'';
let add_value_num;



const prices = [
  monthly ={
   arcade: 9,
   advanced: 12,
   pro: 15 
  },
  yearly = {
   arcade: 90,
   advanced: 120,
   pro: 150 
  }
]
const add_ons_prices = [
  monthly ={
   online: 1,
   storage: 2,
   customize: 2 
  },
  yearly = {
   online: 10,
   storage: 20,
   customize: 20 
  }
]

//PLAN AND DURATION CONTENT
let duration = 'Monthly'
let price_duration = 'mo'
if(toggle == 'false'){
  duration = 'Monthly'
  price_duration = 'mo'
}else{
  duration = 'Yearly'
  price_duration = 'yr'
};
document.querySelector(".plan_text").innerHTML = `${selectedPlan} (${duration})`;
//PLAN AND DURATION CONTENT


//PRICING CONTENT
let pricing;
let item_price;
if(duration == 'Monthly'){
  pricing = prices[0]
}else{
  pricing = prices[1]
};
if(selectedPlan == 'Arcade'){
  item_price = pricing.arcade
}else if(selectedPlan == 'Advanced'){
  item_price = pricing.advanced
}else{
  item_price = pricing.pro
};
document.querySelector(".plan_price").innerHTML = `$${item_price}/${price_duration}`;
//PRICING CONTENT

//ADD ONS PRICING CONTENT
let addOns_pricing;
let addOns_pricing_duration;
const add_ons_text = document.querySelector(".add_ons_text");
const add_ons_price = document.querySelector('.add_ons_price');

if(duration == 'Monthly'){
  addOns_pricing = add_ons_prices[0];
} else{
  addOns_pricing = add_ons_prices[1];
};


for(i = 0; i < add_ons.length; ++i){
  let li = document.createElement('p');
  li.innerHTML = add_ons[i];
  add_ons_text.appendChild(li);
};

for(i = 0; i < add_value.length; ++i){
  if(duration == 'Monthly'){
    let li = document.createElement('p');
    li.innerHTML = `+$${add_value[i]}/${price_duration}`;
    add_ons_price.appendChild(li);
  }else{
    let li = document.createElement('p');
    li.innerHTML = `+$${add_value[i]*10}/${price_duration}`;
    add_ons_price.appendChild(li);
  }
};
//ADD ONS PRICING CONTENT

//ADD ONS TOTAL
if(duration == 'Monthly'){
  var per = 'month'
}else{
  var per = 'year'
};
let tOne = document.createElement('p');
const total = document.querySelector('.total');
tOne.innerHTML = `Total (per ${per})`;
total.appendChild(tOne);

let tTwo = document.createElement('p');
const total_price = document.querySelector('.total_price');
let sum = 0;
for(let i = 0; i<parseInt(add_value.length); i++){
  sum += parseInt(add_value[i])
}
console.log(sum)

if(duration == 'Monthly'){
  tTwo.innerHTML = `+$${item_price + sum}/${price_duration}`;
}else{
  tTwo.innerHTML = `+$${item_price + (sum*10)}/${price_duration}`;
};
total_price.appendChild(tTwo);
//ADD ONS TOTAL





const asideZ = document.querySelector('aside');
let numz = asideZ.querySelectorAll('h2');
numz[3].style.backgroundColor = 'hsl(206, 94%, 87%)'
numz[3].style.color = 'hsl(243, 100%, 62%)'







// const btnWrapper = document.querySelector('.btnsWrapper');
// btnWrapper.style.width = '265px'
// btnWrapper.style.position = 'absolute'
// btnWrapper.style.top = '75vh'
// btnWrapper.style.padding = '20px 55px'




function prev_page_addOns(){
  location.replace("add-ons.html")
}
function next_page_finish(){
  location.replace("finish.html")
}