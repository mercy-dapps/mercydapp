import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="container">
      <section>
        <div className="float-left mr-8 mb-8">
          <div className="w-64 h-64 rounded-xl overflow-hidden shadow-lg border-4 border-red-600">
            <img
              id="profileImg"
              src="/images/mercy.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <h3 className="heading">Mercy Adams</h3>
        <p className="text-red-600 text-[1.8rem] mb-8 block">
          {"<"}
          <span className="text-white font-semibold italic p-4">
            Solana Smart Contract Developer and Frontend Developer
          </span>
          {"/>"}
        </p>
        <p className="mb-6">
          Hi there, I am Mercy! A frontend developer and a solana smart contract
          developer with interest in security researching. I am currently
          building EasyHaven - a decentralized property management.
        </p>
        <p className="mb-6">
          With background in Computer science and over 4 years building scalable
          and efficient web applications, I have gained professional experience
          building production ready applications. Over the period of 4 years as
          a frontend developer, I have built applications across fintech,
          ecommerce and healthcare management system.
        </p>
        <p className="mb-6">
          Recently, I have been drawn towards blockchain technology with focus
          on the Solana blockchain. My choice of blockchain was firstly due to
          community support and engagment and then it became cemented learning
          about Solana has a fast and cheap layer 1 blockchain as well as it
          recent adoption by big companies moving to blockchain technology.
        </p>
        <p className="mb-6">
          Over the past year, I have participated in local solana hackathon by{" "}
          <span className="highlight-text">SuperteamNG</span>, solana bootcamps
          at <span className="highlight-text">Turbine</span> and recently
          started documenting my challenges and project on{" "}
          <span className="highlight-text">Medium.</span> Writing a secured
          solana programs with Rust, Anchor, Pinocchio has always been my
          priority thereby creating interest in security researching with the
          aim of writing less vulnerable programs.
        </p>
        <p className="mb-6">
          Writing logic spikes my interest these days leading me to focus more
          on blockchain. I am learning more on Solana development languages,
          library, frameworks. So much to learn{" "}
          <span className="text-red-600">:)</span>
        </p>
      </section>
      <section>
        <div className="flex justify-between items-center">
          <h3 className="heading-2">Writings</h3>
          <a href="" className="link">
            view all write-ups
          </a>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h5 className="title">
              RPC issues for Intel MacOs?{" "}
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="title-icon"
              >
                <path d="M3.293,20.707a1,1,0,0,1,0-1.414L17.586,5H12a1,1,0,0,1,0-2h8a1,1,0,0,1,1,1v8a1,1,0,0,1-2,0V6.414L4.707,20.707a1,1,0,0,1-1.414,0Z" />
              </svg>
            </h5>
            <div className="subtitle">
              I wrote about my approach in resolving an rpc issue after days of
              debugging with no clue before coming across the same issue on
              github where people profer different solutions.
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="title">
              EasyHaven — Optimization (Part II){" "}
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="title-icon"
              >
                <path d="M3.293,20.707a1,1,0,0,1,0-1.414L17.586,5H12a1,1,0,0,1,0-2h8a1,1,0,0,1,1,1v8a1,1,0,0,1-2,0V6.414L4.707,20.707a1,1,0,0,1-1.414,0Z" />
              </svg>
            </h5>
            <div className="subtitle">
              Code refactor does not end right? We keep optimizing our codebase
              either by adding new feature or refactoring existing codebase. In
              this article, I refactored some of the existing code after finding
              better ways of doing things.
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="title">
              EasyHaven — A decentralized housing/property management
              eliminating middle-men{" "}
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="title-icon"
              >
                <path d="M3.293,20.707a1,1,0,0,1,0-1.414L17.586,5H12a1,1,0,0,1,0-2h8a1,1,0,0,1,1,1v8a1,1,0,0,1-2,0V6.414L4.707,20.707a1,1,0,0,1-1.414,0Z" />
              </svg>
            </h5>
            <div className="subtitle">
              Building in public is something I want to do and this project seem
              a good way to start. I decided to work on a decentralized property
              managment platform after having faced some challenges which
              decentralization helps solve irrespective of the location.
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="title">
              Composability in DeFi{" "}
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="title-icon"
              >
                <path d="M3.293,20.707a1,1,0,0,1,0-1.414L17.586,5H12a1,1,0,0,1,0-2h8a1,1,0,0,1,1,1v8a1,1,0,0,1-2,0V6.414L4.707,20.707a1,1,0,0,1-1.414,0Z" />
              </svg>
            </h5>
            <div className="subtitle">
              An article submitted for content bounties on composability in
              Defi.
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="title">
              What is Web3?{" "}
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="title-icon"
              >
                <path d="M3.293,20.707a1,1,0,0,1,0-1.414L17.586,5H12a1,1,0,0,1,0-2h8a1,1,0,0,1,1,1v8a1,1,0,0,1-2,0V6.414L4.707,20.707a1,1,0,0,1-1.414,0Z" />
              </svg>
            </h5>
            <div className="subtitle">
              An article explaining the term web3 in a lane man lauguage. A go
              to writeup to get started with the basic understanding of web3.
              Ideal for beginners!
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="flex justify-between items-center">
          <h3 className="heading-2">Projects and Work Experiences</h3>
          <a href="" className="link">
            view all projects
          </a>
        </div>
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-8">
              <h5 className="title">Solana smart Contract developer</h5>
              <div className="tech-tags">
                <span className="tech-tag">Rust</span>
                <span className="tech-tag">Anchor</span>
                <span className="tech-tag">Pinocchio</span>
                <span className="tech-tag">LiteSVM</span>
                <span className="tech-tag">Solana Explorer</span>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <a
                  href=""
                  title="github"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-title"
                >
                  <p>EasyHaven </p>
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    data-name="Layer 1"
                  >
                    <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z" />
                  </svg>
                </a>
                <p>
                  A decentralized property/housing management eliminating
                  middle-men.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <a
                  href=""
                  title="github"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-title"
                >
                  <p>SoundHaven </p>
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    data-name="Layer 1"
                  >
                    <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z" />
                  </svg>
                </a>
                <p>
                  A decentralized streaming platform for music lovers and
                  artist.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-8">
              <h5 className="title">Frontend developer</h5>
              <div className="tech-tags">
                <span className="tech-tag">React</span>
                <span className="tech-tag">NextJs</span>
                <span className="tech-tag">Typescript</span>
                <span className="tech-tag">Sass</span>
                <span className="tech-tag">Tailwind css</span>
                <span className="tech-tag">Rest Api</span>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <a
                  href=""
                  title="github"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-title"
                >
                  <p>Wiseki Technologies </p>
                  <span>2023 - present</span>
                </a>
                <ul className="list-inside list-disc flex flex-col gap-4">
                  <li>
                    Resposible for building production ready web user interfaces
                  </li>
                  <li>Logic implementation ensuring better user experience</li>
                  <li>
                    Applications built includes:{" "}
                    <span className="highlight-text">PlugNg</span>,{" "}
                    <span className="highlight-text">PlugNg Event</span>,{" "}
                    <span className="highlight-text">PlugNg Agent</span>,{" "}
                    <span className="highlight-text">PlugNg Business</span>,{" "}
                    <span className="highlight-text">ShopNig</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
