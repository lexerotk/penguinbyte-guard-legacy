module.exports = {
    name: "ban",
    code: `$title[1;:white_check_mark: Successfully Banned!]
    $description[1;The user has been banned!
    
**User:** $username[$mentioned[1]] | <@$mentioned[1]> | $mentioned[1]]
    $color[$getVar[embedcolor]]
    $footer[1;Executed in: $executionTime ms]
    $addTimestamp
    $ban[$guildID;$mentioned[1:false];0;ID: $mentioned[1] | Mod: $username[$authorID]]
    $sendDm[Sorry. You got banned from the Penguinbyte Discord server. If you think this is an unfair ban, join the appeal server and raise your issue. https://discord.gg/AeXduCzt9z;$mentioned[1;false]]
    $onlyClientPerms[banmembers;\`\`\`ERR: Permission error. (Couldn't find "Ban Members" permission in the bot's roles.)\`\`\`]
    $onlyIf[$rolePosition[$userHighestRole[$clientID]]<$rolePosition[$userHighestRole[$mentioned[1]]];\`\`\`ERR: Role position error. The user has roles positioned higher than the roles of the bot. (Try carrying bot's role position to a higher position/higher than mentioned user's highest role.)\`\`\`]
    $onlyIf[$mentioned[1;false]!=undefined;\`\`\`ERR: No user specified. (Tip: Are you sure that you mentioned someone?)\`\`\`]
    $argsCheck[1;\`\`\`ERR: No user specified. \`\`\`]
    $onlyPerms[banmembers;\`\`\`ERR: The user doesn't have enough permissions for execute this command.\`\`\`]
    $suppressErrors[\`\`\`ERR: Something went wrong. (Tip: Are you sure that you mentioned someone?)\`\`\`]
    `
}