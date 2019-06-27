API.getJournalEntries().then(entriesHTML)

let entryList = document.querySelector(".entryLog")

document.querySelector("#submit-btn").addEventListener("click", () => {
    let journalDate = document.querySelector("#journalDate").value
    let moodForTheDay = document.querySelector("#moodForTheDay").value
    let conceptsCovered = document.querySelector("#conceptsCovered").value
    let journalEntry = document.querySelector("#journalEntry").value
    let newEntry = buildJournalObj(journalDate, moodForTheDay, conceptsCovered, journalEntry)
    console.log(newEntry)
    saveJournalEntry(newEntry)
        .then(data => data.json())
        .then(datajs => {
            entryList.innerHTML = ""
            API.getJournalEntries()
                .then(newEntryObj => entriesHTML(newEntryObj))
        })
})

function buildJournalObj(date, mood, concept, entry) {
    return {
        date,
        mood,
        concept,
        entry
    }
}


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
