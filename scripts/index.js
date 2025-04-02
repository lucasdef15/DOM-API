const main = document.getElementById("mainContainer")

const form = document.createElement('form')
main.appendChild(form)

const input = document.createElement('input')
input.placeholder = 'Add a To Do Item'
form.appendChild(input)

const button = document.createElement('button')
button.innerText = 'ADD!'
form.appendChild(button)

const removeElement = (el) => {
    el.remove()
}

form.addEventListener('submit', (event) => {
    event.preventDefault()

    if (input.value) {

        // Create elements
        const ul = document.querySelector('ul') || document.createElement('ul')
        const li = document.createElement('li')

        li.textContent = input.value
        ul.appendChild(li)

        if (!document.querySelector('ul')) {
            main.appendChild(ul)
        }

        li.addEventListener('click', () => {
            removeElement(li)
        })

        input.value = ''

    }
})

