import React from "react";
import "./BookCard.scss";

interface BookCardProps {
  title: string;
  author: string;
  imageUrl: string;
}

const BookCard: React.FC<BookCardProps> = ({ title, author, imageUrl }) => {
  return (
    <div className="BookCard">
      <img src={imageUrl} alt={`Cover of ${title}`} />
      <div className="BookCard__info">
        <h3>{title}</h3>
        <p>{author}</p>
      </div>
    </div>
  );
};

export default BookCard;
