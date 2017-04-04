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
    	var validLinks = [];

    	model.my_info.links.forEach(function(link){
    		if(link.link && link.logo)
    		{
    			validLinks.push(link);
    		}
    	});
    	return validLinks;
    };
    
    portfolio.getTitles = function(){
    	return model.my_info.titles;
    }
  });