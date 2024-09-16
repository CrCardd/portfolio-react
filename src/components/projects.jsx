import style from './css/skill.module.css'


export default function skill({image}){

    return(
        <>
        
            <button className={style.button}>
                <img className={style.image} src={image} alt="project.png" />
            </button>
        
        </>
    )
}