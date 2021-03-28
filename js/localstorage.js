localStorage.setItem('mainCourse','Risotto');
localStorage.setItem('dessert', 'Kladdkaka')
const elFormReg =document.querySelector('#localStorage');


let elOutput = document.querySelector('#outputLocalStorage');


document.querySelector('#risotto').innerHTML = localStorage.getItem('mainCourse');
document.querySelector('#kladdkaka1').innerHTML = localStorage.getItem('dessert');

function showLocalStorage(event){
    if (document.getElementById('favOptions').value == 'Risotto'){
        elOutput.innerHTML = localStorage.getItem('mainCourse');
    }else{
        eloutput.innerHTML ='';
        elOutput.innerHTML = localStorage.getItem('dessert');
    }

    event.preventDefault();
}

elFormReg.addEventListener('click',showLocalStorage, false);
