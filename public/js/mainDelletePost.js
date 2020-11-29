function delletePost() {    
    let valueUserDelete = document.getElementById("inputDelettePost").value;
    console.log(valueUserDelete);

    var xhttp = new XMLHttpRequest();

    xhttp.open("DELETE", "https://jsonplaceholder.typicode.com/posts/" + valueUserDelete, true);
    xhttp.send();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // let res = JSON.parse(this.response);//transformme en objet
            document.getElementById("delettePost").innerHTML = this.responseText;
        }
    };
        }