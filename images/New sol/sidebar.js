// let numCircle = document.getElementsByClassName('step-no');

// if(document.getElementsByClassName('Info').display === 'flex'){
//   // numCircle[0].style.backgroundColor = 'black'
//   console.log('heyyy')
// }

let numCircle = document.getElementsByClassName('step-no');
const infoPage = document.querySelector('.Info');
const planPage = document.querySelector('.plan');
const addPage = document.querySelector('#add');
const finishPage = document.querySelector('.finishing-up');
const infoCircle = numCircle[0];
const planCircle = numCircle[1];
const addCircle = numCircle[2];
const summaryCircle = numCircle[3];

if(infoPage.computedStyleMap.display === 'flex'){
    console.log("I'm good!")
}
// if(infoPage.style.display === 'flex'){
//     // numCircle[0].style.backgroundColor = 'hsl(199, 66%, 55%)';
//     // numCircle[0].style.border = 'none'
//     console.log('open')
// };

