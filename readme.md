# The Assignment

We expect you to build this out as you would a production project for a client, only on a small scale (tests, error handling, etc). Where you don't have the time to implement something, add comments to your code or documentation on how you would have changed or added to your implementation in the "real world".
Deliverables

1. Git Repo with all code and documentation

1. BONUS - a working Amazon Connect phone number to test in your environment :-)

Exercise

1. Create a Lambda that converts phone numbers to vanity numbers and save the best 5 resulting vanity numbers and the caller's number in a DynamoDB table. "Best" is defined as you see fit - explain your thoughts.

2. Create an Amazon Connect contact flow that looks at the caller's phone number and says the 3 vanity possibilities that come back from the Lambda function.

3. Writing and Documentation

1. Record your reasons for implementing the solution the way you did, struggles you faced and problems you overcame.
2. What shortcuts did you take that would be a bad practice in production?
3. What would you have done with more time? We know you have a life. :-)

# The Results

> 1. Create a Lambda that converts phone numbers to vanity numbers and save the best 5 resulting vanity numbers and the caller's number in a DynamoDB table. 

"Best" is defined as you see fit - explain your thoughts.
Mostly, I had to keep the project somewhat small. I was using a personally-made dictionary to search for words in the numbers, and with a relatively small sample size, possibilities are limited. My main criteria was that I didn't duplicate results and only saved unique numbers to the DB. Thanks to the small dictionary, I would often only end up with around 5 unique possibilities. With a larger word size, I could prioritize larger words (find a 5 letter word and put it above any shorter words)

> 1. Record your reasons for implementing the solution the way you did, struggles you faced and problems you overcame.

The main struggle with this project was the fact that I have never used AWS for anything previously. In fact, I distinctly remember signing up for an AWS account a few months ago for something, but saw that I still had to input my credit card information, and flashbacks to horror stories of someone racking up a $7,000 bill with AWS sent me scrambling for an alternative.

The fact that I was able to build a Connect flow, implement a function using Lambda and then store data in a DynamoDB table speaks to my ability to pretty quickly pick up any new technologies as needed.

Another problem was the design of the function itself. The concept of a vanity number is something that is more rooted in language than anything else, and required recursion to find all permutations of all possible combinations. Unfortunately, this leaves you with a lot of random nonsense, so I also needed to implement a dictionary to find any actual human-language words in the proverbial haystack. I ended up using a filtered list of the most common 1,000 English words that were between 3 and 5 letters long. I also have a 5,000 word version, but it takes somewhat longer to run.

> 2. What shortcuts did you take that would be a bad practice in production?

Testing has also never been my strong suit, and I certainly learned a lot about it for this challenge! I held off on writing tests until the end, and in a production environment, I'd more likely be looking at using Test-Driven-Development, where tests shape the code itself instead of being an afterthought.

> 3. What would you have done with more time? We know you have a life. :-)

The results can be a bit lackluster. Most numbers I've tested came back with a pretty boring vanity number. With more time, I might consider running the results through another pass to find a second word. Other options could be to use the Connect flow and finding a way to implement user input instead of just parroting some results. Maybe only finding words that start with a 'C', or only search for words that are 5 letters long.


