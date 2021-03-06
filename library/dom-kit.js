// Frank Poth 08/18/2017

const DOMKit = function() {};

DOMKit.createElement = function(tag_name, attributes, content) {

  var element = document.createElement(tag_name);

  if (attributes) DOMKit.setAttributes(element, attributes);

  if (content) element.innerHTML = content;

  return element;

};

DOMKit.parseHTMLString = function(string) {

  var fragment = document.createDocumentFragment();
  fragment.innerHTML = string;

  alert(fragment.children[0]);

  return fragment.children[0];

};

// created 03/27/2018
DOMKit.replaceCurrentScript = function(element) {

  var script = document.currentScript;

  script.parentNode.replaceChild(element, script);

  return element;

};

DOMKit.replaceElement = function(element, new_element) {

  element.parentNode.replaceChild(new_element, element);

  return new_element;

};

DOMKit.setAttributes = function(element, attributes) {

  var attribute_pair;

  for (index = attributes.length - 1; index > -1; -- index) {

    attribute_pair = attributes[index].split(/=(.+)?/, 2);

    element.setAttribute(attribute_pair[0], attribute_pair[1]);

  }

};
