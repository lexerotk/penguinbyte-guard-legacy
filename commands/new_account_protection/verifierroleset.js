module.exports = {
    name: "verifierrole set",
    code: `$description[1;:white_check_mark: **$roleName[$mentionedRoles[1]]** can now use the +verify and +unverify commands.]
    $footer[1;Executed in: $executionTime ms]
    $addTimestamp
    $color[$getVar[embedcolor]]
    $setGuildVar[verifierrole;$mentionedRoles[1];$mentioned[1;false]]
    $onlyIf[$mentionedRoles[1]!=undefined;\`\`\`ERR: You should specify a role. (Tip: Are you sure that you mentioned a role?)\`\`\`]
    $argsCheck[1;\`\`\`ERR: You should specify a role.\`\`\` ]
    $onlyPerms[administrator;\`\`\`ERR: The user doesn't have enough permissions for execute this command.\`\`\`]`
}