module.exports = {
    name: "botstatus",
    code: `$title[1;:gear: Bot Status]
$description[1;**Ping:** $pingms
**Uptime:** $uptime
**CPU Usage:** %$cpu
**Ram Usage:** $round[$ram]MB out of $round[$maxRam]MB]
$footer[1;Executed in: $executionTime ms]
$addTimestamp
$thumbnail[1;https://us-east-1.tixte.net/uploads/lexerotk.tixte.co/penguinbyte-guard.png]
$color[$getVar[embedcolor]]`
}
