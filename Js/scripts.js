const adding = document.querySelector(".add-book")
const dialog = document.querySelector("dialog")
const exit = document.querySelector(".close-btn")
const saveBook = document.querySelector(".saveInfo")
const titleIP = document.querySelector("#title_input")
const authorIP = document.querySelector("#author_input")
const pagesIP = document.querySelector("#pages_input")
const readIP = document.querySelector("#read_input")
const table = document.querySelector("table")


// event to show dialog
adding.addEventListener("click", () =>{
    dialog.showModal()
})

// event to close dialog
exit.addEventListener("click", () =>{
    dialog.close()
})

// function that create new books
function Book(title, author, pages ,read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,
    this.erase = null

}



// event that create new books
saveBook.addEventListener("click", () =>{
 let entry = new Book(titleIP.value, authorIP.value, pagesIP.value, readIP.checked)
 let newTR = document.createElement("tr")
 newTR.classList.add("new-book")
 table.appendChild(newTR)

 let tit = document.createElement("td")
 tit.textContent = entry.title;
 newTR.appendChild(tit);

 let aut = document.createElement("td")
 aut.textContent = entry.author
 newTR.appendChild(aut)

 let pag = document.createElement("td")
 pag.textContent = entry.pages
 newTR.appendChild(pag)

 let read = document.createElement("td")
 newTR.appendChild(read)
 let check = document.createElement("button")
 check.classList.add("readStatus")
 if (readIP.checked) {
    check.textContent = "yes"
 } else{
    check.textContent = "no"
 }
read.appendChild(check)

// close the dialog when the data is saved
dialog.close()


// event that changes the read status
check.addEventListener("click", ()=>{
    if (check.textContent == "yes") {
        check.textContent = "no"
    } else if (check.textContent == "no") {
        check.textContent = "yes"
    }
})

let deleteTD = document.createElement("td")
newTR.appendChild(deleteTD)
let delete_btn = document.createElement("button")
delete_btn.textContent = "Delete"
deleteTD.appendChild(delete_btn)

// event that alows to erase books
delete_btn.addEventListener("click", () =>{
    table.removeChild(newTR)
})

})

