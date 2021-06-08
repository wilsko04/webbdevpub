// This is a hack, please let me know if this breaks in some setting // William


function addNavBar() {

    // The buttons to exist in the navbar, what they should say as text is the key
    // The value is the corresponding html file to swap to on click.
    let navigation = {
        "The Game": "index.html",
        "Skeletony": "test1.html",
        "The Precious Stone": "test2.html",
        "Maenan and Rongod": "maenan.html",
        "Quiz!": "quiz.html",
        
    };

    let navbar = document.getElementById("myNavbar");

    for (let key in navigation) {
        let value = navigation[key];
        let element = document.createElement("a");
        element.textContent = key;
        element.href = value;

        let path = location.pathname;

        // The special case where you navigate to the folder containing the website "examination_webdev/"
        // which defaults to index.html
        if (path.endsWith("/") && value == "index.html") {
            element.className += " active"
        } else {
            // all other cases end in .html
            element.className += location.pathname.includes(value) ? " active" : "";
        }


        navbar.appendChild(element);
    }
}

window.addEventListener('DOMContentLoaded', addNavBar, false);