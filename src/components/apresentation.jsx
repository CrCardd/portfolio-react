import style from './css/apresentation.module.css'
import profile_image from '../assets/temp_profile.png'

import java_image from '../assets/skills/java_icon.png'
import c_image from '../assets/skills/c_icon.png'
import css_image from '../assets/skills/css_icon.svg'
import javascript_image from '../assets/skills/javascript_icon.svg'
import mysql_image from '../assets/skills/mysql_icon.png'
import sqlserver_image from '../assets/skills/sqlserver_icon.svg'
import python_image from '../assets/skills/python_icon.png'
import powerbi_image from '../assets/skills/powerbi_icon.png'
import html_image from '../assets/skills/html_icon.svg'

export default function apresentation(){


    return(
        <>
            <div className={style.apresentation}>

                <div className={style.informations}>
                    <div>
                        <img className={style.profile_image} src={profile_image} alt="cr.png"/>
                    </div>

                    <div className={style.text_informations}>
                        <h1>Cristian</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, reprehenderit voluptatibus. Necessitatibus quibusdam, quisquam nemo quam aliquid tempore, eaque cumque aspernatur beatae facilis voluptas laudantium aut totam excepturi architecto ducimus.</p>

                        <div className={style.skills}>
                            <img className={style.skill_image} src={java_image} alt="skill.png"/>
                            <img className={style.skill_image} src={c_image} alt="skill.png"/>
                            <img className={style.skill_image} src={css_image} alt="skill.png"/>
                            <img className={style.skill_image} src={javascript_image} alt="skill.png"/>
                            <img className={style.skill_image} src={mysql_image} alt="skill.png"/>
                            <img className={style.skill_image} src={sqlserver_image} alt="skill.png"/>
                            <img className={style.skill_image} src={python_image} alt="skill.png"/>
                            <img className={style.skill_image} src={powerbi_image} alt="skill.png"/>
                            <img className={style.skill_image} src={html_image} alt="skill.png"/>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}