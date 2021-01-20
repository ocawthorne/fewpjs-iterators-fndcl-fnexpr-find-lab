function superbowlWin(array) {
  // let year
  array.find(function(obj) {
    if (obj.result === "W") return obj.year
  })
  // return year
}
