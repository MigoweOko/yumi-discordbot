import { Message } from "discord.js";
import Bot from "../Bot";

export default interface IEvent {
	run: (message: Message, ...args: any[]) => any;
	name: string;
}