import { create } from 'zustand'
import { CounterState } from '../interfaces/counter.interface'

export const useCounterStore = create<CounterState>(set => ({
    count: 30,
    title: 'Cuenta:',
    posts: [],
    increment: (value: number) => set(state => ({
        count: state.count + value
    })),
    getPost: async () => {
        let res = await fetch('https://jsonplaceholder.typicode.com/posts')
        let post = await res.json()
        console.log(post)
    }
}))