import "./BookBox.scss";
import React, { useState } from "react";
import BookCard from "../BookCard/BookCard";

interface Book {
  title: string;
  author: string;
  imageUrl: string;
}

const BookBox: React.FC = () => {
  const originalBooks: Book[] = [
    {
      title: "Zeinas Kitchen",
      author: "Zeina Mourtada",
      imageUrl:
        "https://bilder.akademibokhandeln.se/images_akb/9789178871032_383/zeinas-kitchen-recept-fran-mellanostern",
    },
    {
      title: "Antiinflammatorisk Kokbok",
      author: "Emma Andersson",
      imageUrl:
        "https://bilder.akademibokhandeln.se/images_akb/9781835194126_383/antiinflammatorisk-kokbok",
    },
    {
      title: "Min första kokbok",
      author: "Sonia Moore",
      imageUrl:
        "https://bilder.akademibokhandeln.se/images_akb/9789180376419_383/min-forsta-kokbok-med-steg-for-steg-bilder",
    },
    {
      title: "Chez Wood",
      author: "Sofia Wood",
      imageUrl:
        "https://bilder.akademibokhandeln.se/images_akb/9789113098197_383/chez-wood-en-kokbok-for-vardag-vila-och-fest",
    },
    {
      title: "Kokbok för bakfulla",
      author: "Oskar Ekman",
      imageUrl:
        "https://bilder.akademibokhandeln.se/images_akb/9789153105046_383/kokbok-for-bakfulla-recept-rad-rovarhistorier",
    },
    {
      title: "Kokbok för strömlösa",
      author: "Anders Möller",
      imageUrl:
        "https://bilder.akademibokhandeln.se/images_akb/9789152750575_383/kokbok-for-stromlosa",
    },
  ];

  //state för böcker
  const [books, setBooks] = useState<Book[]>(originalBooks);

  //funktion för att radera en bok
  const deleteBook = (index: number) => {
    setBooks(books.filter((_, i) => i !== index));
  };

  //funktion för att återställa listan
  const resetBooks = () => {
    setBooks(originalBooks);
  };

  return (
    <div className="BookBox">
      {/* <h2>Böcker</h2> */}
      {books.length === 0 ? (
        <p>Inga böcker kvar. Återställ för att lägga till böcker</p>
      ) : (
        books.map((book, index) => (
          <div key={index} className="BookCardContainer">
            <BookCard
              title={book.title}
              author={book.author}
              imageUrl={book.imageUrl}
            />
            <button onClick={() => deleteBook(index)} className="deleteButton">
              Radera
            </button>
          </div>
        ))
      )}
      <button onClick={resetBooks} className="resetButton">
        Återställ Listan
      </button>
    </div>
  );
};
export default BookBox;
