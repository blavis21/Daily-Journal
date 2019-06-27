//function that converts data into html -- to be inserted dynamically
function makeJournalEntryComponent(input) {
    return `
    <div class="entry">
        <section class="newEntry">
            <h2>Date: ${input.date}</h2>
            <h3>Mood: ${input.mood}</h3>
            <h3>Concept: ${input.concept}</h3>
            <h3>Entry: ${input.entry}</h3>
        </section>
    </div>`
};