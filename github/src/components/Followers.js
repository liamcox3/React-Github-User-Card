import React from "react";

class Followers extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <>
                <div className='FollowersCard'>
                    <h2>User Followers</h2>
                    <img
                        src={this.props.followers.avatar_url}
                        alt='Picture of followers'
                    />
                    <h3>{this.props.followers.login}</h3>
                </div>
            </>
        );
    }
}

export default Followers;
