import { Client } from "discord.js";
import Ping from "./commands/Ping";
import MessageEvent from "./events/MessageEvent";
import { ICommand } from "./interfaces/ICommand";
import IEvent from "./interfaces/IEvent";

export default class Bot {
	client: Client = new Client({ "disableMentions": "all" });
	commands: ICommand[] = [];
	start(token: string): void {
		this.client.login(token);
		this.client.on("ready", () => {
			console.log(`${this.client.user?.username} is ready!`);
		});
		this.loadEvents([
			new MessageEvent
		]);
		this.loadCommands([
			new Ping
		]);
	}

	end(): void {
		this.client.destroy();
	}

	loadEvents(events: IEvent[]) {
		events.forEach((event) => {
			this.client.on(event.name, event.run);
		})
	}

	loadCommands(commands: ICommand[]) {
		commands.forEach((command) => {
			this.commands.push(command);
		})
	}
}