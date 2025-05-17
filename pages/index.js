import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>BlueImpact Sites</title>
      </Head>
      <main className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 p-6 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-blue-800 mb-4">
          BlueImpact Sites
        </h1>
        <p className="text-lg md:text-xl text-blue-900 max-w-xl mb-8">
          Elevate your business with a custom website designed by <span className="font-semibold">Webs by Thomas</span>. Affordable, fast, and professional.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-xl font-bold mb-2">Basic - $15</h2>
            <ul className="text-sm text-gray-700 mb-4 text-left">
              <li>✔ 1 Page Design</li>
              <li>✔ Responsive Layout</li>
              <li>✔ Delivery in 2 Days</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 border-4 border-blue-500">
            <h2 className="text-xl font-bold mb-2">Standard - $30</h2>
            <ul className="text-sm text-gray-700 mb-4 text-left">
              <li>✔ 3 Page Design</li>
              <li>✔ Responsive + Contact Form</li>
              <li>✔ Delivery in 4 Days</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-xl font-bold mb-2">Premium - $60</h2>
            <ul className="text-sm text-gray-700 mb-4 text-left">
              <li>✔ 5 Pages + Features</li>
              <li>✔ Contact + WhatsApp + Social</li>
              <li>✔ Delivery in 6 Days</li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
