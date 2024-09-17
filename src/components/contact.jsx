import style from './css/contact.module.css'

import whatsapp_icon from '../assets/whatsapp_icon.png'
import gmail_icon from '../assets/gmail_icon.png'

export default function contact(){


    const sendMessage = () => {
        var numeroTelefone = "5541940028922";
        window.open("https://wa.me/" + numeroTelefone + "?text=Olá!:", "_blank")
    }

    return(
        <>
            <br />
            <br />
            <br />
            <br />
            <br />
            <hr className={style.line}/>

                <div className={style.contact}>
                    <img onClick={sendMessage} className={style.image} src={whatsapp_icon} alt="" />

                    <img onClick={() => alert('EM MANUTENÇÃO')} className={style.image} src={gmail_icon} alt="" />
                </div>
        
            <hr className={style.line}/>
        </>
    )
}