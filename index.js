const headingOne = document.getElementById('heading-one');
// console.log(headingOne)
headingOne.innerText = 'Shopping List'
// console.log(headingOne.innerText)
headingOne.style.color = 'blue'

const ingredientInput = document.querySelector('#ingredient-input');
// console.log(ingredientInput)
// console.log(ingredientInput.value)

function addItem(){
    const shoppingItem = document.createElement('li');
    shoppingItem.innerText = ingredientInput.value;

    const doneBtn = document.createElement('button');
    doneBtn.innerText = 'Done';
    doneBtn.addEventListener('click', function(event){
        event.target.parentNode.remove();
    })
    shoppingItem.appendChild(doneBtn)

    document.getElementById('shopping-list').appendChild(shoppingItem);
    ingredientInput.value = '';
}

















// const listItems = document.getElementsByTagName('li');
// // console.log(listItems)

// ingredientInput.addEventListener('keypress', function(event){
//     console.log(event.target.value)
// })

// const lastListItems = document.querySelectorAll('.list-items');
// // console.log(lastListItems)

// const lastListItem = document.getElementById('last-list-item');
// lastListItem.className = 'last-list-item'
// // console.log(lastListItem.className)

// document.getElementById('child').addEventListener('click', function(event){
//     event.stopPropagation();
//     console.log('Button clicked')
// })

// document.getElementById('form-btn').addEventListener('click', function(event){
//     event.preventDefault()
//     console.log('form submitted')
// })


// function parentDiv(){
//     console.log('Parent clicked')
// }