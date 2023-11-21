$(document).ready(function() {

    // list one content
    var one = [
        "",
        "maybe",
        "i don't",
        "just",
        "isn't",
        "is",
        "open",
        "close",
        "stop",
        "stop",
        "stop",
        "is",
        "can't",
        "right",
        "doesn't",
    ];

    // list two content
    var two = [
        "don't",
        "not",
        "want to",
        "go",
        "that hard",
        "just",
        "your eyes",
        "your eyes",
        "scrolling",
        "thinking",
        "trying",
        "easy",
        "hurt",
        "now",
        "work",
    ];

    // list three content
    var three = [
        "yes",
        "no",
        "maybe",
        "yes",
        "no",
        "i'll try",
        "yes",
        "no",
        "no",
        "maybe",
        "no",
        "i don't want to",
        "i can't",
        "i'm trying"
    ];

    // Color array for alternating background
    var backgroundColors = ['black', 'darkgrey', 'midgrey', 'lightgrey', 'verylightgrey', 'white'];
    var currentColorIndex = 0;

    // This is a very common randomizing function.
    // It takes a list (array) and returns one at random.
    function select_random(x) {
        y = x[Math.floor(Math.random() * x.length)];
        return y;
    }

    function generate() {

        // Select a random item from each list
        var selected_one = select_random(one);
        var selected_two = select_random(two);
        var selected_three = select_random(three);

        // Take the selected (random) item from the list and make it visible
        $('.list-one').html(selected_one);
        $('.list-two').html(selected_two);
        $('.list-three').html(selected_three);

        // Set the background color based on the current index
        var backgroundColor = backgroundColors[currentColorIndex];
        $('body').css('background-color', backgroundColor);

        // Update the index for the next iteration
        currentColorIndex = (currentColorIndex + 1) % backgroundColors.length;
    }

    $('button').click(function() {
        generate();
    });

    generate();

});
