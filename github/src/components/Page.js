import React from "react";
import axios from "axios";
import Card from "./Card";
import Followers from "./Followers";
import "../components/page.css";

class Page extends React.Component {
    state = {
        user: [],
        followers: [],
    };

    componentDidMount() {
        axios.get("https://api.github.com/users/liamcox").then((res) => {
            console.log(res);
            this.setState({
                user: res.data,
            });
        });

        axios
            .get("https://api.github.com/users/liamcox/followers")
            .then((res) => {
                console.log(res);
                this.setState({
                    followers: res.data,
                });
            });
    }

    render() {
        return (
            <div className='Card'>
                <Card user={this.state.user} followers={this.state.followers} />
                {this.state.followers.map((item) => (
                    <Followers followers={item} />
                ))}
            </div>
        );
    }
}

export default Page;
