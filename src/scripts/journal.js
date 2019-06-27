API.getJournalEntries().then(entriesHTML)


document.querySelector("#submit-btn").addEventListener("click", () => {
    let journalDate = document.querySelector("#journalDate").value
    let moodForTheDay = document.querySelector("#moodForTheDay").value
    let conceptsCovered = document.querySelector("#conceptsCovered").value
    let journalEntry = document.querySelector("#journalEntry").value
    let newEntry = buildJournalObj(journalDate, moodForTheDay, conceptsCovered, journalEntry)
    let entryList = document.querySelector(".entryLog")
    console.log(newEntry)
    saveJournalEntry(newEntry)
    .then( data => data.json())
    .then( datajs => {
        entryList.innerHTML = ""
        API.getJournalEntries()
        .then ( newEntryObj => entriesHTML(newEntryObj))
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



