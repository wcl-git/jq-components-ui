// Generated by CoffeeScript 1.6.3
(function() {
  var dataProvider, handlebars, render, _;

  render = require("./render");

  handlebars = require("handlebars");

  _ = require("lodash");

  dataProvider = require("../data_provider");

  handlebars.registerHelper("inject", function(path, options) {
    var compData, dataResult, mockContext, mockResult, servicesResult, tempContext;
    tempContext = _.clone(this);
    _.assign(tempContext, options.hash);
    if (options.fn) {
      compData = JSON.parse(options.fn());
      _.assign(tempContext, compData);
    }
    dataResult = dataProvider.getCompData(path, tempContext);
    if (dataResult.found) {
      mockResult = dataResult.result;
      servicesResult = mockResult["_SERVICES_"];
      delete mockResult["_SERVICES_"];
      mockContext = {
        _DATA_: mockResult
      };
      if (_.isObject(servicesResult)) {
        _.assign(mockContext, servicesResult);
      }
      _.assign(tempContext, mockContext);
    }
    return new handlebars.SafeString(render.renderComponent(path, tempContext));
  });

  handlebars.registerHelper("component", function(className, options) {
    console.info('render.CONST.COMP_PATH.......', className, render.CONST.COMP_PATH)
    return new handlebars.SafeString("<div class=\"" + className + "\" data-comp-path=\"" + this[render.CONST.COMP_PATH] + "\">" + (options.fn(this)) + "</div>");
  });

  handlebars.registerHelper("designPart", function() {
    var options;
    options = _.last(arguments);
    if (options.fn) {
      return options.fn(this);
    }
  });

}).call(this);
