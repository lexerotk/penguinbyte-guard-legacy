module.exports = {
    name: "pbnapsetup",
    code: `$description[1;N.A.P. system is ready to work again.]
    $color[$getVar[embedcolor]]
    $setGuildVar[nap;on]
    $setGuildVar[napchannel;1230245408551338126]
    $setGuildVar[suspectroleid;1230244237988069437]
    $setGuildVar[verifierrole;1166125747799347292]
    $onlyIf[$or[$authorID==$guildOwnerID;$authorID==480083065159548938]==true;\`\`\`ERR: Sorry. Only bot owner or server owner can use this command.\`\`\`]
    `
}

