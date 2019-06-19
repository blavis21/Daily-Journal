//fetches data from json server and prints to page
fetch("http://localhost:8088/journalEntries")
.then( data => data.json())
.then( entry => {
    console.log(entry)
    entriesHTML(entry)
})

//function that converts data into html -- to be inserted dynamically
function makeJournalEntryComponent (input) {
    return `
    <div class="entry">
        <h2>Date: ${input.date}</h2>
        <h3>Concept: ${input.concept}</h3>
        <p>Entry: ${input.entry}</p>
        <p><strong>Mood: ${input.mood}</strong></p>
    </ol>`
};

//function selects location to print html to in index.html, then loops through
function entriesHTML(print) {
    let entryLocation = document.querySelector(".entryLog")
    print.forEach( (obj) => {
        entryLocation.innerHTML += makeJournalEntryComponent(obj)
    })
}


//data is fetched from json server
//then data is parsed as json
//the data is then passed into entriesHTML function called in 2nd .then
//entriesHTML finds location to insert data, loops through the existing data, and prints to page via makeJournalEntryComponent