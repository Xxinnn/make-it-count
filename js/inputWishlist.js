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

var firestore = firebase.firestore();

var category = "clothingTab";
var NumPosts = 0;

$('#tabs li').click(function(){
    category = this.id;
    console.log(category);
})

function addWishlist() {

    NumPosts++;
    
    const itemName = $("#item").val();
    const gender = $("#gender option:selected" ).text();
    const size = $("#size").val();
    const color = $("#color").val();
    const brand = $("#brand").val();
    const quantity = $("#quantity").val();
    const type = $("#type option:selected").text();
    const link = $("#link").val();
        
    const list = firestore.collection("users").doc("list" + NumPosts);
    list.set({
      list: "list" + NumPosts,
      itemName: itemName,
      category: category,
      gender: gender,
      size: size,
      color: color,
      brand: brand,
      quantity: quantity,
      link: link,
    }).then(function () {
      console.log("success");
        location.reload();
    }).catch(function (error) {
      console.log("error");
    });
  }
    //}

function addWishlist_s() {

    NumPosts++;
    
    const itemName = $("#item_s").val();
    const gender = $("#gender_s option:selected" ).text();
    const size = $("#size_s").val();
    const color = $("#color_s").val();
    const brand = $("#brand_s").val();
    const quantity = $("#quantity_s").val();
    const link = $("#link_s").val();
        
    const list = firestore.collection("users").doc("list" + NumPosts);
    list.set({
      list: "list" + NumPosts,
      itemName: itemName,
      category: category,
      gender: gender,
      size: size,
      color: color,
      brand: brand,
      quantity: quantity,
      link: link,
    }).then(function () {
      console.log("success");
        location.reload();
    }).catch(function (error) {
      console.log("error");
    });
  }

function addWishlist_p() {

    NumPosts++;
    
    const itemName = $("#item_p").val();
    const gender = $("#type_p option:selected" ).text();
    const size = $("#size_p").val();
    const color = $("#color_p").val();
    const brand = $("#brand_p").val();
    const quantity = $("#quantity_p").val();
    const link = $("#link_p").val();
        
    const list = firestore.collection("users").doc("list" + NumPosts);
    list.set({
      list: "list" + NumPosts,
      itemName: itemName,
      category: category,
      gender: gender,
      size: size,
      color: color,
      brand: brand,
      quantity: quantity,
      link: link,
    }).then(function () {
      console.log("success");
        location.reload();
    }).catch(function (error) {
      console.log("error");
    });
  }


function addWishlist_a() {
    
    NumPosts++;
    
    const link = $("#link_a").val();
        
    const list = firestore.collection("users").doc("list" + NumPosts);
    list.set({
      list: "list" + NumPosts,
      category: category,
      link: link,
    }).then(function () {
      console.log("success");
        location.reload();
    }).catch(function (error) {
      console.log("error");
    });
  }

firestore.collection("users")
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            NumPosts++;
          console.log(doc.id, " => ", doc.data());
          showPost(doc.data().category, doc.data().itemName, doc.data().gender, doc.data().size, doc.data().color, doc.data().brand, doc.data().quantity, doc.data().link);

        });
      })
      .catch(function (error) {
        console.log("Error", error);
      });


    function showPost(category, itemName, gender, size, color, brand, quantity, link) {
        if (category == "clothingTab") {
            $("#clothingList").append("<li><div class=row><div class='col-md-3 col-xs-4'>" + itemName + "</div>" + "<div class='col-md-1 col-xs-4'>" + size + "</div>" + "<div class='col-md-1 col-xs-4'>" + color + "</div>" + "<div class='col-md-2 col-xs-4'>" + brand + "</div>" + "<div class='col-md-1 col-xs-4'>" + quantity + "</div><div class='col-md-3 col-xs-4 text-truncate'><a href=" + link + ">" + link + "</a></div>" + "<div class='col-md-1 col-xs-4 delete'><a href=>Delete</a></div></div></li>");
        }
        else if (category == "shoesTab") {
            $("#shoesList").append("<li><div class=row><div class='col-md-3 col-xs-4'>" + itemName + "</div>" + "<div class='col-md-1 col-xs-4'>" + size + "</div>" + "<div class='col-md-1 col-xs-4'>" + color + "</div>" + "<div class='col-md-2 col-xs-4'>" + brand + "</div>" + "<div class='col-md-1 col-xs-4'>" + quantity + "</div><div class='col-md-3 col-xs-4 text-truncate'><a href=" + link + ">" + link + "</a></div>" + "<div class='col-md-1 col-xs-4 delete'><a href=>Delete</a></div></div></li>");
        }
        else if (category == "productsTab") {
            $("#productsList").append("<li><div class=row><div class='col-md-3 col-xs-4'>" + itemName + "</div>" + "<div class='col-md-1 col-xs-4'>" + size + "</div>" + "<div class='col-md-1 col-xs-4'>" + color + "</div>" + "<div class='col-md-2 col-xs-4'>" + brand + "</div>" + "<div class='col-md-1 col-xs-4'>" + quantity + "</div><div class='col-md-3 col-xs-4 text-truncate'><a href=" + link + ">" + link + "</a></div>" + "<div class='col-md-1 col-xs-4 delete'><a href=>Delete</a></div></div></li>");
        }
        else if (category == "amazonLinkTab") {
            $("#amazonLinkList").append("<li><div class=row><div class='col-md-11 col-xs-12'><a href="+ link + ">" + link + "</a></div><div class='col-md-1 col-xs-12 delete'><a href=>Delete</a></div>"+"</div></li>");
        }
    }


$(".delete").click(function(){
    var deletePost = this.NumPosts;
    console.log(deletePost);
    firestore.collection("users").doc("list" + deletePost).delete().then(function() {
    console.log("Document successfully deleted!");
}).catch(function(error) {
    console.error("Error removing document: ", error);
});
                               
})
