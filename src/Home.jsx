import React from "react";
import "./assets/style/home.css";
import "./assets/style/repo.css";
import bookImg from "./assets/images/material-symbols_menu-book.png";
import iconLogo from "./assets/images/material-symbols_award-star-rounded.png";
import playIcon from "./assets/images/material-symbols_play-arrow-rounded.png";
import bookIcon from "./assets/images/material-symbols_menu-book.png";
import awakeningLogo from "./assets/images/anthomkii_a_magician_student_who_send_a_spell_with_his_magical__6aa168b9-50d1-49bd-a934-2161c3bda70a 1.png";
import brownImg from "./assets/images/material-symbols_menu-book (1).png";
import magicImg from "./assets/images/bi_magic.png";

const Home = () => {
  return (
    <div>
      <main className="main">
        <header className="header">
          <nav className="nav">
            <a href="#">Home</a>
            <span className="col"></span>
            <a href="#">The Univers</a>
            <span className="col"></span>
            <a href="#">Books</a>
            <span className="col"></span>
            <a href="#">Enchanted Market</a>
            <span className="col"></span>
            <a href="#">Magic lessons</a>
            <span className="col"></span>
            <a href="#">Contact</a>
            <button className="btn button">
              Get the book <img src={bookImg} alt="Not Found Images" />
            </button>
          </nav>
        </header>
        <section className="section-page">
          <div className="pages">
            <div className="page page-1">
              <h2>The Arcane School</h2>
              <p>Immerse yourself in a world of magic and adventure!</p>
              <p className="text">
                Discover the School of Arcana, where the darkest secrets
                intertwine with mysterious
                <br /> powers. <br /> Welcome to the School of the Arcane, a
                bewitching place where young wizards and witches learn to master
                their magical powers. Explore rooms filled with puzzles, attend
                bewitching lessons and face fantastical creatures. Get ready to
                dive into a world of wonders and dangers!
              </p>
              <div className="icon-con">
                <img src={iconLogo} alt="Not Found Images" />
                <img src={iconLogo} alt="Not Found Images" />
                <img src={iconLogo} alt="Not Found Images" />
              </div>
            </div>
            <div className="border"></div>
            <div className="page page-2">
              <h2>The Quest for the Lost Orb</h2>
              <p>An epic adventure awaits!</p>
              <p className="text">
                Join the Quest for the Lost Orb and become the legendary hero
                the world needs. <br />
                <br /> The Quest for the Lost Orb is about to begin. An ancient
                prophecy speaks of a hero destined to find the Lost Orb, a
                powerful relic capable of restoring the balance between good and
                evil. Assemble a team of brave companions, explore distant
                lands, and face formidable opponents to fulfill your destiny.
              </p>
              <div className="icon-con">
                <img src={iconLogo} alt="Not Found Images" />
                <img src={iconLogo} alt="Not Found Images" />
                <img src={iconLogo} alt="Not Found Images" />
              </div>
            </div>
            <div className="border"></div>
            <div className="page page-3">
              <h2>The Alliance of Kingdoms</h2>
              <p>Forge alliances to save the kingdoms!</p>
              <p className="text">
                Unite with the kings and queens of the Kingdoms to repel the
                forces of darkness. <br />
                <br /> Darkness threatens to overwhelm the Realms. Join the
                Alliance of Kingdoms and forge bonds with the monarchs of
                enchanted lands. Strategize, develop your magical skills and
                prepare to face a demonic army. Your courage and determination
                will be the keys to preserving peace and prosperity in this
                fantastic universe.
              </p>
              <div className="icon-con">
                <img src={iconLogo} alt="Not Found Images" />
                <img src={iconLogo} alt="Not Found Images" />
                <img src={iconLogo} alt="Not Found Images" />
              </div>
            </div>
          </div>
        </section>
        <section className="section-powers">
          <div className="title-con">
            <h1>Arcane Academy: Awakening of Powers</h1>
            <div className="btnn">
              <button className="btn1">
                Watch the video <img src={playIcon} alt="Not Found Images" />
              </button>
              <button className="btn2">
                Play the Game <img src={bookIcon} alt="Not Found Images" />
              </button>
            </div>
          </div>
        </section>
        <section className="section-awakening">
          <img src={awakeningLogo} alt="Not Found Images" />
          <div className="text-awakening">
            <h1>The Awakening of the Powers</h1>
            <p>
              Immerse yourself in a world where magic is real, spells weave in
              the air, and adventure is at the end of every wand. Follow in the
              footsteps of a young magic student who discovers the hidden
              secrets of ancestral mysteries. The Awakening of Powers is the
              beginning of an extraordinary journey, where the fate of our hero
              and the balance of the kingdom rest in his hands. Embark on this
              spellbinding quest and join us on a magical journey beyond
              imagination. The adventure starts here.
            </p>
            <button className="button1">
              Get the book <img src={brownImg} alt="Not Found Images" />
            </button>
          </div>
        </section>
        <footer className="footer">
          <div className="footer-description">
            <div className="list">
              <ul>
                <li>Contact the Magical Academy:</li>
                <li>123 Magic Street, Enchanter's County, Arcane Kingdom</li>
                <li>Email : contact@academiedesarcanes.com</li>
                <li>Téléphone : +XX XXX XXX XXX</li>
                <li>We accept owl mail, as long as you don't spam us</li>
              </ul>
              <ul>
                <li>Useful links</li>
                <li>Home</li>
                <li>The Univers</li>
                <li>Books</li>
                <li>About the Author</li>
                <li>Contact</li>
              </ul>
            </div>
            <img src={magicImg} alt="Not Found Images" />
          </div>
          <div className="footer-end">
            <div className="footer-text">
              <p>Privacy Policy</p>
              <p>Terms of use</p>
            </div>
            <div className="footer-text2">
              <p>© 2023 Arcane Academy. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Home;