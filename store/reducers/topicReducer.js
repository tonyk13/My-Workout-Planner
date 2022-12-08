import {ADD_TOPIC, REMOVE_TOPIC} from "../actions/topicActions";

const initialState = {
    topics: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TOPIC:
            if (state.topics.find(topic => topic.id === action.topic.id)) {
            return state;
            }

            return {
                ...state,
                topics: state.topics.concat({
                    id: action.topic.id
                })
            }

        case REMOVE_TOPIC:
            return {
                ...state,
                topics: state.topics.filter(topic => topic.id !== action.topic.id)
            }
    }

    return state;
};