// import ProductsContainer from "../components/ProductsContainer";
// import Sidebar from "../components/SideBar";
// import { booksFilterNames, languageFilter } from "../assets/booksFilter";
// import Products from "../components/Products";
// import { books } from "../assets/books";

// export default function BooksPage() {
//     return <ProductsContainer>
//         <Sidebar filterBooks={booksFilterNames} filterLanguage={languageFilter}/>
//         <Products productPath='books' productType={books}/>
//         </ProductsContainer>
// }

import { useEffect, useState } from "react";
import ProductsContainer from "../components/ProductsContainer";
import Sidebar from "../components/SideBar";
import { booksFilterNames, languageFilter } from "../assets/booksFilter";
import Products from "../components/Products";

export default function BooksPage() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch("http://localhost:3000/api/books");
                if (!response.ok) {
                    throw new Error(`Error: ${response.status} ${response.statusText}`);
                }
                const data = await response.json();
                setBooks(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBooks();
    }, []);

    return (
        <ProductsContainer>
            <Sidebar filterBooks={booksFilterNames} filterLanguage={languageFilter} />
            
            {loading ? (
                <p>Loading books...</p>
            ) : error ? (
                <p style={{ color: "red" }}>Failed to load books: {error}</p>
            ) : (
                <Products productPath="books" productType={books} />
            )}
        </ProductsContainer>
    );
}
