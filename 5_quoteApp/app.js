const quote = document.getElementById("quote");
const author = document.getElementById("author");

async function getquote() {
    try {
        const url = "https://corsproxy.io/?https://type.fit/api/quotes";

        const response = await fetch(url);
        const data = await response.json();

        const random = data[Math.floor(Math.random() * data.length)];

        quote.innerHTML = random.text;
        author.innerHTML = random.author || "Unknown";

    } catch (error) {
        quote.innerHTML = "Error loading quote 😢";
        author.innerHTML = "";
        console.log(error);
    }
}

function tweet(){
    window.open(href="https://twitter.com/intent/tweet?text="+quote.innerHTML + "---By "+ author.innerHTML,"Tweet Window " ,"width=600,height=400");
}
