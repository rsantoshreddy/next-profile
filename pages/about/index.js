import Link from 'next/link';
import Layout from '../../components/Layout/Layout';

export default props => {
  return (
    <Layout>
      <h1>About page</h1>
      <Link href='/'>
        <a>Home page</a>
      </Link>
    </Layout>
  );
};
