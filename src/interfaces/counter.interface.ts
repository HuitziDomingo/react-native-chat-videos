import { Post } from './api.interface'

export interface CounterState {
    count: number
    title: string
    posts: Post[]
    increment: (value: number) => void
    getPost: () => Promise<void>
}