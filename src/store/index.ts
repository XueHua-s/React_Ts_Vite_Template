import { createStore, Store } from "redux"
const startState: StroreState = {
  userInfo: localStorage.getItem('userInfo') || ''
}
const storeReducer = (state: StroreState = startState, action: StoreAction<any>) => {
  switch (action.type) {
    case 'setUserInfo':
      return {
        ...state,
        userInfo: action.data
      }
    default:
      return state
  }
}
const store: Store<StroreState, StoreAction<any>> = createStore(storeReducer)
export default store
