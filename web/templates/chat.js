function getCurrentUser(){
$.ajax({
url:'/current',
type:'GET',
success: function(response){
#alert("sucees");
#alert(JSON.stringify(response));
$('#current_user').html(response['username']);
},
error: function(response){
alert(JSON.stringify(response));
}
});
}



function getAllUsers(){
$.ajax({
url:'/users',
type:'GET',
success: function(response){
//alert("sucees");
alert(JSON.stringify(response));
//$('#current_user').html(response['username']);
},
error: function(response){
alert(JSON.stringify(response));
}
});
}

