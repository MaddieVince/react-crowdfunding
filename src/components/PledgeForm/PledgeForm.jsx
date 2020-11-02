import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function PledgeForm() {
    const project_id = window.localStorage.getItem("project_id")

    const [pledge, setPledge] = useState({
        amount: 0,
        kudos: false,
        comment: "",
        anonymous: false,
        project_id: project_id
    });

    const history = useHistory();   

    const handleChange = (e) => {
        const { id, value } = e.target;
        setPledge((prevPledge) => ({
            ...prevPledge,
            [id]: value,
        }));
    };

    const postData = async () => {
        const token = window.localStorage.getItem("token");
        
        const response = await fetch(
            `${process.env.REACT_APP_API_URL}/pledges/`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${token}`
            },
            body: JSON.stringify(pledge),
            }
            );
            return response.json();
    };
        

    const handleSubmit = (e) => {
        e.preventDefault();
            postData().then((response) => {
                console.log(response)
                setPledge("pledge", response.pledge);
                console.log(pledge)
                window.localStorage.setItem("project_id", null);
            history.push("/");
        }
        );
    }

    return (
        <form>
            <div>
                <label htmlFor="amount">Pledge Amount:</label>
                <input
                    type="number"
                    id="amount"
                    placeholder="Enter Pledge Amount"
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="kudos">Give Kudos:</label>
                <input
                    type="checkbox"
                    id="kudos"
                    checked={pledge.kudos}
                    placeholder="Give Kudos?"
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="comment">Comment:</label>
                <input
                    type="text"
                    id="comment"
                    placeholder="Comment"
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="anonymous">Want to remain anonymous:</label>
                <input
                    type="checkbox"
                    id="anonymous"
                    checked={pledge.anonymous}
                    placeholder="Anonymous"
                    onChange={handleChange}
                />
            </div>
            <button type="submit" onClick={handleSubmit}>
                Create Pledge
            </button>
        </form>
    );
}

export default PledgeForm;