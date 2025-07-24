import { useEffect, useState } from 'react';
import css from './TouchLogin.module.css'
import { Link } from 'react-router-dom'

export default function TouchLogin() {
    const [pin, setPin] = useState('');

    useEffect(() => {
        document.body.classList.add('login-body')
        return () => {
            document.body.classList.remove('login-body')
        }
    }, [])

    function handleKeyPadClick(keyPad: number) {
        if (pin.length < 6) {
            setPin(prev => prev + keyPad.toString());
        }
    }

    return (
        <>
            <h1>Log in to Your Account</h1>
            <div className={css['login-wrapper']}>
                <form>
                    <p id={css.userPinDummy}>{'*'.repeat(pin.length)}</p>
                    <ul className={css.keypad}>
                        {[1,2,3,4,5,6,7,8,9,0].map(digit => (
                            <li key={digit}>
                                <a onClick={() => handleKeyPadClick(digit)}>{digit}</a>
                            </li>
                        ))}
                        <li><a id={css.formReset}>Clear</a></li>
                    </ul>
                    <div className={css['campus-wrapper']}>
                        <label>Campus</label>
                        <select name='selectedCampus'>
                            <option value="">Please Select Campus</option>
                            <option>Syracuse - IN</option>
                            <option>Roxboro - NC</option>
                            <option>Wayfair Castlegate</option>
                            <option>Overstock 3PL</option>
                        </select>
                    </div>
                    <div className={css['info-wrapper']}>
                        Enter your six digit PIN to login.
                    </div>
                </form>
            </div>
            <Link className={css['forgot-credentials']} to='/forgot-credentials'>Forgot Pin?</Link>
            <Link to='/login'>Standard Login</Link>
        </>
    )
}