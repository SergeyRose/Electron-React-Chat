import {USER_SUBMITTED} from '../constants'

function userSubmit(state = [null, null, 'usernameForm'], action) {
    switch (action.type) {
        case USER_SUBMITTED:
            state = action.payload
    }
    return state
}

export default userSubmit