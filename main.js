const prop=`1 
 
Task 1 – Proposal for Health Advice Group 
Contents 
Solution Description ............................................................................................................................... 1 
Why a website? ................................................................................................................................... 1 
Solution Detailed ................................................................................................................................. 2 
Conclusion ........................................................................................................................................... 2 
Business Context .................................................................................................................................... 2 
Functional and Non-Functional Requirements ..................................................................................... 3 
Expanding Functional Requirements ................................................................................................. 3 
Decomposition of Functional Requirements ..................................................................................... 4 
Methodology .......................................................................................................................................... 5 
Legislation, Regulation and Risks........................................................................................................... 5 
Legislation ........................................................................................................................................... 5 
Regulations ......................................................................................................................................... 5 
Risks .................................................................................................................................................... 6 
KPIs and User Acceptance Criteria ......................................................................................................... 6 
KPIs and Metrics ................................................................................................................................. 6 
User Acceptance Criteria .................................................................................................................... 7 
Appendix ................................................................................................................................................. 8 
 
Solution Description 
Based on the specifications set out by Health Advice Group for their desired solution, I believe that a 
web-based platform would be the most effective form that this digital solution could take. The 
website would offer multiple pages, all of which could be accessible from a single navigation bar for 
ease of use. It would be effective and handling the number of users that may have access to the 
solution, and its nature as a website would offer a number of advantages. 
Why a website? 
Firstly, a website allows end users access so long as they have an up-to-date web browser which 
most, if not all, devices will have pre-installed, and is therefore accessible always. Whilst an 
application could also suit this solution, separate versions would need to be developed in order to 
accommodate the different Operating Systems that devices like Computers, Phones and some 
Laptops run-on, which may be time consuming and would mean users must install the app on every 
device they intend to use. A web-based platform is instead very scalable, and so can be built to suit 
many devices under one coherent version. In addition, since this solution will be giving up-to-date 
and accurate information to its users, the appeal of developing an app for its offline capabilities does 
not fit, as users will need to have an internet connection to use these services. As a result, from a 
technical standpoint, a website is the most suitable option. 
Secondly, websites have far stricter conventions when it comes to how they are designed. Their 
layouts are more rigid and follow simple rules that means when a user comes to access the site, they 
will not struggle with navigating through their options. This would mean that it could accommodate 
for a variety of user demographics by keeping to these design rules, whilst still allowing for 
personality and flexibility surrounding how the website will look and feel. An app has more room to 
be unique, however could be difficult to manage for those who are not used to using technology as 
there are less clear conventions and rules with how an app must be designed. 
Solution Detailed 
The planned solution will break down the key features and elements that Health Advice Group are 
looking for into four individual pages. Each page will focus around a specific element to help group 
relevant features together, so that the website is more intuitive and therefore easier to navigate.  
Home Page – This page will be the welcome page for all users, with space for Health Advice Group to 
explain what they do, how the website operates/the features within it, and other important 
information. This page will be brief, but is the starting point that allows users to reach all other 
pages. 
Location Page – This page will showcase all of the location-based features that Health Advice Group 
provide. It will allow users to choose their nearest location from a set of options, and will show the 
air quality, pollen count and temperature. In addition, there will be links to external weather sources 
which can also provide users with more up-to-date or specific information. 
Advice Page – This page will act as a hub for information, where users can visit to understand the 
context behind the information presented to them on the location page. It will feature links to 
health sources about the effects of the weather on health, as well as articles from the website itself 
that showcase the advice that Health Advice Group offers. It will also show sources form other 
health bodies like the NHS and DEFRA, detailing specific health risks associated with the weather and 
how certain information is measured. 
Account Page – This page and its subpages will allow users to login and then view their account 
specific data. They will be able to view their account info and edit it, adjust relevant accessibility 
features and track health progress, in this case through features like a BMI calculator. Other 
elements could be added in the future to improve this feature. 
The solution will be written in a combination of HTML, CSS, JavaScript and SQL (potentially also 
including some PHP elements). HTML and CSS are the structural and styling languages, whilst 
JavaScript and PHP will be used for the programming and logic elements of the website, and also to 
connect to an SQL database. SQL will be the language used to create the database elements for the 
website. 
Conclusion 
In conclusion, this solution would be able to offer all of the features that Health Advice Group are 
interested in displaying in a clear and simple design that would take the form of a website. This 
proposed solution would separate each feature into clear pages that would make the solution easy 
to navigate, along with a consideration of key accessibility options for users to alter the website’s 
design to best suit them. 
Business Context 
Health Advice Group will see a number of benefits by choosing to introduce a digital solution to new 
and existing users. Firstly, the health sector is widely adopting more software to greatly improve the 
2 
efficiency and availability of certain features. By choosing to create a solution of their own, Health 
Advice Group are bringing themselves in line and up-to-date with competitors and businesses who 
are offering similar services and also make use of digital options. 
For example, Health Advice Group’s interest in developing a personal health tracking tool is not 
dissimilar from existing applications and businesses, such as the rise in popularity of smart-devices 
that can monitor health information like Fitbit and Apple smart watches. Health Advice Group will 
meet the expectations of the market which expects this kind of technology and greatly improve their 
standing and notoriety as a business amongst similar organisations. 
Secondly, by implementing this solution Health Advice Group will see an increase in their 
users/clients. This solution will be widely available and therefore will have a greater reach – allowing 
Health Advice Group to regain the interest of their existing users and open their operations up to a 
greater range of users who will be able to visit the website and recognise the features that Health 
Advice Group can offer them. 
Functional and Non-Functional Requirements 
In this section, the functional and non-functional requirements of this solution are identified and 
justified. The functional requirements are the minimum necessary elements for the solution to 
achieve what Health Advice Group are asking for, and the non-functional requirements are 
additional elements that are still important, but do not effect the way the solution operates. 
Functional Requirements 
1. Weather forecasting - 
Cold weather/weather elements 
involved - - 
Allergens, Asthma warning, Hay 
fever warnings 
Embedded information 
2. Air quality data  - 
Pollution information - 
Map/location 
3. Advice on health matters - 
NHS info embed 
4. Health Tracker - 
Inputs for exercise, diet info etc. - - 
BMI Calculator 
Account features. 
5. Location data  - 
Non-functional Requirements 
1. Security - 
Password strength test - - 
Input validation 
2FA and  Email verification 
2. Accessibility - 
Colour scheme adjuster - - 
Dark/Light mode 
Image alt text 
3. Scalability - 
Fits for a variety of screen sizes. 
4. KPIs and Metrics - 
Responsiveness - 
Load handling 
5. User Acceptance Criteria  
Map shows nearest surgeries, 
hospitals and POIs - 
Shows relevant data for 
temperature, air quality etc. 
Expanding Functional Requirements 
1. Weather forecasting 
Connecting to APIs or providing embedded elements for users to provide relevant information. 
Either embedded material within the website, or making use of external links to websites like the 
Met Office, BBC Weather and others to provide this information. 
3 
2. Air quality Data 
Same as above, either providing this info as part of an API or redirect to a given website to display 
this information. 
3. Advice on Health Matters 
Dedicated page for this information, with info coming directly from Health Advice Group themselves. 
Linking to another website will not be necessary for the purposes of this feature. 
4. Health Tracker 
These elements can fall under the ‘Account’ section of the website. Features may include an 
embedded BMI Calculator, and can store data from user inputs about personal activity, diet, etc. 
5. Location Data 
Making use of a map based on user information (such as an address) that will provide useful info 
such as the location of nearby hospitals, leisure centres, gyms, pharmacies etc.  
Decomposition of Functional Requirements 
Health Advice Group 
Website 
1.Home Page 
2.Location Page 
3.Account Page 
4.Guidance Page 
1.1About Section 
1.2Certifications, 
Awards etc. 
2.1Weather 
Forecasting 
Connect to 
API or Met 
Office embed 
2.2Air Quality 
and Allergen 
info. 
Connect to 
external 
source  
2.3Points of 
Interest map 
3.1Health 
Tracking 
Allow inputs 
for exercise, 
diet etc. 
3.2BMI Calc 
Store weight 
and height, 
display 
outcome 
3.3Settings/ 
Accessibility 
Light/dark 
mode, font 
sizes etc. 
4.1General 
Advice 
4.2Articles/ 
Blogs 
4.3External 
Info Sources  
4 
Methodology 
When developing this solution, an Agile approach shall be used as the intended methodology. This 
has a number of benefits, and is largely being selected due to the way development is organised. 
The use of sprints will be able to separate development into the key functional requirements, where 
each major feature is tackled separately before being integrated with one another as more are 
finalised.  
By focusing on one element at a time, there will be greater clarity during development as any 
successful or failed processes can be evaluated at the end of each sprint. This feedback can then be 
used to inform how future sprints are carried out, with the intent of making development a more 
streamlined process. In addition, since the development team is small, there is not enough time to 
develop these features in tandem. Splitting them apart will help iron out bugs and issues faster, and 
mean that the correct amount of time and detail can be placed onto each important feature of the 
solution.   
Legislation, Regulation and Risks 
There are a number of concerns that will need to be evaluated when creating the solution along with 
ways to mitigate them, as well as regulations and guidelines that must inform elements of the 
development process.  
Legislation 
There are a number of Acts that will govern how data and information is handled: - - 
Data Protection Act (2018) and General Data Protection and Regulation (GDPR, 2018) – 
governs how data is collected and managed, including ensuring that: 
o Data is kept secure/safe (adhering to the integrity and confidentiality of data). 
o Purpose limitation (data can only be used for its described purposes, often in the 
form of Terms and Conditions). 
o Data Minimisation (only requesting data that is necessary for the functions of 
the solution). 
o Accuracy (keeping information up-to-date). 
Freedom Of Information Act (2000) – members of the public can request information 
held by public bodies. Information used for the purposes of this website must be made 
available upon request. 
Regulations 
The following regulations span a variety of disciplines, but are demonstrations of the types of 
considerations that must be made during the development process: - 
Patient/Doctor Confidentiality – whilst not operating as a means of organising 
appointments, user information could refer to medical history that would normally be 
kept confidentially. - - 
Demographic suitability – considering the age ranges of potential users, and making sure 
that content on the site is suitable for potential groups (e.g. adult or mature content is 
kept from accounts that are below adult age). 
W3C Regulations – conventions regarding how a website must be developed, such as 
code organisation, such as Website Quality, Website Accessibility (including disabilities 
and stability considerations). 
5 
Risks 
When handling user data and developing a solution based on the internet, there are various risks 
that must be properly assessed. 
Security: - - - - 
DoS and DDoS attacks – these types of Denial of Service attacks can render a website 
completely inoperable – therefore, hardware and software used to support this solution 
must be tested to ensure it can handle stress/load against the anticipated number of 
average users. 
Data Protection – making sure that data is properly secured at all stages, particularly in 
transit (when transferred between devices) and in use (when it is being accessed). This 
may include use of secure protocols like HTTPS to protect against man-in-the-middle 
attacks, and encryption to make sure information is protected if there is a data breach. 
SQL Injection – making sure that the website databases will not dump data if an attacker 
gains access. Simple procedures such as validating inputs and customising error 
messages so that the database structure is not recognisable. 
Training – any individuals who are likely to interact with this data should be educated on 
practices and actions necessary to keep this data safe. 
KPIs and User Acceptance Criteria 
KPIs and Metrics 
Once the digital solution is completed and goes live, there are some elements that can inform how 
well the site is succeeding and provide useful user data that can give an insight into how the solution 
is being received. 
1. Number of user sign-ups after a month 
A simple away of measuring success, taking data from the number of people who have signed up to 
the site is a very easy process. It provides valuable data about the traffic that the site is experiencing, 
and can be used to compare the activity of their services both before and after the site is made 
active. This will give the most clear indication of whether there has been a substantial increase in the 
number of new users. 
2. Session duration and activity 
Monitoring the activity throughout the site is also a crucial way of identifying what specific features 
are seeing activity. By monitoring session duration, this can give greater insight into how frequently 
users are interacting with the site. In addition, it can highlight how specific services are performing 
which in turn will allow these features to be evaluated – e.g. how easy are they to use, what do they 
offer to a user etc. 
3.  Traffic by Source 
Another key way of breaking down important traffic data is by measuring the sources that they 
come from. This could include whether they are discovering the site through advertisements, social 
media , etc, and allow marketing strategies to be adjusted. Knowing what types of marketing or 
advertising succeeds can help Health Advice Group make informed decisions and better understand 
their userbase. 
6 
User Acceptance Criteria  
When producing the solution, it will also be important to keep in mind the expectations that end 
users will have for its functionality. A combination of user stories and sample expectations work as 
an effective way to checklist certain features against the standards that exist for normal user 
experiences when using a digital solution. The following general UX features should be considered: - - -  
When a user logs into their account on one page of the website, they should remain 
logged in when visiting other pages. 
When a user makes changes/adjustments to the website through the settings features, 
these should remain in place when visiting other pages. 
User Story 1: 
‘I am a user who wants to create an account so that my information can be saved for future visits to 
the site.’ 
Criteria: 
1. Visit Login Page 
2. Press ‘Sign-up’ button 
3. Redirect to register page 
4. Input Email and password 
5. Confirm password 
6. Email verification sent 
7. Once verified, redirect to login page 
8. Login and navigate to account page 
User Story 2: 
‘I am a user who wants to adjust some display settings so that the website layout is easier for me to 
read and interact with’. 
Criteria: 
1. Visit settings page 
2. Find accessibility settings 
3. Click on ‘dark mode’ feature 
4. Press ‘submit’ button to confirm changes 
5. Page changes to dark mode format 
6. Navigate back to previous page, where the dark mode persists 
User Story 3: 
‘I am a user who wants to view the air pollen count of two locations so that I can decide if my 
allergies will be impacted when I travel’ 
Criteria: 
1. Visit the location info page 
2. Select my nearest city/region from options available 
3. Pollen count and air pollution info updates on website 
4. Change city for another area 
7 
5. Pollen count adjust dynamically 
Appendix 
List of relevant regulations, laws and standards relating to the use of data and information in this 
context. 
Data Protection Act (2018) – Everyone responsible for using personal data has to follow strict rules, 
known as ‘data protection principles’. They must make sure that information is: - 
Used fairly, lawfully and transparently. - - - - - 
Used for specified, explicit purposes. 
Used in a way that is adequate, relevant and limited to only what is necessary. 
Accurate and, where necessary, kept up to date. 
Kept for no longer than is necessary. 
Handled in a way that ensures appropriate security, including protection against 
unlawful or unauthorised processing, access, loss, destruction or damage. 
There are stronger protection against more sensitive information, such as race, ethnicity, political 
opinions, religious belief, sex life or orientation, health, genetics etc. 
Freedom of Information Act (2000) – Establishes a public ‘right to access’ in relation to information 
held by public authorities. 
Doctor-patient confidentiality – set of principles that keeps certain information kept in private 
between a doctor/medical staff, and a given patient. It is a legal and ethical duty, that should be 
considered in this context based on the information that is being provided by users. 
W3C Standards – standards that act as blueprints for website creation. They cover elements of 
accessibility, structure, and validation. These principles make sure that any website is developed 
with a set of parameters that generate a consensus around how websites are managed and 
designed. 
Web Content Accessibility Guidelines (W3C Recommendation) – Covers a wide range of 
recommendations for making content accessible, relating to people with disabilities, 
accommodations for blindness and low vision, deafness and hearing loss, limited movement, 
photosensitivity, learning disabilities and cognitive limitations. 
8 `
function copy(){
  navigator.clipboard.writeText(prop)

}

