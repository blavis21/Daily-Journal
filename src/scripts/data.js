const API = {
    getJournalEntries() {
        return fetch("http://localhost:3000/entries")
            .then(response => response.json())
    }
}

function saveJournalEntry(post) {
    return fetch("http://localhost:3000/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(post)
    })
}

function deleteEntry(id) {
    return fetch(`http://localhost:3000/entries/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then( data => data.json())
}