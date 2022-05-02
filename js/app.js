const QuoteText = document.querySelector(".quote")
const QuoteButtons = document.querySelector(".quote__buttons")
const NextButton = QuoteButtons.querySelector(".next__button")
const PreviousButton = QuoteButtons.querySelector(".prev__button")
const CopyButton = document.querySelector(".copy")
const ShareButton = document.querySelector(".twitter")


let QuoteCount = 0

NextButton.addEventListener("click", ShowQuotes())

function ShowQuotes(index) {
    let QuoteTag = '<span>' + Quotes[index].quote + '</span>'
    QuoteText.innerHTML = QuoteTag
}

CopyButton.addEventListener("click", ()=> {
    navigator.clipboard.writeText(QuoteText.innerText)
})