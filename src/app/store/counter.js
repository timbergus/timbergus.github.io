const INCREMENT = 'my-app/counter/INCREMENT';
const DECREMENT = 'my-app/counter/DECREMENT';

export function incrementCounter () {
    return { type: INCREMENT }
}

export function decrementCounter () {
    return { type: DECREMENT }
}

export default function reducer (state = 0, action = {}) {

    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        default:
            return state;
    }
};
