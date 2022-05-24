import Navbar from '../../components/navbar/component';
import './style.module.css';
import classes from './style.module.css';

export default function Wheel(props){
    return <>
        <Navbar/>
        
        <section className={classes.section}>
            <div className={classes.wheel_and_hamster}>
                <div className={classes.wheel}></div>
                <div className={classes.hamster}>
                    <div className={classes.body}>
                        <div className={classes.head}>
                            <div className={classes.ear}></div>
                            <div className={classes.eye}></div>
                            <div className={classes.nose}></div>
                        </div>
                        <div className={classes.leg_front_right}></div>
                        <div className={classes.leg_front_left}></div>
                        <div className={classes.leg_back_right}></div>
                        <div className={classes.leg_back_left}></div>
                        <div className={classes.tail}></div>
                    </div>
                </div>
                <div className={classes.mid}></div>
            </div>
        </section>
    </>
}