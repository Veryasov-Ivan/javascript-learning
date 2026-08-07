// Day 57
// Fake File Upload

let button = document.getElementById("button");
let status = document.getElementById("text");

async function fileUpload() {
    status.innerText = "File status: Uploading...";

    await new Promise(function(resolve) {
        setTimeout(resolve, 3000);
    });

    status.innerText = "File status: Upload complete!";
}

button.addEventListener("click", function() {
    fileUpload();
});
