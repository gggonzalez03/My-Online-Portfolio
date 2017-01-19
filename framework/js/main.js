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
				github_repo_link: null,
				technologies_used: [
					null
				]
			},
			{
				name: "Multi-user Blog Website",
				screenshot: null,
				description: null,
				github_repo_link: null,
				technologies_used: [
					null
				]
			},
			{
				name: "Swiss Tournament Facilitator",
				screenshot: null,
				description: null,
				github_repo_link: null,
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
			},
		]
	}
};

var controller = {
	initialize: function(){
		portfolio_view.initialize();
	},
	getProjects: function(){
		return model.my_info.projects;
	}
}

var portfolio_view = {
	initialize: function(){
		console.log(controller.getProjects());
	}
}

controller.initialize();