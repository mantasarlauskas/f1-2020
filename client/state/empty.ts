export default function emptyReducer<T>(state = {}): T {
    return state as T;
}
