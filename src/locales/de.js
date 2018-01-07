export default {
	Main: {
		Dashboard: "Übersicht",
		Chat: "Chat",
		Commands: "Befehle",
		Map: "Karte",
		Worlds: "Welten",
		Players: "Spieler",
		Entities: "Entities",
		TileEntities: "Tile Entities",
		BlockOperations: "Block Operationen",
		Plugins: "Plugins",
		ServerSettings: "Server Einstellungen",
		Settings: "Einstellungen",
		Logout: "Ausloggen",

		HuskyCrates: "Husky Crates",
		Crates: "Crates",

		MMCTickets: "MMCTickets",
		Tickets: "Tickets",

		Nucleus: "Nucleus",
		Kits: "Kits",
		Jails: "Jails",

		WebBooks: "Web Books",
		Books: "Books",
	},

	Login: {
		Login: "Einloggen",
		Username: "Benutzername",
		Password: "Passwort",
	},
	Dashboard: {
		WIPTitle: "In Arbeit!",
		WIPText: "Das Web-API AdminPanel ist zur Zeit noch in der Entwicklung, und nicht alle Funktionen sind implementiert. Dies heisst es kann zu Fehlern während der Benutzung des AdminPanel kommen!<1 />Bitte melde uns alle bugs <3>auf github</3>",
		PlayersOnline: "Spieler online",
		CurrentTPS: "Aktuelle TPS",
		UptimeTicks: "Ticks seit Start",
		OnlineMode: "Online modus",
		ServerAddress: "Server Adresse",
		MinecraftVersion: "Minecraft Version",
		APIVersion: "API Version",
		SpongeVersion: "Sponge Version",
		GraphTitle: "Spieler online & Durchschnittliche TPS",
		AverageTPS: "Durchschnittliche TPS",
		OnlinePlayers: "Spieler online",
		NumPlayers: "Spieler",
		NumTPS: "TPS",
	},
	Chat: {
		Messages: "Nachrichten",
		FilterMessages: "Nachrichten filtern",
		Timestamp: "Zeitstempel",
		Sender: "Absender",
		Message: "Nachricht",
	},
	Commands: {
		Commands: "Befehle",
		ExecuteCommand: "Befehl ausführen",
		Execute: "Ausführen",
		FilterCommands: "Befehle filtern",
		Timestamp: "Zeitstempel",
		Source: "Auslöser",
		Command: "Befehl",
		WaitLines: "Warte-Zeilen",
		WaitLinesDescr: "# Zeilen auf welche gewartet wird",
		WaitTime: "Wartezeit",
		WaitTimeDescr: "Millisekunden die gewartet werden",
	},
	Entities: {
		SpawnEntity: "Entity erstellen",
		FilterEntities: "Entities filtern",
		Type: "Typ",
		World: "Welt",
		Location: "Ort",
		Position: "Position",
		Health: "Leben",
		Info: "Info",
		AI: "AI",
		Age: "Alter",
		Adult: "Erwachsen",
		Breedable: "Zuchttauglich",
		Career: "Karriere",
		Flying: "Fliegend",
		Glowing: "Glühend",
		Silent: "Still",
		Sneaking: "Schleichend",
		Sprinting: "Sprintend",
	},
	TileEntities: {
		TileEntities: "Tile Entities",
		FilterEntities: "Tile entities filtern",
		Type: "Typ",
		World: "Welt",
		Position: "Position",
		Info: "Info",
		MobSpawner: "Mob Spawner",
	},
	BlockOperations: {
		BlockOperations: "Block Operationen",
		StartOperation: "Eine Operation starten",
		Type: "Typ",
		UUID: "UUID",
		World: "Welt",
		Block: "Block",
		Min: "Minimum",
		Max: "Maximum",
		Status: "Status",
		Progress: "Fortschritt",
		Done: "Fertig",
		Details: "Details",
		Pause: "Pause",
		Resume: "Fortfahren",
		Stop: "Stop",
		OperationTitle: "Operation <1>{{uuid}}</1>",
		RUNNING: "IN ARBEIT",
		PAUSED: "PAUSIERT",
		DONE: "FERTIG",
		ERRORED: "FEHLGESCHLAGEN",
		CANCELED: "ABGEBROCHEN",
	},
	Plugins: {
		Plugins: "Installierte Plugins",
		WarnTitle: "Vorsicht beim Bearbeiten der Configs!",
		WarnText: "Web-API legt automatisch ein Backup der Configs an bevor sie gespeichert werden, aber trozdem ist beim Bearbeiten Vorsicht geboten. Um die Änderungen der Configs anzuwenden benutze `sponge plugins reload`. Plugins sind nicht verpflichtet den Reload-Event zu implementieren, also könnte dies für einige Plugins nicht funktionieren. In dem Fall wird ein Neustart des Servers empfohlen.",
		Id: "Id",
		Name: "Name",
		Version: "Version",
		Details: "Details",
		Save: "Speichern",
		Cancel: "Abbrechen",
	},
	Players: {
		Players: "Spieler",
		FilterPlayers: "Spieler filtern",
		NameUUID: "Name & UUID",
		World: "Welt",
		Location: "Ort",
		HealthFood: "Leben & Essen",
		Info: "Info",
		Level: "Level",
		Inventory: "Rucksack",
		Kick: "Kick",
		Ban: "Ban",
		InventoryTitle: "<0>{{name}}</0>'s Rucksack",
	},
	Worlds: {
		Worlds: "Welten",
		CreateWorld: "Welt erstellen",
		Name: "Name",
		Dimension: "Dimension",
		Generator: "Generator",
		Difficulty: "Schwierigkeit",
		GameMode: "Game Mode",
		Features: "Funktionen",
		LoadOnStartup: "Beim starten laden",
		KeepSpawnLoaded: "Spawn geladen halten",
		CommandsAllowed: "Befehle zulassen",
		GenerateBonusChest: "Bonus Truhe generieren",
		EnableMapFeatures: "Karten features aktivieren",
		Info: "Info",
		Status: "Status",
		GameRules: "Spielregeln",
		Loaded: "Geladen",
		Unloaded: "Entladen",
		Load: "Laden",
		Unload: "Entladen",
		Delete: "Löschen",
		GameRulesTitle: "Spielregeln für '<1>{{name}}</1>'",
		Value: "Value",
		Save: "Speichern",
		Cancel: "Abbrechen",
	},
	ServerSettings: {
		ServerSettings: "Server Einstellungen",
		WIPTitle: "Dieser Abschnitt des AdminPanels ist noch nicht fertig",
		WIPText: "Das Verändern dieser Einstellungen hat noch keinen wirklichen Einfluss auf den Server!",
	},

	DataTable: {
		Actions: "Aktionen",
		Save: "Speichern",
		Cancel: "Abbrechen",
		Edit: "Bearbeiten",
		Remove: "Entfernen",
	},
	CreateForm: {
		Create: "Erstellen",
	},
	Inventory: {
		EmptyInventory: "Empty Inventory",
		ShowInventory: "Show Inventory",
		HideInventory: "Hide Inventory",
	},
}