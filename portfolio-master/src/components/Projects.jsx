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
                caption: "Recognition-focused watchlist",
            },
        ],
        challenge:
            "Film websites contain a lot of information, but the community discussion can be difficult to navigate. I wanted to make searching, reviewing and interacting with other viewers feel like one connected journey rather than a collection of separate features.",
        approach:
            "I compared IMDb and Rotten Tomatoes, created user profiles for casual viewers, active community members and moderators, mapped access-specific navigation, then developed the interface in Figma. I reviewed it against Nielsen’s usability heuristics before testing key tasks with users.",
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
            "The final application combined authentication, film search, reviews, ratings, comments, likes, follows, watchlists and moderation. Building the product as well as designing it taught me to involve technical constraints earlier and prioritise a coherent core journey.",
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
            "The app needed breed, gender, age, region and distance filters without overwhelming a small screen. New account and fosterer journeys also had to feel consistent with an interface and codebase I had not originally created.",
        approach:
            "I grouped filtering controls above a reusable grid of cat cards, kept detail screens visually focused and used shared navigation and form components. ViewModels held UI state while Room modelled cats and fosterers separately, reducing duplication and keeping screen logic clearer.",
        stats: [
            { value: "5", label: "filter dimensions" },
            { value: "3", label: "core browse screens" },
            { value: "1", label: "shared UI language" },
        ],
        findings: [
            {
                title: "Separate dense information",
                text: "Keeping controls and cat cards in clearly defined areas prevented the results screen from becoming visually cluttered.",
            },
            {
                title: "Design with navigation state",
                text: "Account screens moved to a clear back action when combined navigation patterns created unreliable routes.",
            },
            {
                title: "Document incomplete work",
                text: "Manual testing showed that distance controls appeared correctly but did not filter reliably, so I recorded it as an unresolved feature rather than presenting it as complete.",
            },
        ],
        outcome:
            "The delivered app supported browsing, cat and fosterer details, multi-criteria search, account flows and local persistence. The project strengthened my ability to extend an unfamiliar product and showed why interface patterns and navigation architecture should be planned together.",
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
        title: "Database-Backed Card Game",
        description:
            "A team-built browser card game with user accounts, sessions and saved layouts that let players return to previous game states.",
        technologies: ["JavaScript", "jQuery", "PHP", "PostgreSQL"],
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
                <h2>Product Design &amp; UI Work</h2>
                <p>
                    Projects showing how I move from user needs and early interface ideas to
                    tested, working products. Open either case study for the decisions behind
                    the final screens.
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
                                View on GitHub <span aria-hidden="true">↗</span>
                            </a>
                        )}
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Projects;
