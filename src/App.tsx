import "./App.css";

function App() {
  return (
    <div className="pipboy-container">
      <header className="pipboy-header">
        <h1 className="pipboy-title">
          <span className="blink">{">"}</span> PERSONAL INFORMATION TERMINAL
        </h1>
        <div className="status-bar">
          <span>STATUS: ONLINE</span>
          <span>|</span>
          <span>USER: MAXIME BOITEAU</span>
        </div>
      </header>

      <main className="pipboy-content">
        <section className="pipboy-section">
          <h2 className="section-title">{">"} ABOUT.EXE</h2>
          <div className="section-content">
            <p>
              {">"} Full Stack Developer
              <br />
              {">"} Location: Barcelona, Spain
              <br />
            </p>
            <p className="description">
              Hey, I’m Maxime — a software engineer who loves writing clean,
              thoughtful code and solving tricky problems. I care deeply about
              code quality, performance and learning something new every day. I
              like when technology feels elegant — not overcomplicated — and
              when good ideas turn into great products.
            </p>
          </div>
        </section>

        <section className="pipboy-section">
          <h2 className="section-title">{">"} PROJECTS.DAT</h2>
          <div className="section-content">
            <a
              className="project-link"
              target="_blank"
              href="https://rekacrypto-frontend.vercel.app/"
            >
              <div className="project-item">
                <h3>{"[PROJECT_01]"} Reka Crypto</h3>
                <p>
                  RekaCrypto delivers real-time crypto market sentiment at a
                  glance: tracking top coins, aggregating news and sentiment
                  signals, helping crypto enthusiasts to stay ahead of the curve
                  with clarity and speed.
                </p>
                <span className="project-status">[STATUS: IN_PROGRESS]</span>
              </div>
            </a>
            <a
              className="project-link"
              target="_blank"
              href="https://marketplace.visualstudio.com/items?itemName=Maxime.spc-commit-prefixer"
            >
              <div className="project-item">
                <h3>{"[PROJECT_02]"} SPC Commit Prefixer</h3>
                <p>
                  SPC Commit Prefixer helps teams keep their commit messages
                  consistent and professional. It automatically adds
                  project-specific prefixes, streamlining your workflow and
                  keeping Git history clean and organized — all with a single
                  click inside VS Code..
                </p>
                <span className="project-status">[STATUS: COMPLETED]</span>
              </div>
            </a>
            <a
              className="project-link"
              target="_blank"
              href="https://github.com/mboiteau"
            >
              <div className="project-item">
                <h3>To be continued...</h3>
                <p>
                  And many others that never saw the sunlight, but you can
                  explore them on my GitHub page.
                </p>
                <span className="project-status">[STATUS: IN_PROGRESS]</span>
              </div>
            </a>
          </div>
        </section>

        <section className="pipboy-section">
          <h2 className="section-title">{">"} SKILLS.SYS</h2>
          <div className="section-content">
            <div className="skill-grid">
              <div className="skill-item">{">"} JavaScript/TypeScript</div>
              <div className="skill-item">{">"} React/Next.js</div>
              <div className="skill-item">{">"} Node.js/Express</div>
              <div className="skill-item">{">"} SQL/NoSQL</div>
              <div className="skill-item">{">"} GraphQL</div>
              <div className="skill-item">{">"} Docker/GitHub Actions</div>
              <div className="skill-item">{">"} CI/CD</div>
            </div>
          </div>
        </section>

        <section className="pipboy-section">
          <h2 className="section-title">{">"} CONTACT.INI</h2>
          <div className="section-content">
            <div className="contact-list">
              <a
                href="mailto:maximeboiteau33@gmail.com"
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contact-icon">{"[EMAIL]"}</span>
                <span className="contact-text">maximeboiteau33@gmail.com</span>
              </a>
              <a
                href="https://github.com/mboiteau"
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contact-icon">{"[GITHUB]"}</span>
                <span className="contact-text">github.com/mboiteau</span>
              </a>
              <a
                href="https://www.linkedin.com/in/maximeboiteau/"
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contact-icon">{"[LINKEDIN]"}</span>
                <span className="contact-text">
                  linkedin.com/in/maximeboiteau
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="pipboy-footer">
        <p>
          © {new Date().getFullYear()} - MAXIME BOITEAU - ALL RIGHTS RESERVED
        </p>
        <p className="blink">_</p>
      </footer>
    </div>
  );
}

export default App;
