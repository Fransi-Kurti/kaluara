import bloodAndSeedImg from '../../assets/kasetaBloodAndSeed.png';
import backArrow from '../../assets/arrows/left-space.png';
import forwardArrow from '../../assets/arrows/right.png';
import classes from './Carousel.module.css';

export default function Carousel() {
    return <div className={classes.carouselContainer}>
        <div className={classes.goBack}>
            <img src={backArrow}/>
        </div>
        <div className={classes.carouselImageContainer}>
            <img src={bloodAndSeedImg}/>

        </div>
        <div className={classes.goForward}>
            <img src={forwardArrow}/>
        </div>
    </div>
}