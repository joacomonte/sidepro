import React, { type ReactNode } from 'react';
import Navbar from '../Navbar/Navbar';

export default function Layout({ children }: { children: ReactNode }): JSX.Element {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
    </div>
  );
}
