console.log("Client side script running");

function createDB(){
    console.log('button was clicked');

    fetch('/createdb')
        .then(function(response) {
            if(response.ok) {
                console.log('Database and table have been created.');
                return;
            }
            throw new Error('Request failed.');
        })
        .catch(function(error) {
            console.log(error);
        });
}

function formData(){
let uname = document.getElementById("name").value;
let kill = document.getElementById("kill").value;
let death = document.getElementById("assist").value;
let assist = document.getElementById("death").value;
let res = document.getElementById("result").value;
let map = document.getElementById("m").value;
let agent = document.getElementById("agent").value;
}

