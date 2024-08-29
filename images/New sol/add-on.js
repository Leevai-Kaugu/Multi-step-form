
let addOnsArray = [];
let checkBoxes = document.querySelectorAll('.checkbox');
for(let checkbox of checkBoxes){
  checkbox.addEventListener('click',function(){
    if(this.checked === true){
      addOnsArray.push(this.value);
    }else{if(this.checked === false){
      addOnsArray = addOnsArray.filter(e => e !== this.value);
    }}




    sessionStorage.setItem("ADD_ONS",JSON.stringify(addOnsArray))
    return checkbox;
  })
};

function addChecked(){
  const checkOne = document.getElementById("online")
  const checkTwo = document.getElementById("storage")
  const checkThree = document.getElementById("customize")
  let duration = sessionStorage.getItem("DURATION");
  const prices = [];
  const text1 = document.getElementById("Online service")
  let onlinePrice = text1.getElementsByTagName 

 /* ADD ONS PICKED CODE */
  if(checkOne.checked === true && checkTwo.checked === true && checkThree.checked === true){
    let selected = 'Tripple'
    sessionStorage.setItem('SELECTEDADDONS', selected )
  }else if(checkOne.checked === true && checkTwo.checked === true && checkThree.checked === false){
    let selected = 'Double'
    sessionStorage.setItem('SELECTEDADDONS', selected )
  }else if(checkOne.checked === true && checkTwo.checked === false && checkThree.checked === false){
    let selected = 'Single Online'
    sessionStorage.setItem('SELECTEDADDONS', selected )
  }else if(checkOne.checked === true && checkTwo.checked === false && checkThree.checked === true){
    let selected = 'Double'
    sessionStorage.setItem('SELECTEDADDONS', selected)
  }else if(checkOne.checked === false && checkTwo.checked === false && checkThree.checked === false){
    let selected = 'none'
    sessionStorage.setItem('SELECTEDADDONS', selected)
  }else if(checkOne.checked === false && checkTwo.checked === true && checkThree.checked === true){
    let selected = 'Double 2'
    sessionStorage.setItem('SELECTEDADDONS', selected)
  }else if(checkOne.checked === false && checkTwo.checked === true && checkThree.checked === false){
    let selected = 'Single 2'
    sessionStorage.setItem('SELECTEDADDONS', selected)
  }else if(checkOne.checked === false && checkTwo.checked === false && checkThree.checked === true){
    let selected = 'Single 2'
    sessionStorage.setItem('SELECTEDADDONS', selected)
  }


/* ADD ONS PRICE */
  if( checkOne.checked === true && duration === 'Monthly' ){
    const priceUno = 1;
    prices.push(priceUno);
  }else if( checkOne.checked === true && duration === 'Yearly'){
    const priceUno = 10;
    prices.push(priceUno)
  }else{
    
  }

  if( checkTwo.checked === true && duration === 'Monthly' ){
    const priceDos = 2;
    prices.push(priceDos);
  }else if( checkTwo.checked === true && duration === 'Yearly'){
    const priceTwo = 20;
    prices.push(priceTwo)
  }else{
    
  }

  if( checkThree.checked === true && duration === 'Monthly' ){
    const priceTres = 2;
    prices.push(priceTres);
  }else if( checkThree.checked === true && duration === 'Yearly'){
    const priceTres = 20;
    // console.log(priceTres)
    prices.push(priceTres)
  }else{
    
  }


  
  sessionStorage.setItem("ADD_ON_PLAN", JSON.stringify(prices))
}











// const pageBtn = document.querySelector('#add-nxt')
// pageBtn.addEventListener('click', e=>{
//   switchFinale()
// });
// const switchFinale =()=>{
//   const next = document.querySelector('.finishing-up')
//   const now = document.querySelector('#add')

//   now.style.display = 'none'
//   next.style.display = 'block'

// }               
           //   SWITCH TO NEXT
   const pageButton = document.querySelector('#add-nxt');
   pageButton.addEventListener('click',()=>{
        const currentCard = document.querySelector('#add')
        const addCard = document.querySelector('.finishing-up')
       
        currentCard.style.display = 'none'
        addCard.style.display = 'block'
           })    
           // SWTCH TO NEXT  
           //SWITCH TO PREVIOUS CARD
  const add_back_btn = document.querySelector('#add-back-btn')
  add_back_btn.addEventListener('click',()=>{
    const currentCard = document.querySelector('#add')
    const prevCard = document.querySelector('.plan')

    currentCard.style.display = 'none'
    prevCard.style.display = 'block'
  })
           //SWITCH TO PREVIOUS CARD
