const input = document.querySelector(".inputText")
const submitBtn = document.querySelector(".submit")
const error = document.querySelector(".error")
const grocceryList = document.querySelector(".grocceryList")

submitBtn.addEventListener("click", function(e){
    e.preventDefault()
    if(input.value.length === 0){
        error.style.display = "block"

        setTimeout(()=>{
            error.style.display = "none"
        },3000)

    }else{

    let groceryArray = JSON.parse(localStorage.getItem('groccery')) || []
    
    let groceryObj = {
        groceryItem: input.value
    }

    groceryArray.push(groceryObj)

    localStorage.setItem("groccery", JSON.stringify(groceryArray))

    grocceryList.innerHTML += `
        <li>
            <p>${input.value}</p>
            <button class="delete">Delete</button>
        </li>
    `
    input.value = ""
    }
})

function readStorage(){
    let groceryArray = JSON.parse(localStorage.getItem('groccery')) || []
    const groceries = document.createElement('div')
    groceryArray.map(grocceryItem => {
        groceries.innerHTML += `
        <li>
            <p>${grocceryItem.groceryItem}</p>
            <button class="delete" onclick="deleteGrocceryItem()">Delete</button>
        </li>
        `
        grocceryList.appendChild(groceries)
    })
}
readStorage()

function deleteGrocceryItem(){
    let groceryArray = JSON.parse(localStorage.getItem('groccery')) || []
    groceryArray.pop()
}