// pages/index.tsx
import Head from "next/head";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Head>
        <title>Coming Soon</title>
        <meta name="description" content="Coming Soon Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-center">
        <h1 className="text-4xl font-bold mb-4 main-text">Coming Soon</h1>
        <p className="main-text">Stay tuned for our feature, launching soon!</p>
      </main>
    </div>
  );
};

export default Home;
