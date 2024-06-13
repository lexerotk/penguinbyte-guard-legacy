module.exports = {
    name: "suspectrole reset",
    code: `$description[1;:white_check_mark: Suspicious account role has been resetted.**]
    $footer[1;Executed in: $executionTime ms]
    $addTimestamp
    $color[$getVar[embedcolor]]
    $resetGuildVar[suspectroleid]
    $onlyIf[$getGuildVar[suspectroleid]!=undefined;:negative_squared_cross_mark: **ERR:** Suspect role id is already resetted.]
    $onlyPerms[administrator;\`\`\`ERR: You don't have enough permissions for that.\`\`\`]
    `
}