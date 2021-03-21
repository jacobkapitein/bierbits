const kouwekastBeheer = () => {
    const hoeveelBierMoetenWe = hoeveelBierMoetErIn();
    const enWatZitErIn = enHoeveelZitErAlIn();

    for(let i = 0; i < hoeveelBierMoetenWe - enWatZitErIn; i++){
        addVreugdewater();
    }
}

const bierTimer = () => {
    const volgendeBierOverHoelang = volgendeBierOver();

    // uren
    let volgendeUren = Math.floor(volgendeBierOverHoelang / 60 / 60 % 60)
    if (volgendeUren.toString().length === 1) volgendeUren = `0${volgendeUren}`;
    $("#uren").text(volgendeUren);

    // minuten
    let volgendeMinuten = Math.floor(volgendeBierOverHoelang / 60 % 60)
    if (volgendeMinuten.toString().length === 1) volgendeMinuten = `0${volgendeMinuten}`;
    $("#minuten").text(volgendeMinuten);

    // seconden
    let volgendeSeconden = Math.floor(volgendeBierOverHoelang % 60)
    if (volgendeSeconden.toString().length === 1) volgendeSeconden = `0${volgendeSeconden}`;
    $("#seconden").text(volgendeSeconden);
}

const volgendeBierOver = () => {
    const current_time = Math.floor(Date.now() / 1000);
    const week_duration = 604800;
    const vreugdewater_time = 25200;
    const total_time = week_duration + vreugdewater_time;
    const time_passed = (current_time % vreugdewater_time) + week_duration;

    return total_time - time_passed;
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

const onClickDicht = () => {
    $(".dicht").css('display', 'none');
    $(".open").css('display', 'block');
}

const onClickOpen = () => {
    $(".dicht").css('display', 'block');
    $(".open").css('display', 'none');
}