function m() {



    var r = new XMLHttpRequest();

    r.onreadystatechange = function() {

        var x = document.getElementById("x");

        if (r.readyState == 4) {
            var text = r.responseText;
            alert(text);
            x.className = "";
        } else {

            x.className = "d";
        }



    };

    r.open("GET", "process.php", true);
    r.send();




}