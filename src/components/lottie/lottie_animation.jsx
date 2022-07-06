import  {useLottie} from 'lottie-react';
import groovyWalkAnimation from "./lottie_for_contact.json";




export const ContactsAnimation = () => {

    const style = {
        overflow: 'hidden',
        borderRadius: 100,
        width: 250,
        height: 280,
        margin:'0 auto',

    };

    const options = {
        animationData: groovyWalkAnimation,
        loop: true,
        autoplay: true,
    }

    const { View } = useLottie(options, style);

    return View;
}