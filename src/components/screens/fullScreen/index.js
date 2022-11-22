import Image from "next/image";
import face from 'public/img/face.png'

const FullScreen = () => {
    return (
        <>
            Full Screen
            <Image src={face} width={500} height={500} />
        </>
    )
}

export default FullScreen