import style from './css/show_projects.module.css'
import Project from './project'

import pokevoice_image from '../assets/projects_images/pokevoice.png'
import kangoroo_image from '../assets/projects_images/kangoroo.png'




export default function show_projects(){

    return(
        <>
            <div className={style.show_projects}>

                <Project direction={'left'} image={pokevoice_image} url={'https://github.com/CrCardd/PokeVoice'}/>
                <Project direction={'right'} image={kangoroo_image} url={'https://github.com/wallacin07/SocialMedia_WebProject'}/>

            </div>
        
        </>
    )
}