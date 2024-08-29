let onlineContainer = document.querySelector('#addOnsOptns');
let inputOptns = onlineContainer.querySelectorAll('input');
console.log()
let add_ons = [];
let add_value = [];

inputOptns.forEach(function(div){
  div.addEventListener('click',function(){
    if(div.checked){
      this.parentElement.style.border = '1px solid hsl(243, 100%, 62%)';
    }else{
      this.parentElement.style.border = '1px solid hsl(231, 11%, 63%)';
    }
  });
}); //SELECT ADD ONS


inputOptns.forEach(function(e){
  e.addEventListener("click",function(){
    if(e.checked){
      add_ons.push(e.id);
      add_value.push(e.value);
      localStorage.setItem("ADDVALUE", JSON.stringify(add_value));
      localStorage.setItem("ADD-ONS",JSON.stringify(add_ons));
      }else{
      let idX = add_ons.indexOf(e.id);
      add_ons.splice(idX,1);
      add_value.splice(idX,1);
      localStorage.setItem("ADDVALUE", JSON.stringify(add_value));
      localStorage.setItem("ADD-ONS",JSON.stringify(add_ons));
    }  
  })
}) //SAVE SELECTED ADD ONS


let priceSpn = onlineContainer.querySelectorAll('span');
if(localStorage.getItem("TOGGLE") == 0){
  console.log('toggle true')
}else{
  console.log('toggle not yet')
}



const asideZ = document.querySelector('aside');
let numz = asideZ.querySelectorAll('h2');
numz[2].style.backgroundColor = 'hsl(206, 94%, 87%)';
numz[2].style.color = 'hsl(243, 100%, 62%)';



function prev_page_plan(){
  location.replace("plan.html")
}
function next_page_summary(){
  location.replace("summary.html")
}
