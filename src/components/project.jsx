import style from './css/project.module.css'


export default function project({image, direction,url}){

    return(
        <>
            <div className={direction == 'left' ? style.project_left : style.project_right}>
                <a className={style.button} target="_blank" href={url}>
                    <img className={style.image} src={image} alt="project.png" />
                </a>
            </div>
        </>
    )
}