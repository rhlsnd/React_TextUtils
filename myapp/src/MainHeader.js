

import Footer from './Components/Footer';
import Header from './Components/Header';
import { Outlet } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <Header/>
      <Outlet />
      <Footer/>
      
    </div>
  )
}
