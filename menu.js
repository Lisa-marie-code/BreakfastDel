let myMeal = document.getElementById('meal')
let newmeal = myMeal.value;

myMeal.addEventListener('change',printNewMeal)


let displayMeal = document.getElementById('display');
function printNewMeal(){
    displayMeal.innerHTML = myMeal.value;
}