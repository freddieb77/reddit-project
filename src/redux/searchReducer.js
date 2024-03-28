import { SEARCH } from './searchActions';

const initialState = {
    searchTerm: ''
};

const searchReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEARCH:
            return {
                ...state,
                searchTerm: action.payload
            };
        default:
            return state;
    }
};

export default searchReducer;