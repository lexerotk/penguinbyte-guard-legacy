module.exports = {
    name: "clearmessagesof",
    aliases: ['cms'],
    code: `$deleteIn[5s]
    $description[1;:white_check_mark: $message[2] messages of $username[$mentioned[1]] have been successfully deleted.]
    $footer[1;Executed in: $executionTime ms]
    $addTimestamp
    $color[$getVar[embedcolor]]
    $clear[$channelID;$message[2];user:$mentioned[1];false]
    $onlyClientPerms[managemessages;\`\`\`ERR: Permission error. (Couldn't find "Manage Messages" permission in the bot's roles.)\`\`\`]
    $onlyIf[$mentioned[1;false]!=undefined;\`\`\`ERR: No user specified. (Tip: Are you sure that you mentioned someone?)\`\`\`]
    $argsCheck[2;:negative_squared_cross_mark: **ERR:** Please first mention someone and specify the number of messages to be deleted.]
    $onlyPerms[banmembers;\`\`\`ERR: The user doesn't have enough permissions for execute this command.\`\`\`]
    $suppressErrors[\`\`\`ERR: Something went wrong. (Tip: Are you sure that you mentioned someone?)\`\`\`]`
    
}