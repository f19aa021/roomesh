import './ApiFetch.css';
import React, {useState, useEffect, Suspense} from 'react';
import axios from 'axios';
import Loading from './Loading';

const initialState: any = null;
export const ApiFetch = () => {
    const [posts, setPosts] = useState<[] | null>(initialState);
    
    const fetchData = async () => {
      await setTimeout(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
          console.log('status: ', res.status);
          console.log('data: ', res.data);
          setPosts(res.data);
        })
        .catch((e) => {
          console.error(e.message);
        })
      }, 3000);
    }
    
    const showPosts = () => {
      type Post = {
        userId: number;
        id: number;
        title: string;
        body: string;
      }
      const postList: JSX.Element[] = [];
      posts?.forEach((post: Post) => {
        if (post.id <= 5) {
          const postTitle = <li key={post.id}>{post.id}.  {post.title}</li>;
          postList.push(postTitle);
        }
      });
      return postList;
    }

    useEffect(() => {
      fetchData();
    }, [initialState]);

    return (
      <div id="posts">
        <Suspense fallback={<Loading />}>
          {showPosts()}
        </Suspense>
      </div>
    )
}