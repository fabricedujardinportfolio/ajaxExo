function clickUser() {

    let valueUser = document.getElementById("inputAddPost").value;
    console.log(valueUser);

    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts/" + valueUser, true);
    xhttp.send();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let res = JSON.parse(this.response);//transformme en objet
            document.getElementById("resultPost").innerHTML =
                `<div class="backgroundColorAdd">
                <p> UserID = ${res.userId}</p>
                <p class="placementPostId"> ${res.id}</p>
                <h2>${res.title}</h2>
                <div>${res.body}</div>
            </div>`;
        }
    };

}