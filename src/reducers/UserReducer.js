export const initialState = {
  avatar: "",
  favorites: [],
  appointments: []
}

export const userReducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case "SET_AVATAR":
      return { ...state, avatar: payload.avatar }
    default:
      return state
  }
}
