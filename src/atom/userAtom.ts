import { atom, selector } from 'recoil'

export const userState = atom({
	key: 'userState',
	default: {} as any,
})

export const accessTokenState = selector({
	key: 'userAccessToken',
	get: ({ get }) => get(userState).accessToken,
})
