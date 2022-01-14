import { EDIT_MESSAGE } from '../constants/action-types';

const activeChatId = (state = null, action) => {
  switch(action.type){
    case EDIT_MESSAGE:
      return action.payload.activeChatId;
    default:
      return state;
  }
};

export default activeChatId;