angular.module('portfolio', [])
  .controller('PortfolioController', function() {
    var portfolio = this;

    portfolio.getName = function(){
    	return model.my_info.name;
    };

    portfolio.getAbout = function(){
    	return model.my_info.about;
    };

    portfolio.getProjects = function(){
    	return model.my_info.projects;
    };

    portfolio.getLinks = function(){
    	return model.my_info.links;
    };
    
    portfolio.getTitles = function(){
    	return model.my_info.titles;
    }
  });