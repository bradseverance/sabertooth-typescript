import { Route } from 'react-router-dom'
import Home from '@pages/Home'
import About from '@pages/About'

export default (
    <>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
    </>
)