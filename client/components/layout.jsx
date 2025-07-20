import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header';
import Navbar from './navbar';
import Footer from './footer';

export default function Layout() {
  return (
    <>
      <Header />
      <Navbar/>
      <main >
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
