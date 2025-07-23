import { useEffect } from 'react'
import css from './Login.module.css'



export default function Login() {
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
                    <div className={css['login-input-wrapper']}>
                        <input className={css['login-input']} type='text' placeholder='Username' />
                    </div>
                    <div className={css['login-input-wrapper']}>
                        <input className={css['login-input']} type='password' placeholder='Password' />
                    </div>
                    
                </form>
            </div>
        </>  
    )
}