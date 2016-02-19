(function(global) {
  'use strict';

  // Game Board
  var s = Snap("#game-board");

  function generate() {
    // Jquerify SVG elements based on ID.  IDs are retireved manually for now.  Will need to update this in the future
    var $blue1 = $('#path3803-5-2'),
        $blue2 = $('#path3803-5'),
        $red1 = $('#path3803'),
        $red2 = $('#path3803-5-2-3'),
        $white = $('#path3765');

    // Set classes to SVG elements so we can apply CSS styles (in an actual implementation this should likely be done in some data structure )
    $blue1.toggleClass(" game-cell blue");
    $blue2.toggleClass("game-cell blue");
    $red1.toggleClass("game-cell red");
    $red2.toggleClass("game-cell red");
    $white.toggleClass("game-cell white");

    // If game board was stored in an object we could just add a single function to handle this that useed a "name" property instead of making functions for each one.
    // Click event handlers
    $white.click(function() {
      updateClick("Clicked WHITE");
    });
    $blue1.click(function() {
      updateClick("Clicked BLUE 1");
    });
    $blue2.click(function() {
      updateClick("Clicked BLUE 2");
    });
    $red1.click(function() {
      updateClick("Clicked RED 1");
    });
    $red2.click(function() {
      updateClick("Clicked RED 2");
    });

    // Hover event handlers
    $white.hover(function() {
      updateHover("Hovering over WHITE");
    }).mouseleave(function() { updateHover("NONE"); });
    $blue1.hover(function() {
      updateHover("Hovering over BLUE 1");
    }).mouseleave(function() { updateHover("NONE"); });
    $blue2.hover(function() {
      updateHover("Hovering over BLUE 2");
    }).mouseleave(function() { updateHover("NONE"); });
    $red1.hover(function() {
      updateHover("Hovering over RED 1");
    }).mouseleave(function() { updateHover("NONE"); });
    $red2.hover(function() {
      updateHover("Hovering over RED 2");
    }).mouseleave(function() { updateHover("NONE"); });

    // End generate()
  }

  // Handle button clicks in data windows
  function handleButton(button) {
    // Jquerify SVG elements based on ID.  IDs are retireved manually for now.  Will need to update this in the future.  Would be better to have a global object with this information.
    var $blue1 = $('#path3803-5-2'),
        $blue2 = $('#path3803-5'),
        $red1 = $('#path3803'),
        $red2 = $('#path3803-5-2-3'),
        $white = $('#path3765');

    // Colors
    var blue = "rgb(0, 67, 255)",
        red = "rgb(231, 22, 0)",
        white = "rgb(255, 255, 255)";

    switch (button.name) {
      case "blue1":
        // TODO Should get an SVG library for jquery to handle this better
        if($blue1[0].style.fill == blue) {
          $blue1[0].style.fill = red;
        } else {
          $blue1[0].style.fill = blue;
        }
        break;
      case "blue2":
        if($blue2[0].style.fill == blue) {
          $blue2[0].style.fill = red;
        } else {
          $blue2[0].style.fill = blue;
        }
        break;
      case "red1":
        if($red1[0].style.fill == red) {
          $red1[0].style.fill = blue;
        } else {
          $red1[0].style.fill = red;
        }
        break;
      case "red2":
        if($red2[0].style.fill == red) {
          $red2[0].style.fill = blue;
        } else {
          $red2[0].style.fill = red;
        }
        break;
      default:
        console.log("Something went wrong, should not reach this point in the switch!");
    }
    console.log(button.name);
  }

  // Update hover section in data-window
  function updateHover(message) {
    $('#hover-state').text(message);
  }

  // Update click section in data-window
  function updateClick(message) {
    $('#clicked-state').text(message);
  }

  // Load SVG data.  Once loaded call generate()
  Snap.load("data/game_board.svg", function(f) {
    var g = f.select("g");
    s.append(g);
    generate();
  });


  // Add functions to the browsers global namespace
  global.handleButton = handleButton;

// End IIFE
}(window));
