console.log("Your index.js file is loaded correctly!");

$( "button").hover(
    function() {
        $(this).css("background-color", "#6B705C");
        $(this).css("color", "black");
        $(this).css("border-color", "black")
    }, function() {
        $(this).css("background-color", "#98A06E");
        $(this).css("color", "black");
    }
);

console.log("Hover state loaded");