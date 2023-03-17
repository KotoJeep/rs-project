import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Layout = () => {
  return (
    <>
      <Header />
      <main className="main-content">
        {/*<Container maxWidth="xl" className="main-wrapper">*/}
        <Outlet />
        {/*</Container>*/}
      </main>
    </>
  );
};
export default Layout;
