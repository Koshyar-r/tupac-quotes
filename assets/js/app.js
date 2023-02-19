const QuoteText = document.querySelector(".quote")
const QuoteButton = document.querySelector(".quote__button")
const CopyButton = document.querySelector(".copy")

function GetRandomQoute(min, max) {
    let step1 = max - min + 1
    let step2 = Math.random() * step1
    let result = Math.floor(step2) + min

    return result
}

QuoteButton.addEventListener("click", () => {
    let index = GetRandomQoute(0, Quotes.length - 1)
    QuoteText.innerText = Quotes[index]
})

CopyButton.addEventListener("click", () => {
    navigator.clipboard.writeText(QuoteText.innerText)
    CopyButton.classList.add("active")
    CopyButton.innerText = "Copied!"
    setTimeout(() => {
        CopyButton.classList.remove("active")
        CopyButton.innerText = "Copy"
    }, 2000)
})