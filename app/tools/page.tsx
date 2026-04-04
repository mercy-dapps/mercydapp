import { projects, tools, learning, exploring } from "@/data";

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
          as well. I have listed below tools I use often and rarely. I am
          however able to work with any of these tools if the need arises. My
          frontend skils majorly revolves around React, Nextjs, Typescript,
          Sass, Tailwind Css while Solana skills revolves around but not limited
          to Rust, Anchor, Pinocchio.
        </div>
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-8">
            {tools.map((tool, index) => (
              <div className="flex flex-col gap-4" key={index}>
                <h5 className="title title--tool text-[#ff1b2e]!">
                  {tool.title}
                </h5>
                <p>{tool.usage}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-8">
            <h5 className="title title--tool cursor-default!">
              Side projects that was fun working on
            </h5>
            {Object.entries(projects).map(([category, projects], index) => (
              <div className="flex flex-col gap-8" key={index}>
                <h5 className="border rounded-xl px-4 py-2 w-fit font-bold text-2xl text-[#9a9a9a]">
                  {category}
                </h5>
                {projects.map((project, index) => (
                  <div className="flex flex-col gap-4" key={index}>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h5 className="title title--tool font-normal!">
                        {project.title}{" "}
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
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-8">
            <h5 className="title title--tool cursor-default!">Learning:</h5>
            <div className="flex flex-col gap-2">
              <ul>
                {learning.map((l, index) => (
                  <li
                    key={index}
                    className="list-disc! list-inside capitalize font-bold"
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
