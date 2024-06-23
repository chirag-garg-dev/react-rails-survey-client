import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createSurvey } from '../actions/surveyActions';

const CreateSurvey = ({ history }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const surveyData = { name, description };
    dispatch(createSurvey(surveyData)).then(() => {
      history.push('/edit-survey/' + surveyData.id);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Description:</label>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <button type="submit">Create</button>
    </form>
  );
};

export default CreateSurvey;
