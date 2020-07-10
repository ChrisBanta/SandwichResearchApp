fetch('http://localhost:3000/users')
.then(response => response.json())
.then(result => handleUsers(result))

function handleUsers(users){
    return users.forEach(user => renderUser(user.name, user.email, user.age, 
        user.gender, user.zipcode, user.delivery_likeliness, user.price_range
        ))
}

const usersList = document.getElementById('user-ul')

function renderUser(user){
    const li = document.createElement('li')
    li.innerText = user
    usersList.append(li)

}

fetch('http://localhost:3000/suggestions')
.then(response => response.json())
.then(result => handleSuggestions(result))


function handleSuggestions(suggestions){
    return suggestions.forEach(suggestion => renderSuggestion(suggestion.name, suggestion.email, suggestion.age))
}

const suggestionsList = document.getElementById('suggestion-ul')

function renderSuggestion(suggestion){
    console.log(suggestion)
    const li = document.createElement('li')
    li.innerText = suggestion
    suggestionsList.append(li)

}