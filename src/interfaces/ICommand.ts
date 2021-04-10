import { Message } from "discord.js";

export type CommandCategory = "other" | "info" | "fun" | "hidden";

export interface ICommand {
	category: CommandCategory;
	description: string;
	aliases: string[];
	usage: string;

	run: (message: Message, args:string[]) => any;
}
