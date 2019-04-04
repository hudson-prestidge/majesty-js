window.onload = function() {
  const unit = document.querySelector('.unit')
  const goal = document.querySelector('.goal')
    unit.style.left = '1px'
    unit.style.top = '1px'
    unit.style.bottom = '1px'
    unit.style.right = '1px'
    setInterval(function() {
      if(!collision(unit, goal)){
        moveRight(unit)
        moveDown(unit)
      } else {
        console.log('collision');
      }
    }, 3000)

  }

function moveUnit (unit) {

}

function moveRight (unit) {
  let left = parseInt(unit.style.left.slice(0, unit.style.left.length-2))
  left += 1;
  unit.style.left = `${left}px`
}

function moveDown (unit) {
  let top = parseInt(unit.style.top.slice(0, unit.style.top.length-2))
  top += 1;
  unit.style.top = `${top}px`
}

function collision(unit, goal){
  unitX = unit.offsetLeft
  unitY = unit.offsetTop
  unitH = unit.offsetHeight
  unitW = unit.offsetWidth

  goalX = goal.offsetLeft
  goalY = goal.offsetTop
  goalH = goal.offsetHeight
  goalW = goal.offsetWidth

  return (unitY + unitH > goalY && unitY < goalY + goalH && unitX + unitW > goalX && unitX < goalX + goalW)
}
