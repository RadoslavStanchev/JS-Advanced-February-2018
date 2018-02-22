function addItem(){
    let text = document.querySelector('#newItemText')
    let value = document.getElementById('newItemValue')

    let dropdown = document.getElementById('menu')

    let option = document.createElement('option')
    option.value = value.value // .value tyk a ne gore za da mojem da izchistim text boxa
    option.text = text.value// .value tyk a ne gore za da mojemd a izchistim text boxa
    dropdown.appendChild(option)
    text.value = ''
    value.value = ''
}