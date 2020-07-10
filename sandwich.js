console.log("hello")
localStorage.setItem("choicesMade", 1)

const voteContainer = document.getElementById('vote-container')

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
    // console.log(sandwich)
    
    const sandwichCard = document.createElement('div')
    sandwichCard.setAttribute('draggable', 'true')
    sandwichCard.className = "sandwich-card"

    const image = document.createElement("img")
    image.setAttribute("id", "cardpic")
    image.src = sandwich.url;

    const name = document.createElement('h4')
    const description = document.createElement('p')

    const vote = document.createElement('button')
    vote.innerHTML = 'Add this to your menu!'
    vote.addEventListener('click', onClick) 

    name.innerText = sandwich.name
    description.innerText = sandwich.description

    sandwichCard.append( image, name, description, vote)
    sandwichCardContainer.append(sandwichCard)
}
let choicesMade = localStorage.getItem("choicesMade")

function onClick() {
    
    if (choicesMade == 3) 
    {window.alert("Thank you for your very thoughtful feed...back! We look forward to meeting you soon!")}
    
//     {const threeLeft = document.createElement('p')
//     threeLeft.textContent = "Three choices left"
//     document.getElementById('vote-container').append(threeLeft)
//     // console.log(document.getElementById('vote-container')
// }
    

//     else if (choicesMade == 1)
//     {const twoLeft = document.createElement('p')
//     twoLeft.textContent = "Two choices left"
//     document.getElementById('vote-container').replaceWith(twoLeft)} 
    
//     else if(choicesMade == 2)
//     {const oneLeft = document.createElement('p')
//     oneLeft.textContent = "One choice left"
//     document.getElementById('vote-container').replaceWith(oneLeft)} 
    
//     else if(choicesMade == 3)
//     {const zeroLeft = document.createElement('p')
//     zeroLeft.textContent = "No choices left"
//     document.getElementById('vote-container').replaceWith(zeroLeft)
//     window.alert('No more choices')} 
    
//     console.log(choicesMade)
    console.log(choicesMade)
    choicesMade = parseInt(choicesMade) +1;
    localStorage.setItem("choicesMade", choicesMade )
    }

    // function threeLeft() {
        
        
    // }


const newSandwichForm = document.getElementById('new-sandwich-form')

newSandwichForm.addEventListener('submit', event => {
    event.preventDefault()
    const formData = new FormData(newSandwichForm)
    const name = formData.get('name')
    const url = formData.get('url')
    const description = formData.get('description')


fetch("http://localhost:3000/suggestions", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
            },
        body: JSON.stringify({
            suggestion: {
                name: name,
                url: url,
                description: description
            }
        })
    })
})
    