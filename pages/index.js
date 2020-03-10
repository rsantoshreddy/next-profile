import './styles/app.scss';
import Layout from '../components/Layout/Layout';
import Home from './home/Home';

export default props => {
  return (
    <Layout>
      <Home></Home>
    </Layout>
  );
};
