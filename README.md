# BestReads

## ERD
![ERD](https://i.imgur.com/TBW31bP.png)

One user can have many bookshelves and many books. This is a one-to-many relationship. A user's book can be on multiple of the user's bookshelves (e.g., _Ender's Game_ could be on a Read bookshelf and also a Favorites bookshelf and maybe a Sci-Fi bookshelf.) Because of this, I believe I'm going to need a join table between bookshelves and books, since that would be a many-to-many relationship. I don't believe I need any join tables between the user and her bookshelves or books, because each shelf is unique as is each book post. Neither bookshelves nor books will be collaborative between users.

## API example
https://www.getpostman.com/collections/3688ac192a1122e6cda7

I'm hoping to use the Google Books API. I have already registered with Google Developers. Here is a link to my Postman collection with the GET API calls. I've included a call that returns *all* info for a certain query, one that only returns the most relevant details about a query for a book, and one that only returns most relevent details about a query for an author. My app will still function without this API, but I believe it would greatly add to the functionality and user experience.

## LINK TO COMPLETED BIO PROJECT
https://github.com/katherinevfry/react-personal-bio
