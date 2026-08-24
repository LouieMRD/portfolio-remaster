import { useState } from "react";
import "../Projects.css";

const caseStudies = [
    {
        id: "film-platform",
        title: "Community Film Platform",
        kicker: "Web product · End-to-end design",
        summary:
            "A social film-review product designed from user needs through to a working, database-backed application.",
        role: "Product design, research and full-stack development",
        context: "Individual final-year major project",
        technologies: ["Figma", "User Testing", "Django", "PostgreSQL", "JavaScript"],
        images: [
            {
                src: "/images/case-studies/film-search.png",
                alt: "Final search results interface for the community film platform",
                caption: "Final search experience",
            },
            {
                src: "/images/case-studies/film-prototype.png",
                alt: "Early feed prototype showing reviews, recommendations and community profiles",
                caption: "Early Figma feed concept",
            },
            {
                src: "/images/case-studies/film-profile.png",
                alt: "Member profile prototype with reviews and threaded comments",
                caption: "Profile and discussion flow",
            },
            {
                src: "/images/case-studies/film-watchlist.png",
                alt: "Final watchlist interface using a visual poster grid",
                caption: "Personalised watchlist",
            },
        ],
        challenge:
            "Film websites contain a lot of information, but the community discussion can be " +
            "difficult to navigate, often finding itself migrating to other social networks. " +
            "not focused on Film. " + "I wanted to make a centralised hub of film discussion where" +
            "users can rate, review, and engage in critical conversation about the films they love (or hate).",
        approach:
            "I compared IMDb and Rotten Tomatoes to find core" +
            "features that film review platforms offer, but also looked at other social media platforms such as" +
            "X (formerly Twitter) where user discussions are placed at the forefront. This formed the core feature-set " +
            "of the website. I then developed the UI and tested by prompting the testers to perform or engage with the core " +
            "features.",
        stats: [
            { value: "3", label: "test participants" },
            { value: "19", label: "task prompts" },
            { value: "10", label: "heuristics reviewed" },
        ],
        findings: [
            {
                title: "Use explicit language",
                text: "The label “Log” made one participant hesitate before reviewing a film, so it became the clearer “Rate and Review”.",
            },
            {
                title: "Make ownership visible",
                text: "Editing and deleting personal reviews was difficult to find. A user’s own content needed stronger visual priority and clearer actions.",
            },
            {
                title: "Explain unfamiliar concepts",
                text: "Every participant needed clarification around taste similarity, showing that the metric needed contextual explanation.",
            },
        ],
        outcome:
            "The final application combined authentication, film search, reviews, ratings, comments," +
            " likes, follows, watchlists and moderation. Building the product, as well as designing," +
            "  taught me to involve technical constraints earlier and prioritise a coherent " +
            "core journey.",
    },
    {
        id: "feline-adoption",
        title: "Feline Adoption Agency",
        kicker: "Android product · Existing codebase",
        summary:
            "A mobile experience that helps adopters browse cats through structured filtering and focused detail screens.",
        role: "UI design, implementation and testing",
        context: "Android application extension",
        technologies: ["Mobile UI", "Jetpack Compose", "Kotlin", "Room", "MVVM"],
        images: [
            {
                src: "/images/case-studies/cats-core.png",
                alt: "Feline Adoption Agency home, results and cat detail screens",
                caption: "Core browse-to-detail journey",
            },
            {
                src: "/images/case-studies/cats-filter.png",
                alt: "Cat results screens and distance filter control",
                caption: "Structured filtering controls",
            },
            {
                src: "/images/case-studies/cats-account.png",
                alt: "Profile editing and login interfaces",
                caption: "Focused account screens",
            },
            {
                src: "/images/case-studies/cats-register.png",
                alt: "Registration form and completed profile interface",
                caption: "Registration and profile flow",
            },
        ],
        challenge:
            "The app needed breed, gender, age, region and distance filters " +
            "without overwhelming a small mobile screen. The UI also had to stay consistant through" +
            "different screens while working with new technologies. ",
        approach:
            "I grouped filtering controls above a reusable grid of cat cards, kept detail screens " +
            "visually focused and used shared navigation and form components. ViewModels held " +
            "UI state while Room modelled cats and fosterers separately, reducing duplication " +
            "and keeping screen logic clearer.",
        stats: [
            { value: "5", label: "filter options" },
            { value: "3", label: "core browse screens" },
            { value: "1", label: "shared UI language" },
        ],
        findings: [
            {
                title: "Separate dense information",
                text: "Keeping controls and cat cards in clearly defined areas " +
                    "to prevent result screens from being visually cluttered.",
            },
            {
                title: "User focused design",
                text: "Making the design user focused allowed for easiernavigation and user flow",
            },
            {
                title: "Document incomplete work",
                text: "Use-case testing showed that distance controls appeared correctly " +
                    "but did not filter reliably, so I recorded it as an unresolved" +
                    " feature rather than presenting it as complete.",
            },
        ],
        outcome:
            "The delivered app supported browsing, cat and fosterer details, " +
            "multi-criteria search, account flows and local persistence (as was permitted by the brief)" +
            ". The project " +
            "strengthened my ability to extend an unfamiliar code-base and showed why " +
            "interface patterns and navigation architecture should be planned together.",
    },

    {
        id: "card-game",
        title: "Card Game",
        kicker: "Group Work · Database Backed",
        summary:
            "An online card game that used save states to return to game layouts, account functionality, and deck customisation.",
        role: "Repository maintainer, researcher and coder",
        context: "Second-year university project",
        technologies: ["PHP", "PostgreSQL", "JavaScript", "AJAX"],
        images: [
            {
                src: "/images/case-studies/card-field.png",
                alt: "Card game being played",
                caption: "Playing field for the cards",
            },
            {
                src: "/images/case-studies/card-settings.png",
                alt: "...",
                caption: "Settings menu",
            },
            {
                src: "/images/case-studies/card-options.png",
                alt: "...",
                caption: "",
            },

        ],
        challenge:
            "The website had a brief outlining the core features required, as well as requiring " +
            "extensive documentation covering our research, design decisions (and their " +
            "justifications), and testing. We worked in a group of eight, so therefore had to " +
            "divide responsibilities effectively, communicate regularly, and coordinate " +
            "our work to ensure that every part of the project was completed on time.",
        approach:
            "We split the group into sub-groups, those who were more comfortable coding and those" +
            " who wanted to focus on the documentation and testing. We had two weekly meetings, and an " +
            "active group server chat, to discuss timelines, assign tasks, and assist one another in more" +
            " complex tasks. ",
        stats: [
            { value: "22", label: "User-requirements completed" },
            { value: "75%", label: "Module Mark" },
            { value: "2,414", label: "Lines of code written" },
        ],
        findings: [
            {
                title: "Clear Controls",
                text: "With so many controls such as deck shuffling, card rotation, and so one, " +
                    "providing information on how to perform these tasks is essential.",
            },
            {
                title: "Team Coordination",
                text: "To complete a project of this scale, we needed to make sure people always had a clear " +
                    "understanding of what was needed from them, and that they always had a task to complete.",
            },
            {
                title: "Make saved layouts reliable",
                text: "Saved layouts could contain a different number of cards from the" +
                    " active deck. The loading system therefore needed to handle mismatches " +
                    "safely without disrupting the game.",
            },
        ],
        outcome:
            "The completed application fulfilled 22 user requirements and provided a " +
            "customisable card-game experience with account functionality, persistent " +
            "preferences and reusable saved layouts. The project received a mark of 75% and " +
            "strengthened my experience in repository maintenance, collaborative development," +
            " testing and coordinating work across a team of eight.",
    },
];

