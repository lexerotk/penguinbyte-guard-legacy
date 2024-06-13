module.exports = {
    name: "help",
    aliases: ['commands','cmds'],
    code: `$title[1;:scroll: Help - Commands]
    $description[1;**· +help nap** - Shows the configuration commands for the new account protection system.
**· +help jail** - Shows the commands of the jail system (ARCHIVED).
    
**-------------------------------**

**· +cls** - Clears messages. | **+cms** - Clear messages of a specific user.
**· +ban** - Ban someone. | **+idban** - Ban someone via user ID. | **+nick** - Hmm. | **+unban** - Unban someone via user ID.
**· +snipe** - Show the last deleted message on the server.
**· +botstatus** - Check bot's status (ping, uptime etc.)
**· +shutup** - 🤐]
$footer[1;Executed in: $executionTime ms]
$addTimestamp
$image[1;https://us-east-1.tixte.net/uploads/lexerotk.tixte.co/PBGuard-banner-cropped.png]
$thumbnail[1;https://us-east-1.tixte.net/uploads/lexerotk.tixte.co/PBGuard.png]
$color[$getVar[embedcolor]]`
}