import { blogPosts, socialLinks, projects } from "@/data";
import Link from "next/link";

export default function Home() {
  return (
    <main className="wrapper">
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
        <div className="flex md:hidden items-center gap-1 w-fit px-4 py-2 mb-4 rounded-full bg-white/3 hover:bg-white/6 transition-colors duration-200">
          {socialLinks.map(({ href, title, icon }) => (
            <a
              key={title}
              href={href}
              title={title}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 p-1.5 text-[#cccccc] hover:text-white transition-colors duration-200 rounded-md hover:bg-white/10"
              dangerouslySetInnerHTML={{ __html: icon }}
            ></a>
          ))}
        </div>
        <p className="text-red-600 text-2xl md:text-3xl mb-8 block">
          {"<"}
          <span className="text-white font-semibold italic p-4">
            Rust 🦀 · Solana ⚓ · On-chain Security 🔐
          </span>
          {"/>"}
        </p>
        <p className="mb-6">
          Hi there, I am Mercy! A frontend developer and a solana smart contract
          developer with interest in security researching. I am currently
          building EasyHaven - a decentralized property management and rust
          projects.
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
          on the Solana blockchain. My choice of blockchain was first due to
          community support and engagment and then it became cemented learning
          about Solana has a fast and cheap layer 1 blockchain as well as it
          recent adoption by big companies moving to blockchain technology.
        </p>
        <p className="mb-6">
          Over the past year, I have participated in local solana hackathon
          organized by{" "}
          <a href="https://x.com/SuperteamNG" target="_blank">
            <span className="highlight-text">SuperteamNG</span>
          </a>
          , solana bootcamps at{" "}
          <a href="https://x.com/solanaturbine" target="_blank">
            <span className="highlight-text">Turbine</span>
          </a>{" "}
          and recently started documenting my challenges and project on{" "}
          <a href="https://medium.com/@mercyadams" target="_blank">
            <span className="highlight-text">Medium.</span>
          </a>{" "}
          Writing a secured solana programs with Rust, Anchor, Pinocchio has
          always been my priority thereby creating interest in security
          researching with the aim of writing less vulnerable programs.
        </p>
        <p className="mb-6">
          Writing logic spikes my interest these days leading me to focus more
          on blockchain. I am learning more on Solana development languages,
          library, frameworks. So much to learn{" "}
          <span className="text-red-600">:)</span>
        </p>
      </section>
      <section>
        <div className="flex justify-between items-center  mb-8">
          <h3 className="heading-2">Writings</h3>
          <Link href="/blog" className="link">
            view all write-ups
          </Link>
        </div>
        <div className="flex flex-col gap-8">
          {blogPosts.slice(0, 3).map((post, index) => (
            <div className="flex flex-col gap-4" key={index}>
              <a href={post.link} target="_blank" rel="noopener noreferrer">
                <h5 className="title">
                  {post.title}{" "}
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="title-icon"
                  >
                    <path d="M3.293,20.707a1,1,0,0,1,0-1.414L17.586,5H12a1,1,0,0,1,0-2h8a1,1,0,0,1,1,1v8a1,1,0,0,1-2,0V6.414L4.707,20.707a1,1,0,0,1-1.414,0Z" />
                  </svg>
                </h5>
              </a>
              <div className="subtitle">{post.excerpt}</div>
            </div>
          ))}
        </div>
      </section>
      <section>
        <div className="flex justify-between items-center mb-8">
          <h3 className="heading-2">Projects</h3>
          <Link href="/projects" className="link">
            view all projects
          </Link>
        </div>
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-8">
              <h5 className="title">Rust and Solana developer</h5>
              <div className="tech-tags">
                <span className="tech-tag">Rust</span>
                <span className="tech-tag">Anchor</span>
                <span className="tech-tag">Pinocchio</span>
                <span className="tech-tag">LiteSVM</span>
                <span className="tech-tag">Solana Explorer</span>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              {projects.map((project, i) => (
                <div className="flex flex-col gap-4" key={i}>
                  <a
                    href={project.githubLink}
                    title="github"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-title"
                  >
                    <p>{project.name} </p>
                    <svg
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      data-name="Layer 1"
                    >
                      <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z" />
                    </svg>
                  </a>
                  <p>{project.description}</p>
                </div>
              ))}
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
                    <a href="https://app.plug.ng/" target="_blank">
                      <span className="highlight-text">PlugNg</span>,{" "}
                    </a>
                    <a href="https://events.plug.ng/" target="_blank">
                      <span className="highlight-text">PlugNg Event</span>,{" "}
                    </a>
                    <a href="https://agent.plug.ng/" target="_blank">
                      <span className="highlight-text">PlugNg Agent</span>,{" "}
                    </a>
                    <a href="https://business.plug.ng/" target="_blank">
                      <span className="highlight-text">PlugNg Business</span>,
                    </a>{" "}
                    <a href="https://shopnig.com/" target="_blank">
                      <span className="highlight-text">ShopNig</span>
                    </a>
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
