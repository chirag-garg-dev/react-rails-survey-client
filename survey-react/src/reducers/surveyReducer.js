const initialState = {
  survey: null,
  loading: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'CREATE_SURVEY':
      return {
        ...state,
        survey: action.payload,
        loading: false,
      };
    case 'LOADING':
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
