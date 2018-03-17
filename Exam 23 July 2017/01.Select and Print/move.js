function move(command) {
    let availableTownsList = $('#available-towns')
    let selectedTownsList = $('#selected-towns')
    let outputDiv = $('#output')
    if(command === 'right'){
        selectedItem = availableTownsList.find(':selected')
        selectedTownsList.append(selectedItem)
    } else if (command === 'left'){
        availableTownsList.append(selectedTownsList.find(':selected'))
    } else {
        outputDiv.empty()

        let allTowns = selectedTownsList
            .find('option')
            .toArray()
            .map(el => $(el).text())
            .join('; ')

        outputDiv.append(allTowns)
    }

}