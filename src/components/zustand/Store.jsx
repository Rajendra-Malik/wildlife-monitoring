import { create } from 'zustand'
import { persist } from 'zustand/middleware';

const Store = create(
    persist(
        (set, get) => ({
            userData: {},
            updateUserData: (userData) => set({userData: userData}),
        }),
        {
            name: 'userStorage'
        },
    )
);


export default Store;