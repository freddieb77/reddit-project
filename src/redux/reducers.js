import { SET_POSTS } from './redditFeedActions';

const initialState = {
    posts: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS:
            return {...state, posts: action.payload };
        default:
            return state;
    }
};

export default rootReducer;