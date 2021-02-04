export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // Replace this with null after development - passes authentication
  // token:
  //   "BQAQnvQXe6OAjVJ-0yy9LQ7qenpbgl-vU2xxj3o8a10bABqXUXqU84Pa2qnt47GdeKHW7sbfqBINkPQWoorGiBvIA61Q7BGCHkueW9k11zUfNT2A_x8XetwLBr6vAIaJLJysSRZEicQyKWdQb1ik9wHfjYf6VE19kQ",
};

const reducer = (state, action) => {
  console.log(action);

  // Action -> type, [payload]
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
