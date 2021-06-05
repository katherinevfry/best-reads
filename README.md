# BestReads

## ERD
https://dbdiagram.io/d/60ad30d0b29a09603d167b7a

One user can have many bookshelves and many books. This is a one-to-many relationship. A user's book can be on multiple of the user's bookshelves (e.g., _Ender's Game_ could be on a Read bookshelf and also a Favorites bookshelf and maybe a Sci-Fi bookshelf.) Because of this, I believe I'm going to need a join table between bookshelves and books, since that would be a many-to-many relationship. I don't believe I need any join tables between the user and her bookshelves or books, because each shelf is unique as is each book post. Neither bookshelves nor books will be collaborative between users.

## API example
https://www.getpostman.com/collections/3688ac192a1122e6cda7

I'm hoping to use the Google Books API. I have already registered with Google Developers. Here is a link to my Postman collection with the GET API calls. I've included a call that returns *all* info for a certain query, one that only returns the most relevant details about a query for a book, and one that only returns most relevent details about a query for an author. My app will still function without this API, but I believe it would greatly add to the functionality and user experience.

## Project Board & Issue Tickets
- https://github.com/katherinevfry/best-reads/projects/1
- https://github.com/katherinevfry/best-reads/issues


### Sample response
```
 {
      "id": "2RIcAwAAQBAJ",
      "volumeInfo": {
        "title": "Station Eleven",
        "subtitle": "A novel",
        "authors": [
          "Emily St. John Mandel"
        ],
        "publisher": "Vintage",
        "publishedDate": "2014-09-09",
        "description": "An audacious, darkly glittering novel set in the eerie days of civilization’s collapse, Station Eleven tells the spellbinding story of a Hollywood star, his would-be savior, and a nomadic group of actors roaming the scattered outposts of the Great Lakes region, risking everything for art and humanity. A National Book Award Finalist A PEN/Faulkner Award Finalist Kirsten Raymonde will never forget the night Arthur Leander, the famous Hollywood actor, had a heart attack on stage during a production of King Lear. That was the night when a devastating flu pandemic arrived in the city, and within weeks, civilization as we know it came to an end. Twenty years later, Kirsten moves between the settlements of the altered world with a small troupe of actors and musicians. They call themselves The Traveling Symphony, and they have dedicated themselves to keeping the remnants of art and humanity alive. But when they arrive in St. Deborah by the Water, they encounter a violent prophet who will threaten the tiny band’s existence. And as the story takes off, moving back and forth in time, and vividly depicting life before and after the pandemic, the strange twist of fate that connects them all will be revealed. Look for Emily St. John Mandel's new novel, The Glass Hotel, available now.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9780385353311"
          },
          {
            "type": "ISBN_10",
            "identifier": "0385353316"
          }
        ],
        "readingModes": {
          "text": true,
          "image": false
        },
        "pageCount": 352,
        "printType": "BOOK",
        "categories": [
          "Fiction"
        ],
        "averageRating": 4,
        "ratingsCount": 318,
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": true,
        "contentVersion": "1.18.18.0.preview.2",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=2RIcAwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=2RIcAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "un",
        "previewLink": "http://books.google.com/books?id=2RIcAwAAQBAJ&printsec=frontcover&dq=station+eleven&hl=&cd=1&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=2RIcAwAAQBAJ&source=gbs_api",
        "canonicalVolumeLink": "https://play.google.com/store/books/details?id=2RIcAwAAQBAJ"
      }
    },
    
```

## User Stories
 ### Potential MVP
 - As a user I should be able to log in to the app.
 - As a user I should see my Bookshelves and some of my recent books on the home page.
- As a user I should be able to create, read, update, and delete a Bookshelf.
- As a user I should be able to add books from My Books to Bookshelves.
- As a user I should be able to create, read, update, and delete a book.
- As a user I should be able to see all my books on one view.
- As a user I should be able to review a book.
- As a user I should be able to rate a book on a scale of 1-5.
- As a user I should be able to sort books by rating.
- As a user I should only see my own books and bookshelves.
- As a user I should be able to change which Bookshelf a book is on.
- As a user I should be able to search for a book using the Google Books API.
- As a user I should be able to see the books returned from the API request.
- As a user I should be able to save a book from the API request to my Books.
- As a user I should be able to see a public reviews page with book reviews from other users.
- As a user I should be able to make a book public or private. (Public books are shared to explore/review page).

 ### Potential Stretch Goals
- As a user, I should be able to externally share my review of a book.
- As a user I should see a button that allows me to mark a book as currently reading. This will add a time stamp. When I finish reading, I should be able to click another button that marks the book as being finished reading. I should be able to see how long it took me to read the book displayed on that book's card.


## Loom Walkthrough of wireframes
https://www.loom.com/share/3118051cb37e4b7691e2002aa74400c4


## Wireframes
- home view
   ![home view](https://i.imgur.com/4N7pPYy.png)
   
- bookshelves view
   ![bookshelves](https://i.imgur.com/nyIJIdM.png)
 - single bookshelf view 
 ![single bookshelf view](https://i.imgur.com/q46z4j4.png)
 - single book bookshelf view
  ![singlebook bookshelf view](https://i.imgur.com/OciS3vO.png)
- books view
    ![books](https://i.imgur.com/Jw3Ioxz.png)
- single book
   ![single book](https://i.imgur.com/2lUDkTk.png)
- explore page
   ![explore](https://i.imgur.com/FrDP5Li.png)
- search page
   ![search page](https://i.imgur.com/fPyM2CO.png)

## LINK TO COMPLETED BIO PROJECT
https://github.com/katherinevfry/react-personal-bio