const otherProjects = [
    {
        title: "Portfolio Website",
        description:
            "A responsive React portfolio with accessible navigation, light and dark themes, and reusable project presentation components.",
        technologies: ["React", "JavaScript", "HTML", "CSS"],
        url: "https://github.com/LouieMRD/portfolio",
    },
    {
        title: "Blender Animation",
        description:
            "A fun animation made in Blender about someone having a bad day, made for a University" +
            " module that required the video to have a certain number of numerous transition types.",
        technologies: ["Blender", "Blender Animation", "Blender Video-editor"],
        url: "https://youtu.be/4psKkB5ZIh4",
    },
    {
        title: "Yellow Car Detection",
        description:
            "A computer-vision program that detects yellow cars in images and video while suppressing duplicate detections.",
        technologies: ["Python", "OpenCV", "MobileNet SSD"],
    },
];

function Projects() {
    const [imageIndexes, setImageIndexes] = useState(
        Object.fromEntries(caseStudies.map((project) => [project.id, 0]))
    );
    const [openCaseStudy, setOpenCaseStudy] = useState(null);

    function changeImage(project, direction) {
        setImageIndexes((currentIndexes) => {
            const current = currentIndexes[project.id];
            const next = (current + direction + project.images.length) % project.images.length;

            return { ...currentIndexes, [project.id]: next };
        });
    }

    function toggleCaseStudy(projectId) {
        setOpenCaseStudy((current) => (current === projectId ? null : projectId));
    }

    return (
        <section className="projects-section" id="projects">
            <header className="projects-header">
                <p className="section-kicker">Selected work</p>
                <h2>Case Studies &amp; UI Work</h2>
                <p>
                    Projects showing how I move from user needs and early interface ideas to
                    tested, working products. Open the case study for the decisions behind
                    the designs and development decisions.
                </p>
            </header>

            <div className="case-studies-list">
                {caseStudies.map((project, projectIndex) => {
                    const activeImage = imageIndexes[project.id];
                    const isOpen = openCaseStudy === project.id;
                    const detailsId = `${project.id}-details`;

                    return (
                        <article className="case-study-card" key={project.id}>
                            <div className="case-study-summary">
                                <div className="case-study-visual">
                                    <img
                                        src={project.images[activeImage].src}
                                        alt={project.images[activeImage].alt}
                                    />

                                    <div className="carousel-bar">
                                        <button
                                            type="button"
                                            className="image-arrow"
                                            onClick={() => changeImage(project, -1)}
                                            aria-label={`Show previous ${project.title} image`}
                                        >
                                            <span aria-hidden="true">←</span>
                                        </button>

                                        <p aria-live="polite">
                                            {project.images[activeImage].caption}
                                            <span>{activeImage + 1} / {project.images.length}</span>
                                        </p>

                                        <button
                                            type="button"
                                            className="image-arrow"
                                            onClick={() => changeImage(project, 1)}
                                            aria-label={`Show next ${project.title} image`}
                                        >
                                            <span aria-hidden="true">→</span>
                                        </button>
                                    </div>

                                    <div className="carousel-dots" aria-hidden="true">
                                        {project.images.map((image, imageIndex) => (
                                            <span
                                                className={imageIndex === activeImage ? "active" : ""}
                                                key={image.src}
                                            />
                                        ))}
                                    </div>
                                </div>

                                <div className="case-study-copy">
                                    <p className="case-study-number">0{projectIndex + 1}</p>
                                    <p className="case-study-kicker">{project.kicker}</p>
                                    <h3>{project.title}</h3>
                                    <p className="case-study-description">{project.summary}</p>

                                    <dl className="case-study-meta">
                                        <div>
                                            <dt>Role</dt>
                                            <dd>{project.role}</dd>
                                        </div>
                                        <div>
                                            <dt>Context</dt>
                                            <dd>{project.context}</dd>
                                        </div>
                                    </dl>

                                    <div className="tech-list">
                                        {project.technologies.map((technology) => (
                                            <span key={technology}>{technology}</span>
                                        ))}
                                    </div>

                                    <button
                                        type="button"
                                        className="case-study-button"
                                        onClick={() => toggleCaseStudy(project.id)}
                                        aria-expanded={isOpen}
                                        aria-controls={detailsId}
                                    >
                                        {isOpen ? "Close case study" : "View case study"}
                                        <span aria-hidden="true">{isOpen ? "↑" : "↓"}</span>
                                    </button>
                                </div>
                            </div>

                            {isOpen && (
                                <div className="case-study-details" id={detailsId}>
                                    <div className="detail-columns">
                                        <div>
                                            <p className="detail-label">The challenge</p>
                                            <p>{project.challenge}</p>
                                        </div>
                                        <div>
                                            <p className="detail-label">My approach</p>
                                            <p>{project.approach}</p>
                                        </div>
                                    </div>

                                    <div className="case-study-stats" aria-label={`${project.title} project evidence`}>
                                        {project.stats.map((stat) => (
                                            <div key={stat.label}>
                                                <strong>{stat.value}</strong>
                                                <span>{stat.label}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="findings-section">
                                        <p className="detail-label">Key findings</p>
                                        <div className="findings-grid">
                                            {project.findings.map((finding, findingIndex) => (
                                                <div key={finding.title}>
                                                    <span>0{findingIndex + 1}</span>
                                                    <h4>{finding.title}</h4>
                                                    <p>{finding.text}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="case-study-outcome">
                                        <p className="detail-label">Outcome &amp; reflection</p>
                                        <p>{project.outcome}</p>
                                    </div>
                                </div>
                            )}
                        </article>
                    );
                })}
            </div>

            <header className="projects-header other-projects-header">
                <p className="section-kicker">Additional work</p>
                <h2>Other Projects</h2>
            </header>

            <div className="projects-grid">
                {otherProjects.map((project) => (
                    <article className="project-card" key={project.title}>
                        <h3>{project.title}</h3>
                        <p className="project-description">{project.description}</p>

                        <div className="tech-list">
                            {project.technologies.map((technology) => (
                                <span key={technology}>{technology}</span>
                            ))}
                        </div>

                        {project.url && (
                            <a className="project-link" href={project.url} target="_blank" rel="noreferrer">
                                View <span aria-hidden="true">↗</span>
                            </a>
                        )}
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Projects;
