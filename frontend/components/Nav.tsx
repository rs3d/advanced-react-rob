import Link from "next/link";

const linkStyle = {
  margin: 10
};

const Nav = () => (
  <nav>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/blog">
      <a style={linkStyle}>Blog</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
  </nav>
);

export default Nav;
