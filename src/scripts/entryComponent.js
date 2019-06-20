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