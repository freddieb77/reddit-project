//Action type constant
export const SEARCH = 'SEARCH';

//Action creator funciton
export const searchAction = (searchTerm) => {
    return {
        type: SEARCH,
        payload: searchTerm
    };
};