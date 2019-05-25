import { useContext } from "react"
import { Context } from "../store/SessionStore"

const { dispatch, store } = useContext(Context);

const signIn = () => {
  dispatch({ type: "signIn", userInfo: { name: 'Ferro', lastName: 'Alvarez', company: 'Pernix' } })
}

const getuserInformation = () => {
  return ({
  name: store.user.name,
  lastName: store.user.lastName,
  company: store.user.company,
})}

export {
  getuserInformation,
  signIn,
}