import {USER_SUBMITTED} from '../constants'

export const onUserSubmitted = username => dispatch => {
    fetch('http://localhost:3001/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username})
    })
        .then(response => response.json())
        .then(data => {
            dispatch({type: USER_SUBMITTED, payload: [data.id, data.name, 'chat']})
        })
        .catch(err => {
            console.error(err)
        })
};