import { useEffect } from 'react'
import css from './TouchLogin.module.css'
import { Link } from 'react-router-dom'

export default function TouchLogin() {
    useEffect(() => {
        document.body.classList.add('login-body')
        return () => {
            document.body.classList.remove('login-body')
        }
    }, [])

    return (
        <>
            <h1>Log in to Your Account</h1>
            <div className={css['login-wrapper']}>
                <form>
                    <p id={css.userPinDummy}></p>
                    <ul className={css.keypad}>
                        <li><a id="key-1">1</a></li>
                        <li><a id="key-2">2</a></li>
                        <li><a id="key-3">3</a></li>
                        <li><a id="key-4">4</a></li>
                        <li><a id="key-5">5</a></li>
                        <li><a id="key-6">6</a></li>
                        <li><a id="key-7">7</a></li>
                        <li><a id="key-8">8</a></li>
                        <li><a id="key-9">9</a></li>
                        <li><a id="key-0">0</a></li>
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