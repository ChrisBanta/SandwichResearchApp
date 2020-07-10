console.log('it works')

function getUsers() {
    fetch('http://localhost:3000/users')
    .then (response => response.json())
    .then(console.log)
}

getUsers()

const newUserForm = document.getElementById('new-user-form')

newUserForm.addEventListener('submit', event => {
    event.preventDefault()
    const formData = new FormData(newUserForm)
    const name =formData.get('name')
    const email =formData.get('email')
    const age =formData.get('age')
    const gender =formData.get('gender')
    const zipcode =formData.get('zipcode')
    const password =formData.get('password')
    const delivery_likeliness =formData.get('delivery_likeliness')
    const price_range =formData.get('price_range')
    
    fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
            },
        body: JSON.stringify({
            user: {
                name: name,
                email: email,
                age: age,
                gender: gender,
                zipcode: zipcode,
                password: password,
                delivery_likeliness: delivery_likeliness,
                price_range: price_range
            }
        })

    })
})

var redirect = function() {
    document.location.href="sandwich.html"
}
