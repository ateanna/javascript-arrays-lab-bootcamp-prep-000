var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  return kittens.push(name)
}

function destructivelyPrependKitten(name){
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten(){
  return kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  return kittens.shift()
}

function appendKitten(name){
  var newKittenArray = [...kittens, name]
  return newKittenArray
}

function prependKitten(name){
  var newKittenArray = [name, ...kittens]
  return newKittenArray
}

function removeLastKitten(){
  var newKittenArray = splice(0, kitten.length - 1)
  return newKittenArray
}

function removeFirstKitten(){
  var newKittenArray = splice()
  return newKittenArray
}
