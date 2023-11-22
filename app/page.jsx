import Link from "next/link";

const Homepage = () => {
  return (
    <div>
      <h1>Welchome to Leo Multimedia</h1>
      <ul>
        <li style={{ display: "flex", flexDirection: "column" }}>
          <Link href='/'>Home</Link>
          <Link href='/about'>About</Link>
          <Link href='/about/team'>Team</Link>
        </li>
      </ul>
    </div>
  )
}

export default Homepage;
