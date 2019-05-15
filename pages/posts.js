import React, { Component } from 'react';

const API = 'https://studiospindle.nl/wp-json/wp/v2/posts';

import Layout from '../components/Layout';

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      isLoading: false,
      error: null
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch(API) // { method: 'GET' }
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .then(data => this.setState({ posts: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    const { posts, isLoading, error } = this.state;

    if (error) {
      return <p>{error.message}</p>;
    }

    if (isLoading) {
      return <p>Loading ...</p>;
    }

    return (
      <Layout>
        {/*<p>{JSON.stringify(this.state.posts[0])}</p>*/}
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <a href="/">{post.title.rendered}</a>
            </li>
          ))}
        </ul>
        <style jsx>{`
          a {
            color: white;
          }
        `}</style>
      </Layout>
    );
  }
}

export default Posts;
