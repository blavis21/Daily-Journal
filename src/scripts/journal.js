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


function delEntry() {
    let deleteBtnArr = document.querySelectorAll(".delBtn")
    deleteBtnArr.forEach(deleteBtn => {
        deleteBtn.addEventListener("click", () => {
            console.log('is this delete?', )
            let btnID = event.target.id.split("-")[1]
            console.log(btnID)
            deleteEntry(btnID)


            
            
        })
    })
}

