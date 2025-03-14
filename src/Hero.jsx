import heroImg from "./assets/hero.svg";

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-center">
                <div className="hero-title">
                    <h1>Portfolio</h1>
                    <p>
                        These are some of the projects that I've recently built
                        using React, Next,Typescript, Redux Toolkit, Context
                        API, React Query, Axios, Apollo, Contenful CMS,
                        Tailwind, ShadncnUI, Bootstrap, RTL, Vitest, etc.
                    </p>
                    <p>
                        Most of the projects are fundamental, and they are used
                        as building blocks for more complex projects, or
                        examples of how to use certain libraries.
                    </p>
                </div>
                <div className="img-container">
                    <img src={heroImg} alt="woman and a browser" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
