import axios from 'axios';

export const createSurvey = (surveyData) => dispatch => {
  dispatch({ type: 'LOADING' });
  axios.post('/surveys', surveyData)
    .then(res => {
      dispatch({
        type: 'CREATE_SURVEY',
        payload: res.data,
      });
    })
    .catch(err => console.log(err));
};
