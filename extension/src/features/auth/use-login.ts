import { useNavigate } from 'react-router-dom'

import { ApiSchemas } from '@/shared/api/schema'
import { publicRqClient } from '@/shared/api/instance.api'
import { ROUTES } from '@/shared/config/routes'
import { useSession } from '@/shared/model/session-provider'

export function useLogin() {
	const navigate = useNavigate()
    const session = useSession()

	const loginMutation = publicRqClient.useMutation('post', '/auth/login', {
		onSuccess(data) {
            session.login({
                authId: data.authId
            })
			navigate(ROUTES.CONNECTION)
		}
	})

	const login = (data: ApiSchemas['AuthRequest']) => {
		loginMutation.mutate({ body: data })
	}

	const errorMessage = loginMutation.isError
		? loginMutation.error
		: undefined

	return {
		login,
		isPending: loginMutation.isPending,
		errorMessage
	}
}