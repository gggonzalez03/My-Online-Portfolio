/* Model */
var model = {
	my_info: {
		name: "Ging Gonzalez",
		titles: [
			"Full Stack Web Developer",
			"Back-end Web Developer"
		],
		bio: "The only thing different...",
		about: "I'm a web developer based in San Jose, CA who utilizes advanced front-end and back-end technologies to craft\
		 fast, secure, and responsive web applications. Beyond my studies as a Computer Science student, I love to explore more\
		 outside my classes. In fact, I enrolled and graduated from Udacity's Full-Stack Web Development Nanodegree with the set\
		 of skills I need to deliver a fully functional and reliable data-driven websites.\
		 I enjoy working with APIs and databases",
		profile_pic: null,
		links: [
			{
				name: "github",
				link: "https://github.com/gggonzalez03",
				logo: "img/github.svg"
			},
			{
				name: "linkedin",
				link: "https://www.linkedin.com/in/ging-gonzalez",
				logo: "img/linkedin.svg"
			},
			{
				name: "resume",
				link: null,
				logo: null
			},
			{
				name: "twitter",
				link: null,
				logo: null
			},
			{
				name: "facebook",
				link: null,
				logo: null
			}
		],
		skills: [
			"Python", "Java", "C++", "HTML", "CSS", 
		],
		projects: [
			{
				name: "Multi-user Blog Website",
				screenshot: "http://placehold.it/350x150",
				description: "Multi-user web application hosted on Google App Engine that enables\
				 users to post, delete, comment, and like blog posts. Built with secure login functionality\
				 using password hashes and salt preventing brute force attacks.",
				github_repo_link: "https://github.com/gggonzalez03/Multi-user-Blog-Website",
				technologies_used: [
					"Python",
					"Google App Engine",
					"HTML"
				]
			},
			{
				name: "Restaurant Item Catalog",
				screenshot: "http://placehold.it/350x150",
				description: "Content management system that is engineered with Flask framework in\
				 Python and advanced user authentication using OAuth2 with all its data stored in a\
				 PostgreSQL database",
				github_repo_link: "https://github.com/gggonzalez03/Restaurant-Item-Catalog",
				technologies_used: [
					"SQL",
					"Flask",
					"OAuth2",
					"Python",
					"HTML",
					"CSS"
				]
			},
			{
				name: "Swiss Tournament Facilitator",
				screenshot: "http://placehold.it/350x150",
				description: "Python application that ficilitates game tournaments the swiss way.\
				 Built with a relational database using PostgreSQL.",
				github_repo_link: "https://github.com/gggonzalez03/fullstack-nanodegree-vm",
				technologies_used: [
					"RDBMS",
					"SQL",
					"PostgreSQL"
				]
			},
			{
				name: "Neighborhood Map",
				screenshot: "http://placehold.it/350x150",
				description: "A single-page web application that lets users discover new places\
				 and learn more about them using an interactive map and UI built using Knockout JS,\
				 Google Maps API, and Foursquare API.",
				github_repo_link: "https://github.com/gggonzalez03/Neighborhood-Map",
				technologies_used: [
					"Javascript",
					"AJAX",
					"RESTful APIs",
					"Knockout"
				]
			}
		]
	}
};