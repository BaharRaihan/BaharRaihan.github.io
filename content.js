// ============================================================
//  All the information on the site and in the app lives in this file (English).
//  Edit here -> website, CV and app all update.
//
//  HOW TO ADD NEW THINGS (put the newest at the TOP of each list):
//   - media         : { outlet, type: "TV" | "Newspaper" | "Online", date, title, text, url, chapter }
//   - videos        : { id: "YouTubeVideoID", title, text, category }
//   - gallery       : { src: "images/name.jpg", thumb: "images/name-thumb.jpg" (optional square preview), caption, category }
//   - quotes        : { text, source, date, url (optional: link to where it was said) }
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
    { iso: "2025-05-24", outlet: "Samakal", type: "Newspaper", date: "24 May 2025", title: "Bahar passed his Master’s by writing with his mouth", text: "A feature on his journey, studies and work after losing his hands in 2004.", url: "https://samakal.com/kisualonil/article/297100/%E0%A6%AE%E0%A7%81%E0%A6%96-%E0%A6%A6%E0%A6%BF%E0%A7%9F%E0%A7%87-%E0%A6%B2%E0%A6%BF%E0%A6%96%E0%A7%87-%E0%A6%B8%E0%A7%8D%E0%A6%A8%E0%A6%BE%E0%A6%A4%E0%A6%95%E0%A7%8B%E0%A6%A4%E0%A7%8D%E0%A6%A4%E0%A6%B0-%E0%A6%AA%E0%A6%BE%E0%A6%B8-%E0%A6%95%E0%A6%B0%E0%A7%87%E0%A6%9B%E0%A7%87%E0%A6%A8-%E0%A6%AC%E0%A6%BE%E0%A6%B9%E0%A6%BE%E0%A6%B0", chapter: "forward" },
    { iso: "2023-05-17", outlet: "Desh Rupantor", type: "Newspaper", date: "17 May 2023", title: "Indomitable Rayhan", text: "Coverage of the appointment as Training Coordinator at the University of Dhaka.", url: "https://www.deshrupantor.com/426118/%E0%A6%85%E0%A6%A6%E0%A6%AE%E0%A7%8D%E0%A6%AF-%E0%A6%B0%E0%A6%BE%E0%A7%9F%E0%A6%B9%E0%A6%BE%E0%A6%A8", chapter: "forward" },
    { iso: "2023-05-15", outlet: "Dainik Bangla", type: "Newspaper", date: "15 May 2023", title: "Bahar, the indomitable young man who lost both hands, gets a job", text: "Report on the appointment letter handed to him at the ICT Tower.", url: "https://www.dainikbangla.com.bd/information-technology/21624/1684142480", chapter: "forward" },
    { iso: "2023-05-04", outlet: "Prothom Alo", type: "Newspaper", date: "4 May 2023", title: "Pen held in mouth, writing with his elbow: Bahar Uddin passes his Master’s", text: "Coverage of completing a Master’s degree in History at the University of Chittagong.", url: "https://www.prothomalo.com/bangladesh/d58c2ai4dp", chapter: "forward" },
    { iso: "2021-06-23", outlet: "Prothom Alo", type: "Newspaper", date: "23 June 2021", title: "Bahar gets a SIM card in his own name", text: "Follow-up: Grameenphone handed him a SIM card after the first report.", url: "https://www.prothomalo.com/bangladesh/%E0%A6%A8%E0%A6%BF%E0%A6%9C%E0%A7%87%E0%A6%B0-%E0%A6%A8%E0%A6%BE%E0%A6%AE%E0%A7%87-%E0%A6%B8%E0%A6%BF%E0%A6%AE-%E0%A6%95%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%A1-%E0%A6%AA%E0%A7%87%E0%A6%B2%E0%A7%87%E0%A6%A8-%E0%A6%B8%E0%A7%87%E0%A6%87-%E0%A6%AC%E0%A6%BE%E0%A6%B9%E0%A6%BE%E0%A6%B0", chapter: "work" },
    { iso: "2021-06-22", outlet: "Prothom Alo", type: "Newspaper", date: "June 2021", title: "He has no hands, so he cannot buy a SIM card", text: "Report on how fingerprint-based SIM registration stopped him from buying a SIM in his own name.", url: "https://www.prothomalo.com/bangladesh/%E0%A6%A6%E0%A7%81%E0%A6%B9%E0%A6%BE%E0%A6%A4-%E0%A6%A8%E0%A7%87%E0%A6%87-%E0%A6%A4%E0%A6%BE%E0%A6%87-%E0%A6%95%E0%A6%BF%E0%A6%A8%E0%A6%A4%E0%A7%87-%E0%A6%AA%E0%A6%BE%E0%A6%B0%E0%A6%9B%E0%A7%87%E0%A6%A8-%E0%A6%A8%E0%A6%BE-%E0%A6%B8%E0%A6%BF%E0%A6%AE-%E0%A6%95%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%A1", chapter: "obstacles" },
    { iso: "2023-05-15", outlet: "Ekattor TV", type: "TV", date: "15 May 2023", title: "He writes without hands: how he finished his Master’s", text: "", url: "https://www.youtube.com/watch?v=a1plQUpWK3E", video: "a1plQUpWK3E", dur: 159, chapter: "forward" },
    { iso: "2023-05-04", outlet: "Newsnow24", type: "Online", date: "4 May 2023", title: "No hands, yet Rayhan passed his Master’s writing with his mouth", text: "", url: "https://www.youtube.com/watch?v=NMuGR3WfLnQ", video: "NMuGR3WfLnQ", dur: 272, chapter: "forward" },
    { iso: "2024-02-19", outlet: "Channel 24", type: "TV", date: "19 Feb 2024", title: "Bahar Uddin Rayhan speaks after seven months on being relieved from his job", text: "", url: "https://www.youtube.com/watch?v=VGpid8gREqM", video: "VGpid8gREqM", dur: 222, chapter: "obstacles" },
    { iso: "2023-11-02", outlet: "Samakal News", type: "Online", date: "2 Nov 2023", title: "“If I am capable, pay me a salary; otherwise I will take no payment”", text: "", url: "https://www.youtube.com/watch?v=ufy4ZWtV39Q", video: "ufy4ZWtV39Q", dur: 571, chapter: "work" },
    { iso: "2023-05-04", outlet: "Channel 24", type: "TV", date: "4 May 2023", title: "Remarkable success in higher education, writing with his mouth", text: "", url: "https://www.youtube.com/watch?v=D2q08THUnXE", video: "D2q08THUnXE", dur: 242, chapter: "forward" },
    { iso: "2023-09-20", outlet: "Prothom Alo", type: "Newspaper", date: "20 Sep 2023", title: "Master’s passed by writing with his mouth, and now working too", text: "", url: "https://www.youtube.com/watch?v=tx50KGFMJzE", video: "tx50KGFMJzE", dur: 242, chapter: "forward" },
    { iso: "2025-06-18", outlet: "Rtv News", type: "TV", date: "18 Jun 2025", title: "Master’s graduate Bahar rides a bike and uses a computer without hands", text: "", url: "https://www.youtube.com/watch?v=WvYDkUwAPDo", video: "WvYDkUwAPDo", dur: 182, chapter: "work" },
    { iso: "2023-05-16", outlet: "Bangladhara", type: "Online", date: "16 May 2023", title: "The story of Rayhan, who became employed despite his disability", text: "", url: "https://www.youtube.com/watch?v=-xK_-NO1zfI", video: "-xK_-NO1zfI", dur: 1322, chapter: "forward" },
    { iso: "2023-05-18", outlet: "Bangla Tribune", type: "Online", date: "18 May 2023", title: "Bahar Uddin Rayhan, who lost both hands, stands up again", text: "", url: "https://www.youtube.com/watch?v=PabnhM_fbwg", video: "PabnhM_fbwg", dur: 154, chapter: "forward" },
    { iso: "2017-03-31", outlet: "Channel 24", type: "TV", date: "31 Mar 2017", title: "Rayhan’s journey of never giving up in the battle of life", text: "", url: "https://www.youtube.com/watch?v=L4W8QmlDoXw", video: "L4W8QmlDoXw", dur: 141, chapter: "journey" },
    { iso: "2023-05-07", outlet: "Daily Jugantor", type: "Newspaper", date: "7 May 2023", title: "A special interview with the indomitable Rayhan of Chittagong University", text: "", url: "https://www.youtube.com/watch?v=zIaVxFATs48", video: "zIaVxFATs48", dur: 484, chapter: "journey" },
    { iso: "2025-06-23", outlet: "Bangladesh Times", type: "Online", date: "23 Jun 2025", title: "He studied at Chittagong University with a pen in his mouth", text: "", url: "https://www.youtube.com/watch?v=ewoiezUH8bA", video: "ewoiezUH8bA", dur: 165, chapter: "forward" },
    { iso: "2023-09-22", outlet: "Protidiner Bangladesh", type: "Newspaper", date: "22 Sep 2023", title: "Rayhan’s comeback story, writing with the help of his elbow", text: "", url: "https://www.youtube.com/watch?v=qdpRWIxyiFs", video: "qdpRWIxyiFs", dur: 417, chapter: "forward" },
    { iso: "2023-05-03", outlet: "Jamuna TV", type: "TV", date: "3 May 2023", title: "Where there is a will, everything is possible: Rayhan proves it", text: "", url: "https://www.youtube.com/watch?v=zzCbfST_Ztw", video: "zzCbfST_Ztw", dur: 145, chapter: "forward" },
    { outlet: "Your TV channel", type: "TV", date: "2024", title: "A sample TV news item", text: "Add the channel name, date and link of each TV report here.", url: "", chapter: "journey", sample: true },
    { outlet: "Your online news site", type: "Online", date: "2025", title: "A sample online news item", text: "Add online news here.", url: "", chapter: "obstacles", sample: true }
  ],

  // Colour (and optional real logo) for each news outlet. The wordmark is drawn in text until you add a logo.
  // To add a real logo: put the file in images/logos/ (a PNG or SVG with a transparent background) and write
  // its path, e.g. logo: "images/logos/prothomalo.png". Outlets not listed here get an automatic colour.
  outlets: {
    "Prothom Alo": { color: "#c1121f", logo: "" },
    "Samakal": { color: "#0b3c8c", logo: "" },
    "Desh Rupantor": { color: "#006a4e", logo: "" },
    "Dainik Bangla": { color: "#b45309", logo: "" },
    "Ekattor TV": { color: "#7c3aed", logo: "" },
    "Newsnow24": { color: "#4d7c0f", logo: "" },
    "Channel 24": { color: "#0e7490", logo: "" },
    "Samakal News": { color: "#0b3c8c", logo: "" },
    "Rtv News": { color: "#be185d", logo: "" },
    "Bangladhara": { color: "#9a3412", logo: "" },
    "Bangla Tribune": { color: "#0f766e", logo: "" },
    "Daily Jugantor": { color: "#374151", logo: "" },
    "Bangladesh Times": { color: "#6d28d9", logo: "" },
    "Protidiner Bangladesh": { color: "#1d4ed8", logo: "" },
    "Jamuna TV": { color: "#b91c1c", logo: "" }
  },

  quotes: [
    // Real words, as quoted in the press (translated from Bangla). Each links to the article where it appeared.
    { text: "I have managed to stay in the race with able-bodied people through the strength of my willpower.", source: "Bahar Uddin Raihan, to Samakal", date: "May 2025", url: "https://samakal.com/kisualonil/article/297100/%E0%A6%AE%E0%A7%81%E0%A6%96-%E0%A6%A6%E0%A6%BF%E0%A7%9F%E0%A7%87-%E0%A6%B2%E0%A6%BF%E0%A6%96%E0%A7%87-%E0%A6%B8%E0%A7%8D%E0%A6%A8%E0%A6%BE%E0%A6%A4%E0%A6%95%E0%A7%8B%E0%A6%A4%E0%A7%8D%E0%A6%A4%E0%A6%B0-%E0%A6%AA%E0%A6%BE%E0%A6%B8-%E0%A6%95%E0%A6%B0%E0%A7%87%E0%A6%9B%E0%A7%87%E0%A6%A8-%E0%A6%AC%E0%A6%BE%E0%A6%B9%E0%A6%BE%E0%A6%B0" },
    { text: "I have faced many obstacles in life. Socially, in moving around, in my studies, even at work, I met barriers at every step.", source: "Bahar Uddin Raihan, to Samakal", date: "May 2025", url: "https://samakal.com/kisualonil/article/297100/%E0%A6%AE%E0%A7%81%E0%A6%96-%E0%A6%A6%E0%A6%BF%E0%A7%9F%E0%A7%87-%E0%A6%B2%E0%A6%BF%E0%A6%96%E0%A7%87-%E0%A6%B8%E0%A7%8D%E0%A6%A8%E0%A6%BE%E0%A6%A4%E0%A6%95%E0%A7%8B%E0%A6%A4%E0%A7%8D%E0%A6%A4%E0%A6%B0-%E0%A6%AA%E0%A6%BE%E0%A6%B8-%E0%A6%95%E0%A6%B0%E0%A7%87%E0%A6%9B%E0%A7%87%E0%A6%A8-%E0%A6%AC%E0%A6%BE%E0%A6%B9%E0%A6%BE%E0%A6%B0" },
    { text: "I received my teachers' blessings and affection, and that helped me keep my morale up in my studies.", source: "Bahar Uddin Raihan, to Samakal", date: "May 2025", url: "https://samakal.com/kisualonil/article/297100/%E0%A6%AE%E0%A7%81%E0%A6%96-%E0%A6%A6%E0%A6%BF%E0%A7%9F%E0%A7%87-%E0%A6%B2%E0%A6%BF%E0%A6%96%E0%A7%87-%E0%A6%B8%E0%A7%8D%E0%A6%A8%E0%A6%BE%E0%A6%A4%E0%A6%95%E0%A7%8B%E0%A6%A4%E0%A7%8D%E0%A6%A4%E0%A6%B0-%E0%A6%AA%E0%A6%BE%E0%A6%B8-%E0%A6%95%E0%A6%B0%E0%A7%87%E0%A6%9B%E0%A7%87%E0%A6%A8-%E0%A6%AC%E0%A6%BE%E0%A6%B9%E0%A6%BE%E0%A6%B0" },
    { text: "If you want it with all your heart, no task is impossible, even without hands.", source: "Bahar Uddin Raihan, to Prothom Alo", date: "May 2023", url: "https://www.prothomalo.com/bangladesh/d58c2ai4dp" },
    { text: "I can do any work if I want to. To prove it, I learned to ride a motorcycle. I skate.", source: "Bahar Uddin Raihan, to Prothom Alo", date: "May 2023", url: "https://www.prothomalo.com/bangladesh/d58c2ai4dp" },
    // His own words from video interviews (translated from Bangla).
    { text: "You don't need hands to ride a bike.", source: "Bahar Uddin Raihan", date: "" },
    { text: "I want people to clear their minds of thoughts like “I don't have this, I don't have that, I can't do it, it isn't possible for me”, and to believe that one person can do everything, if they want to.", source: "Bahar Uddin Raihan", date: "" },
    { text: "I never considered any obstacle to be an obstacle.", source: "Bahar Uddin Raihan", date: "" },
    { text: "I thought: if Allah had created all seven billion people on earth without hands, would the world have been built to be used the way it is now? That is how I thought about it.", source: "Bahar Uddin Raihan", date: "" },
    { text: "Thinking that nobody has hands, I built the system my own way.", source: "Bahar Uddin Raihan", date: "" },
    { text: "I was not a physically disabled person from birth.", source: "Bahar Uddin Raihan", date: "" },
    { text: "When their words reached my ears, I would think: wait a little, I will show you.", source: "Bahar Uddin Raihan", date: "" },
    { text: "“The poor fellow has no option but begging, because how will he live! He has no father, only a mother, no brother, no sister, who will feed him?” That kind of bullying used to reach me.", source: "Bahar Uddin Raihan", date: "" },
    { text: "When it turned out that my writing was somewhat readable... my confidence came back: yes, I can do it.", source: "Bahar Uddin Raihan", date: "" },
    { text: "I rode a bicycle through the whole of my high school life, because it was not possible for me to go to school paying two taka, two taka, four taka for the shared “Chander gari” vehicles.", source: "Bahar Uddin Raihan", date: "" },
    { text: "I bought a bicycle for 700 taka and went to school on it.", source: "Bahar Uddin Raihan", date: "" },
    { text: "It is unbelievable: my friend was always behind me... I could tell how much he trusted me, going to school behind me.", source: "Bahar Uddin Raihan", date: "" }
  ],

  // What colleagues say about him, from video reports (translated from Bangla).
  others: [
    { text: "We have been learning a lot from him for a long time, whether in work or in family matters...", source: "A colleague, in a video report" },
    { text: "In his work, there is nothing like his work falling behind because of his physical disability.", source: "A colleague, in a video report" },
    { text: "Many people in this situation actually suffer from despair... but he did not do that. He showed courage, studied, came into employment, and is working.", source: "A colleague, in a video report" }
  ],

  achievements: [
    { title: "Master's degree in History", text: "Completed at the University of Chittagong, writing several exams myself with a pen held in my mouth.", year: "2021" },
    { title: "Best Participant Award", text: "Leadership Training Committee.", year: "2019" },
    { title: "Best Social Action Project", text: "Awarded by British Council and The Hunger Project.", year: "2016" },
    { title: "Special Honor Award", text: "Prochesta Foundation Bangladesh and B.M Char Blood Donors Group.", year: "" },
    { title: "Your next achievement", text: "A short sentence about what you achieved and why it matters.", year: "2026", sample: true }
  ],

  works: [
    { title: "Mobile SIM registration for people without fingerprints", text: "I advocated for the rights of persons with disabilities to access mobile communication services. The problem received national attention in a major feature in The Daily Prothom Alo (June 2021) and prompted discussion with regulators such as the BTRC.", year: "2021" },
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
    org: "BRAC, Humanitarian Crisis Management Programme",
    since: "Since June 2026",
    description: "I am based at Bhasan Char. I earn my living from my salary. Earlier work: In May 2023 I received my appointment letter at the ICT Tower from the State Minister for ICT and joined the EDGE project at the Centre for Project Management and Information Systems (PMIS), University of Dhaka, as Training Coordinator. To pay for my studies I did part-time work and ran a small online business. I run the YouTube channel “Bahar Rayhan” and am building the website “Kemone Jabo dot com” with a friend."
  },

  experience: [
    { title: "Project Officer", org: "BRAC, Humanitarian Crisis Management Programme", period: "June 2026 – present", text: "Working as a Project Officer at Bhasan Char." },
    { title: "Executive Operation Head and HR Manager", org: "Kloud Project Limited, Chattogram", period: "2024 – May 2026", text: "Implemented and managed PIHR software and staff data. Formulated over 50 organisational policies and managed recruitment, selection and training. Made weekly branch visits to train staff and monitor daily operations, and kept liaison with government and private agencies." },
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
    { year: "Today", title: "Moving forward", text: "Since June 2026 I have been working as a Project Officer at BRAC, in its Humanitarian Crisis Management Programme at Bhasan Char." }
  ],

  skills: ["Community mobilisation", "Stakeholder engagement and advocacy", "Disability inclusion", "Data collection and reporting", "Training and facilitation", "HR and operations", "Microsoft Office, Photoshop, Illustrator", "Content creation (YouTube)", "Motorcycle riding", "Skating"],
  languages: ["Bangla (fluent)", "English (fluent)"],
  awards: [
    "Best Participant Award, Leadership Training Committee (2019)",
    "Best Social Action Project, British Council & The Hunger Project (2016)",
    "Special Honor Award, Prochesta Foundation Bangladesh & B.M Char Blood Donors Group"
  ],
  advocacy: [
    { title: "Mobile SIM registration for people without fingerprints", text: "I advocated for the rights of persons with disabilities to access mobile communication services in Bangladesh. The biometric registration problem for people without fingerprints received national attention in a major feature in The Daily Prothom Alo (June 2021) and prompted discussion with regulators such as the BTRC." },
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
