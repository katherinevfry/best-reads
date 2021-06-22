[![Netlify Status](https://api.netlify.com/api/v1/badges/de69bd00-b634-498d-b1af-4bcaff49c9d2/deploy-status)](https://app.netlify.com/sites/best-reads/deploys)
# BestReads
![img1](https://i.imgur.com/apWIip6.jpg)
![img2](https://i.imgur.com/MSTPBn9.jpg)
![img3](https://i.imgur.com/z6Pffyt.jpg)
![img4](https://i.imgur.com/7kpUtba.jpg)
![img5](https://i.imgur.com/5zJh5RP.jpg)
![img6](https://i.imgur.com/0heaaZy.jpg)
![img7](https://i.imgur.com/taehTMz.jpg)

## Rationale
There are various book tracking apps available, but they all suffer from clutter--too many features, too many advertisements. They aren't fun OR easy to use. I wanted BestReads to offer a clean user experience--both in design and functionality. BestReads makes it easy to find books (via the Google Books API or your friend's public reviews), rate and review those books, and sort them onto shelves. The user can add as many shelves as she likes, and books can appear on more than one shelf. Chronicles the books you're currently reading, create a list of favorites--this is your app! Another central feature of the app is that all content is private by default--your reviews, ratings, books, and bookshelves are all your own. 

## Technologies Used
- Vanilla JS
- React
- Tailwind CSS
- JSX
- React Router Dom
- Google Books API
- Postman for API testing
- Firebase for authentication and realtime database
- Netlify for deployment

## ERD
![erd](https://i.imgur.com/pyqxSAh.png)

## Site Map / Data Flow
![sitemap](https://i.imgur.com/xNm2V7L.jpg)

## Code Snippet
```

export default function BookCard({ setBooks, user, ...book }) {
  const [editing, setEditing] = useState(false);
  const [heart, setHeart] = useState('');
  const getAllRels = (taco) => {
    taco.forEach((i) => {
      deleteBookshelfRel(i.firebaseKey).then();
    });
    deleteBook(book.uid, book.firebaseKey).then(setBooks);
  };

  const seeForm = () => {
    setEditing((prevState) => !prevState);
  };

  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        getSingleBookshelfBooksByBookId(book.firebaseKey)
          .then((resp) => {
            if (resp.length === 0) {
              deleteBook(book.uid, book.firebaseKey).then(setBooks);
            } else {
              getAllRels(resp);
            }
          });
        break;
      case 'edit':
        seeForm();
        break;
      default:
        console.warn('nothing here');
    }
  };

  useEffect(() => {
    switch (book?.rating) {
      case '0':
        setHeart('https://i.imgur.com/fS9vnN7.png');
        break;
      case '1':
        setHeart('https://i.imgur.com/uf4WJ5c.png');
        break;
      case '2':
        setHeart('https://i.imgur.com/OTLU0Ys.png');
        break;
      case '3':
        setHeart('https://i.imgur.com/ZmtXJNh.png');
        break;
      case '4':
        setHeart('https://i.imgur.com/c1kns2H.png');
        break;
      case '5':
        setHeart('https://i.imgur.com/k0pgQ9G.png');
        break;
      default:
        setHeart('https://i.imgur.com/fS9vnN7.png');
    }
  }, [book.rating]);

  return (
    <>
      <div>
        <div className="max-w-sm bg-medblue shadow-lg rounded overflow-hidden w-72 m-4">
        <img className="w-44 mx-auto mt-2 rounded-md" src={book.imageUrl} alt={book.title}></img>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{book.title}</div>
          <div>
            <img className="w-32 object-cover"src={heart} alt={book.rating}></img>
          </div>
          <p className="text-white text-base">
            {book.review}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2 mb-2 flex flex-col justify-center">
        <button type='button'
                  className='bg-darkblue hover:bg-medblue border-2 border-transparent hover:border-white text-white py-2 px-3 rounded-full my-1 shadow-md'
                  onClick={() => handleClick('delete')}
                  >
                    delete
                  </button>
                  <button type='button'
                  className='bg-darkblue hover:bg-medblue border-2 border-transparent hover:border-white text-white py-2 px-3 rounded-full my-1 shadow-md'
                  onClick={() => handleClick('edit')}
                  >
                    {editing ? 'close' : 'edit'}
                  </button>
                </div>
                <div className="w-60 mx-auto">
                {
                  editing && <BookForm
                  setBooks={setBooks}
                  user={user}
                  seeForm={seeForm}
                  {...book}
                  />
                }
                </div>
        </div>
      </div>
    </>
  );
}
```

## User Stories
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
- As a user, I should be able to externally share my review of a book.


## Wireframes
   ![home view](https://i.imgur.com/4N7pPYy.png)
   ![bookshelves](https://i.imgur.com/nyIJIdM.png)
 ![single bookshelf view](https://i.imgur.com/q46z4j4.png)
  ![singlebook bookshelf view](https://i.imgur.com/OciS3vO.png)
    ![books](https://i.imgur.com/Jw3Ioxz.png)
   ![single book](https://i.imgur.com/2lUDkTk.png)
   ![explore](https://i.imgur.com/FrDP5Li.png)
   ![search page](https://i.imgur.com/fPyM2CO.png)
   
## How to Download
`git pull origin [name]`
`npm i`
`npm start`

## LINK TO COMPLETED BIO PROJECT
https://github.com/katherinevfry/react-personal-bio
