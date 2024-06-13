module.exports = {
    name: "snipeevent",
    type: "messageDelete",
    code: `$setGuildVar[snipem;$message]
    $setGuildVar[snipeu;$authorID]
    $setGuildVar[snipec;$channelUsed]`
}