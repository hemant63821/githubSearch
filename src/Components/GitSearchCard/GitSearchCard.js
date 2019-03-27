import React, { Component } from "react";

class GitSearchCard extends Component {

    render() {
        const { projectTitle, description } = this.props
        return (

            <div className="col-sm-4 col-lg-4 mt-2">
                <div className="card">
                    <div className="card-body text-center ripple">
                        <h5 className="card-title">
                            {projectTitle}
                        </h5>
                        <p className="card-text">
                            {description}
                        </p>
                    </div>
                </div>
            </div>

        )
    }
}

export default GitSearchCard;