const QuoteText = document.querySelector(".quote")
const NextButton = document.querySelector(".next__button")
const PreviousButton = document.querySelector(".prev__button")
const CopyButton = document.querySelector(".copy")
const ShareButton = document.querySelector(".twitter")

let QuoteCount = 0

NextButton.onclick = () => {
    QuoteCount++
    ShowQuotes(QuoteCount)
}

PreviousButton.onclick = () => {
    QuoteCount--
    ShowQuotes(QuoteCount)
}

if(QuoteCount == 60) {
    QuoteCount = 1
    ShowQuotes(QuoteCount)
} else {
    ShowQuotes(QuoteCount)
}

function ShowQuotes(index) {
    let QuoteTag = '<p>'+ Quotes[index].quote +'</p>'
    QuoteText.innerHTML = QuoteTag
}

CopyButton.addEventListener("click", () => {
    navigator.clipboard.writeText(QuoteText.innerText)
})

ShareButton.addEventListener("click", () => {
    let tweetUrl = `https://twitter.com/intent/tweet?url=${QuoteText.innerText}`;
    window.open(tweetUrl, "_blank");
})