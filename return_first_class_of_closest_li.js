function(){
  var classes = {{Click Element}}.closest('li').getAttribute("class");
  var split = classes.split(" ");
  return split[0];
}
