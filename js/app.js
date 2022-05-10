const QuoteText = document.querySelector(".quote")
const NextButton = document.querySelector(".next__button")
const PreviousButton = document.querySelector(".prev__button")
const CopyButton = document.querySelector(".copy")
const ShareButton = document.querySelector(".instagram")

let QuoteCount = 0

PreviousButton.style.display = "none"

NextButton.onclick = () => {
    QuoteCount++
    ShowQuotes(QuoteCount)
    PreviousButton.style.display = "inline"

    if(QuoteCount == 58) {
        NextButton.style.display = "none"
    }
}

PreviousButton.onclick = () => {
    QuoteCount--
    ShowQuotes(QuoteCount)
    NextButton.style.display = "inline"

    if(QuoteCount == 0) {
        PreviousButton.style.display = "none"
    }
}

function ShowQuotes(index) {
    let QuoteTag = '<p>'+ Quotes[index].quote +'</p>'
    QuoteText.innerHTML = QuoteTag
}

CopyButton.addEventListener("click", () => {
    navigator.clipboard.writeText(QuoteText.innerText)
})

ShareButton.addEventListener("click", () => {
    let InstaUrl = `https://instagram.com/intent/tweet?url=${QuoteText.innerText}`
    window.open(InstaUrl, "_blank")
})