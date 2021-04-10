import { Message } from "discord.js";
import { ICommand, CommandCategory } from "../interfaces/ICommand";

export default class Ping implements ICommand {
	category: CommandCategory = "info";
	aliases = ["ping"];
	description = "Pong!";
	usage = "ping";
	
	async run(message: Message, args:string[]): Promise<any> {
		await message.reply("Pong!");
	}
}