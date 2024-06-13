module.exports = {
    name: "verify",
    aliases: ['verifyuser'],
    code: `$description[1;:white_check_mark: The user has been verified!]
    $footer[1;Executed in: $executionTime ms]
    $addTimestamp
    $color[$getVar[embedcolor]]
    $removeRole[$guildID;$mentioned[1];$getGuildVar[suspectroleid];The user has been verified by a moderator.]
    $argsCheck[1;\`\`\`ERR: You should mention someone.\`\`\`]
    $onlyIf[$or[$authorID==$guildOwnerID;$hasRoles[$guildID;$authorID;$getGuildVar[verifierrole]]]==true;\`\`\`ERR: You can't do that.\`\`\`]
    $onlyIf[$getGuildVar[suspectroleid]!=undefined;\`\`\`ERR: Couldn't find the suspect role. Please set it before using the set command.\`\`\`]
    $onlyIf[$getGuildVar[nap]==on;\`\`\`ERR: N.A.P. system is currently disabled.\`\`\`]
    $suppressErrors[\`\`\`ERR: Something went wrong. Maybe user is already verified?\`\`\`]`
}