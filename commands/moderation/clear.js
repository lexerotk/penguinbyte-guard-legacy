module.exports = {
    name: "clear",
    aliases: ['cls'],
    code: `$deleteIn[5s]
    $description[1;:white_check_mark: $message[1] messages have been successfully deleted.]
    $footer[1;Executed in: $executionTime ms]
    $addTimestamp
    $color[$getVar[embedcolor]]
    $clear[$channelID;$message[1];unpinned;false]
    $onlyClientPerms[managemessage;\`\`\`ERR: Permission error. (Couldn't find "Manage Messages" permission in the bot's roles.)\`\`\`]
    $argsCheck[1;\`\`\`ERR: No amount specified. \`\`\`]
    $onlyPerms[managemessages;\`\`\`ERR: The user doesn't have enough permissions for execute this command.\`\`\`]
    $suppressErrors[\`\`\`ERR: Something went wrong. Ping @lexerotk.)\`\`\`]
    `
}