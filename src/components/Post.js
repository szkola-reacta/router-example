import React from 'react';

export default class Post extends React.Component {

    componentDidMount() {
        const postid = this.props.match.params.postid;
        // console.log(this.props);
    }

    render() {
        return(
            <div>
                <h2>Post, {this.props.match.params.postid}</h2>
            </div>
        );
    }
}
