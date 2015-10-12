// JavaScript Document
var bio = { 
	name: "Carmen Tedesco", 
	role: "Video Production & Web Developer",
	welcomeMessage: "Mondoreale is a full-service video production and web development company.  Our primary focus is in the area of corporate marketing via video and web.",
	contacts: {
		mobile: "+55 21 97191 6413",
		email: "carmen_tedesco@yahoo.com",
		github: "deepcRio",
		skype: "carmentedesco",
		location: "Rio de Janeiro"		
		},
	skills: ["video production" ,"web development" ],
	bioPic: "images/carmenTedesco-earthView-387x373.jpg"	
	};
	
var education = {
	schools : [ 
	{ name: "San Franciso State Univerity",
	  location: "San Franciso, California",
	  degree: "Multimedia Certificate Program",
	  major: "Multimedia",
	  dates: "2012",
	  url: "http://example.com"
	  },
	  { name: "Rider University",
	  location: "Lawrenceville, New Jersey",
	  degree: "Bachelor of Science",
	  major: "Geology",
	  dates: "1974",
	  url: "http://example.com"
	  } 
	],
	onlineCourses : [ 
	{ title: "javaScipt Basics",
	  school: "Udacity",
	  url: "http://www.udacity.com/course/ud804"}  
	] };

var work = {
	jobs : [ 
	{ employer: "Mondoreale",
	  title: "Media Producer",
	  location: "San Francisco",
	  dates: "2009-present",
	  description: "Developed marketing video for electric car industry"
	  },
	  { employer: "Seagate Technology",
	  title: "Project Manager",
	  location: "Scotts Valley",
	  dates: "1996-2009",
	  description: "Oracle ERP developer using SQL"
	  }
	]
};
	
var projects = {
	project : [
	{ title : "Project 1",
	  dates : "2014", 
	  description : "displayed description 1", 
	  images : ["images/fry.jpg"]
	}	
  ]
};
// Display functions for the above data

bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	 $("#header").prepend(formattedRole);
     $("#header").prepend(formattedName);
	var formattedImage = HTMLbioPic.replace("%data%",bio.bioPic);
	 $("#header").prepend(formattedImage);
	var formattedMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
	$("#header").append(formattedMessage);
	$("#header").append(HTMLskillsStart);

	for(skill in bio.skills) {
		var formattedSkills = HTMLskills.replace("%data%",bio.skills[skill]);
		$("#skills").append(formattedSkills);
	};

	for(contact in bio.contacts) {
		var formattedMobile = HTMLmobile.replace("%data%",bio.contacts[contact].mobile);
		var formattedEmail = HTMLemail.replace("%data%",bio.contacts[contact].email);
		var formattedSkype = HTMLcontactGeneric.replace("%contact%","skype").replace("%data%",bio.contacts[contact].skype);
		//$("#footerContacts").append(formattedMobile,formattedEmail,formattedSkype);
		$("#footerContacts").append(formattedMobile);
	};	
};	
	
work.display = function() {
	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		
		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);

		$(".work-entry:last").append(formattedEmployer + formattedTitle,formattedDates,formattedDescription);
	}
};

projects.display = function() {
	for (project in projects.project) {
		$("#projects").append(HTMLprojectStart);
		
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.project[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%",projects.project[project].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.project[project].description);		
		$(".project-entry:last").append(formattedDescription);
		for (image in projects.project[project].images) {
			var formattedImage = HTMLprojectImage.replace("%data%",projects.project[project].images[image]);
			$(".project-entry:last").append(formattedImage);
		
	    };
	}
};

education.display = function() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
		var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].major);
		$(".education-entry:last").append(formattedName + formattedDegree,formattedDates,formattedLocation,formattedMajor);	
	}
};

function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	var newName = name; // new
	name[1] = name[1].toUpperCase( );
	name[0] = name[0].slice(0,1).toUpperCase( ) +
		name[0].slice(1).toLowerCase( );
	//return name[0] +" "+name[1];
	newName = name[0] +" "+name[1];//new
	return newName;
}
console.log(inName(name));

bio.display();
work.display();
projects.display();
education.display();

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
