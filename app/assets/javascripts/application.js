//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap
//= require_tree .


$(function(){
  $(".new-tasks-text").focus();

// Adding new tasks
//  $("form").submit(function(e) {
//    e.preventDefault();
//    var input = $(".new-tasks-text");
//    var li = $("<li>").text(input.val());
//    $("ol.tasks").append(li);
//    input.val("");

//// Selecting an active tasks
//    li.click(function() {
//      $(this).toggleClass("selected");
//    });
//
//  });

// Selecting an active tasks
  $(".tasks li").click(function(){
    $(this).toggleClass("selected");
  });
});

