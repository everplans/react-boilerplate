import assign from 'object-assign'
import KeyMirror from 'keymirror'
import { ActionPrototype, Dispatcher } from 'fluxxed_up'
import { fetch, post } from '../lib/webApi'

const UserActions = assign({}, ActionPrototype, {
  Types: KeyMirror({
    GOT_USER_DATA: null,
    DID_UPDATE_USER: null
  }),
  getUserData() {
    fetch('http://localhost:3000/v1/users', null, UserActions.Types.GOT_USER_DATA)
  },
  updateUserData(data) {
    post('http://localhost:3000/v1/users', data, UserActions.Types.DID_UPDATE_USER)
  }
})

export default UserActions
