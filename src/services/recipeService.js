import * as request from "./requester";

const baseUrl = 'http://localhost:3030';

// Get data
export const getAll = () => request.get(`${baseUrl}/jsonstore/recipes`);

export const getOne = async (recipeId) => {
    const response = await fetch(`${baseUrl}/jsonstore/recipes/${recipeId}`);
    const result = await response.json();

    return result.recipe;
};

// CRUD

export const create = async (recipeData) => {
    const response = await fetch(`${baseUrl}/jsonstore/recipes`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(recipeData),
    });

    if (response.status == 200) {
        const result = await response.json();
        return result;
    } else {
        throw new Error('All fields are required!');
    }
};

export const edit = async (recipeData, recipeId) => {
    const response = await fetch(`${baseUrl}/jsonstore/recipes/${recipeId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(recipeData),
    });

    if (response.status == 200) {
        const result = await response.json();
        return result;
    } else {
        throw new Error('All fields are required!');
    }
};

export const del = async (recipeId) => {
    console.log(recipeId);
    const response = await fetch(`${baseUrl}/jsonstore/recipes/${recipeId}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
        },
    });
    const resultMsg = `Deleted: ${response.json()}`;
    return resultMsg;
};