var w = window.innerWidth,
    h = window.innerHeight,
    canvas = document.getElementById('test'),
    ctx = canvas.getContext('2d'),
    rate = 60,
    arc = 100,
    time,
    count,
    size = 7,
    speed = 20,
    parts = new Array,
    colors = ['red','#f57900','yellow','#ce5c00','#5c3566'];
var mouse = { x: 0, y: 0 };

canvas.setAttribute('width',w);
canvas.setAttribute('height',h);

function create() {
  time = 0;
  count = 0;

  for(var i = 0; i < arc; i++) {
    parts[i] = {
      x: Math.ceil(Math.random() * w),
      y: Math.ceil(Math.random() * h),
      toX: Math.random() * 5 - 1,
      toY: Math.random() * 2 - 1,
      c: colors[Math.floor(Math.random()*colors.length)],
      size: Math.random() * size
    }
  }
}

function particles() {
  ctx.clearRect(0,0,w,h);
   canvas.addEventListener('mousemove', MouseMove, false);
  for(var i = 0; i < arc; i++) {
    var li = parts[i];
    var distanceFactor = DistanceBetween( mouse, parts[i] );
    var distanceFactor = Math.max( Math.min( 15 - ( distanceFactor / 10 ), 10 ), 1 );
    ctx.beginPath();
    ctx.arc(li.x,li.y,li.size*distanceFactor,0,Math.PI*2,false);
    ctx.fillStyle = li.c;
    ctx.strokeStyle=li.c;
    if(i%2==0)
      ctx.stroke();
    else
      ctx.fill();
    
    li.x = li.x + li.toX * (time * 0.05);
    li.y = li.y + li.toY * (time * 0.05);
    
    if(li.x > w){
       li.x = 0; 
    }
    if(li.y > h) {
       li.y = 0; 
    }
    if(li.x < 0) {
       li.x = w; 
    }
    if(li.y < 0) {
       li.y = h; 
    }
   
     
  }
  if(time < speed) {
    time++;
  }
  setTimeout(particles,1000/rate);
}
function MouseMove(e) {
   mouse.x = e.layerX;
   mouse.y = e.layerY;

   //context.fillRect(e.layerX, e.layerY, 5, 5);
   //Draw( e.layerX, e.layerY );
}
function DistanceBetween(p1,p2) {
   var dx = p2.x-p1.x;
   var dy = p2.y-p1.y;
   return Math.sqrt(dx*dx + dy*dy);
}
create();
particles();
