module.exports = {
    name: "newaccountprotection off",
    code: `$description[1;✅ New account protection has been disabled.]
    $footer[1;Executed in: $executionTime ms]
    $addTimestamp
    $color[$getVar[embedcolor]]
    $setGuildVar[napchannel;undefined]
    $setGuildVar[nap;off]
    $onlyIf[$getGuildVar[nap]!=off;\`\`\`ERR: N.A.P system is already disabled.\`\`\`]
    $onlyPerms[administrator;\`\`\`ERR: The user doesn't have enough permissions for execute this command.\`\`\`]
    `
}