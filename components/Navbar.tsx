import Link from "next/link";

export default function Navbar() {
  return (
    <nav className=" border-b border-[#525252]">
      <div className="container flex justify-between gap-4 h-32 items-center">
        <div className="flex gap-20">
          <div className="font-bold">
            <span className="text-white text-[1.8rem]">
              {"{"}
              <a
                href="/"
                className="text-red-600 p-4"
                title="Solana Smart Contract Developer"
              >
                Mercy
              </a>
              {"}"}
            </span>
          </div>
          <ul className="flex gap-10">
            <li className="list">
              <Link href="/">Home</Link>
            </li>
            <li className="list">
              <Link href="/projects">Projects</Link>
            </li>
            <li className="list">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="list">
              <Link href="/tools">Tools</Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-4 items-center justify-center  border px-6 py-3 rounded-full">
          <a
            href=""
            title="github"
            target="_blank"
            rel="noopener noreferrer"
            className="icons"
          >
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
            >
              <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z" />
            </svg>
          </a>
          <a
            href=""
            title="mail"
            target="_blank"
            rel="noopener noreferrer"
            className="icons"
          >
            <svg
              fill="currentColor"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>mail</title>
              <path d="M64 128Q64 113 73 105 81 96 96 96L416 96Q431 96 440 105 448 113 448 128L448 144 256 272 64 144 64 128ZM256 328L448 200 448 384Q448 416 416 416L96 416Q64 416 64 384L64 200 256 328Z" />
            </svg>
          </a>
          <a
            href=""
            title="mail"
            target="_blank"
            rel="noopener noreferrer"
            className="icons"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </svg>
          </a>
          <a
            href=""
            title="mail"
            target="_blank"
            rel="noopener noreferrer"
            className="icons"
          >
            <svg
              fill="currentColor"
              viewBox="-2 -4 24 24"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMinYMin"
            >
              <path d="M2.372 3.264a.784.784 0 0 0-.252-.658L.252.339V0H6.05l4.482 9.905L14.472 0H20v.339L18.403 1.88a.472.472 0 0 0-.177.452v11.334a.472.472 0 0 0 .177.452l1.56 1.542V16H12.12v-.339l1.615-1.58c.159-.16.159-.207.159-.451V4.468L9.402 15.962h-.606L3.566 4.468v7.704c-.043.324.064.65.29.884l2.101 2.568v.338H0v-.338l2.1-2.568a1.03 1.03 0 0 0 .272-.884V3.264z" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
}
