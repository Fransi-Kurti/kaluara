import classes from './ProductsContainer.module.css'

export default function ProductsContainer({children}) {
    return <div className={classes.productsContainer}>
            {children}
    </div>
}