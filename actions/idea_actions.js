// import * as NoteUtil from '../utils/note_api_util';

import {createIdea} from '../utils/idea_api_util';

export const RECEIVE_IDEA = 'RECEIVE_IDEA';
export const REMOVE_IDEA = 'REMOVE_IDEA';

const receiveIdea = (idea) => ({
  type: RECEIVE_IDEA,
  idea
});

const removeIdea = idea => ({
  type: REMOVE_IDEA,
  idea
});


export const createSingleIdea = (ideaObject) => dispatch => {

  return createIdea(ideaObject)
    .then(newIdea => {
      console.log(newIdea)
      newIdea.json().then(obj => {
        dispatch(receiveIdea(obj));
      })
      .catch(err => console.log('error:',err));
    });
};




//need to add thunk action creators
