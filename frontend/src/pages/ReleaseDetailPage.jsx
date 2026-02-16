import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import classes from "./ReleaseDetailPage.module.css";
import { useContext } from "react";
import CartContext from "../store/CartContext";

export default function ReleaseDetailPage() {
  const { releaseId } = useParams();
  const [release, setRelease] = useState(null);

  const cartCtx = useContext(CartContext)



  useEffect(() => {
    async function fetchRelease() {
      try {
        const response = await fetch(
          `http://localhost:3000/api/releases/${releaseId}`
        );
        if (!response.ok) throw new Error("Failed to fetch book details");
        const data = await response.json();
        setRelease(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchRelease();
  }, [releaseId]);

  function handleAddProductToCart(){
    cartCtx.addItem(release)
  }

  if (!release) return <p>Loading...</p>;

  return (
    <main className={classes.container}>
      <div className={classes.imageContainer}>
        <img
          src={`http://localhost:3000/${release.image}`}
          alt={release.title}
          className={classes.image}
        />
      </div>
      <div className={classes.infoContainer}>
        <div className={classes.descriptionContainer}>

        <h1 className={classes.title}>{release.title}</h1>
        <p className={classes.author}>
          <strong>{release.author}</strong>
        </p>
        <p className={classes.description}>{release.description}</p>
        </div>
        <div className={classes.priceContainer}>

        <p className={classes.price}>{release.price}€</p>
        <button onClick={handleAddProductToCart} className={classes.addToCart}>ADD TO CART</button>
        </div>
      </div>
    </main>
  );
}
