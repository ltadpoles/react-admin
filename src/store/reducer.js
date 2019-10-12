import { MENU_TOGGLE } from './actionType'

const defaultStore = {
    menuToggle: false
}

export default (state = defaultStore, action) => {
    if (action.type === MENU_TOGGLE) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.menuToggle = !newState.menuToggle
        return newState
    }
    return state
}