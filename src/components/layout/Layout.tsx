import React, { type ReactNode } from 'react';
// import Navbar from '../Navbar/Navbar';
import NavbarMobile from '../NavbarMobile/NavbarMobile';

export default function Layout({ children }: { children: ReactNode }): JSX.Element {
  return (
    <div>
      <NavbarMobile />
      <div>{children}</div>
    </div>
  );
}
