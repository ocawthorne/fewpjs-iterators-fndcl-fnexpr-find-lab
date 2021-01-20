function superbowlWin(array) {
  let year
  array.find(function(obj) {
    if (obj.result === "W") year = obj.year
  })
  return year
}
