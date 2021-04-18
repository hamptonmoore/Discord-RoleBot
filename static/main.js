async function getGuildAvatar(guildID, iconID) {
    console.log("Getting guild icon.")
    let path

    // checks if the icon is animated or not
    if (/^a_/.test(iconID)) {
        path = `icons/${guildID}/${iconID}.gif`
    } else {
        path = `icons/${guildID}/${iconID}.png`
    }
    let image = await fetch(`/images/${path}`);
    console.log(`image path is :${path}`);
    return await image.text()
}

window.onload = async function() {
    const iconId = "a_6d9390fadb6bc1fa5a59ede9cdfe26b6";
    let guildImageURL = await getGuildAvatar("574287921717182505", iconId);
    document.getElementById("guild-icon").setAttribute("src", guildImageURL);
}
