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
var storageRef = firebase.storage().ref();

$('#bnt_register_user').click(function() {
    console.log("bnt_register_user: email: " + $('#email').val());
    
    var newKey = firebase.database().ref('/user/').push({
        'email':$('#email').val(), 
        'name_first':$('#firstname').val(), 
        'name_last':$('#lastname').val(), 
        'password':$('#password').val(), 
        'phone':$('#phone').val(), 
    });

    var uploadRef = storageRef.child(newKey.key + "/" + $('#img_upload').val());

    if (document.getElementById('img_upload').files.length>0) {
        var file = document.getElementById('img_upload').files[0];
        uploadRef.put(file).then(function(snapshot) {
            console.log('Uploaded a file!');
            var promise = uploadRef.getDownloadURL();

            promise.then(function(result) {
                firebase.database().ref("/user/" + newKey.key + "/img").set(result);
                alert("Successfully Signed Up.");
                window.location.href = "./login.html";

            }, function(err) {
                console.log(err); 
                alert("Sign Up Error.");
            });
        });
    };
});
