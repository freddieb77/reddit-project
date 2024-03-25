import axios from 'axios';

const fetchRedditPosts = async () => {
    try {
        const response = await axios.get('https://www.reddit.com/r/all.json');
        return response.data.data.children.map((child) => child.data);
    } catch (error) {
        console.error('Error fetching Reddit posts:', error);
        return [];
    }
};

export default fetchRedditPosts;