import { projects } from "@/data";

export default function page() {
  return (
    <main className="wrapper">
      <section>
        <div className="flex justify-between items-center mb-8">
          <h3 className="heading-2">Projects and Work Experiences</h3>
        </div>
        <div className="page-summary">
          Come explore some of the projects I have worked on, showcasing my
          skills and experience in frontend development. At the moment, You
          would find me working on personal Solana projects while building my
          solana development skills. Also, I am currently undergoing a Rust
          security bootcamp with Rektoff.
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
                <div className="project-title">
                  <p>Wiseki Technologies </p>
                  <span>2023 - present</span>
                </div>
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
