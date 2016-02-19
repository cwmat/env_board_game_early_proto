# Testing Browser Based Board Game Functionality

This is a simple prototype of a game board made with SVG.  

## Goals
  - Display SVG board game (simplified) elements (note, these were created quickly in Inkscape so they are a bit rough/'lumpy')
  - SVG elements are able to output information to the screen on interaction events
  - SVG element styles can be altered through user input
  - SVG element representing game token is moveable. Try dragging the token (black dot). Note, it does not recognize its position in relation to the game board yet. See "Next Steps"

## Next Steps
  - Meet with the team and determine if a prototype for a canvas based solution is warranted (possibly using an actual game engine library)
  - Flesh out SVG prototype
  - Convert Bryan's prototype to SVG. Either directly as SVG or taking the SVG properties and storing in a JSON with other gameboard data and then use Snap SVG or D3 JS to draw it
  - Implement the gameboard and associated functions using an organizational library (i.e. Angular JS)
  - Develop User controls and interface (i.e. data window)
  - Get the token to recognize extents (i.e. "am I hovering over another element". May need to build in collision detection manually, not sure if this is provided with either D3 or Snap)

## Link to demo
http://cwmat.github.io/env_board_game_early_proto/
