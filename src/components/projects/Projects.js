import "./projects.css";
import Dog from "../../assets/dog.png";

function Projects() {
    return (
        <div className="projects">
            <div className="container">
                <img src={Dog} alt="dog"/>
                <div className="discription">
                    <h1 className="heading text-[2.35rem] font-bold">OUR PROJECT AND ECOSYSTEM</h1>
                    <p className="text-base text-[#7e7e7e]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <p className="text-base">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and</p>
                </div>
            </div>
        </div>
    )
}

export default Projects;