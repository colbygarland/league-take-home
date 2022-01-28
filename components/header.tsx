import Head from 'next/head';
import Link from 'next/link';
import { APP_NAME } from '../constants';
import { SearchForm } from './searchForm';

export const Header = () => (
  <>
    <Head>
      <title>{APP_NAME}</title>
    </Head>
    <header className="py-4 px-6 mb-20 shadow">
      <div className="flex justify-between">
        <h1 className="text-3xl">
          <Link href="/">{APP_NAME}</Link>
        </h1>
        <SearchForm />
      </div>
    </header>
  </>
);
