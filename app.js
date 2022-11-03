const formEl = document.querySelector(`#form`);
const inputEl = document.querySelector(`.input`);
const toDoContainerEl = document.querySelector(`.todo-container`);
const faTarashCanEl = document.querySelector(`.fa-trash-can`)
formEl.addEventListener(`submit`, (e)=>{
    e.preventDefault(); // để chặn reload lại trang khi submit
    // console.log(`submit`);
    const value = inputEl.value;
    // console.log(value);
    if(value !== ``){
        const div = document.createElement(`div`);
        div.classList.add(`item`)
        div.innerHTML = `
        <h2>${value} </h2>
        <i class="fa-solid fa-trash-can" onClick="remove(this)"></i>
        `
       
        inputEl.value=``;
        toDoContainerEl.appendChild(div)
    }
    else{
        alert(`Please, Write Note`);
    }
   localStorage
})
const remove =(e)=>{
    e.parentNode.remove();
}