module.exports = {
    name: "userinfo",
    code: `$title[1;:bust_in_silhouette: User Info: $userDisplayName[$mentioned[1]]]
    $description[1;· **Display Name:** $userDisplayName[$mentioned[1]] | **Username:** $username[$mentioned[1]]
· **User ID:** $mentioned[1]
· **Bot:** $replaceText[$replaceText[$isBot[$mentioned[1]];false;No];true;Yes]
· **DM:** $replaceText[$replaceText[$isUserDmEnabled[$mentioned[1]];false;No];true;Yes]
· **Status:** $replaceText[$replaceText[$replaceText[$replaceText[$userStatus;online;:green_circle: Online];dnd;:red_circle: Do Not Disturb];idle;:yellow_circle: Idle];offline;:black_circle: Offline]
· **Platform:** $replaceText[$replaceText[$replaceText[$replaceText[$userPlatform[$mentioned[1];$guildID;, ];mobile;Mobile];web;Browser];desktop;Desktop];none;(The user is offline)]
· **Account Creation Date:** $creationDate[$mentioned[1];date] ($creationDate[$mentioned[1];time])
· **Joined Server At:** $parseDate[$memberJoinDate[$authorID;$guildID]]
· **Booster:** $replaceText[$replaceText[$isBoosting[$mentioned[1]];false;Not a Booster!];true;Yes!]

· **User Roles ($userRolesCount[$mentioned[1]]):** $userRoles[$mentioned[1];$guildID;mention;, ]

· **User Perms:** $userPerms[$mentioned[1];, ;$guildID]
]
    $footer[1;Executed in: $executionTime ms]
    $thumbnail[$userAvatar[$mentioned[1]]]
    $addTimestamp
    $color[$getVar[embedcolor]]
    $onlyIf[$mentioned[1;false]!=undefined;\`\`\`ERR: No user specified. (Tip: Try to mention someone)\`\`\`]
    $argsCheck[1;\`\`\`ERR: No user specified.\`\`\`]
    `
}