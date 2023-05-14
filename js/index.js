function Add(){
    const Ul = document.querySelector('ul')
    const input = document.getElementById('inp').value
    // Create li
    const addli =document.createElement('li')
    // Create div
    const div = document.createElement('div')
    div.classList.add('List-items')
    // Create button
    const button = document.createElement('button')
    button.textContent = 'X'
    button.id = 'Del-button'
    button.addEventListener('click', function(){
        addli.remove()
        const input = document.getElementById('inp').value = ' '
    })

    const checkBx = document.createElement('input')
    checkBx.type = 'checkbox'
    checkBx.id = 'CheckBox'
    checkBx.addEventListener('click',function(){
        createText.style.textDecoration = 'line-through'
    })

    // Create span
    
    const createText = document.createElement('span')
    createText.textContent = input
   
    Ul.append(addli)
    addli.appendChild(div)
    div.appendChild(button)
    div.appendChild(checkBx)
    div.appendChild(createText)
    const input1 = document.getElementById('inp').value = ' '


}