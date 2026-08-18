// Day 68
// Book Search

let bookInput = document.getElementById("bookInput");
let status = document.getElementById("status");
let title = document.getElementById("title");
let author = document.getElementById("author");
let year = document.getElementById("year");
let cover = document.getElementById("cover");
let coverStatus = document.getElementById("coverStatus");

async function searchBook() {
    status.innerText = "Status: Loading...";

    let bookQuery = bookInput.value;

    if (bookQuery.length === 0) {
        status.innerText = "Status: Please enter a book title.";
    } else {
        let url = `https://openlibrary.org/search.json?q=${bookQuery}`;
        let response = await fetch(url);
        let data = await response.json();

        title.innerText = `Title: ${data.docs[0].title}`;
        author.innerText = `Author: ${data.docs[0].author_name}`;
        year.innerText = `First published: ${data.docs[0].first_publish_year}`;

        if (data.docs[0].cover_i) {
            let coverUrl = `https://covers.openlibrary.org/b/id/${data.docs[0].cover_i}-M.jpg`;

            cover.src = coverUrl;
            coverStatus.innerText = "";
        } else {
            cover.src = "";
            coverStatus.innerText = "Cover not available.";
        }

        status.innerText = "Status: Complete!";
    }
}

bookInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        searchBook();
    }
});
