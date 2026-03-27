export default function page() {
  return (
    <main className="container">
      <section>
        <div className="flex justify-between items-center">
          <h3 className="heading-2">Writings</h3>
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
    </main>
  );
}
