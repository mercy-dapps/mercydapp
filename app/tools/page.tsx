import { learning, exploring } from "@/data";

export default function page() {
  return (
    <main className="wrapper">
      <section>
        <div className="flex justify-between items-center mb-8">
          <h3 className="heading-2">Tools</h3>
        </div>
        <div className="page-summary">
          As a developer, there is no end to the tools we use. Learning how to
          use tools for more efficiency and productivity is becoming inevitable
          as well. I have listed below tools I use often and rarely. I am able
          to work with any of these tools and pick up new ones if the need
          arises. My frontend skils majorly revolves around{" "}
          <span className="tool-lang">Nextjs</span>,{" "}
          <span className="tool-lang">Typescript</span>,{" "}
          <span className="tool-lang">Sass</span>,{" "}
          <span className="tool-lang">Tailwind Css</span> while Solana skills
          revolves around but not limited to{" "}
          <span className="tool-lang">Rust</span>,{" "}
          <span className="tool-lang">Anchor</span>,{" "}
          <span className="tool-lang">Pinocchio</span>.
        </div>
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-8">
            <h5 className="title title--tool cursor-default!">Learning:</h5>
            <div className="flex flex-col gap-2">
              <ul>
                {learning.map((l, index) => (
                  <li
                    key={index}
                    className="list-disc! list-inside capitalize"
                  >
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <h5 className="title title--tool cursor-default!">
              Exploring Repositories:
            </h5>
            <div className="flex flex-col gap-2">
              <ul>
                {exploring.map((e, index) => (
                  <li key={index} className="list-disc! list-inside capitalize">
                    <a href={e.link} target="_blank" className="highlight-text">
                      {e.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
