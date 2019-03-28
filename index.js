var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
 var newObj = Object.assign({}, object, {[key]: value});
  return newObj;

}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
var recipes = object;
object[key] = value;
}