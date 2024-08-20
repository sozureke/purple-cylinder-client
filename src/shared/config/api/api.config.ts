export const API_URL = `${process.env.API_URL}`

export const getAuthUrl = (string: string) => `/authorization/${string}`
export const getProductUrl = (string: string) => `/products/${string}`
