declare interface StroreState {
  userInfo: any
}
declare interface StoreAction<T> {
  type: 'setUserInfo',
  data: T
}
