let btn = document.querySelector('#newquote')
let quote = document.querySelector('.quote')
let person = document.querySelector('.person')

const quotes = [
    {quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", person: "Nelson Mandela"},
    {quote: "The way to get started is to quit talking and begin doing.", person: "Walt Disney"},
    {quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma which is living with the results of other people's thinking.", person: "Steve Jobs"},
    {quote: "The future belongs to those who believe in the beauty of their dreams.", person: "Eleanor Roosevelt"},
    {quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.", person: "Oprah Winfrey"},
    {quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.", person: "James Cameron"},
    {quote: "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one.", person: "John Lennon"},
    {quote: "You must be the change you wish to see in the world.", person: "Mahatma Gandhi"},
    {quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.", person: "Mother Teresa"},
    {quote: "The only thing we have to fear is fear itself.", person: "Franklin D. Roosevelt"},
    {quote: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.", person: "Martin Luther King Jr."},
    {quote: "Do one thing every day that scares you.", person: "Eleanor Roosevelt"},
    {quote: "Well done is better than well said.", person: "Benjamin Franklin"},
    {quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.", person: "Helen Keller"},
    {quote: "It is during our darkest moments that we must focus to see the light.", person: "Aristotle"},
    {quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.", person: "Ralph Waldo Emerson"},
    {quote: "Be yourself; everyone else is already taken.", person: "Oscar Wilde"},
    {quote: "You will face many defeats in life, but never let yourself be defeated.", person: "Maya Angelou"},
    {quote: "Go confidently in the direction of your dreams! Live the life you've imagined.", person: "Henry David Thoreau"},
    {quote: "In the end, it's not the years in your life that count. It's the life in your years.", person: "Abraham Lincoln"},
    {quote: "Never let the fear of striking out keep you from playing the game.", person: "Babe Ruth"},
    {quote: "In this life we cannot do great things. We can only do small things with great love.", person: "Mother Teresa"},
    {quote: "Many of life's failures are people who did not realize how close they were to success when they gave up.", person: "Thomas A. Edison"},
    {quote: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.", person: "Dr. Seuss"},
    {quote: "Life is either a daring adventure or nothing.", person: "Helen Keller"},
    {quote: "Life is a long lesson in humility.", person: "James M. Barrie"},
    {quote: "In three words I can sum up everything I've learned about life: it goes on.", person: "Robert Frost"},
    {quote: "Life is made of ever so many partings welded together.", person: "Charles Dickens"},
    {quote: "Life is trying things to see if they work.", person: "Ray Bradbury"}
];
btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length)
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})
