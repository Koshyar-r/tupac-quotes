const QuoteText = document.querySelector(".quote")
const NextButton = document.querySelector(".next__button")
const PreviousButton = document.querySelector(".prev__button")
const CopyButton = document.querySelector(".copy")
const ShareButton = document.querySelector(".instagram")

let QuoteCount = 0

NextButton.onclick = () => {
    if(QuoteCount == 60) {
        QuoteCount = 0
        ShowQuotes(QuoteCount)
    } else {
        QuoteCount++
        ShowQuotes(QuoteCount)
    }
}

PreviousButton.onclick = () => {
    if(QuoteCount == 0) {
        QuoteCount = 60
        ShowQuotes(QuoteCount)
    } else {
        QuoteCount--
        ShowQuotes(QuoteCount)
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