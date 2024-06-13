module.exports = {
    name: "help nap",
    aliases: ['commands nap','cmds nap'],
    code: `$title[1;:scroll: NAP Configuration]
    $description[1;**· +newaccount protection on/off** - Activate/Deactivate the NAP system.
**· +suspectrole set** - Set the suspect role.
**· +suspectrole reset** - Resets the suspect role to undefined.
**· +verify** -  Verify someone.
**· +unverify** - Unverify someone.
**· +verifier role** - Set the verifier role for using commands.]
$footer[1;Executed in: $executionTime ms]
$addTimestamp
$image[1;https://us-east-1.tixte.net/uploads/lexerotk.tixte.co/PBGuard-banner-cropped.png]
$thumbnail[1;https://us-east-1.tixte.net/uploads/lexerotk.tixte.co/PBGuard.png]
$color[$getVar[embedcolor]]`
}