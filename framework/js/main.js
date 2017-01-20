/* Model */
var model = {
	my_info: {
		name: "Ging Gonzalez",
		title: "Full Stack Web Developer",
		bio: "The only thing different...",
		profile_pic: null,
		links: {
			github: "https://github.com/gggonzalez03",
			linkedin: "https://www.linkedin.com/in/ging-gonzalez",
			resume: null,
			twitter: "https://www.linkedin.com/in/ging-gonzalez",
			facebook: null
		},
		projects: [
			{
				name: "Multi-user Blog Website",
				screenshot: null,
				description: null,
				github_repo_link: "https://github.com/gggonzalez03/Multi-user-Blog-Website",
				technologies_used: [
					null
				]
			},
			{
				name: "Restaurant Item Catalog",
				screenshot: null,
				description: null,
				github_repo_link: "https://github.com/gggonzalez03/Restaurant-Item-Catalog",
				technologies_used: [
					null
				]
			},
			{
				name: "Swiss Tournament Facilitator",
				screenshot: null,
				description: null,
				github_repo_link: "https://github.com/gggonzalez03/fullstack-nanodegree-vm",
				technologies_used: [
					null
				]
			},
			{
				name: "Neighborhood Map",
				screenshot: null,
				description: null,
				github_repo_link: null,
				technologies_used: [
					null
				]
			}
		]
	}
};

/* Controller */
var controller = {
	initialize: function(){
		portfolio_view.initialize();
	},
	getProjects: function(){
		return model.my_info.projects;
	},
	getLinks: function(){
		return model.my_info.links;
	}
};

/* View */
var portfolio_view = {
	initialize: function(){
		this.showProjects();
	},
	showProjects: function(){
		for (var i = 0; i < controller.getProjects().length; i++) {
			other_projects_section = document.getElementById('otherprojects');
			projects = document.createElement('article');
			projects.setAttribute("class", "col-sm-12 col-md-4");

			project_title = document.createElement('h3');
			project_title.setAttribute("class", "text-uppercase");
			project_title.innerText = controller.getProjects()[i].name;

			project_screenshot = document.createElement('img');
			project_screenshot.setAttribute("class", "img-responsive");
			project_screenshot.setAttribute("src", "http://placekitten.com/g/600/300");

			project_github_link = document.createElement('a');
			project_github_link.setAttribute("href", controller.getProjects()[i].github_repo_link);
			project_github_link.text = controller.getProjects()[i].github_repo_link;

			projects.appendChild(project_screenshot);
			projects.appendChild(project_title);
			projects.appendChild(project_github_link);

			other_projects_section.appendChild(projects);
		}
	}
};

controller.initialize();