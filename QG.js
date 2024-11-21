const quotes = [
    "You only live once, but if you do it right, once is enough. - Mae West",
    "Success is not the absence of failure; it’s the persistence through failure. - Aisha Tyler",
    "What we think, we become. - Buddha",
    "Every moment is a fresh beginning. - T.S. Eliot",
    "A smooth sea never made a skilled sailor. - Franklin D. Roosevelt",
    "The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh",
    "Happiness depends upon ourselves. - Aristotle",
    "Turn your wounds into wisdom. - Oprah Winfrey", 
]

function get(quotes){
    const out = Math.floor(Math.random() * quotes.length);
    document.getElementById("display").innerText = quotes[out]; 
}
document.getElementById("bt").addEventListener("click", function(){
    get(quotes)
});




