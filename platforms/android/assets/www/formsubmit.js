
$(document).ready(function() {
$("#submit").click(function() {
var landlord = $("#landlord").val();
var tenant = $("#tenant").val();
var location = $("#location").val();
if (landlord == '' || tenant == '' || location == '') {
alert("Insertion Failed Some Fields are Blank....!!");
} else {
// Returns successful data submission message when the entered information is stored in database.
$.post("localhost/index.php", {
landlord: landlord,
tenant: tenant,
location: location
}, function(data) {
alert(data);
$('#form')[0].reset(); // To reset form fields
});
}
});
});