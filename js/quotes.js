const quotes = [
 {
    queto : "The road to success and the road to failure are almost exactly the same.",
 author : "rasdsadsad"
 },
 {
    queto : "It is better to fail in originality than to succeed in imitation.",
    author : "qweqwe"
 },
 {
    queto : "Success is walking from failure to failure with no loss of enthusiasm.",
    author : "zxczxcxzc"
 },
 {
    queto : "All progress takes place outside the comfort zone.",
    author : "rtytrytry"
 },
 {
    queto : "Success usually comes to those who are too busy to be looking for it.",
    author : "vmbnvbnvbn"
 },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random()* quotes.length)];

quote.innerText = todayQuote.queto;
author.innerText = todayQuote.author

