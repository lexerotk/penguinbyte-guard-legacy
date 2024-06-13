module.exports = {
    name: "useridinfo",
    code: `$title[1;:bust_in_silhouette: User ID Info: $userDisplayName[$message[1]]]
    $description[1;· **Display Name:** $userDisplayName[$message[1]] | **Username:** $username[$message[1]]
· **User ID:** $message[1]
· **Bot:** $replaceText[$replaceText[$isBot[$message[1]];false;No];true;Yes] 
· **DM:** $replaceText[$replaceText[$isUserDmEnabled[$message[1]];false;No];true;Yes]
· **Status:** $replaceText[$replaceText[$replaceText[$replaceText[$userStatus;online;:green_circle: Online];dnd;:red_circle: Do Not Disturb];idle;:yellow_circle: Idle];offline;:black_circle: Offline]
· **Platform:** $replaceText[$replaceText[$replaceText[$replaceText[$userPlatform[$message[1];$guildID;, ];mobile;Mobile];web;Browser];desktop;Desktop];none;(The user is offline)]
· **Account Creation Date:** $creationDate[$message[1];date] ($creationDate[$message[1];time])
· **Joined Server At:** $parseDate[$memberJoinDate[$authorID;$guildID]]
· **Booster:** $replaceText[$replaceText[$isBoosting[$message[1]];false;Not a Booster!];true;Yes!]

· **User Roles ($userRolesCount[$message[1]]):** $userRoles[$message[1];$guildID;mention;, ]

· **User Perms:** $userPerms[$message[1];, ;$guildID]
]
    $footer[1;Executed in: $executionTime ms]
    $thumbnail[$userAvatar[$message[1]]]
    $addTimestamp
    $color[$getVar[embedcolor]]
    $suppressErrors[\`\`\`ERR: You should specify an user ID. \`\`\`]
    $argsCheck[1;\`\`\`ERR: You should specify an user ID.\`\`\`]
    `
}