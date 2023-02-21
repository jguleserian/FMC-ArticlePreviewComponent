// ---Setting the date upon loading---
$(() => {
    const monArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const date = new Date();
    const day = date.getDate();
    const month = monArray[date.getMonth()];
    const year = date.getFullYear();

    console.log(`${day} ${month} ${year}`);
    $("p.date").text(`${day} ${month} ${year}`);
});

// ---Hover effect for "Share" button---
$("div.share").hover(() => {
    $("div.share").css("background-color", "var(--desaturatedDarkBlue)");
    $("svg.gray>path").css("fill", "white");
}, () => {
    $("div.share").css("background-color", "var(--lightGrayBlue)");
    $("svg.gray>path").css("fill", "#6E8098");
});

// Click event for "Share" button---
$("div.share").click(() => {
    $("div.bubble").slideToggle(500).css("display", "flex");
});