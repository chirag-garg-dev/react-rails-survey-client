import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateSurvey from './components/CreateSurvey';
import EditSurvey from './components/EditSurvey';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import reducers from './reducers';
const rootReducer = combineReducers({...reducers});
const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
    <>
      <Provider store={store}>
                <h1>aas</ h1>
            </Provider>
    <CreateSurvey />
    </>
    // <Router>
    //   <Switch>
    //     <Route exact path="/" component={CreateSurvey} />
    //     <Route path="/edit-survey/:id" component={EditSurvey} />
    //   </Switch>
    // </Router>
  );
}

export default App;
