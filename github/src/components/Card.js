import React from "react";

class Card extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <>
                <div className='UserCard'>
                    <h1>User</h1>
                    <img
                        src={this.props.user.avatar_url}
                        alt='Picture of Liam Cox'
                    />
                    <h1>{this.props.user.name}</h1>
                    <h2>{this.props.user.bio}</h2>
                </div>
            </>
        );
    }
}

export default Card;
