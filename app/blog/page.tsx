import { blogPosts } from "@/data";

export default function page() {
  return (
    <main className="wrapper">
      <section>
        <div className="flex justify-between items-center mb-8">
          <h3 className="heading-2">Writings</h3>
        </div>
        <div className="page-summary">
          I am getting better at documenting my learning through writing.
          Writing helps me understand the problem I am trying to solve better as
          well as finding a solution to it. Documenting it help others avoid
          unneccessary delay or road block in dealing with such issue. My frist
          article was on dev.to where I wrote on data fetching and it got lots
          of view and reactioon than I expected. First write up{" "}
          <a
            href="https://dev.to/m_adams1909/data-fetching-with-axios-in-react-made-simple-2jei"
            target="_blank"
          >
            <span className="highlight-text">here.</span>
          </a>
        </div>
        <div className="flex flex-col gap-8">
          {blogPosts.map((post, index) => (
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
    </main>
  );
}
