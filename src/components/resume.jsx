import style from './css/resume.module.css'
import arrow from '../assets/seta.png'


export default function resume(){


    return(
        <>
            <div className={style.resume_apresentation}>
                <h1>I'm Cristian</h1>
                <p>Hello! I'm a 17y old programming student</p>
            </div>

            <button className={style.button_arrow}>
                <img className={style.img_arrow} src={arrow} alt="seta.png" />
            </button>
        </>
    )
}