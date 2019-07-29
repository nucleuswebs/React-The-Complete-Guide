export const testDispatch = () => {
    return (dispatch) => {
        dispatch({
            type: 'Test'
        })
    }
}