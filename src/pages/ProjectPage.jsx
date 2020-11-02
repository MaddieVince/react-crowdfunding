import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ActionButton from '../components/Button/Button';


function ProjectPage() {
    const [projectData, setProjectData] = useState({ pledges: [] });
    const { id } = useParams();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/projects/${id}`).then((results) => {
            return results.json();
        }).then((data) => {
            setProjectData(data)
            window.localStorage.setItem("project_id", data.id);
        });
    }, []);

    return (
        <div>
            <div>
                <h2>{projectData.title}</h2>
                <h3>Created at: {projectData.date_created}</h3>
                <h3>{`Status: ${projectData.is_open}`}</h3>
                <h4>{`Owner: ${projectData.owner}`}</h4>
                <p>{projectData.description}</p>
                <p>{`Number of supporters: ${projectData.num_supporters}`}</p>
                <h3>Pledges:</h3>
                <ul>
                    {projectData.pledges.map((pledgeData, key) => {
                        return (
                            <li>
                                ${pledgeData.amount} from {pledgeData.supporter}
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div>
                <img src={projectData.image} />
                <ActionButton />
            </div>
        </div>
    );
}

export default ProjectPage;