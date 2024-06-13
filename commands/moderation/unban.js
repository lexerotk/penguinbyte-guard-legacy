module.exports = {
    name: "unban",
    aliases: ['removeban'],
    code: `$title[1;:white_check_mark: Removed the Ban]
    $description[1;The user has been unbanned!
    
**User:** $username[$noMentionMessage[1]] | <@$noMentionMessage[1]> | $noMentionMessage[1]]
    $color[$getVar[embedcolor]]
    $footer[1;Executed in: $executionTime ms]
    $addTimestamp
    $unban[$guildID;$noMentionMessage[1];0;Mod: $username[$authorID]]
    $onlyClientPerms[banmembers;\`\`\`ERR: Permission error. (Couldn't find "Ban Members" permission in the bot's roles.)\`\`\`]
    $argsCheck[1;\`\`\`ERR: No user specified. \`\`\`]
    $onlyPerms[banmembers;\`\`\`ERR: The user doesn't have enough permissions for execute this command.\`\`\`]
    $suppressErrors[\`\`\`ERR: Something went wrong. (Tip: Are you sure that you specify an user ID?)\`\`\`]
    `
}