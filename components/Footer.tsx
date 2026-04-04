import React from "react";

export default function Footer() {
  return (
    <footer className=" border-t border-[#525252]">
      <div className="flex flex-col items-center justify-center gap-4 p-20  text-2xl">
        <p className="text-center">
          <span className="text-[#ff1b2e]">&copy;</span>{" "}
          {new Date().getFullYear()} Mercy Adams. All rights reserved.
        </p>
        <p className="text-center">
          Source code:{" "}
          <a
            href="https://github.com/mercy-dapps"
            target="_blank"
            className="underline"
          >
            https://github.com/mercy-dapps
          </a>
        </p>
        <p className="text-center">
          Aside coding, I bake, read and have interest in exploring places{" "}
          <span className="text-red-600">:)</span>
        </p>
      </div>
    </footer>
  );
}
