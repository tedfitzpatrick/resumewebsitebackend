db.user.insert([{
    "name": "spongebob",
    "password": "squarepants",
}]);

db.ted.insert([{
    "namefull": "Ted Fitzpatrick",
    "title": "Designer / Developer",
    "email": "tedfitzpatrick@me.com",
    "phone": "916-410-2054",
    "address": "831 Main Street",
    "city": "Roseville",
    "state": "CA",
    "zip": "95678",
    "about": "",
    "statement": "Web app UI is my passion, and has been the main focus of my career. Using creativity, design thinking, and technical expertise, I strive to craft high quality products. I’m a designer/developer hybrid - equally adept at crafting visuals that conform or synergize with branding; crafting responsive, touch-friendly interfaces that ease a user’s mental burden; and developing the technical systems underlying these interfaces via a view-model state, modules, and network communication. With 25+ years experience, I’ve designed and developed multitude products with many technologies - from printed communications to publishing automation systems to websites and applications. I’ve “worn many hats”: designer, developer, copywriter, administrator, team lead, project manger.  I enjoy crafting usable, responsive, and WCAG-accessible “front end” user interfaces.  I’m seeking to join a team that shares my passion for crafting excellence — a team of forward-thinking, motivated people.",
}]);

db.experiences.insert([{
   "employer": "State of California Commission on Peace Officer Standards and Training",
   "listpriority": "1",
   "datetext": "October 2011 - March 2022",
    "title": "Senior Information Technology Specialist",
    "description": "Design and development of websites, web applications, and other digital products such as ebooks and signage. Specialist in usable, responsive, and accessible “front end” user interfaces that align with WCAG standards. Mentor junior and peer developers.",
    "tech": ["Adobe","Apple","Microsoft","Content Management Systems (CMS)","HTML 5","CSS 3","SASS","Javascript / ES 6","Node","React","D3","GSAP","Webpack","Git"]
},
{
    "employer": "State of California Department of Finance",
    "listpriority": "2",
    "datetext": "April 2001 - October 2011",
     "title": "Information Technology Specialist",
     "description": "Led a team of designers and developers in the administration and maintenance of websites and web applications. Programmed the automation of the formatting and publishing of the State of California’s financial reports. Designed financial reports, communications, and presentations for Governors.",
     "tech": ["Adobe","Apple","Microsoft","Content Management Systems (CMS)","HTML","CSS","JavaScript","AppleScript","IIS","ASP","Unix","Apache","PHP"]
 },
 {
    "employer": "Various employers including the CSBA, CBIA, Crocker Art Museum, and Marcomm Marketing Communications",
    "listpriority": "3",
    "datetext": "Prior to 2001",
     "title": "Graphic Designer",
     "description": "Graphic design (print, web) for several organizations, including the California Building Industry Association, the California School Boards Association, the Crocker Art Museum, and Marcomm Marketing Communication.",
     "tech": []
 }]);

 db.educations.insert([{
    "institution": "Chapman University",
    "degree": "Bachelor of Fine Arts",
    "major": "Art"
}]);

db.about.insert([{
    "html": "<p>This website</p>"
}]);

