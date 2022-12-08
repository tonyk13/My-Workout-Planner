export const ADD_TOPIC = 'ADD_TOPIC';
export const REMOVE_TOPIC = 'REMOVE_TOPIC';

export const addTopic = (id) => {
    return {
        type: ADD_TOPIC,
        topic: {
            id: id
        }
    };
};

export const removeTopic = (id) => {
    return {
        type: REMOVE_TOPIC,
        topic: {
            id: id
        }
    };
};