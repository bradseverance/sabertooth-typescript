import { useEffect } from 'react'
import css from './Login.module.css'
import { Link } from 'react-router-dom'



export default function Login() {
    useEffect(() => {
        document.body.classList.add('login-body')
        return () => {
            document.body.classList.remove('login-body')
        }
    }, [])

    return (
        <>
            <h1>Log In to Your Account</h1>
            <div className={css['login-wrapper']}>
                <form>
                    <div className={css['input-wrapper']}>
                        <input className={css['login-input']} type='text' placeholder='Username' />
                    </div>
                    <div className={css['input-wrapper']}>
                        <input className={css['login-input']} type='password' placeholder='Password' />
                    </div>
                    <div className={css['remember-me-wrapper']}>
                        <input type='checkbox' name='rememberMe' />
                        <label>Remember Me</label>
                    </div>
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
                    <div className={css['submit-wrapper']}>
                        <input type='submit' name='submitLogin' value='Submit' />
                        <span><Link to='forgot-password'>Forgot Password?</Link></span>
                    </div>                
                </form>
            </div>
            <Link to='/touch-login'>Touch Login</Link>
        </>  
    )
}