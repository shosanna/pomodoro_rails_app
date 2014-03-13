// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap
//= require_tree .


$(function(){
  $(".new-task-text").focus();

// Adding new tasks
  $("form").submit(function(e) {
    e.preventDefault();
    var input = $(".new-task-text");
    var li = $("<li>").text(input.val());
    $("ol.tasks").append(li);
    input.val("");

// Selecting an active task
    li.click(function(){
      $(this).toggleClass("selected");
    });

  });

// Selecting an active task
  $(".tasks li").click(function(){
    $(this).toggleClass("selected");
  });
});
