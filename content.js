// ============================================================
//  All the information on the site and in the app lives in this file (English).
//  Edit here -> website, CV and app all update.
//
//  HOW TO ADD NEW THINGS (put the newest at the TOP of each list):
//   - media         : { outlet, type: "TV" | "Newspaper" | "Online", date, title, text, url, chapter }
//   - videos        : { id: "YouTubeVideoID", title, text, category }
//   - gallery       : { src: "images/name.jpg", thumb: "images/name-thumb.jpg" (optional square preview), caption, category }
//   - quotes        : { text, source, date }
//   - achievements  : { title, text, year }
//   - works         : { title, text, year, link }
//   - updates       : { date, place, text, image }
//   chapter  = which of the four story chapters the item belongs to: "journey" | "obstacles" | "forward" | "work"
//   category = any short word you like, e.g. "Leadership", "Social work", "Workplace", "Travel". Filter buttons are made automatically.
//
//  Items with  sample: true  are PLACEHOLDERS. They only appear on your own computer
//  (localhost) or when you add ?demo=1 to the address. They NEVER show on the live site.
//  Delete the sample lines when you add real ones. A section with no real items hides itself.
// ============================================================
window.SITE = {
  brand: { appName: "My Story", subtitle: "Mental wellness hub" },

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
    "I am Bahar Uddin Raihan. I was born in Bangladesh, and in 2004 I lost both of my hands in an electrical accident. I did not stop. Holding a pen in my mouth and using my elbow, I kept studying and earned a Master's degree in History from the University of Chittagong.",
    "Today I travel across the country on my own, work, and try to motivate people. I share my journey with the world so that people, especially people with disabilities, can find the strength to keep going."
  ],

  // The story in four chapters, in your own words.
  //  pull  = the one big sentence shown in large type
  //  image = optional photo for the chapter, e.g. "images/ch2.jpg" (caption = its caption)
  chapters: [
    { key: "journey", title: "My journey", tag: "Where it began", pull: "In 2004, in an electrical accident, I lost both of my hands.", image: "", caption: "", text: [
      "I was born in Bangladesh. In 2004, in an electrical accident, I lost both of my hands.",
      "My story has been covered by television channels and newspapers across Bangladesh."
    ]},
    { key: "obstacles", title: "Obstacles on the path", tag: "What stood in the way", pull: "Every day on the road I crossed thousands of obstacles.", image: "", caption: "", text: [
      "After I lost both hands I was bewildered. How would I earn a living and survive? There was no one in my family except my mother and me. We rose from deep poverty, and my mother had no money either. My maternal uncles, from my mother's family home, paid for all the costs of my accident.",
      "Then came the question of studying again: finding the money, and finding the mental strength to carry on. I had to rise above hurtful remarks from society, and every day on the road I crossed thousands of obstacles."
    ]},
    { key: "forward", title: "Moving forward", tag: "Step by step", pull: "I carried on and completed both my Honours and my Master's degrees.", image: "", caption: "", text: [
      "With mental strength I carried on through my Honours and Master's degrees and completed both at the University of Chittagong, a well-known public university in Bangladesh. In the context of Bangladesh this is a very challenging thing to do. Facing the challenges at each stage, step by step, can be almost impossible even for an ordinary person.",
      "Along the way I took on social leadership and never held myself back. I built my skills, found ways to stay busy and growing, and I have shown success in the organisations where I have worked."
    ]},
    { key: "work", title: "My work", tag: "What I do today", pull: "Even without both hands, I travel across the whole country without anyone's help.", image: "", caption: "", text: [
      "Every day I try to motivate people: how to keep going in the battle of life, and how much further you can go if you keep confidence in yourself.",
      "Even without both hands, I travel across the whole country without anyone's help, to the hills and on river trips. And I am working on how a person can build themselves as a normal person, without thinking of themselves as disabled."
    ]}
  ],

  // As seen on TV and in newspapers. Add every news item here (newest first).
  media: [
    { outlet: "Prothom Alo", type: "Newspaper", date: "4 May 2023", title: "Pen held in mouth, writing with his elbow: Bahar Uddin passes his Master's", text: "Coverage of completing a Master's degree in History at the University of Chittagong.", url: "https://www.prothomalo.com/bangladesh/d58c2ai4dp", chapter: "forward" },
    { outlet: "Desh Rupantor", type: "Newspaper", date: "17 May 2023", title: "Indomitable Rayhan", text: "Coverage of the appointment as Training Coordinator at the University of Dhaka.", url: "https://www.deshrupantor.com/426118/%E0%A6%85%E0%A6%A6%E0%A6%AE%E0%A7%8D%E0%A6%AF-%E0%A6%B0%E0%A6%BE%E0%A7%9F%E0%A6%B9%E0%A6%BE%E0%A6%A8", chapter: "forward" },
    { outlet: "Prothom Alo", type: "Newspaper", date: "23 June 2021", title: "Feature on SIM registration for people without fingerprints", text: "A major feature on the problem I raised about biometric SIM registration.", url: "", chapter: "work" },
    { outlet: "Your TV channel", type: "TV", date: "2024", title: "A sample TV news item", text: "Add the channel name, date and link of each TV report here.", url: "", chapter: "journey", sample: true },
    { outlet: "Your online news site", type: "Online", date: "2025", title: "A sample online news item", text: "Add online news here.", url: "", chapter: "obstacles", sample: true }
  ],

  quotes: [
    { text: "Your own words go here: one short line that could lift someone up on a hard day.", source: "Bahar Uddin Raihan", date: "", sample: true },
    { text: "A second sample quote. Replace it, or delete it, when you add your real ones.", source: "Bahar Uddin Raihan", date: "", sample: true }
  ],

  achievements: [
    { title: "Master's degree in History", text: "Completed at the University of Chittagong, writing several exams myself with a pen held in my mouth.", year: "2021" },
    { title: "Best Participant Award", text: "Leadership Training Committee.", year: "2019" },
    { title: "Best Social Action Project", text: "Awarded by British Council and The Hunger Project.", year: "2016" },
    { title: "Special Honor Award", text: "Prochesta Foundation Bangladesh and B.M Char Blood Donors Group.", year: "" },
    { title: "Your next achievement", text: "A short sentence about what you achieved and why it matters.", year: "2026", sample: true }
  ],

  works: [
    { title: "Mobile SIM registration for people without fingerprints", text: "I advocated for the rights of persons with disabilities to access mobile communication services. The problem received national attention in a major feature in The Daily Prothom Alo (23 June 2021) and prompted discussion with regulators such as the BTRC.", year: "2021" },
    { title: "“Smile for Children” project", text: "As coordinator I led a community initiative to improve access to education and well-being support for underprivileged children, ran awareness campaigns on children's rights and inclusive education, and trained volunteers on child protection and inclusion.", year: "" },
    { title: "Your next project or talk", text: "Describe a piece of work in one or two sentences.", year: "2026", link: "", sample: true }
  ],

  // Videos: the first is featured. Use the YouTube ID (the part after v= in the link).
  videos: [
    { id: "zzCbfST_Ztw", title: "Where there is a will, everything is possible", text: "A video feature about my journey.", category: "Featured" },
    { id: "", title: "A sample TV news video", text: "Add the YouTube ID of each video.", category: "TV news", sample: true },
    { id: "", title: "A sample skills video", text: "Videos about each of my skills and activities.", category: "Skills", sample: true }
  ],

  // Photos: leadership work, social work, workplace, travel, press clippings. Put files in the "images" folder.
  gallery: [
    { src: "images/leadership-1.jpg", thumb: "images/leadership-1-thumb.jpg", caption: "Youth leadership training, 2016–2022", category: "Leadership" },
    { src: "images/leadership-2.jpg", thumb: "images/leadership-2-thumb.jpg", caption: "Youth leadership training, 2016–2022", category: "Leadership" },
    { src: "images/leadership-3.jpg", thumb: "images/leadership-3-thumb.jpg", caption: "Youth leadership training, 2016–2022", category: "Leadership" },
    { src: "images/leadership-4.jpg", thumb: "images/leadership-4-thumb.jpg", caption: "Youth leadership training, 2016–2022", category: "Leadership" },
    { src: "images/leadership-5.jpg", thumb: "images/leadership-5-thumb.jpg", caption: "Youth leadership training, 2016–2022", category: "Leadership" },
    { src: "images/leadership-6.jpg", thumb: "images/leadership-6-thumb.jpg", caption: "Youth leadership training, 2016–2022", category: "Leadership" },
    { src: "images/leadership-7.jpg", thumb: "images/leadership-7-thumb.jpg", caption: "Youth leadership training, 2016–2022", category: "Leadership" },
    { src: "", caption: "Sample: social work in the field.", category: "Social work", sample: true },
    { src: "", caption: "Sample: at my workplace.", category: "Workplace", sample: true },
    { src: "", caption: "Sample: travelling to the hills.", category: "Travel", sample: true },
    { src: "", caption: "Sample: a newspaper clipping.", category: "Press clippings", sample: true }
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
    { title: "B.A. (Honours) in History", place: "University of Chittagong", year: "2020", note: "" },
    { title: "HSC, Arts & Humanities", place: "Chakaria College", year: "2016", note: "" },
    { title: "SSC, Business Studies", place: "Chakaria Govt. High School", year: "2014", note: "" }
  ],

  training: [
    "PGD in Human Resource Management, Academy of Business Professionals",
    "20-day training in Graphic Design and Multimedia, Bangladesh Computer Council",
    "4-day Training of Trainers (ToT), British Council Bangladesh"
  ],

  journey: [
    { year: "Childhood", title: "Under my maternal family's care", text: "My family was only my mother and me. My mother worked as a farmer in Chakaria, Cox's Bazar, to keep the household going, and I grew up with the help of my maternal grandparents, uncles and relatives." },
    { year: "2004", title: "The accident that changed my life", text: "In fifth grade I was electrocuted at an electric transformer and lost both of my hands. My maternal uncles paid for my treatment at Chittagong Medical College Hospital." },
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

  updates: [
    { date: "2026-11-07", place: "Bangladesh", text: "Work started on this website and app.", image: "" }
  ],

  // Social accounts. An entry with an empty url is hidden. Add the real links.
  social: [
    { label: "Facebook", icon: "f", url: "https://www.facebook.com/Our.Raihan" },
    { label: "YouTube", icon: "▶", url: "https://www.youtube.com/@BaharRaihan" },
    { label: "TikTok", icon: "♪", url: "https://www.tiktok.com/@baharwithoutlimits" },
    { label: "LinkedIn", icon: "in", url: "https://www.linkedin.com/in/baharuddinraihan" },
    { label: "Instagram", icon: "◎", url: "https://www.instagram.com/baharuddinraihan" }
  ],

  disclaimer: "Shared for inspiration and encouragement only. This is not medical advice and not a substitute for professional care. If you are in crisis or in danger, please contact your local emergency services or a qualified professional.",

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
