const url = "https://api.dictionaryapi.dev/api/v2/entries/en"
let sound = document.getElementById("sound")
let btn = document.getElementById("search")
let display = document.getElementById("display")

btn.addEventListener("click", () => {
    let word = document.getElementById("word").value
    if (word !== "") {
        fetch(`${url}/${word}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                display.innerHTML = `<div class="result d-flex justify-content-between mt-5">
            <h3 class="fw-bolder">${word}</h3>
            <button onclick="play()"><i class="fa-solid fa-volume-high"></i></button>
            </div>
        <div class="details d-flex my-2 gap-3">
            <p>${data[0].meanings[0].partOfSpeech}</p>
            <p>${data[0].phonetic || ""}</p>
        </div>
        <p class="fw-semibold">${data[0].meanings[0].definitions[0].definition}</p>
            <p class="fst-italic">Example :  ${data[0].meanings[0].definitions[0].example || ""}</p>`
                sound.setAttribute("src", `${data[0].phonetics[0].audio}`)
                console.log("sound", sound)
            }).catch((error) => {
                console.log("error", error)
                display.innerHTML = `<h3 class="mt-5 text-center">Couldn't find the word</h3>`

            })

    } else {
        console.log("Please enter the text")
        display.innerHTML = `<h3 class="mt-5 text-center">Please enter a word to see meaning</h3>`
    }
})

function play() {
    sound.play();
}
