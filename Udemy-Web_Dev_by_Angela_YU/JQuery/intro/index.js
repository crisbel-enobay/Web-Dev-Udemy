// JQuery samples

// adding class 
// $("h1").addClass("big-title bg-color");

// removing class 
// $("h1").removeClass("big-title bg-color");

// manipulating text
// $("h1").text("Goodbye");
// $("h1").text("<em>Goodbye</em>");

// manipulating attributes
// $("a").attr("href", "https://www.youtube.com/");
// $("h1").attr("class");

// adding addEventListener

// $("h1").click(function(){
//     $("h1").css("color", "purple");
// })

// $("button").click(function(){
//     $("h1").css("color", "purple");
// })

// $("input").keypress(function(event){
//     $("h1").text(event.key);
// })

// $("h1").on("mouseover", function(){
//     $("h1").css("color", "purple");
// })

// Adding and removing html elements
// $("h1").before("<button>New</button>"); // before the h1 element top of the line code
// $("h1").after("<button>New</button>"); // after the h1 element of below the line code
// $("h1").prepend("<button>New</button>"); // before the h1 content or the left side of the content
// $("h1").append("<button>New</button>"); // after the h1 content or the right side of the content
// $("h1").remove(); // remove all buttons around h1

// animation
// $("h1").hide(); // hides the h1
// $("h1").show(); // display the h1

// toggle hide and show
// $("button").on("click", function(){
//     $("h1").toggle();
// })

// $("h1").fadeIn(); 
// $("h1").fadeOut(); 

// toggle fade in and fade out
// $("button").on("click", function(){
//     $("h1").fadeToggle();
// })

// $("h1").slideUp(); 
// $("h1").slideDown(); 

// toggle fade in and fade out
// $("button").on("click", function(){
//     $("h1").slideToggle();
// })

// $("button").on("click", function(){
//     $("h1").animate({margin: "20px"}); // animate only accept css that requires numeric value numeric value
// })

// $("button").on("click", function(){
//     $("h1").animate({opacity: 0.5}); // animate only accept css that requires numeric value numeric value
// })

// method chaining
$("button").on("click", function(){
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
})
