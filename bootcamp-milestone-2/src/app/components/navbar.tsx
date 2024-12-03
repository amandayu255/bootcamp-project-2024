import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    // NOTE: we use "class" in HTML but React is quirky so we have to
    // change all the "class" to "className"
    <header className={style.navbar}>
      <h1> Amanda's Personal Website </h1>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/blogs">Blogs</Link>
        <Link href="/resume">Resume</Link>
        <Link href="/about">Contact Me</Link>
        {/* More Links ... */}
      </nav>
    </header>
  );
}
