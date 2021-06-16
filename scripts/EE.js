var stack = 0;

function easterEgg() {
    if (stack > 18) {
        stack = 0;
        open("Creator_info/EE.html");
    } else {
        stack++;
    }
}

