function main() {

    // get the name fields
    var name1 = document.getElementById("name1").value;
    var name2 = document.getElementById("name2").value;

    // Encode the user's input as query parameters in a URL
    var url = "response.php" +
        "?name1=" + encodeURIComponent(name1) +
        "&name2=" + encodeURIComponent(name2);

    // Fetch the contents of that URL using the XMLHttpRequest object
    var req = createXMLHttpRequestObject();
    req.open("GET", url);

    // http://stackoverflow.com/questions/15692869/ajax-is-correctly-returning-and-displaying-data-but-error-message-is-being-activ?noredirect=1#comment22283000_15692869
    req.onreadystatechange = function () {
        if (req.readyState == 4) {
            if (req.status == 200) {
                try {
                    // If we get here, we got a complete valid HTTP response
                    var response = req.responseText; // HTTP response as a string
                    var text = JSON.parse(response); // Parse it to a JS array

                    // Convert the array of text objects to a string of HTML
                    var list = "";
                    for (var i = 0; i < text.length; i++) {
                        list += "<li><p>" + text[i].reply + " " + text[i].name + "</p>";
                    }

                    // Display the HTML in the element from above.
                    var ad = document.getElementById("responseText");
                    ad.innerHTML = "<ul>" + list + "</ul>";
                } catch (e) {
                    // display error message
                    alert("Error reading the response: " + e.toString());
                }
            } else {
                // display status message
                alert("There was a problem retrieving the data:\n" + req.statusText);
            }
        }
    };
    
    req.send(null);
}


// creates an XMLHttpRequest instance
function createXMLHttpRequestObject() {
    // xmlHttp will store the reference to the XMLHttpRequest object
    var xmlHttp;
    // try to instantiate the native XMLHttpRequest object
    try {
        // create an XMLHttpRequest object
        xmlHttp = new XMLHttpRequest();
    } catch (e) {
        // assume IE6 or older
        try {
            xmlHttp = new ActiveXObject("Microsoft.XMLHttp");
        } catch (e) {}
    }
    // return the created object or display an error message
    if (!xmlHttp) alert("Error creating the XMLHttpRequest object.");
    else return xmlHttp;
}