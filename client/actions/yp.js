import request from '../utils/api'

function setYp(yp){
    return {
        type: 'SET_YP',
        yp
    }
}

export function createYp(data){
    return dispatch => {
        return request('post', 'yp/create', data)
            .then((response) => {
                dispatch(setYp(response.body))
            })
    }
}