import { useFetchProjects } from "./fetchProjects";

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
                    const { title, url, id, img } = project;
                    return (
                        <a
                            key={id}
                            href={url}
                            target="_blank"
                            rel="noreferrer"
                            className="project"
                        >
                            <img src={img} alt={title} className="img" />
                            <h5>{title}</h5>
                        </a>
                    );
                })}
            </div>
        </section>
    );
};

export default Projects;
