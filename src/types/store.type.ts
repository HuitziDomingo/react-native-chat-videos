export type Store = {
    count: number
    inc: () => void
}

export type getUsersState = {
    getUsers: () => Promise<void>
}