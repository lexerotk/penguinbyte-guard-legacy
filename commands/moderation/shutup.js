module.exports = {
    name: "shutup",
    code: `$title[1;@$username[$mentioned[1]] Shut yo mouth a lil bit :pinching_hand:]
$description[1;The user has been timed out for 2 hours and the 10 most recent messages have been deleted.]
$image[$randomText[https://media1.tenor.com/m/USPVbr-tYZAAAAAd/josh-green.gif;https://media1.tenor.com/m/UV1TPehoB6YAAAAC/shut-your-mouth.gif;https://media1.tenor.com/m/dDhyOaNiiGQAAAAC/ripek-chill.gif;https://media1.tenor.com/m/H3gQzBTcImsAAAAC/taehyungmaraj-taehyungminaj.gif]]
$footer[1;Executed in: $executionTime ms]
$addTimestamp
$color[$getVar[embedcolor]]
$timeoutMember[$guildID;$mentioned[1];2h;false]
$clear[$channelID;10;user:$mentioned[1];false]
$onlyClientPerms[banmembers;\`\`\`ERR: Permission error. (Couldn't find "Ban Members" permission in the bot's roles.)\`\`\`]
$onlyIf[$rolePosition[$userHighestRole[$clientID]]<$rolePosition[$userHighestRole[$mentioned[1]]];\`\`\`ERR: Role position error. The user has roles positioned higher than the roles of the bot. (Try carrying bot's role position to a higher position/higher than mentioned user's highest role.)\`\`\`]
$onlyIf[$mentioned[1;false]!=undefined;\`\`\`ERR: No user specified. (Tip: Are you sure that you mentioned someone?)\`\`\`]
$argsCheck[1;\`\`\`ERR: No user specified.\`\`\`]
$onlyPerms[moderatemembers;\`\`\`ERR: The user doesn't have enough permissions for execute this command.\`\`\`]
$suppressErrors[\`\`\`ERR: Something went wrong. (Tip: Are you sure that you mentioned someone?)\`\`\`]
    `
}