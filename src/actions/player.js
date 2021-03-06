export const PLAYER_KICK_REQUEST = "PLAYER_KICK_REQUEST"
export const PLAYER_KICK_RESPONSE = "PLAYER_KICK_RESPONSE"
export function requestKickPlayer(uuid) {
	return {
		type: PLAYER_KICK_REQUEST,
		uuid: uuid,
	}
}

export const PLAYER_BAN_REQUEST = "PLAYER_BAN_REQUEST"
export const PLAYER_BAN_RESPONSE = "PLAYER_BAN_RESPONSE"
export function requestBanPlayer(name) {
	return {
		type: PLAYER_BAN_REQUEST,
		name: name,
	}
}
