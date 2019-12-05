import { NextPage } from 'next';
import LoginPage from '../components/LoginPage/components/LoginPage';
import Head from '../components/Common/Header';

const Page: NextPage = () => {

  const base_path = "http://localhost:3000";

  return (
    <>
      <Head />
      <LoginPage basePath={base_path} />
    </>
  );
}

export default Page;
