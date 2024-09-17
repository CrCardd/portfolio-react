import style from './css/resume.module.css'
import arrow from '../assets/seta.png'

import background from '../assets/background04.png'

export default function resume({show}){


    return(
        <>
                <div className={style.resume_apresentation}>
                    <h1>I'm Cristian</h1>
                    <p>Hello! I'm a 17y old programming student</p>
                </div>

                <button onClick={show} className={style.button_arrow}>
                    <img className={style.img_arrow} src={arrow} alt="seta.png" />
                </button>

                <img className={style.background} src={background} alt="background" />   
        </>
    )
}