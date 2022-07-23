const initialState = {
  movies: [],
};

export const favorites = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_MOVIE":
      console.log({
        ...state,
      });
      console.log({ movies: state.movies.concat(action.payload) });
      return {
        ...state,
        movies: state.movies.concat(action.payload),
      };
    case "REMOVE_MOVIE":
      return {
        ...state,
        movies: state.movies.filter((movie) => movie.id !== action.payload.id),
      };

    default:
      return state;
  }
};
