const journalEntries = [
    {
        date: "06/05/2019",
        concept: "API/JSON",
        entry: "We went over the basic info on API's and JSON. Downloaded Postman and practiced a little in class.",
        mood: "Excited"
    },
    {
        date: "06/06/2019",
        concept: "Journal Entries",
        entry: "Going through journal entry 2 and 3 trying to figure it out.",
        mood: "Motivated"
    }
]

let collection = []

function makeJournalEntryComponent (date, concept, entry, mood) {
    return `
    <ol>
        <li>date: ${date}</li>
        <li>concept: ${concept}</li>
        <li>entry: ${entry}</li>
        <li>mood: ${mood}</li>
    </ol>`
};

let autoGen = document.querySelector(".entryLog")

for ( i=0; i < journalEntries.length; i++) {
    let entries = journalEntries[i]
    autoGen.innerHTML += makeJournalEntryComponent(
        entries.date,
        entries.concept,
        entries.entry,
        entries.mood
    )
}



