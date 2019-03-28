var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  Object.assign({}, recipes, object, {key: value});
  return recipes;

}