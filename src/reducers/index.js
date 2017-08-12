import { combineReducers } from "redux"
import { routerReducer } from "react-router-redux"

import api from "./api"
import dashboard from "./dashboard"
import chat from "./chat"
import command from "./command"
import world from "./world"
import entity from "./entity"
import player from "./player"
import plugin from "./plugin"
import tileEntity from "./tile-entity"
import operations from "./operations"
import settings from "./settings"

import nucleus from "./nucleus"

const app = combineReducers({
	api,
	dashboard,
	chat,
	command,
	world,
	entity,
	player,
	plugin,
	tileEntity,
	operations,
	settings,
	nucleus,
	router: routerReducer,
})

export default app
