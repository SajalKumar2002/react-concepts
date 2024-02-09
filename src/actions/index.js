export function increment() {
    return {
        type: 'INCREMENT'
    }
}

export function decrement() {
    return {
        type: 'DECREMENT'
    }
}

export function reset() {
    console.log("reset is called");
    return {
        type: 'RESET'
    }
}