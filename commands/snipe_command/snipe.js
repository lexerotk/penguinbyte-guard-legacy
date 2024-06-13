module.exports = {
    name: "snipe",
    code: `$title[Snipe]
    $description[**The Message I Caught:** \`$getGuildVar[snipem]\`

**Author:** <@$getGuildVar[snipeu]>
**Channel:** <#$getGuildVar[snipec]>]
$footer[1;Executed in: $executionTime ms]
$addTimestamp
$color[$getVar[embedcolor]]
$onlyIf[$getGuildVar[snipem]!=;{newEmbed:{description::negative_squared_cross_mark: **ERR:** Couldn't detect any deleted message. (Dont forget that bot can't detect local images.)}{color:FF0000}}]
`
}