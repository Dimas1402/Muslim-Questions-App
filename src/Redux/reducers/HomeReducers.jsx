import { SHOW } from '../types'

const initialState = {
    show: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SHOW: {
        return {
            ...state,
            show: !state.show
        }
        }
        default:
        return state
    }
}
