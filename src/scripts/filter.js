let radioButton = document.getElementsByName("radioBtn")
radioButton.forEach( (btn) => {
    btn.addEventListener("click", () => {
        let mood = event.target.value
        // console.log(mood)
        entryList.innerHTML = ""
        API.getJournalEntries()
        .then( data => {
            data.filter( entries => {
                let moodEntries = []
                if( entries.mood === mood) {
                    moodEntries.push(entries)
                    entriesHTML(moodEntries)
                }
            })
        })
    })
})