import { useNavigate } from 'react-router-dom'

import { ApiSchemas } from '@/shared/api/schema'
import { publicRqClient } from '@/shared/api/instance.api'
import { ROUTES } from '@/shared/config/routes'
import { useSession } from '@/shared/model/session-provider'

export function useRegister() {
	const navigate = useNavigate()
    const session = useSession()

	const registerMutation = publicRqClient.useMutation('post', '/auth/register', {
		onSuccess(data) {
            session.login({
                authId: data.authId
            })
			navigate(ROUTES.CONNECTION)
		}
	})

	const signup = () => {
		registerMutation.mutate({body:{}})
	}

	const errorMessage = registerMutation.isError
		? registerMutation.error
		: undefined

	return {
		signup,
		isPending: registerMutation.isPending,
		errorMessage
	}
}