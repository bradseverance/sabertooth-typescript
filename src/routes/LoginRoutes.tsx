import { Route } from 'react-router-dom'
import Login from '@pages/login/Login'
import TouchLogin from '@pages/login/TouchLogin'

export default (
    <>
        <Route path='login' element={<Login />} />
        <Route path='touch-login' element={<TouchLogin />} />
    </>
)