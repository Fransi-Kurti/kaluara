import classes from './GenericContainer.module.css';

export default function GenericContainer({children}) {
    return <div className={classes.genericContainer}>{children}</div>
}