module.exports = {
    name: "serverinfo",
    code: `$title[1;:scroll: Server Info: $guildName[$guildID]]
    $description[1;**· Name:** $guildName

**· ID:** $guildID
        
**· Owner:** <@$guildOwnerID>
        
**· Creation Date:** $creationDate[$guildID;date]
        
**· Verification Level:** $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$guildVerificationLevel;0;None];1;Low (Must have a verified email on their Discord account.)];2;Medium (Must also be regjstered on Discord for longer than 5 minutes.)];3;High (Must also be registered on Discord for longer than 5 minutes.)];4;Highest (Must have a verified Phone on their Discord account.)]
        
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
        
**· Member Count:** Members: $membersCount[$guildID;all;no] + Bots: $guildBotCount = All: $membersCount

**· Role Count:** $roleCount[$guildID]
        
**· Emoji Count:** $emojiCount[$guildID]
        
**· Channel Count:** $channelCount[$guildID;Text] Text | $channelCount[$guildID;Voice] Voice | $channelCount[$guildID;Category] Category | $channelCount[$guildID;Stage] Stage
        
**· Boosts:** $replaceText[$guildBoostCount Boost;0 Boost;No Boost;1] $replaceText[(Level $guildBoostLevel);(Level 0);(No Level);1]]
    $thumbnail[$guildIcon[$guildID]]
    $footer[1;Executed in: $executionTime ms]
    $addTimestamp
    $color[$getVar[embedcolor]]
  `
}