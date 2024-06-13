module.exports = {
    name: "help jail",
    aliases: ['commands jail','cmds jail'],
    code: `$description[1;Jail system has been archived due some issues.]
$footer[1;Executed in: $executionTime ms]
$addTimestamp
$color[$getVar[embedcolor]]`
}