import style from '../css/menu.module.css'


export default function menu({home,about,contact,works}){


    return(
        <>
            <div className={style.menu}>
                <div className={style.header_guides}>
                    <a href={home}>
                        HOME
                    </a>
                </div>

                <div className={style.header_guides}> 
                    <a href={about}>
                        ABOUT
                    </a>
                </div>

                <div className={style.header_guides}>
                    <a href={contact}>
                        CONTACT
                    </a>
                </div>
                <div className={style.header_guides}>
                    <a href={works}>
                        WORKS
                    </a>
                </div>
            </div>
        
        
        </>

    )
}