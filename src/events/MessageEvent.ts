import { Message } from "discord.js";
import IEvent from "../interfaces/IEvent";
import { prefix } from "../../config.json";
import bot from "..";
import { ICommand } from "../interfaces/ICommand";

export default class MessageEvent implements IEvent{
	async run(message: Message): Promise<void> {
		if (message.author.bot) return;

		if (message.content.startsWith(prefix)) {
			let command_name: string = message.content.substring(prefix.length).split(" ")[0];
			let args: string[] = message.content.split(" ").slice(1);

			let command: ICommand | undefined = bot.commands.find((cmd) => cmd.aliases.includes(command_name));
			if (command) {
				command.run(message, args);
			} else {
				await message.react("❌");
			}
		}
	}
	name = "message";
}