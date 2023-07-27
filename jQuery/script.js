// $("h1").css("color", "red");
// $("h1").text("Good");
// $("h1").html("<i>Hello</i>");
// $("button.one").css("color","blue");
$("input").keypress(function(event){
     console.log(event.key);
     $("h1").text(event.key);
});