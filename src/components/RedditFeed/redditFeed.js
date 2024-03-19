import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPosts } from '../redux/actions';
import fetchRedditPosts from '../utils/redditApi';

const RedditFeed = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts);

    useEffect(() => {
        const fetchData = async () => {
            const redditPosts = await fetchRedditPosts();
            dispatch(setPosts(redditPosts));
        };
        fetchData();
    }, [dispatch]);

    return (
        <div>
            <h1>Reddit Feed</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <a href={post.url}>{post.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RedditFeed;