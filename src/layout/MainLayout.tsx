import { Outlet } from 'react-router-dom';
import DynamicTitle from '../components/meta/DynamicTitle';
import MainHeader from '../components/layout/MainHeader';
import Footer from '../components/layout/Footer';

export default function MainLayout() {
  return (
    <>
        <DynamicTitle />
        <MainHeader />
        <Outlet />
        <Footer />
    </>
  )
}
