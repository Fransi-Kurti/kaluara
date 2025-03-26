import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import classes from "./BookDetailPage.module.css";

export default function BookDetailPage() {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    async function fetchBook() {
      try {
        const response = await fetch(
          `http://localhost:3000/api/books/${bookId}`
        );
        if (!response.ok) throw new Error("Failed to fetch book details");
        const data = await response.json();
        setBook(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchBook();
  }, [bookId]);

  if (!book) return <p>Loading...</p>;

  return (
    <main className={classes.container}>
      <div className={classes.imageContainer}>
        <img
          src={`http://localhost:3000/${book.image}`}
          alt={book.title}
          className={classes.image}
        />
      </div>
      <div className={classes.infoContainer}>
        <div className={classes.descriptionContainer}>

        <h1 className={classes.title}>{book.title}</h1>
        <p className={classes.author}>
          <strong>{book.author}</strong>
        </p>
        <p className={classes.description}>{book.description}</p>
        </div>
        <div className={classes.priceContainer}>

        <p className={classes.price}>{book.price}€</p>
        <button className={classes.addToCart}>ADD TO CART</button>
        </div>
      </div>
    </main>
  );
}
