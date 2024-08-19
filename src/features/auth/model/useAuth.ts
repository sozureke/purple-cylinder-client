import { useTypedSelector } from '@/shared/hooks'

export const useAuth = () => useTypedSelector(state => state.user)
