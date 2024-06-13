module.exports = {
    name: "nick",
    code: `$title[1;:white_check_mark: Banned]
    $description[1;]
    $color[$getVar[embedcolor]]
    $footer[1;Executed in: $executionTime ms]
    $addTimestamp
    $ban[$guildID;$mentioned[1];7;Nick.]
    $sendDm[$randomText[https://lexerotk.tixte.co/r/troll_laugh.mov;https://us-east-1.tixte.net/uploads/lexerotk.tixte.co/every_tf2_class_laughing_at_you360P.mp4;https://us-east-1.tixte.net/uploads/lexerotk.tixte.co/24704139103.mp4];$mentioned[1;false]]
    $onlyClientPerms[banmembers;\`\`\`ERR: Permission error. (Couldn't find "Ban Members" permission in the bot's roles.)\`\`\`]
    $onlyIf[$rolePosition[$userHighestRole[$clientID]]<$rolePosition[$userHighestRole[$mentioned[1]]];\`\`\`ERR: Role position error. The user has roles positioned higher than the roles of the bot. (Try carrying bot's role position to a higher position/higher than mentioned user's highest role.)\`\`\`]
    $onlyIf[$mentioned[1;false]!=undefined;\`\`\`ERR: No user specified. (Tip: Are you sure that you mentioned someone?)\`\`\`]
    $argsCheck[1;\`\`\`ERR: No user specified. \`\`\`]
    $onlyPerms[administrator;\`\`\`ERR: The user doesn't have enough permissions for execute this command.\`\`\`]
    $suppressErrors[\`\`\`ERR: Something went wrong. (Tip: Are you sure that you mentioned someone?)\`\`\`]
    `
}