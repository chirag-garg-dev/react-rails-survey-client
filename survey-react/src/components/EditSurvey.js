import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EditSurvey = () => {
  const { id } = useParams();
  const [survey, setSurvey] = useState(null);

  useEffect(() => {
    axios.get(`/surveys/${id}`)
      .then(res => {
        setSurvey(res.data);
      })
      .catch(err => console.log(err));
  }, [id]);

  // Add drag and drop logic here

  return (
    <div>
      <div className="toolbox">
        <button>Add Label</button>
        <button>Add Input</button>
      </div>
      <div className="survey-container">
        {/* Render survey components here */}
      </div>
    </div>
  );
};

export default EditSurvey;
