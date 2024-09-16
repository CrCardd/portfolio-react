import style from './css/menu.module.css'


export default function menu({home,about,contact,works}){


    return(
        <>
            <div className={style.menu}>
                <div className={style.header_guides}>
                    <a href={home} className={style.text} >
                        HOME
                    </a>
                </div>

                <div className={style.header_guides}> 
                    <a href={about} className={style.text} >
                        ABOUT
                    </a>
                </div>

                <div className={style.header_guides}>
                    <a href={contact} className={style.text} >
                        CONTACT
                    </a>
                </div>
                <div className={style.header_guides}>
                    <a href={works} className={style.text} >
                        WORKS
                    </a>
                </div>
            </div>
        
        
        </>

    )
}