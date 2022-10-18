
        window.onload = firstLoad;

        function firstLoad() {
            newQuote()
        }
        
                function newQuote() {
        
                    let rangeQuote = allQuotes.length;
                    let randomizer = Math.floor(Math.random() * rangeQuote);
                    let quoteIdentity = allQuotes[randomizer];
                    let myTweet = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22"
        
                    let tweetQuoteRegex = quoteIdentity.quote.replace(/ /g, "%20");
        
                    myTweet += tweetQuoteRegex;
        
                    let tweetAuthorRegex = quoteIdentity.author.replace(/ /g, "%20");
        
                    myTweet += tweetAuthorRegex;
        
                    document.getElementById("tweet-quote").href = myTweet;
                    document.getElementById("text").innerText = quoteIdentity.quote;
                    document.getElementById("author").innerText = quoteIdentity.author;
        
                }