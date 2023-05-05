import Navbar from '../Navbar/Navbar';

 
export default function Layout({ children }): JSX.Element {
  return (
    <div>
        <Navbar/>
        <div>{children}</div>
    </div>

  );
}