import style from './css/apresentation.module.css'
import profile_image from '../assets/temp_profile.png'

export default function apresentation(){


    return(
        <>
            <div className={style.apresentation}>

                <div className={style.informations}>
                    <div>
                        <img className={style.profile_image} src={profile_image} alt="cr.png"/>
                    </div>

                    <div>
                        <h1>Cristian</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, reprehenderit voluptatibus. Necessitatibus quibusdam, quisquam nemo quam aliquid tempore, eaque cumque aspernatur beatae facilis voluptas laudantium aut totam excepturi architecto ducimus.</p>

                        <div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}