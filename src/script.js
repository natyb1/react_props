const { ListGroup } = require("react-bootstrap");

const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

// function Books() {
//   return data;
// }

// function getBook(id) {
//   return data.find((d) => d.id === id);
// }

// const books = Books();
// const book = getBook(5);
// console.log(book);
// // Array Methods
// // 1, map methood
// // it receives a callback funcction  and returns an array

// const essentialData = books.map((e) => ({
//   author: e.author,
//   title: e.title,
// }));

// const test = books.map((book) => {
//   return {
//     reviews: book.title,
//   };
// });

// const titles = books.map((book) => book.title);
// console.log(titles);
// const bk = books.map((book) => {
//   return {
//     title: book.title,
//     pages: book.pages,
//   };
// });

// console.log(bk);

// // 2, filter method
// // it returns a boolean value and takes a callback function , it basically filters out false values and assign true values to tle varialble provided
// // returns an array
// console.log(essentialData);
// const adventureBooks = books
//   .filter((book) => book.genres.includes("fantasy"))
//   .map((book) => book.title);
// console.log(adventureBooks);

// const largeeBooks = books
//   .filter((books) => books.pages > 500)
//   .map((book) => book.title);
// console.log(largeeBooks);

// /// 3, sort method
// // sorts the provided array or object based on the criteria provided ,
// // it will modify the oorigiinal array so it iis asdviced to use it with slice method

// const arr = [5, 4, 23, 0, -4, 8, 3];
// const sorted = arr.slice().sort((a, b) => a - b);
// console.log(sorted);
// console.log(arr);
// const sortedPages = books.slice().sort((a, b) => b.pages - a.pages);
// console.log(sortedPages);

// const newbook = {
//   title: "Ajenda",
//   pages: 2367,
//   author: "Natnael Birhanu",
//   publicationDate: "2023-02-32",
// };
// //Adding element to an array or object without changing the previous one(using Spread operator)
// const bookAfterAdd = [...books, newbook];

// //2,deleting element from Object (using filter)
// const deleteAfterBook = books
//   .filter((book) => book.id !== 3)
//   .map((book) => book.id); //showing only the id
// console.log(deleteAfterBook);

// //3,updating objects( using maop function) and spread operator

// const bookAfterUpdate = books
//   .map((book) =>
//     book.id === 5 ? { ...book, title: "hankok", author: "natyb" } : book
//   )
//   .map((book) => book.title); // showing only the title
// console.log(bookAfterUpdate);

// Asynchronous javascript promises .... Fetching

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const value = await res.json();
  console.log(value);
}

getTodos();
