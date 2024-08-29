                // SWITCHTOGGLE btwn MONTHLY AND YEARLY
function switchToggle() {
    var x = document.getElementById("lost");
    var jost= document.getElementById("jost");
    var gost=document.getElementById("gost");
    var txt1=document.getElementsByTagName("h6")[0];
    var txt2=document.getElementsByTagName("h6")[1];
    var txt3=document.getElementsByTagName("h6")[2];
    if(x.style.display==="block"){x.style.display="none";x.style.color="hsl(213, 89%, 21%)"}
    else{x.style.display="block";}
    if(x.style.display==="none"){jost.style.display="none";}
    else{jost.style.display="block";jost.style.color="hsl(213, 89%, 21%)";}
    if(x.style.display==="none"){gost.style.display="none";}
    else{gost.style.display="block";gost.style.color="hsl(213, 89%, 21%)";}
    if (x.style.display==="block") {txt1.innerText="$90/yr"      
    } else {
        txt1.innerText="$9/mo";
    }
    if (x.style.display==="block") {txt2.innerText="$120/yr";
        
} else {
    txt2.innerText="$12/mo";
}
if (x.style.display==="block") {txt3.innerText="$150/yr";
        
} else {
    txt3.innerText="$15/mo";
};   }
                // SWITCHTOGGLE btwn MONTHLY AND YEARLY



                // TOGGLE TEXT COLOR ONCLICK
function switchColor(){
    var x = document.getElementById('lost');
    var mwaka = document.getElementById('Yearly');
    var mwezi = document.getElementById("Montly");
    if(x.style.display === "block"){mwaka.style.color = "hsl(213, 89%, 21%)";}
    else(mwaka.style.color = "hsl(231, 11%, 63%)")
    if(x.style.display === "none"){mwezi.style.color ="hsl(213, 89%, 21%)";}
    else(mwezi.style.color = "hsl(231, 11%, 63%)")
}
                // TOGGLE TEXT COLOR ONCLICK


                // TOGGLE ACTIVE CARD
    const box_cards = document.querySelectorAll('.box-card')
    box_cards.forEach(box_card => {
        box_card.addEventListener('click',()=>{
            document.querySelector('.active-box').classList.remove('active-box')
            box_card.classList.add('active-box')
        })
    });
                // TOGGLE ACTIVE CARD

                //CHECK PLAN TYPE
function getId(div){
    console.log(div.id)
    let plan = div.id
    if(plan==='Arcade'){console.log('arcade it is')}
    else if(plan === 'Advanced'){console.log('Advanced checked')}
    else if(plan === 'Pro'){console.log('Pro gamer boyyy!!!')}
  };

                //CHECK PLAN TYPE
                

                // CHECK DURATION OF PLAN & STORE DATA
const plan_checkbox = document.querySelector('#monthly')
plan_checkbox.addEventListener('change',()=>{
    let plan_duration = 'Monthly'
    if(plan_checkbox.checked){plan_duration = 'Yearly'}else{plan_duration = 'Monthly'} 
    sessionStorage.setItem("durationPlan",plan_duration)
    })
                // CHECK DURATION OF PLAN & STORE DATA


                // STORE DURATION AND PLAN CARD

                // STORE DURATION AND PLAN CARD


                //   SWITCH TO NEXT
    const nxtButton = document.querySelector('#plan-nxt');
    nxtButton.addEventListener('click',()=>{
        const planCard = document.querySelector('.plan')
        const addCard = document.querySelector('#add')

        planCard.style.display = 'none'
        addCard.style.display = 'block'
    })    
                //   SWITCH TO NEXT
                // SWITCH TO PREVIOUS
    const plan_back_btn = document.querySelector('#back-btn')
    plan_back_btn.addEventListener('click',function(){
        const currentCard = document.querySelector('.plan')
        const prevCard = document.querySelector('#info')

        currentCard.style.display = 'none'
        prevCard.style.display = 'block'
    })




  



