import React, { useContext } from "react";
import Link from 'next/link';

interface LayoutProps {
  children: React.ReactNode
}

export default ({ children }: LayoutProps) => { 
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary">
        <i className="fas fa-bars fa-lg sidemenu-toggle-icon"></i>
        <Link className="navbar-brand" href="/" style={{ color: '#fff' }}>Custom Header</Link>
      </nav>
      <div className="container-fluid p-4">{ children }</div>
    </>
  );
}