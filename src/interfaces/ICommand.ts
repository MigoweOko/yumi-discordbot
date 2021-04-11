import { Message } from "discord.js";

export enum CommandCategory {
	OTHER,INFO,FUN,HIDDEN,
};

export interface ICommand {
	category: CommandCategory;
	description: string;
	aliases: string[];
	usage: string;
	run: (message: Message, args:string[]) => any;
}
