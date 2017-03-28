///////////////////////
/////// PART I ////////
///////////////////////

// .forEach
function streetFighterSelection(fighters, position, moves){
  var x = position[0]
  var y = position[1]
  var selections = []
  moves.forEach(function(move){
    switch(move){
      case "up":
        y = 0
        break;
      case "down":
        y = 1
        break;
      case "left":
        x = x ? x - 1 : 5
        break;
      case "right":
        x = x == 5 ? 0 : x + 1
    }
    selections.push(fighters[y][x])
  })
  return selections
}

// .reduce
function streetFighterSelection(fighters, position, moves){
  var x = position[0]
  var y = position[1]
  moves.reduce(function(acc, curr){
    switch(move){
      case "up":
        y = 0
        break;
      case "down":
        y = 1
        break;
      case "left":
        x = x ? x - 1 : 5
        break;
      case "right":
        x = x == 5 ? 0 : x + 1
    }
    return acc.concat(fighters[y][x])
  }, [])
}

// OOJS + .reduce
function streetFighterSelection(fighters, position, moves){
  var menu = {
    x: position[0],
    y: position[1],
    up: function(){ this.y = 0 },
    down: function(){ this.y = 1 },
    left: function(){ this.x = this.x ? this.x - 1 : 5 },
    right: function(){ this.x = this.x == 5 ? 0 : this.x + 1 }
  }
  return moves.reduce(function(acc, curr){
    menu[curr]()
    return acc.concat(fighters[menu.y][menu.x])
  }, [])
}
