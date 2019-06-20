//function selects location to print html to in index.html, then loops through
function entriesHTML(print) {
    let entryLocation = document.querySelector(".entryLog")
    print.forEach( (obj) => {
        entryLocation.innerHTML += makeJournalEntryComponent(obj)
    })
}