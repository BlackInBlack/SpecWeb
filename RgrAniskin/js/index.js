var model = require('./model.js');
var view = require('./view.js');
var controller = require('./controller.js');
console.log(model);
console.log(view);
controller.init(model,view);
console.log(controller);
// var model = Model.model;
// var view = View.view;
//Controller.controller.init(model,view);

