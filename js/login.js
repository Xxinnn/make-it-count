// Initialize Firebase
var config = {
    apiKey: "AIzaSyACFDBt4dmQsw0NmTo2nRLtFm3KAmQhHGM",
    authDomain: "makeitcount-82038.firebaseapp.com",
    databaseURL: "https://makeitcount-82038.firebaseio.com",
    projectId: "makeitcount-82038",
    storageBucket: "makeitcount-82038.appspot.com",
    messagingSenderId: "579484295483"
};
firebase.initializeApp(config);

 
function setCookie (cookieName, cookieValue, expireSeconds) {
    var date = new Date();
    date.setTime(date.getTime()+(expireSeconds*1000));
    var expires = "; expires="+date.toGMTString();

    document.cookie = cookieName + "=" + escape( cookieValue ) + "; path=/; expires=" + expires + ";";
}

$('#bnt_login_user').click(function() {
    var email = $('#email').val();
    var password = $('#password').val();

    firebase.database().ref("/user/").orderByChild('email').equalTo(email).on("value", function(snapshot) {
        if (snapshot.val() == null) {
                alert("Wrong email");
        }
        snapshot.forEach(function(data) {
            console.log(snapshot.val()[data.key]);
            if (snapshot.val()[data.key]["password"] == password) {
                setCookie("login", "success", 60*60*1)
                setCookie("id", email, 60*60*1)
                window.location.href = "./index_landing.html.html";
            } else {
                alert("Wrong password");
            }
        });
    });
})