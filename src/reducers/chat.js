import _ from "lodash"

import { CHAT_HISTORY_RESPONSE } from "../actions/chat"

const chat = (state = { messages: [], filter: {}}, action) => {
	if (!action.ok)
		return state;
	
	switch(action.type) {
		case CHAT_HISTORY_RESPONSE:
			return _.assign({}, state, {
				messages: action.messages,
			})

		default:
			return state;
	}
}

export default chat
