import { Store, getUsersState } from '../types/store.type'
import { create } from 'zustand'

export const useStore = create<Store>()((set) => ({
    count: 1,
    inc: () => set((state) => ({ count: state.count + 1 })),
}))

export const getUsersStore = create<getUsersState>(set => ({
    getUsers: async () => {
        let res = await fetch('http://localhost:4000/api/v1/users')
        let post = await res.json()
        console.log(post)
    }
}))