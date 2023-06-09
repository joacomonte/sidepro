import { type NextPage } from "next";
import Head from "next/head";
import {useSession } from "next-auth/react";
import { useTypewriter } from "react-simple-typewriter";

const Home: NextPage = () => {

  const { data: sessionData } = useSession();

  const [text] = useTypewriter({
    words: ['Creativity', 'Snowboard', 'Photography', 'Coding'],
    loop: 0
  })

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="indexMain">
        <div className="indexContainer">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Hello I&#39;m Joaco 👋
          </h1>
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[4.5rem]">
              <span id='typewriter' >I like</span>
              <span className="typeWrittingColor">
                &nbsp;{text}
              </span>
          </h1>
          {sessionData && <h3 className="text-white sm:text-[1.5rem]">Bienvenido {sessionData.user?.name}</h3>}
        </div>
        
      </main>
    </>
  );
};

export default Home;


