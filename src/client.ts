import { Client as DiscordClient, GatewayIntentBits, Partials, WebhookClient } from "discord.js";
import { Configuration, OpenAIApi } from "openai";
import Logger from "$core/utils/logger";
import CommandManager from "$core/commands/command.manager";
import EventManager from "$core/events/event.manager";
import TaskManager from "$core/tasks/task.manager";
import "dotenv/config";
import Stripe from "stripe";
import dayjs from "dayjs";
import ContextManager from "./contexts/context.manager";

export default class Client extends DiscordClient {

  public static instance: Client;

  public readonly openai: OpenAIApi;

  public readonly eventManager: EventManager;

  public readonly commandManager: CommandManager;

  public readonly contextManager: ContextManager;

  public readonly taskManager: TaskManager;

  public readonly stripe: Stripe;

  public readonly webhook: WebhookClient | null;

  public month: number = (dayjs().month() + 1);

  constructor() {
    super({
      intents: [
        GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildIntegrations, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildPresences
      ],
      partials: [Partials.Message, Partials.Channel, Partials.Reaction]
    });

    Client.instance = this;
    this.login(process.env.TOKEN);

    this.openai = new OpenAIApi(new Configuration({
      apiKey: process.env.OPEN_AI
    }));

    this.stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY ?? "", {
      apiVersion: "2022-11-15"
    });

    if (!process.env.WEBHOOK_URL) {
      Logger.error("WEBHOOK_URL not found in .env file");
      this.webhook = null;
    } else {
      this.webhook = new WebhookClient({ url: process.env.WEBHOOK_URL });
      if (this.webhook) Logger.success("Webhook initialized");
      else Logger.error("Webhook not initialized");
    }

    this.eventManager = new EventManager();
    this.commandManager = new CommandManager();
    this.contextManager = new ContextManager();
    this.taskManager = new TaskManager();
  }

}

Logger.info("The client is being initialized...");
new Client();