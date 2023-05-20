import { Command } from "$core/utils/config/message/command/command.type";

export const global = {
  config: {
    name: {},
    description: {},
    options: {},
    exec: {
      buttons: {
        premium: {
          "en-US": "Be Premium",
          fr: "Devenir Premium",
          "pt-BR": "Seja Premium"
        },
        vote: {
          "en-US": "Vote for me",
          fr: "Votez pour moi",
          "pt-BR": "Vote por mim"
        },
        reveal: {
          "en-US": "Reveal to public",
          fr: "Révéler au public",
          "pt-BR": "Revelar ao público"
        },
        revealTime: {
          "en-US": "Reveal to public ({seconds}s)",
          fr: "Révéler au public ({seconds}s)",
          "pt-BR": "Revelar ao público ({seconds}s)"
        },
        usage: {
          "en-US": "{left}/{max}"
        },
        reveal_text: {
          "en-US": ":grey_question: {question}\n\n{response}",
          fr: ":grey_question: {question}\n\n{response}",
          "pt-BR": ":grey_question: {question}\n\n{response}"
        },
        revealed: {
          "en-US": ":smile: The question has been revealed to the public",
          fr: ":smile: La question a été révélée au public",
          "pt-BR": ":smile: A pergunta foi revelada ao público"
        },
        reveal_timeout: {
          "en-US": [
            "The reveal time has elapsed, the question has not been revealed to the public",
            "\n\n- You can find the question in your history by doing `/history`"].join(""),
          fr: [
            "Le temps de révélation est écoulé, la question n'a pas été révélée au public",
            "\n\n- Vous pouvez retrouver la question dans votre historique en faisant `/history`"].join(""),
          "pt-BR": [
            "O tempo de revelação expirou, a pergunta não foi revelada ao público",
            "\n\n- Você pode encontrar a pergunta em seu histórico fazendo `/history`"].join("")
        },
        download: {
          "en-US": "🖨️ Download",
          fr: "🖨️ Télécharger",
          "pt-BR": "🖨️ Baixar"
        }
      },
      favorited: {
        "en-US": ":star: The question has been added to your favorites, you can find all your favorites by doing {cmdFavorites}",
        fr: ":star: La question a été ajoutée à vos favoris, vous pouvez retrouver tous vos favoris en faisant {cmdFavorites}",
        "pt-BR": ":star: A pergunta foi adicionada aos seus favoritos, você pode encontrar todos os seus favoritos fazendo {cmdFavorites}"
      },
      voteNow: {
        fr: [
          "Votez pour Bottly toutes les 12 heures et obtenez 10 utilisations supplémentaires à chacun de vos votes"
        ].join("\n"),
        "en-US": [
          "Vote for Bottly every 12 hours and get 10 additional uses for each of your votes"
        ].join("\n"),
        "pt-BR": [
          "Vote em Bottly a cada 12 horas e obtenha 10 usos adicionais para cada um de seus votos"
        ].join("\n")
      },
      noMoreUsages: {
        fr: [
          "Il semblerait que vous ayez atteint le nombre maximum d'utilisation de mes fonctionnalitées pour aujourd'hui,",
          "revenez demain (<t:{unix}:R>) pour les utiliser à nouveau"
        ].join(" "),
        "en-US": [
          "It seems that you have reached the maximum number of uses of my features for today,",
          "come back tomorrow (<t:{unix}:R>) to use them again"
        ].join(" "),
        "pt-BR": [
          "Parece que você atingiu o número máximo de usos de minhas funcionalidades para hoje,",
          "volte amanhã para usá-los novamente (<t:{unix}:R>)"
        ].join(" ")
      },
      orGetPremium: {
        fr: [
          ":sparkles: Vous pouvez aussi devenir premium pour 5.00$/mois et augmenter votre nombre d'utilisation à 50/jour",
          "et avoir accès à des fonctionnalités exclusives dont vous pouvez retrouver la liste en faisant {cmdPremium} et d'autres à venir 👀"
        ].join(" "),
        "en-US": [
          ":sparkles: You can also become premium for $5.00/month and increase your number of uses to 50/day",
          "and have access to exclusive features which you can find the list by doing {cmdPremium} and others to come 👀"
        ].join(" "),
        "pt-BR": [
          ":sparkles: Você também pode se tornar premium por $5.00/mês e aumentar seu número de usos para 50/dia",
          "e tenha acesso a recursos exclusivos que você pode encontrar a lista fazendo {cmdPremium} e outros por vir 👀"
        ].join(" ")
      },
      error: {
        "en-US": "An error occurred while executing the command: **{error}**",
        fr: "Une erreur s'est produite lors de l'exécution de la commande: **{error}**",
        "pt-BR": "Ocorreu um erro ao executar o comando: **{error}**"
      },
      errorTooLong: {
        "en-US": "We have to stop the discussion here, sorry, it is too long. Please feel free to start a new one",
        fr: "Nous devons arrêter la discussion ici, désolé, elle est trop longue. N'hésitez pas à en commencer une nouvelle",
        "pt-BR": "Temos que parar a discussão aqui, desculpe, é muito longa. Sinta-se à vontade para iniciar uma nova"
      },
      notInAGuild: {
        "en-US": "Execute the command in a guild",
        fr: "Exécutez la commande dans un serveur",
        "pt-BR": "Execute o comando em um servidor"
      },
      notInATextChannel: {
        "en-US": "Execute the command in a text channel",
        fr: "Exécutez la commande dans un salon textuel",
        "pt-BR": "Execute o comando em um canal de texto"
      },
      channelNotFound: {
        "en-US": "The channel was not found",
        fr: "Le salon n'a pas été trouvé",
        "pt-BR": "O canal não foi encontrado"
      },
      botPermissionsNotFound: {
        "en-US": "The permissions I have on this server do not allow me to execute this command, I need: {permissions}",
        fr: "Les permissions qu'on m'a donné sur ce serveur ne me permettent pas d'exécuter cette commande, il me faut: {permissions}",
        "pt-BR": "As permissões que me foram concedidas neste servidor não me permitem executar este comando, eu preciso de: {permissions}"
      },
      botNotFound: {
        "en-US": "I am not in this server",
        fr: "Je ne suis pas sur ce serveur",
        "pt-BR": "Eu não estou neste servidor"
      },
      notInAThread: {
        "en-US": "Execute the command in a thread",
        fr: "Exécutez la commande dans un fil de discussion",
        "pt-BR": "Execute o comando em um thread"
      },
      parentNotFound: {
        "en-US": "The parent channel was not found",
        fr: "Le salon parent n'a pas été trouvé",
        "pt-BR": "O canal pai não foi encontrado"
      }
    }
  }
} satisfies Record<string, Command>;