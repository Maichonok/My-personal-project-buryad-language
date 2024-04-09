import "../project.css";
import Girl from "../assets/girl.svg";

export default function Home() {
  return (
    <main>
      <header className="header">
        <img src={Girl} alt="Girl" className="girlImage" />
      </header>
      <p>Welcome to my platform!</p>
    </main>
  );
}
