import { createInterface } from "readline";
import Bot from "./Bot";
import { token } from "../config.json";

if (process.platform == "win32") {
	let rl = createInterface({
		input: process.stdin,
		output: process.stdout
	});

	rl.on("SIGINT", () => {
		process.emit("SIGINT", "SIGINT");
	});
}

let bot: Bot = new Bot;
bot.start(token);

export default bot;

process.on("SIGINT", () => {
	bot.end();
	process.exit();
});