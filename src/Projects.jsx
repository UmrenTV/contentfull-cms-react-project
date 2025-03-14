import { useFetchProjects } from "./fetchProjects";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
    const { loading, projects } = useFetchProjects();
    console.log(loading, projects);

    if (loading) {
        return (
            <section className="projects">
                <h2>Loading...</h2>;
            </section>
        );
    }
    return (
        <section className="projects">
            <div className="title">
                <h2>projects</h2>
            </div>
            <div className="underline"></div>
            <div className="projects-center">
                {projects.map((project) => {
                    const { title, url, id, img, github } = project;
                    return (
                        <a
                            key={id}
                            href={url}
                            target="_blank"
                            rel="noreferrer"
                            className="project"
                        >
                            <img src={img} alt={title} className="img" />
                            <div className="projects-footer">
                                <h5>{title}</h5>
                                <a href={github} target="_blank">
                                    <FaGithub className="projects-footer-icon" />
                                </a>
                            </div>
                        </a>
                    );
                })}
            </div>
        </section>
    );
};

export default Projects;
