const Discord = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders')

const complimentCommand = new SlashCommandBuilder()
    .setName('compliment')
    .setDescription("Fait un compliment à une personne souhaitée. **Attention, cela va la ping.**")
    .addStringOption(option => option
        .setName('message')
        .setDescription('Nom de la personne à complimenter.')
    )

const client = new Discord.Client(undefined)

client.on('interactionCreate', interaction => {
    if (interaction.isCommand()) {
        if (interaction.commandName === 'compliment') {

        }
    }
})

client.on('ready', () => {
    client.guilds.cache.get('688350530795208740').commands.create(complimentCommand)

    console.log('Bot successfully connected !');
})
