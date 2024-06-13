module.exports = {
    name: "newaccountprotection on",
    code: `$description[1;✅ New account protection enabled. For disable that, type **+newaccountprotection off.**]
    $footer[1;Executed in: $executionTime ms]
    $addTimestamp
    $color[$getVar[embedcolor]]
    $setGuildVar[nap;on]
    $setGuildVar[napchannel;$message[1]]
    $onlyIf[$getGuildVar[suspectroleid]!=undefined;\`\`\`ERR: Please first set your "Suspicious Account" role with "+suspectrole set" command.\`\`\`]
    $argsCheck[1;\`\`\`ERR: Try to run this command with typing a channel id(for logs) after the command. (Example: +newaccountprotection on 82347928347293)\`\`\`]
    $onlyPerms[administrator;\`\`\`ERR: The user doesn't have enough permissions for execute this command.\`\`\`]
    `
}