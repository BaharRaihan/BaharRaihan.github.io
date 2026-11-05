// ============================================================
//  All the information on the site and in the app lives in this file (English).
//  Edit here -> website, CV and app all update.
//
//  HOW TO ADD NEW THINGS (put the newest at the TOP of each list):
//   - quotes        : { text, source, date }
//   - achievements  : { title, text, year }
//   - works         : { title, text, year, link }
//   - gallery       : { src: "images/name.jpg", caption }
//   - videos        : { id: "YouTubeVideoID", title, text }
//   - updates       : { date, place, text, image }
//
//  Items with  sample: true  are PLACEHOLDERS. They only appear on your own computer
//  (localhost) or when you add ?demo=1 to the address. They NEVER show on the live site.
//  Delete the sample lines when you add real ones. A section with no real items hides itself.
// ============================================================
window.SITE = {
  brand: { appName: "My Story", subtitle: "Mental Wellness Hub" },

  name: "Bahar Uddin Raihan",
  tagline: "Graduated with a Master's by writing with a pen in his mouth",
  roles: "Project Officer · Content creator",
  headline: "Your circumstances do not decide your story. You do.",
  intro: "Real life, honest words and small steps forward, shared so that someone who feels stuck today can find the courage to begin again.",
  photo: "photo.jpg",
  location: "Bangladesh",
  email: "bahar.raihan90@gmail.com",
  phone: "",                       // left empty on purpose: phone is not shown publicly

  about: [
    "I am Bahar Uddin Raihan. In 2004, while in fifth grade, I was electrocuted and lost one hand entirely and the other up to the elbow. I did not stop. Holding a pen in my mouth and using my elbow, I kept studying and earned a Master's degree in History from the University of Chittagong.",
    "I work on computers, ride a motorcycle, skate, and do my daily tasks on my own. This space exists to show my journey to the world, so that people, especially people with disabilities, can find courage."
  ],

  // Words of strength. Add your own sayings here.
  quotes: [
    { text: "Your own words go here: one short line that could lift someone up on a hard day.", source: "Bahar Uddin Raihan", date: "", sample: true },
    { text: "A second sample quote. Replace it, or delete it, when you add your real ones.", source: "Bahar Uddin Raihan", date: "", sample: true },
    { text: "A third sample quote, to show how a list of quotes looks.", source: "Bahar Uddin Raihan", date: "", sample: true }
  ],

  // Things you have achieved. Add real ones.
  achievements: [
    { title: "Master's degree in History", text: "Completed at the University of Chittagong, writing several exams myself with a pen held in my mouth.", year: "2021" },
    { title: "Best Participant Award", text: "Leadership Training Committee.", year: "2019" },
    { title: "Best Social Action Project", text: "Awarded by British Council and The Hunger Project.", year: "2016" },
    { title: "Special Honor Award", text: "Prochesta Foundation Bangladesh and B.M Char Blood Donors Group.", year: "" },
    { title: "Your next achievement", text: "A short sentence about what you achieved and why it matters.", year: "2026", sample: true }
  ],

  // The work you do: projects, campaigns, talks.
  works: [
    { title: "Mobile SIM registration for people without fingerprints", text: "I advocated for the rights of persons with disabilities to access mobile communication services. The problem received national attention in a major feature in The Daily Prothom Alo (23 June 2021) and prompted discussion with regulators such as the BTRC.", year: "2021" },
    { title: "“Smile for Children” project", text: "As coordinator I led a community initiative to improve access to education and well-being support for underprivileged children, ran awareness campaigns on children's rights and inclusive education, and trained volunteers on child protection and inclusion.", year: "" },
    { title: "Your next project or talk", text: "Describe a piece of work in one or two sentences.", year: "2026", link: "", sample: true }
  ],

  // Photos. Put image files in the "images" folder and list them here.
  gallery: [
    { src: "", caption: "Sample photo caption: where and when this photo was taken.", sample: true },
    { src: "", caption: "Another sample photo.", sample: true },
    { src: "", caption: "A third sample photo.", sample: true }
  ],

  // Videos. The first one is featured. Use the YouTube ID (the part after v= in the link).
  videos: [
    { id: "zzCbfST_Ztw", title: "Where there is a will, everything is possible", text: "A video feature about my journey." },
    { id: "", title: "A sample video title", text: "Add the YouTube ID of another video to show it here.", sample: true }
  ],

  work: {
    title: "Project Officer",
    org: "BRAC",
    since: "Since June 2026",
    description: "I earn my living from my salary. Earlier work: In May 2023 I received my appointment letter at the ICT Tower from the State Minister for ICT and joined the EDGE project at the Centre for Project Management and Information Systems (PMIS), University of Dhaka, as Training Coordinator. To pay for my studies I did part-time work and ran a small online business. I run the YouTube channel “Bahar Rayhan” and am building the website “Kemone Jabo dot com” with a friend."
  },

  experience: [
    { title: "Project Officer", org: "BRAC", period: "June 2026 – present", text: "Working as a Project Officer at BRAC." },
    { title: "HR & Operations Executive", org: "Kloud Project Limited, Chattogram", period: "2024 – May 2026", text: "Implemented and managed PIHR software and staff data. Formulated over 50 organisational policies and managed recruitment, selection and training. Made weekly branch visits to train staff and monitor daily operations, and kept liaison with government and private agencies." },
    { title: "Training Coordinator, EDGE project", org: "Centre for Project Management and Information Systems (PMIS), University of Dhaka", period: "2023 – 2024 (about eight months)", text: "Appointed in May 2023 under the ICT Division's Enhancing Digital Government and Economy (EDGE) project." },
    { title: "Training Facilitator", org: "British Council Bangladesh & The Hunger Project Bangladesh", period: "2017 – 2021", text: "Ran community-based youth leadership trainings for university students, promoted gender equality and social inclusion at village level, facilitated Training of Trainers (ToT) programmes, and prepared project documentation for donors and teams." }
  ],

  education: [
    { title: "M.A. in History", place: "University of Chittagong", year: "2021", note: "CGPA 3.13 out of 4; I wrote several exams myself with a pen held in my mouth" },
    { title: "B.A. in History", place: "University of Chittagong", year: "2020", note: "" },
    { title: "HSC, Arts & Humanities", place: "Chakaria College", year: "2016", note: "" },
    { title: "SSC, Business Studies", place: "Chakaria Govt. High School", year: "2014", note: "" }
  ],

  training: [
    "PGD in Human Resource Management, Academy of Business Professionals",
    "20-day training in Graphic Design and Multimedia, Bangladesh Computer Council",
    "4-day Training of Trainers (ToT), British Council Bangladesh"
  ],

  journey: [
    { year: "Childhood", title: "Under my maternal family's care", text: "My mother worked as a farmer in Chakaria, Cox's Bazar, to keep the household going. I grew up with the help of my maternal grandparents, uncles and relatives." },
    { year: "2004", title: "The accident that changed my life", text: "In fifth grade I was electrocuted at an electric transformer. At Chittagong Medical College Hospital, one of my hands was amputated entirely and the other up to the elbow." },
    { year: "Afterwards", title: "Learning everything again", text: "I learned to write with a pen in my mouth, type on a computer, ride a motorcycle and skate." },
    { year: "2021", title: "Master's completed", text: "I completed my Master's in the Department of History, University of Chittagong, after earning my B.A. there in 2020." },
    { year: "2023", title: "Recognition and a job", text: "Prothom Alo and Desh Rupantor published my story. After years of trying to find work, I was appointed Training Coordinator for the EDGE project at PMIS, University of Dhaka. I am working towards my dream of living together with my mother." },
    { year: "Today", title: "Moving forward", text: "Since June 2026 I have been working as a Project Officer at BRAC." }
  ],

  skills: ["Community mobilisation", "Stakeholder engagement and advocacy", "Disability inclusion", "Data collection and reporting", "Training and facilitation", "HR and operations", "Microsoft Office, Photoshop, Illustrator", "Content creation (YouTube)", "Motorcycle riding", "Skating"],
  languages: ["Bangla (fluent)", "English (fluent)"],
  awards: [
    "Best Participant Award, Leadership Training Committee (2019)",
    "Best Social Action Project, British Council & The Hunger Project (2016)",
    "Special Honor Award, Prochesta Foundation Bangladesh & B.M Char Blood Donors Group"
  ],
  advocacy: [
    { title: "Mobile SIM registration for people without fingerprints", text: "I advocated for the rights of persons with disabilities to access mobile communication services in Bangladesh. The biometric registration problem for people without fingerprints received national attention in a major feature in The Daily Prothom Alo (23 June 2021) and prompted discussion with regulators such as the BTRC." },
    { title: "“Smile for Children” project", text: "As coordinator I led a community initiative to improve access to education and well-being support for underprivileged children, ran awareness campaigns on children's rights and inclusive education, and trained volunteers on child protection and inclusion." }
  ],

  press: [
    { title: "Pen held in mouth, writing with his elbow: Bahar Uddin passes his Master's", source: "Prothom Alo", date: "4 May 2023", url: "https://www.prothomalo.com/bangladesh/d58c2ai4dp" },
    { title: "Indomitable Rayhan", source: "Desh Rupantor", date: "17 May 2023", url: "https://www.deshrupantor.com/426118/%E0%A6%85%E0%A6%A6%E0%A6%AE%E0%A7%8D%E0%A6%AF-%E0%A6%B0%E0%A6%BE%E0%A7%9F%E0%A6%B9%E0%A6%BE%E0%A6%A8" }
  ],

  updates: [
    { date: "2026-11-05", place: "Bangladesh", text: "Work started on this website and app.", image: "" }
  ],

  social: [
    { label: "YouTube (Bahar Rayhan)", url: "https://www.youtube.com/@BaharRaihan" },
    { label: "Facebook", url: "https://www.facebook.com/Our.Raihan" }
  ],

  disclaimer: "Shared for inspiration and encouragement only. This is not medical advice and not a substitute for professional care. If you are in crisis or in danger, please contact your local emergency services or a qualified professional.",

  // Support: deliberately small and quiet
  support: {
    enabled: true,
    message: "If you like this site, you may support me a little if you wish. It is entirely optional. Your prayers and kindness are more than enough.",
    methods: [
      { name: "bKash", icon: "b", color: "#e2136e", value: "" },
      { name: "Nagad", icon: "N", color: "#f6921e", value: "" },
      { name: "PayPal (from abroad)", icon: "P", color: "#003087", value: "" }
    ]
  }
};
