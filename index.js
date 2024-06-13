const { Loader } = require("aoi.loader");
const { AoiClient } = require("aoi.js");

const client = new AoiClient({
	token: process.env.TOKEN,
	prefix: "+",
	intents: ["MessageContent", "Guilds", "GuildMessages", "GuildMembers", "GuildPresences"],
	events: ["onMessage", "onInteractionCreate", "onJoin", "onMessageDelete"],
	database: {
		type: "aoi.db",
		db: require("@akarui/aoi.db"),
		dbType: "KeyValue",
		tables: ["main"],
		securityKey: process.env.DBSecurityKey
	}
});

new Loader(client).load("./commands")
	.then(() => console.log("INFO: Commands are loaded successfully."));

client.variables(
	{
		suspectroleid: "undefined",
		napchannel: "undefined",
		nap: "off",
		snipem: "",
		snipec: "",
		snipeu: "",
		verifierrole: "undefined",
		embedcolor: "#FFBD59",
	})

client.status(
	{
		name: "Thanks for joining to PenguinByte Discord server!",
		type: "PLAYING",
		time: 60
	})

client.status(
	{
		name: "Also don't forget to subscribe to PenguinByte!",
		type: "PLAYING",
		time: 60
	})

client.status(
	{
		name: "Have a good day!",
		type: "PLAYING",
		time: 60
	})