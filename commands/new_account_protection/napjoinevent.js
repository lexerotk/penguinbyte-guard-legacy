module.exports = [{
    name: "protectionsystem",
    type: "join",
    channel: "$getGuildVar[napchannel]",
    code: `
    $sendDm[:warning: Your account has been suspended. Please verify your account via contacting the moderators.;$authorID;false]
    $title[1;:warning: Suspicious Account Detected]
    $description[1;
**Username:** $username[$authorID]

**ID:** $authorID

**Account Creation Date:** $creationDate[$authorID;date] ($creationDate[$authorID;time]
]
    $thumbnail[$authorAvatar[1024;false;png]]
    $color[$getVar[embedcolor]]
    $addTimestamp
    $giveRoles[$guildID;$authorID;This account is newer than 30 days.;$getGuildVar[suspectroleid]]
    $onlyIf[$truncate[$math[(($dateStamp-$creationDate[$authorID;ms])/1000)/86400]]<=30; ]
    $onlyIf[$isBot[$authorID]==false; ]
    $onlyIf[$getGuildVar[suspectroleid]!=undefined; ]
    $onlyIf[$getGuildVar[nap]==on; ]`
}]