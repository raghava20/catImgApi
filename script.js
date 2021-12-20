let process = document.querySelector(".cat-list");

async function catApi() {
    let data;
    for (let i = 1; i <= 10; i++) {
        data = await fetch("https://thatcopy.pw/catapi/rest/")
        let response = await data.json();
        displayResult(response);
    }

}
catApi();

async function displayResult(response) {
    process.innerHTML += `<div>
        <img  class="img-container" src="${await response.url}"/>        
        </div>`
}
let reload = () => {
    process.innerHTML = ""
    catApi();
}
