angular.module('portfolio', [])
  .controller('PortfolioController', function() {
    var portfolio = this;

    portfolio.getName = function(){
      return model.my_info.name;
    };

    portfolio.getProjects = function(){
      return model.my_info.projects;
    };
    
    portfolio.getTitles = function(){
    	return model.my_info.titles;
    }
  });