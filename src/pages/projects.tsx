import uocra from '../../public/uocra.jpg'
import Image from "next/image";

export default function Projects() {
    return(
        <div className="aboutPageContaner">
         <h4>Página en construcción.</h4>
        <Image src={uocra} width={400} height={400} alt='uocra'></Image>
        </div>
    )
}