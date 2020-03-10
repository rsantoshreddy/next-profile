import Router from 'next/router';
import NProgress from 'nprogress';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};
Router.onRouteChangeError = () => {
  NProgress.done();
};

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <NavBar />
      {children}
      <footer>&copy; {new Date().getFullYear()}</footer>
    </div>
  );
};
export default Layout;
