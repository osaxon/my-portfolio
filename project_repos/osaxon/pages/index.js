import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      
      <Head>
        <title>OSAXON</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex bg-blue-400 flex-wrap md:flex-nowrap md:justify-between w-full">
          <h1 className="w-full">Osaxon</h1>
          <ul className="flex bg-red-200 p-10 justify-evenly">
            <li>
              <Link href="/">
                <a>About me</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>My work</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
      </header>
      <main className="flex w-full bg-blue-50 flex-col flex-1 items-center justify-center">
      </main>

    </div>
  )
}
