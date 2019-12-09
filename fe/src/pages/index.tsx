import { NextPage } from 'next';
import LoginPage from '../components/LoginPage/components/LoginPage';
import Head from '../components/Common/Header';

const Page: NextPage = () => {

  const base_path = process.env.NODE_ENV === "production"
  ? process.env.BASE_URL
  : process.env.BASE_URL_DEV;

  return (
    <>
      <Head />
      <LoginPage basePath={base_path} />
    </>
  );
}

export default Page;
