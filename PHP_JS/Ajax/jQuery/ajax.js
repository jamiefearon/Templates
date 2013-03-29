function main() {

    // get the name fields
    var name1 = document.getElementById("name1").value;
    var name2 = document.getElementById("name2").value;

    // Encode the user's input as query parameters in a URL
    var url = "response.php" +
        "?name1=" + encodeURIComponent(name1) +
        "&name2=" + encodeURIComponent(name2);

    $.ajax({
        type: "GET",
        url: url,
    }).done(function( msg ) {
        var text = JSON.parse( msg ); // Parse it to a JS array

        // Convert the array of text objects to a string of HTML
        var list = "";
        for (var i = 0; i < text.length; i++) {
            list += "<li><p>" + text[i].reply + " " + text[i].name + "</p>";
        }

        // Display the HTML in the element from above.
        var ad = document.getElementById("responseText");
        ad.innerHTML = "<ul>" + list + "</ul>";
    });

}
