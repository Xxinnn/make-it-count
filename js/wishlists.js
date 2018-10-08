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


function getWishlist() {
    var headers = {};
    headers["Access-Control-Allow-Origin"] = "http://leeungno.togather.me"; 

    $.ajax({
        type: 'GET', 
        contentType: 'application/json; charset=utf-8',
        header: headers,
        url:  'http://leeungno.togather.me:5000/',                     
        success: function(data) {
        }
    }); 

    firebase.database().ref("/wishlist/" + '2O44TD2VFSKUB').once("value", function(snapshot) { 
        var wishlist_list = JSON.parse(snapshot.val());

        $("#wishlist_table").html('');

        var line_1 = '<table class="table table-condensed table-bordered"> <tbody> <tr> <th rowspan="2" style="width:150px;"><img src="' 
        var line_2 = '"></th><th style="width:500px"> Name </th> <th> Cost </th>  <th rowspan="2"> <a href="'
        var line_3 = '"> Link </th>'
        var line_4 = '</tr> <tr> <td>'
        var line_5 = '</td>  <td>'
        var line_6 = '</td> </tr> </tbody></table>' 

        var result = '';

        for (var idx in wishlist_list) {
            var _link = wishlist_list[idx]['link'];
            var _img = wishlist_list[idx]['picture'];
            var _name = wishlist_list[idx]['name'];
            var _price = wishlist_list[idx]['new-price'].split(".")[0];
            result += line_1 + _img + line_2 + _link + line_3 + line_4 + _name+ line_5 + _price + line_6; 
        }                
        $("#wishlist_table").html(result); 
    }); 
} 

getWishlist();

 