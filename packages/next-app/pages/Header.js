import Head from "next/head";

function Header() {
  return (
    <Head>
      <title>Sign On web3</title>
      <meta
        name="description"
        content="Sign on web3! 💜"
      />
      <link rel="icon" href="/unicorn.png" />
      <meta property="og:title" content="🦄 Sign On web3" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://web3starterkit.vercel.app/" />
      <meta property="og:site_name" content="🦄 Sign On web3"></meta>
      <meta
        property="og:description"
        content="A quick starter to build on Ethereum and Polygon! 💜"
      />
    </Head>
  );
}

export default Header;
