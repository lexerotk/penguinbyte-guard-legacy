module.exports = {
    name: "pbnapcheck",
    code: `$description[1;N.A.P. System: $getGuildVar[nap]
    N.A.P. Log Channel: $getGuildVar[napchannel]
    Role: $getGuildVar[suspectroleid]
    Verifier Role: $getGuildVar[verifierrole]]
    $color[$getVar[embedcolor]]
    $onlyIf[$or[$authorID==$guildOwnerID;$authorID==480083065159548938]==true;\`\`\`ERR: Sorry. Only bot owner or server owner can use this command.\`\`\`]
    `
}