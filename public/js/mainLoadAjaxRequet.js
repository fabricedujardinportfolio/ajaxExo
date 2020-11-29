function displayPost(posts) {
            posts.forEach(post => {
                // console.log(post);
                let employerState = document.createElement('div');
                employerState.innerHTML = `                            
                <p> UserID = ${post.userId}</p>
                <p> PostID = ${post.id}</p>
                <h2>${post.title}</h2>
                <div>${post.body}</div>
                </br>
                </br>`
                document.getElementById('reponse').appendChild(employerState);
            });
        }
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                var response = JSON.parse(xhr.responseText);
                displayPost(response);
            }
        };
        xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
xhr.send();
        