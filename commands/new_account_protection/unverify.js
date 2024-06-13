module.exports = {
    name: "unverify",
    aliases: ['unverifyuser'],
    code: `$description[1;:white_check_mark: The user has been unverified!]
    $footer[1;Executed in: $executionTime ms]
    $addTimestamp
    $color[$getVar[embedcolor]]
    $giveRole[$guildID;$mentioned[1];$getGuildVar[suspectroleid];Moderator action.]
    $argsCheck[1;\`\`\`ERR: You should mention someone.\`\`\`]
    $onlyIf[$or[$authorID==$guildOwnerID;$hasRoles[$guildID;$authorID;$getGuildVar[verifierrole]]]==true;\`\`\`ERR: You can't do that.\`\`\`]
    $onlyIf[$getGuildVar[suspectroleid]!=undefined;\`\`\`ERR: Couldn't find the suspect role. Please set it before using the set command.\`\`\`]
    $onlyIf[$getGuildVar[nap]==on;\`\`\`ERR: N.A.P. system is currently disabled.\`\`\`]
    $suppressErrors[\`\`\`ERR: Something went wrong. (Maybe user is already unverified?)\`\`\`]`
}