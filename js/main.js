$(function(){
  
  //listen for click event on the submit button and then perform handleSubmit function
  $("#submit-btn").click(handleSubmit);
  //define this function
  function handleSubmit() {
  //prevent page from sending staff to server
    event.preventDefault();
    // console.log('hello'); - > it works

    // - Store user input in ```var city```, get the string value with .val & disregard the case
    var city = $('#city-type').val().toLowerCase();

    // console.log(city);// - no parenthesis because we want city variable
    // // console.log(city); - also works

    if (city == "new york" || city == "new york city" || city == "nyc" ) {
      $("body").attr("class","nyc");
      $("h1").text("New York");
      $("p").text("You picked NYC! Cool! My favorite City");
    } else if (city == "san francisco" || city == "sf" || city == "bay area" ) {
      $("body").attr("class","sf");
      $("h1").text("San Francisco");
      $("p").text("You picked SF - city of oysters!");
    } else if (city == "los angeles" || city == "la" || city == "lax" ) {
      $("body").attr("class","la");
      $("h1").text("los angeles");
      $("p").text("You picked LA - beautiful scenery around");
    } else if (city == "austin" || city == "atx") {
      $("body").attr("class","austin");
      $("h1").text("Austin");
      $("p").text("You picked Austin - on my to go list");
    } else if (city == "sydney" || city == "syd") {
      $("body").attr("class","sydney");
      $("h1").text("Sydney");
      $("p").text("You picked Sydney - don't forget to visit Blue Mountains Park");
    } else if (city = "undefined") {
      $("body").attr("class","none");
      $("h1").text("Not Yet In Stock");
      $("p").text("Sorry, we have not loaded this city yet. But will soon");
    }
    //if equals anything else show error picture

    //this clears the field (value of nothing to the city field)
    $("#city-type").val("")
  }; 

  

});