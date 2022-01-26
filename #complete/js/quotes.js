const quotess = [
    {
    quotes: 'I never dreamed about success, I worked for it',
    author: 'Estee Lauder'
    },
    {
    quotes: 'Do not try to be original, just try to be good.',
    author: 'Paul Rand'
    },
    {
    quotes: 'Do not be afraid to give up the good to go for the great',
    author: 'John D. Rockefeller'
    },
    {
    quotes: 'If you cannot fly then run. If you cannot run, then walk. And if you cannot walk, then crawl, but whatever you do, you have to keep moving forward.',
    author: 'Martin Luther King Jr.'
    },
    {
    quotes: 'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.',
    author: 'Thomas Edison'
    },
    {
    quotes: 'The fastest way to change yourself is to hang out with people who are already the way you want to be',
    author: 'REid Hoffman'
    },
    {
    quotes: 'Money is like gasoline during a road trip. You do not want to run out of gas on your trip, but you are not doing a tour of gas stations',
    author: 'Tim O Reilly'
    },
    {
    quotes: 'Some people dream of success, while other people get up every morning and make it happen',
    author: 'Wayne Huizenga'
    },
    {
    quotes: 'The only thing worse than starting something and falling.. is not starting something',
    author: 'SEth Godin'
    },
    {
    quotes: 'If you really want to do something, you will find a way. If you do not, you will find an excuse.',
    author: 'Jim Rohn'
    },
    ];
    
const quotes = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const todaysQuote = quotess[Math.floor(Math.random() * quotess.length)];

quotes.innerText = todaysQuote.quotes;
author.innerText = `-${todaysQuote.author}`;

// Math.random() : random (between 0~1)
// Math.round() : 소수점 반올림
// Math.ceil() : 소수점 올림
// Math.floor() : 소수점 내림

// (array).length : array length