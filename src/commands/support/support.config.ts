import { Command } from "$core/utils/config/message/command/command.type";

export const support = {
  config: {
    name: {
      "en-US": "support"
    },
    options: {},
    description: {
      "en-US": "Get the support discord server",
      fr: "Obtenir le serveur discord de support",
      "pt-BR": "Obter o servidor de suporte do discord",
      ru: "Получить сервер поддержки discord",
      uk: "Отримати сервер підтримки discord",
      "es-ES": "Obtener el servidor de soporte de discord"
    },
    exec: {
      embedTitle: {
        "en-US": "Support discord server",
        fr: "Serveur discord de support",
        "pt-BR": "Servidor de suporte do discord",
        ru: "Сервер поддержки discord",
        uk: "Сервер підтримки discord",
        "es-ES": "Servidor de soporte de discord"
      },
      link: {
        "en-US": "You can join the support server by clicking the button below",
        fr: "Vous pouvez rejoindre le serveur de support en cliquant sur le bouton ci-dessous",
        "pt-BR": "Você pode entrar no servidor de suporte clicando no botão abaixo",
        ru: "Вы можете присоединиться к серверу поддержки, нажав на кнопку ниже",
        uk: "Ви можете приєднатися до сервера підтримки, натиснувши кнопку нижче",
        "es-ES": "Puede unirse al servidor de soporte haciendo clic en el botón de abajo"
      }
    },
    imgs: {
      "en-US": "https://cdn.discordapp.com/attachments/927843710669062204/1109814291521093752/en-US.png",
      fr: "https://cdn.discordapp.com/attachments/927843710669062204/1109814291521093752/en-US.png",
      "pt-BR": "https://cdn.discordapp.com/attachments/927843710669062204/1109814983547682816/pt-BR.png",
      ru: "https://cdn.discordapp.com/attachments/927843710669062204/1109814292435452005/ru.png",
      uk: "https://cdn.discordapp.com/attachments/927843710669062204/1109814292150227035/uk.png",
      "es-ES": "https://media.discordapp.net/attachments/927843710669062204/1109814291823087666/es-ES.png"
    }
  }
} satisfies Record<string, Command>;