import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function ProjectForm() {

    const [project, setProject] = useState({
        title: "",
        description: "",
        goal: 0,
        image: "",
        date_end: "",
    });

    const history = useHistory();   

    const handleChange = (e) => {
        const { id, value } = e.target;
        setProject((prevProject) => ({
            ...prevProject,
            [id]: value,
        }));
    };

    const postData = async () => {
        const token = window.localStorage.getItem("token")
        
        const response = await fetch(
            `${process.env.REACT_APP_API_URL}/projects/`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${token}`
            },
            body: JSON.stringify(project),
            }
            );
            return response.json();
    };
        

    const handleSubmit = (e) => {
        e.preventDefault();
        postData().then((response) => {
            console.log(response)
            setProject("project", response.project);
            console.log(project)
        history.push("/");
        });
    };

    return (
        <form>
            <div>
                <label htmlFor="title">Project Title:</label>
                <input
                    type="text"
                    id="title"
                    placeholder="Enter Project Title"
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="description">Project Description:</label>
                <input
                    type="text"
                    id="description"
                    placeholder="Project Description"
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="goal">Project Goal:</label>
                <input
                    type="number"
                    id="goal"
                    placeholder="Project Goal"
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="image">Project Image:</label>
                <input
                    type="text"
                    id="image"
                    placeholder="Project Image URL"
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="project-end-date">Project End Date:</label>
                <input
                    type="datetime-local"
                    id="date_end"
                    onChange={handleChange}
                />
            </div>
            <button type="submit" onClick={handleSubmit}>
                Create Project
            </button>
        </form>
    );
}

export default ProjectForm