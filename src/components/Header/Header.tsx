import "./Header.css";
import Girl from "@assets/girl.svg";
import Baikal from "@assets/Baikal.svg";
import GirlAndBoy from "@assets/girl_and_boy.svg";

export default function Header() {
  return (
    <main>
      <header className="header">
        <div className="wrapper">
          <img src={Girl} alt="Girl" className="girlImage" />
          <img src={Baikal} alt="Baikal" className="baikalImage" />
          <div className="name">
            <p>Байкал Хэлэн</p>
            <p>Baikal Language</p>
            <p>Язык Байкала</p>
          </div>
          <img src={GirlAndBoy} alt="GirlAndBoy" className="girlAndBoyImage" />
        </div>
      </header>
    </main>
  );
}
