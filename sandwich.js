console.log("hello")

function getSandwiches() {
fetch('http://localhost:3000/sandwiches')
.then(response => response.json())
// .then(console.log)
.then(sandwiches => sandwiches.forEach(sandwich => {
    createSandwichCard(sandwich)
}))
}

getSandwiches()

const sandwichCardContainer = document.getElementById('sandwich-card-container')

console.log(sandwichCardContainer)


function createSandwichCard(sandwich) {
    console.log(sandwich)
    
    const sandwichCard = document.createElement('div')
    sandwichCard.setAttribute('draggable', 'true')
    sandwichCard.className = "sandwich-card"

    const image = document.createElement("img")
    image.setAttribute("id", "cardpic")
    image.src = sandwich.url;

    const name = document.createElement('h4')
    const description = document.createElement('p')

    // const button = document.createElement('button')
    // button.innerHTML = "Add to Favorites"

    name.innerText = sandwich.name
    description.innerText = sandwich.description

    sandwichCard.append( name, description,)
    sandwichCardContainer.append(sandwichCard)
}



const newSandwichForm = document.getElementById('new-sandwich-form')

newSandwichForm.addEventListener('submit', event => {
    event.preventDefault()
    const formData = new FormData(newSandwichForm)
    const name = formData.get('name')
    const url = formData.get('url')
    const description = formData.get('description')


fetch("http://localhost:3000/sandwiches", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
            },
        body: JSON.stringify({
            sandwich: {
                name: name,
                url: url,
                description: description
            }
        })
    })
})
    