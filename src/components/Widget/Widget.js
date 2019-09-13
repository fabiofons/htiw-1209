import React from 'react';

import Post from '../Post/Post';

class Widget extends React.Component {
  render() {
    return (
      <div>
        {this.props.posts.map(post => <Post key={post.id} p={post}/>)}
      </div>
    );
  };

  componentDidMount() {
    const { feedUrl, getSocialPost, maxPost, intervalSeg } = this.props
    getSocialPost(feedUrl, maxPost);
    this.interval = setInterval(() => {
      getSocialPost(feedUrl, maxPost);
    }, intervalSeg * 1000);
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }
}

export default Widget;
