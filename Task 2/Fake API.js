function getData() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
    xhr.send("");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let data = JSON.parse(xhr.responseText);
            //console.log(data);
            Table(data);
        }
    };
}
function Table(data) {
    let table = "<table>" +
        "<thead>" +
            "<tr>" +
                "<th>ID</th>" +
                "<th>Title</th>" +
                "<th>Description</th>" +
            "</tr>" +
        "</thead>" +
        "<tbody>";
    
    data.forEach(function(item) { // alternative of for loop it will scan the array of data that has 100 index
        table += "<tr>" +
                    "<td>" + item.id + "</td>" +
                    "<td>" + item.title + "</td>" +
                    "<td>" + item.body + "</td>" +
                 "</tr>";
    });

    table += "</tbody></table>";
    document.getElementById('div1').innerHTML = table;
}

function getDataById() {
    let id = document.getElementById("itemId").value;
    if (!id) {
        alert("Please enter an ID.");
        return;
    }

    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/"+id);
    xhr.send("");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            displaySingleData(data);
        } else if (xhr.readyState === 4 && xhr.status !== 200) {
            document.getElementById("single-data-container").innerHTML = 
                "<p>No data found for ID"+id+"</p>";
        }
    };
}
function displaySingleData(data) {
    const container = document.getElementById("single-data-container");
    container.innerHTML = "<h4>Data for ID:</h4> "+ data.id+"<p><h4>Title:</h4> "+ data.title+"</p><p><h4> Description:</h4>"+data.body+"</p>";
}
getData();