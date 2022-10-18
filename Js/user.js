let Username
let getName=localStorage.getItem('userName')
function store() {
    if (getName) {
        ar=JSON.parse(getName)
    }
    // start()
}
function start() {
    myName=document.getElementById('user').value
    Username=[{name:myName}]
    // console.log(Username[0].name);
    let user_regex=/^[a-zA-Z]{6,}$/
    if (user.value=='') {
        alert('Username required')
        return;
    }
    if (!user_regex.test(Username[0].name)) {
        alert('Input should be more than six letters')
        return;
    }
    setTimeout(() => {
        if (user_regex.test(Username[0].name)) {
            window.location.href ="./game.html";
            myName=''
        }
    }, 10000);
    user.value=''
    localStorage.setItem('userName', JSON.stringify(Username))
    

let modal = document.getElementById("myModal");
  modal.style.display = "block";
  let span = document.getElementsByClassName("close")[0];
  span.onclick = function () {
    modal.style.display = "none";
  };
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}

