import {useEffect, useState} from "react";

function Home() {
    const [commits, setCommits] = useState([]);

    useEffect(() => {
        fetch("https://api.github.com/repos/LouieMRD/portfolio/commits")
            .then((response) => response.json())
            .then((data) => {
                if (Array.isArray(data)) {
                    setCommits(data.slice(0, 7));
                } else {
                    console.error("GitHub returned an error:", data);
                }
            })
            .catch((error) => {
                console.error("Error fetching commits:", error);
            });
    }, []);

    return (
        <section className="welcome_text_container">
            <div className="welcome_text">
                <p id="intro_text_top">
                    Hello, my name is
                </p>

                <div className="shadow-dance-container">
                    <h1 className="shadow-dance-text">Louie</h1>
                </div>

                <h3 id="web_dev">
                    Product-focused designer &amp; developer
                </h3>

                <p id="desc_text">
                    I turn user needs into clear, accessible interfaces and then
                    bring them to life in working products. My case studies cover
                    research, flows, prototyping, usability testing and front-end
                    implementation across web and mobile projects.
                </p>

                <div className="intro_buttons">
                    <a href="#projects" className="btn btn-primary-proj animated-project-btn">
                        <span className="btn-text">Case Studies</span>

                        <span className="material-symbols-outlined project_icon">
                            folder_open
                        </span>
                    </a>

                    <a href="#contact" className="btn btn-secondary-contact">
                        Contact
                    </a>
                </div>
            </div>

            <div className="secondary_home_container">
                <div className="project_text">
                    <div className="changelog-card">
                        <h2>Latest Site Updates</h2>


                        <ul>
                            {commits.map((commit) => (
                                <li key={commit.sha}>
                                    <a
                                        href={commit.html_url}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {commit.commit.message.split("\n")[0]}
                                    </a>

                                    <span className="commit-date"><span> - </span>
                                         {new Date(commit.commit.author.date).toLocaleDateString("en-GB", {
                                            day: "numeric",
                                            month: "short",
                                            year: "numeric"
                                        })}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;
