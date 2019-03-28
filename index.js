var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
 var newObj = Object.assign({}, object, {[key]: value});
  return newObj;

}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
recipes = object;
object.key = value;
return recipes
}