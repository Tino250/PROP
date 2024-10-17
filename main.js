const prop=` Task 1: Proposal

Executive Summary
In today’s increasingly unpredictable weather conditions, public health is at risk, especially among vulnerable populations. This proposal outlines a comprehensive digital health advisory solution designed to provide users with real-time weather information, personalized health advice, and risk assessments for home environments. The platform will be accessible through a web-based dashboard that integrates various data sources, such as weather APIs, and offers tailored health insights based on individual needs. Furthermore, the platform will feature advanced accessibility options to cater to users of all abilities, including those with disabilities.

The growing impact of climate change has made it essential for people to access accurate and localized weather information to manage health risks effectively. Severe weather conditions, such as extreme heat or cold, can exacerbate existing health issues, particularly among the elderly, children, and those with chronic illnesses. Additionally, the safety of home environments is increasingly affected by weather, requiring users to assess risks such as insulation quality, air filtration, and heating system reliability. By addressing these challenges, our platform will play a vital role in promoting the health and safety of users.

This proposal details the key problems our platform seeks to address, the proposed digital dashboard's features, the technical considerations behind its development, the risks involved, and the wider issues of privacy and compliance. We will also outline key performance indicators (KPIs) and provide a timeline for achieving our objectives, using SMART and MoSCoW methodologies to structure our goals effectively.

Problem Identification

Key Problems to Address
In an effort to improve the quality of life and protect public health, the platform will address the following issues:

1. Access to Real-Time Weather Information
   Individuals need real-time, localized data on temperature, air quality, and severe weather alerts to make informed decisions regarding their health and safety. Current solutions often lack precise information for smaller geographic areas or do not provide actionable health guidance based on weather data.

2.Health Risks from Extreme Weather
   Vulnerable populations, including the elderly, children, and those with pre-existing health conditions, are particularly susceptible to health issues caused by extreme weather events such as heatwaves, cold snaps, and poor air quality. These individuals need specific advice on how to manage their health during such periods.

3.Home Environment Risk Assessments
   The increasing frequency of severe weather conditions necessitates tools that help users evaluate and mitigate risks in their home environments. For example, poor insulation or faulty heating systems can be life-threatening during extreme cold

4. Personalized Health Information
   Generic health advice may not be effective for individuals with unique health conditions or living in specific environments. Users require personalized health advice that takes into account their medical history, local weather conditions, and home setup.

5. Accessibility
   It is essential that the platform is accessible to individuals of all abilities, including those with visual, auditory, or cognitive impairments. The platform should comply with accessibility standards and offer customizable features to meet diverse user needs.

Proposed Solution

Digital Dashboard Features
The digital health advisory platform will be a web-based dashboard with the following core features:

1. Real-Time Weather Information
   By integrating Free Weather APIs, the platform will provide real-time updates on temperature, humidity, air quality, and severe weather alerts. Users will have access to data that is localized to their specific geographic area, allowing them to prepare for and respond to changing weather conditions. This feature is essential for planning daily activities and avoiding exposure to harmful weather conditions.

2. Health Guidance
   The platform will offer tailored health advice based on real-time weather conditions. For example, during a heatwave, the system will advise users to stay hydrated, avoid strenuous outdoor activities, and seek cooler environments. In cold weather, the platform will suggest strategies for staying warm and preventing hypothermia. The health advice will be personalized, taking into account any pre-existing conditions the user may have.

3. Home Environment Risk Assessments
   The platform will include an interactive tool that enables users to assess risks in their living environment. For example, the tool can help users evaluate the effectiveness of their home’s insulation, air quality filtration, or heating system, and provide recommendations for improvements based on the current or forecasted weather. Users can take proactive steps to mitigate risks and ensure that their home environment is safe.

4. Personalized User Profiles
   Users will be able to create profiles where they input their health conditions, medications, and other relevant personal information. The platform will use this data to provide health advice that is tailored to the user’s specific situation. For example, a user with asthma will receive advice related to poor air quality, while someone with cardiovascular issues will be warned of potential risks during extreme heat.

Technical Considerations
To ensure the platform operates smoothly and securely, we will implement the following technical solutions:

1.Data Handling
   The platform will have a robust backend built with PHP, running on a XAAMP stack. This ensures efficient handling of data and secure database management. Weather data will be retrieved using third-party APIs, while user data will be securely stored in our own database.

2.Security Measures
   Given the sensitive nature of health data, security is a top priority. The platform will implement several security measures, including:
   - SSL/TLS encryption  for secure data transmission between users and the server.
   - Data input validation  to prevent attacks such as cross-site scripting (XSS) and SQL injection.
   - Anonymization techniques to protect personal health data, ensuring compliance with privacy regulations.

3. Accessibility Features
   To cater to users of all abilities, the platform will be designed in compliance with W3C accessibility standards. Key features will include:
   - Alt text for images to assist visually impaired users.
   - Resizable fonts and adjustable color schemes for individuals with visual impairments.
   - Keyboard navigation for users who cannot use a mouse.

Risk Mitigation
The following risks have been identified, along with strategies to mitigate them:

1. Malicious Use
   Strict data input validation and content security policies will be implemented to prevent unauthorized access and manipulation of data. These measures will also help protect the platform from malicious users who may attempt to exploit vulnerabilities.
2.Data Accuracy
   To ensure the accuracy of weather data, the platform will cross-check information from multiple reliable sources. This redundancy will help mitigate any inaccuracies that may arise from a single source of data, ensuring that users receive the most reliable information possible.

3. Privacy Compliance
   The platform will strictly adhere to privacy regulations such as GDPR (General Data Protection Regulation) and HIPAA (Health Insurance Portability and Accountability Act). User data will be anonymized and encrypted, and users will have full control over what data is shared.

Wider Issues and Compliance

Privacy
The platform will comply with all relevant privacy regulations, including GDPR and HIPAA, to ensure that user data is fully protected. All personal health information will be encrypted and anonymized to prevent unauthorized access or misuse. Users will have full control over their data, including the ability to delete their accounts and data at any time.
User Support
To ensure that users can get the most out of the platform, we will implement a comprehensive user support system. This will include an FAQ section, live chat support, and a feedback mechanism where users can report issues and suggest improvements. This feedback will be invaluable for future updates to the platform, ensuring that it continues to meet user needs.

Regulatory Compliance
The platform will comply with W3C accessibility standards and best practices for health-related applications. This ensures that the platform is accessible to all users and that it meets the highest industry standards for digital health solutions.

Functional and Non-Functional Requirements

Functional Requirements
1. User registration and profile management, including the ability to input and update health information.
2. Integration with real-time weather APIs to provide localized weather data.
3. Health advice tailored to individual user profiles based on real-time weather conditions.
4. Interactive risk assessment tools for home environments to guide users in improving safety.

Non-Functional Requirements
1. Performance: The dashboard should load within 3 seconds to ensure a smooth user experience.
2. Scalability: The platform should be capable of handling up to 10,000 concurrent users without performance degradation.
3. Usability: The user interface should be intuitive and easy to navigate, ensuring that users of all abilities can access the platform's features with ease.
4. Security: The platform must include two-factor authentication (2FA) to ensure secure access.
5. Responsiveness: The design must be responsive, offering a seamless experience across devices, including desktops, tablets, and smartphones.

Key Performance Indicators (KPIs)
To measure the success of the platform, we will track the following KPIs:

1. User engagement metrics, including the average time users spend on the platform and the number of active users.
2. Feedback scores on the usability of the platform and the relevance and accuracy of the health advice provided.
3. Data accuracy, particularly regarding weather information, which will be cross-checked against multiple reliable sources.

User Acceptance Criteria
1. Users should be able to navigate the dashboard easily and access personalized health information with minimal effort.
2. Feedback from users should indicate a high level of satisfaction with the platform’s usability, accuracy, and relevance of health advice.
3. The platform should meet all W3C accessibility standards, validated through user testing with individuals of varying abilities.

SMART Targets

To ensure that we meet our project goals, we have set the following SMART targets:

- Specific: Increase user engagement by raising the average time spent on the platform by 30% within the next six months. This will be achieved by adding interactive features such as a weather quiz and a user forum.

  
- Measurable: Achieve a 50% increase in monthly unique visitors within the next quarter. This will be accomplished by optimizing the platform’s SEO and launching a targeted social media campaign.

- Achievable: Publish at least 12 new articles each month on diverse weather-related topics, such as seasonal forecasts, severe weather preparedness, and the impact of climate change.

- Relevant: Improve the newsletter subscription rate by 25% over the next three months by offering exclusive content, such as personalized weather alerts and tips for staying safe during extreme weather events.

- Time-bound: Conduct a user satisfaction survey within the next month and implement at least three major user-suggested improvements within the following two months.

MoSCoW Targets

To prioritize features and deliverables, we have outlined the following MoSCoW targets:

- Must-have: Real-time weather updates, including severe weather alerts and forecasts, must be implemented within the next month to ensure users receive timely information.
  
- Should-have: The platform should be redesigned to offer improved navigation and mobile responsiveness within the next three months, enhancing the overall user experience.
  
- Could-have: Interactive tools such as a customizable weather dashboard and storm tracker could be developed within the next six months to increase user engagement.
  
- Won’t-have (at this time): International coverage, providing weather forecasts and advice for users outside the initial geographic area, will be deferred for at least a year. Current resources will focus on local weather data and solutions.

Conclusion
This digital health advisory solution is designed to address the growing public health challenges posed by changing weather patterns. By integrating real-time weather data, personalized health advice, and risk assessments for home environments, the platform will empower users to take control of their health and safety. The platform’s accessibility features ensure that it will be usable by individuals of all abilities, while its robust security measures will protect sensitive health data. By setting clear goals and adhering to industry standards for privacy and regulatory compliance, we aim to create a digital health solution that is both practical and reliable.

The proposed platform not only aligns with current best practices in digital health technology but also provides an opportunity for continuous growth and improvement. Our SMART targets and MoSCoW prioritization ensure that we are focused on delivering the most critical features first, while planning for future enhancements. With user feedback and iterative improvements, we aim to create a comprehensive and user-friendly digital health advisory solution that promotes safety and well-being in an increasingly unpredictable world.
`
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
