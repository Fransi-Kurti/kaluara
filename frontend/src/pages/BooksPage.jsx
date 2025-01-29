import ProductsContainer from "../components/ProductsContainer";
import Sidebar from "../components/SideBar";
import { booksFilterNames, languageFilter } from "../assets/booksFilter";
import Products from "../components/Products";
import { books } from "../assets/books";

export default function BooksPage() {
    return <ProductsContainer>
        <Sidebar filterBooks={booksFilterNames} filterLanguage={languageFilter}/>
        <Products productPath='books' productType={books}/>
        </ProductsContainer>
}