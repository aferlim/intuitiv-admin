export default (state = [], action) => {

    console.log(action)

    switch (action.type) {
        case 'CHANGE_MESSAGE':

            return { ...state, message: action.message }
            break

        default:
            return state
            break
    }

}