import { useState } from "react";
import styles from './Logo.module.css'

export function Logo() {
    const logos = ['ฅ⁠^⁠•⁠ﻌ⁠•⁠^⁠ฅ', 'ฅ՞•ﻌ•՞ฅ', '🐾🤍', 'ദ്ദി（• ˕ •マ.ᐟ⁠', 'ᕱ⑅ᕱ'];

    const [number, setNumber] = useState(0);
    const [timeInterval, setTimeInterval] = useState(null);
    const [stop, setStop] = useState(false);

    const changeLogo = () => {

        setTimeInterval(setInterval(() => {
            setNumber((prev) => prev == 4 ? prev = 0 : prev + 1);
        }, 1000));
    };

    const pauseChangeLogo = () => {
        clearInterval(timeInterval);
    };

    const handleLogo = () => {
        setStop(!stop);
        stop ? pauseChangeLogo() : changeLogo();
    };


    return (
        <>
        <div className={styles['logo']}>
                <button
                    className={styles['logo']} onClick={handleLogo}
                >
                    {logos[number]}</button>
        </div >
            <div className={styles['hide']}>← Click me!
            </div>
        </>
    );

}
