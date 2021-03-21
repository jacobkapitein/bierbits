const kouwekastBeheer = () => {
    hoeveelBierMoetenWe = hoeveelBierMoetErIn();
    enWatZitErIn = enHoeveelZitErAlIn();

    for(let i = 0; i < hoeveelBierMoetenWe - enWatZitErIn; i++){
        addVreugdewater();
    }
}

const hoeveelBierMoetErIn = () => {
    // week_duration = 1 week = 604800
    // vreugdewater_time = 1 beer every 25200
    // first_saturday = first saturday in unix time = 172800
    // current_time = current unix time (seconds)
    const current_time = Math.floor(Date.now() / 1000);
    const vreugdewater_time = 25200;
    const first_saturday = 172800;
    const week_duration = 604800;

    return Math.floor(((current_time % week_duration) - first_saturday) / vreugdewater_time);
}

const enHoeveelZitErAlIn = () => {
    return $("#1 .vreugdewater").length + $("#2 .vreugdewater").length + $("#3 .vreugdewater").length;
}

const addVreugdewater = () => {
    // Get a random value for rotation
    let rotation = (Math.random() * (2.0000 - -2.0000) + -2.0000).toFixed(4);

    if($("#1 .vreugdewater").length !== 8){
        // Get a random value for top spacing
        let top = (Math.random() * (13.000 - 12.000) + 13.0000).toFixed(4);
        // Add the beer to the refrigirator
        $("#1").append(`<img class="vreugdewater" src="images/bierflesje.png" style="left: 11%; top: ${top}%; transform: rotate(${rotation}deg)" />`);
    } else if($("#2 .vreugdewater").length !== 8){
        let top = (Math.random() * (36.000 - 34.000) + 34.0000).toFixed(4);
        $("#2").append(`<img class="vreugdewater" src="images/bierflesje.png" style="left: 11%; top: ${top}%; transform: rotate(${rotation}deg)" />`);
    } else if($("#3 .vreugdewater").length !== 8){
        let top = (Math.random() * (58.000 - 56.000) + 56.0000).toFixed(4);
        $("#3").append(`<img class="vreugdewater" src="images/bierflesje.png" style="left: 11%; top: ${top}%; transform: rotate(${rotation}deg)" />`);
    }
}

const onHoverDicht = () => {
    $(".dicht").css('display', 'none');
    $(".open").css('display', 'block');
}