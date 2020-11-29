function addPostShowAjax() {
    let valueUserID = document.getElementById("valueUserId").value;
    let valueUserTitle = document.getElementById("valueTitle").value;
    let valueUserBody = document.getElementById("valueBody").value;

    console.log(valueUserID);
    console.log(valueUserTitle);
    console.log(valueUserBody);

    var xhttp = new XMLHttpRequest();

    xhttp.open("POST", "https://jsonplaceholder.typicode.com/posts/", true);
    xhttp.send();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let res = JSON.parse(this.response);//transformme en objet
            document.getElementById("resultPostAdd").innerHTML = this.responseText;
        }
    };
}