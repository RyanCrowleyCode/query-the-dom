// Use JavaScript to obtain a reference to the first section with the class of article_header and change its text with the textContent property to "Welcome to the {insert your name here} blog"

const firstSection = document.querySelector(".article__header")
firstSection.textContent = "Welcome to the Ryan Crowley blog"

// Use JavaScript to obtain a reference to all article__header elements and change their classList property value to article__header important.

const allArticleHeaders = document.querySelectorAll(".article__header")

for (let i = 0; i < allArticleHeaders.length; i++ ) {
    allArticleHeaders[i].classList.add("important")
}

