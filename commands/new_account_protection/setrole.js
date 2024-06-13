module.exports = {
    name: "suspectrole set",
    code: `$description[1;:white_check_mark: Suspicious account role has been set as **$roleName[$mentionedRoles[1]]**.]
    $footer[1;Executed in: $executionTime ms]
    $addTimestamp
    $color[$getVar[embedcolor]]
    $setGuildVar[suspectroleid;$mentionedRoles[1]]
    $onlyIf[$mentionedRoles[1]!=;\`\`\`ERR: You should mention a role.\`\`\`]
    $onlyPerms[administrator;\`\`\`ERR: The user doesn't have enough permissions for execute this command.\`\`\`]
    $argsCheck[1;\`\`\`ERR: You should specify a role.\`\`\`]
    $suppressErrors[\`\`\`ERR: Something went wrong. (Are you sure that you mentioned a role?)\`\`\`]
    `
}