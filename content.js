/* ============================================================
   content.js — all editorial content for big little brain
   Plain data, attached to window for the React app.
   ============================================================ */

/* ---- Brain regions: the autoplay loop walks these in order,
        mirroring how Alzheimer's typically spreads. ---- */
const BRAIN_REGIONS = [
  {
    id: "hippo",
    name: "Hippocampus",
    plain: "the memory maker",
    color: "var(--r-hippo)",
    stage: "Often affected first",
    what: "A small seahorse-shaped part deep in the brain that turns new experiences into lasting memories.",
    youMaySee: [
      "Asking the same question again and again",
      "Forgetting a conversation that happened minutes ago",
      "Misplacing things, losing track of the day",
    ],
  },
  {
    id: "temporal",
    name: "Temporal lobe",
    plain: "words & faces",
    color: "var(--r-temporal)",
    stage: "Early to middle",
    what: "Sits by the ears. Helps us find the right words, understand speech, and recognise familiar faces and objects.",
    youMaySee: [
      "Searching for a word, or using the wrong one",
      "Trouble following a conversation",
      "Not recognising a relative or a once-familiar place",
    ],
  },
  {
    id: "parietal",
    name: "Parietal lobe",
    plain: "space & doing",
    color: "var(--r-parietal)",
    stage: "Middle",
    what: "Near the top-back. Handles where things are in space, and the steps for everyday tasks like dressing or using a fork.",
    youMaySee: [
      "Getting lost in familiar places",
      "Struggling to dress or use simple tools",
      "Misjudging distances, more bumps and falls",
    ],
  },
  {
    id: "frontal",
    name: "Frontal lobe",
    plain: "mood & judgement",
    color: "var(--r-frontal)",
    stage: "Middle to later",
    what: "Behind the forehead. The seat of planning, judgement, focus, and much of personality and mood.",
    youMaySee: [
      "Changes in mood or personality",
      "Less interest in things they used to enjoy",
      "Difficulty planning, or acting out of character",
    ],
  },
  {
    id: "occipital",
    name: "Occipital lobe",
    plain: "seeing",
    color: "var(--r-occipital)",
    stage: "Varies",
    what: "At the very back. Makes sense of what the eyes see. Less commonly affected, but when it is, sight can play tricks.",
    youMaySee: [
      "Seeing things that aren't there",
      "Misreading shadows or patterns",
      "Trouble telling objects apart",
    ],
  },
];

/* ---- Section 1: Understanding Dementia ---- */
const UNDERSTANDING = [
  {
    id: "what-is-dementia",
    title: "What is dementia?",
    blurb: "It's not one disease, but a word for symptoms.",
    minutes: 3,
    body: [
      "Dementia is not a single illness. It's a word for a group of symptoms — memory loss, confusion, and difficulty with thinking or daily tasks — caused by different diseases that damage the brain over time.",
      "It is not a normal part of ageing. Many people grow old without ever developing it. When it does happen, it's because brain cells are being damaged and can no longer talk to each other the way they used to.",
      "Because the damage is gradual, symptoms usually start small and slowly grow. This means there is often time to learn, plan, and find support — you do not have to figure everything out today.",
    ],
    key: "Dementia describes symptoms. Alzheimer's is the most common disease that causes them.",
  },
  {
    id: "alzheimers",
    title: "What is Alzheimer's disease?",
    blurb: "The most common cause of dementia.",
    minutes: 3,
    body: [
      "Alzheimer's disease is the most common cause of dementia — around 6 in 10 cases. In Alzheimer's, two proteins (called amyloid and tau) build up in the brain and slowly damage the cells that store and recall memories.",
      "It usually begins in the hippocampus, the brain's memory-maker, which is why the first sign is often forgetting recent events while older memories stay clear. Over years, it spreads to other parts of the brain.",
      "There is no cure yet, but treatments and good daily support can help with symptoms and quality of life. An early, accurate diagnosis opens the door to the right help.",
    ],
    key: "Alzheimer's usually starts with recent-memory loss because it begins in the hippocampus.",
  },
  {
    id: "early-signs",
    title: "Early signs",
    blurb: "What's worth noticing — and what's normal.",
    minutes: 4,
    body: [
      "Everyone forgets a name or why they walked into a room. The difference with dementia is a pattern of change that gets in the way of everyday life.",
      "Common early signs: forgetting recently learned information, repeating questions, struggling to find words, getting confused about time or place, putting things in odd places, and pulling back from hobbies or social life.",
      "One sign on its own is rarely cause for alarm. It's the build-up over months — and a change from how someone used to be — that's worth talking to a doctor about.",
    ],
    key: "It's a change from the person's normal that matters most — not one forgotten name.",
  },
  {
    id: "stages",
    title: "Stages of dementia",
    blurb: "Early, middle, and later — what to expect.",
    minutes: 4,
    body: [
      "Dementia is often described in three broad stages. They overlap and move at different speeds for everyone, so treat them as a gentle map, not a timetable.",
      "Early: small memory lapses, word-finding trouble, some confusion. The person is largely independent and aware.",
      "Middle: more help needed with daily tasks, more confusion, possible changes in mood or behaviour, and difficulty recognising people. This is often the longest stage.",
      "Later: significant help needed with everyday care, very limited communication, and physical frailty. Comfort, dignity, and gentle presence matter most here.",
    ],
    key: "Stages overlap and vary hugely. Use them to anticipate needs, not to predict dates.",
  },
  {
    id: "see-a-doctor",
    title: "When to see a doctor",
    blurb: "Sooner is better — here's why.",
    minutes: 3,
    body: [
      "If you've noticed a pattern of memory or thinking changes over weeks or months, it's worth booking a GP appointment. Going early is not an overreaction.",
      "Some causes of memory problems are treatable and reversible — infections, vitamin deficiencies, thyroid issues, depression, or medication side effects. A check-up can rule these out.",
      "If it is dementia, an early diagnosis means access to treatments, support, and the chance to make plans together while the person can take part in decisions. Write down examples before the visit — they help the doctor.",
    ],
    key: "Some memory problems are treatable. A check-up is always worth it.",
  },
  {
    id: "getting-a-diagnosis",
    title: "Getting a diagnosis",
    blurb: "What the GP visit and memory clinic are really like.",
    minutes: 4,
    body: [
      "The path usually starts with your GP. It helps to go prepared: jot down the changes you've noticed, roughly when they began, and bring someone who knows the person well. There's no shame in reading from your notes.",
      "The GP will talk through the symptoms and medical history, and may do a short pen-and-paper memory and thinking check. They'll usually arrange blood tests too — partly to rule out other, treatable causes like infections, vitamin deficiencies or thyroid problems.",
      "If more assessment is needed, they'll refer you to a memory clinic or a specialist. There you might have a longer memory assessment and sometimes a brain scan. None of it is painful, though it can feel tiring or daunting — a familiar face alongside helps.",
      "Getting to a clear answer can take a few weeks or months, and the waiting is hard. When the result comes, ask what type it is, what to expect, and what support and treatment are available. You can always ask for things to be explained again, or written down.",
    ],
    key: "Go prepared with notes and a companion. The GP rules out other causes first, then refers on if needed.",
  },
];

/* ---- Section 2: Caregiver Help ---- */
const CAREGIVER = [
  {
    id: "repeating",
    title: "Repeating questions",
    blurb: "The same question, again and again.",
    minutes: 3,
    body: [
      "Repeating happens because the brain isn't storing the answer — so each time genuinely feels like the first. They are not being difficult, and they can't help it.",
      "Answer calmly and briefly, as if it's the first time. Try a memory aid they can check themselves: a whiteboard, a note by the door, or a simple daily calendar.",
      "If a question is driven by worry ('When are we going home?'), the feeling underneath often needs answering more than the facts. Reassure, then gently redirect to something comforting.",
    ],
    key: "Answer calmly as if it's the first time, and offer a note they can check on their own.",
  },
  {
    id: "medication",
    title: "Refusing medication",
    blurb: "When they won't take their pills.",
    minutes: 3,
    body: [
      "Refusal often comes from confusion, mistrust, an unpleasant taste, or trouble swallowing — not stubbornness. Stay calm; a battle usually backfires.",
      "Try a routine and a relaxed moment. Offer with a favourite drink or food. A weekly pill organiser, or asking the pharmacist about easier-to-take forms, can help.",
      "Never hide medication in food without checking with the pharmacist or doctor first — some medicines can't be crushed. If refusal is ongoing, tell the GP rather than going it alone.",
    ],
    key: "Stay calm, keep a routine, and ask the pharmacist about easier forms. Don't hide meds without advice.",
  },
  {
    id: "wandering",
    title: "Wandering",
    blurb: "When they leave, or get lost.",
    minutes: 3,
    body: [
      "Wandering often has a reason: boredom, restlessness, looking for someone, needing the toilet, or trying to 'go home' to a place from the past. Spotting the trigger helps.",
      "Keep them safely occupied with gentle activity and a predictable routine. Make the front door less obvious, and consider door alarms or a GPS tracker for peace of mind.",
      "Prepare for the worst case: keep a recent photo, dress them in identifiable clothing, and tell trusted neighbours. If they go missing and you can't find them quickly, call for help straight away.",
    ],
    key: "Find the trigger, secure exits gently, and prepare an ID photo just in case.",
  },
  {
    id: "aggression",
    title: "Aggression",
    blurb: "Sudden anger or lashing out.",
    minutes: 4,
    body: [
      "Aggression is almost always communication, not character. It often means pain, fear, overwhelm, or a need they can't express in words. It is not aimed at you personally.",
      "In the moment: stay calm, give space, keep your voice soft, and don't argue or correct. Remove whatever's overwhelming — noise, a crowd, a rushed task — and come back to it later.",
      "Afterwards, look for the pattern. Same time of day? Hungry, tired, in pain, needing the toilet? Treating the cause prevents the next episode. Persistent aggression is worth a GP conversation.",
    ],
    key: "Aggression usually means an unmet need. Stay calm, reduce overwhelm, then find the trigger.",
  },
  {
    id: "sleep",
    title: "Sleep problems",
    blurb: "Up at night, confused at dusk.",
    minutes: 3,
    body: [
      "Dementia can scramble the body clock, so days and nights blur. Confusion that worsens in the late afternoon and evening is common enough to have a name: sundowning.",
      "Help the clock along: daylight and activity in the morning, a calm and dim evening, less caffeine, and a steady bedtime routine. Limit long daytime naps.",
      "Make nights safer and calmer — a night light, a clear path to the toilet, and a quiet, familiar room. If sleep is badly disrupted, ask the GP before trying any sleep medication.",
    ],
    key: "Bright mornings, calm dim evenings, and a steady routine help reset a scrambled body clock.",
  },
  {
    id: "recognition",
    title: "Not recognising family",
    blurb: "When they don't know who you are.",
    minutes: 4,
    body: [
      "This is one of the most painful moments for a carer. Remember: the disease is hiding the name and the face, not the bond. The feeling of safety with you usually remains.",
      "Don't quiz them ('Do you know who I am?') — it can cause distress. Instead, gently introduce yourself by name and relationship, warmly and without pressure: 'Hi Mum, it's Sarah, your daughter.'",
      "Sometimes they recognise a younger version of you, or mistake you for someone else. Going along with their reality is usually kinder than correcting it. Connect through warmth, touch, music, and old photos.",
    ],
    key: "Don't quiz them. Introduce yourself warmly by name — the bond often outlasts the recognition.",
  },
  {
    id: "carer-wellbeing",
    title: "Looking after yourself",
    blurb: "You matter too — burnout, breaks and asking for help.",
    minutes: 4,
    body: [
      "Caring for someone with dementia is a marathon, not a sprint, and it can quietly take everything you have. Looking after yourself isn't selfish — it's what makes it possible to keep caring well. You cannot pour from an empty cup.",
      "Watch for the warning signs in yourself: exhaustion that sleep doesn't fix, constant worry, snapping at small things, losing interest in everything else, or feeling low and hopeless. These are signs to reach out, not to push harder.",
      "Accept help, and ask for it specifically — most people want to help but don't know how. Let someone sit with your loved one while you rest, walk, or simply breathe. Respite care and day services exist precisely so carers can recharge; using them is wise, not a failure.",
      "In the UK you have a right to a free carer's assessment from your local council, which can unlock practical support. And talk to someone — a friend, your GP, a carers' group, or a dementia helpline. Carrying this alone is the heaviest way to carry it.",
    ],
    key: "Looking after yourself is part of caring well. Accept help, take breaks, and ask for a carer's assessment.",
  },
];

/* ---- Section 3: Common Questions (searchable FAQ) ---- */
const FAQ = [
  { q: "Why does my mum keep repeating herself?", a: "Her brain isn't storing the answer, so each time feels brand new to her — she isn't doing it on purpose. Answer calmly and briefly, and try a note or whiteboard she can check herself.", tags: ["repeating", "memory", "questions", "mum"] },
  { q: "Why won't they take their medication?", a: "Refusing usually comes from confusion, mistrust, an unpleasant taste, or trouble swallowing — not stubbornness. Stay calm, offer at a relaxed moment with a favourite drink, and ask the pharmacist about easier-to-take forms. Never hide medicine in food without checking first, as some can't be crushed.", tags: ["medication", "medicine", "pills", "refusing", "swallowing"] },
  { q: "Why does dad hide things?", a: "Hiding or hoarding often comes from anxiety and a need to feel in control, or from forgetting where things 'should' go. Keep a spare of important items (keys, glasses), and gently check usual hiding spots rather than confronting him.", tags: ["hiding", "hoarding", "dad", "losing things"] },
  { q: "Why won't they take a shower?", a: "Bathing can feel cold, frightening, undignified, or confusing. Warm the room first, keep it private and unrushed, offer choices, and break it into small steps. A strip-wash on hard days is perfectly okay.", tags: ["shower", "bathing", "washing", "hygiene", "refusing"] },
  { q: "Why do they get more confused and restless in the late afternoon and evening?", a: "This is called sundowning — a rise in confusion, agitation, anxiety or restlessness that comes on as the day fades, often the same time each day. It's different from being awake at night: here the person loses track of whether it's day or night, may insist it's morning, want to 'go to work', or try to leave. Triggers include tiredness at the end of a long day, fading daylight and lengthening shadows, hunger, and an over-stimulating or under-stimulating day. It often gets worse in winter, when darkness falls in the afternoon and there's less natural daylight to anchor the body clock. To ease it: keep mornings bright and active, close curtains and turn lamps on before dusk so the change in light is gentler, keep the late day calm and unrushed, avoid caffeine and big decisions later on, and stick to a steady, reassuring routine. A SAD-style daylight lamp can help through the darker months.", tags: ["evening", "sundowning", "afternoon", "confusion", "agitation", "restless", "day and night", "winter", "dark", "worse"] },
  { q: "Why are they up all night, or sleeping all day?", a: "Dementia can scramble the body clock, so days and nights blur. Help it along with daylight and activity in the morning, a calm dim evening, less caffeine, and a steady bedtime routine. Limit long daytime naps, and ask the GP before trying any sleep medication.", tags: ["sleep", "night", "awake", "insomnia", "body clock", "naps"] },
  { q: "Why does she keep asking to 'go home' when she's already home?", a: "'Home' is often a feeling of safety from the past, not the actual house. Arguing rarely helps. Reassure her she's safe, then gently redirect to something comforting like a warm drink or a favourite song.", tags: ["go home", "home", "wandering", "evening"] },
  { q: "Why doesn't my mum recognise me anymore?", a: "The disease is hiding the name and the face, not the bond — the feeling of safety with you usually remains. Don't quiz her ('Do you know who I am?'); instead introduce yourself warmly by name and relationship: 'Hi Mum, it's Sarah, your daughter.' Connect through warmth, touch, music, and old photos.", tags: ["recognise", "recognising", "family", "who are you", "mum", "name"] },
  { q: "Is it okay to lie to someone with dementia?", a: "Gently going along with their reality — sometimes called a 'therapeutic fib' — is often kinder than repeatedly correcting them, which can cause real distress. Aim for comfort and connection over being factually right.", tags: ["lying", "truth", "correcting", "reality"] },
  { q: "Why does he get angry so suddenly?", a: "Sudden anger is usually communication, not character — it often signals pain, fear, or feeling overwhelmed. Stay calm, give space, remove what's overwhelming, and afterwards look for the trigger.", tags: ["anger", "aggression", "agitation", "dad", "lashing out"] },
  { q: "Should I correct them when they get facts wrong?", a: "Usually not. Correcting can feel like being caught out and may cause upset, and they likely won't retain the correction anyway. Let small mistakes go and focus on how they feel.", tags: ["correcting", "facts", "memory", "arguing"] },
  { q: "Why won't they eat, or why have they lost interest in food?", a: "Appetite can fade for many reasons: not recognising hunger, trouble tasting, difficulty using cutlery, sore teeth, or medication. Try small frequent meals, finger foods, strong familiar flavours, and a calm setting. Tell the GP if weight is dropping.", tags: ["eating", "food", "appetite", "not eating", "weight"] },
  { q: "How do I keep them safe from wandering?", a: "Find the trigger (boredom, needing the toilet, looking for someone), keep them gently occupied, make exits less obvious, and consider door alarms or a GPS tracker. Keep a recent photo ready just in case.", tags: ["wandering", "safety", "getting lost", "leaving"] },
  { q: "Why does she think people are stealing from her?", a: "When things are misplaced or forgotten, the mind fills the gap with an explanation — often that someone took them. It feels completely real to her. Don't argue; help look, keep spares, and reassure rather than defend.", tags: ["stealing", "accusations", "paranoia", "suspicious", "hiding"] },
  { q: "Why do they see things that aren't there?", a: "Hallucinations — seeing people, animals or things that aren't there — happen when the brain misreads what the eyes send, and are especially common in dementia with Lewy bodies. To them it feels real, so don't argue or insist it's not happening. Stay calm, reassure them they're safe, improve lighting to reduce confusing shadows, and tell the GP if it's frequent or frightening.", tags: ["hallucinations", "seeing things", "visions", "lewy", "shadows", "not there"] },
  { q: "How do I talk to someone with dementia?", a: "Keep it simple: short sentences, one idea at a time, a calm face and warm tone. Give them time to answer, avoid quizzes, and don't argue. Often how you say it matters more than the words.", tags: ["communication", "talking", "speaking", "conversation"] },
  { q: "Am I doing enough? I feel guilty all the time.", a: "Carer guilt is almost universal — and it usually means you care deeply, not that you're failing. You cannot pour from an empty cup. Taking breaks and accepting help is part of caring well, not a betrayal of it.", tags: ["guilt", "carer", "burnout", "self care", "overwhelmed", "support"] },
  { q: "Why is my loved one suddenly much more confused than usual?", a: "A sudden change over hours or a day or two is different from dementia's slow decline — it can signal an infection (especially a UTI), dehydration, pain, or a medication issue. Contact the GP or 111 promptly; sudden confusion is worth checking quickly.", tags: ["sudden", "confusion", "delirium", "infection", "UTI", "worse"] },
];

/* ---- Section 4: Caregiver Toolkit ----
   Each tool carries a printable-sheet schema (layout).
   layouts: fields | table | checklist | weekgrid | activities | routine
*/
const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const TOOLKIT = [
  // ---------- About the person ----------
  {
    id: "memory-profile", title: "Memory Profile", icon: "user", group: "About the person",
    desc: "A one-page portrait of who they are — so anyone helping can connect with the person, not just the patient.",
    hand: "this is who I am", intro: "Fill this in together where you can. It helps new carers, nurses and visitors see the whole person.",
    layout: { kind: "fields", lines: 2, fields: [
      "Preferred name", "Family members & who's who", "Favourite foods & drinks", "Favourite music",
      "Former occupation", "Hobbies & interests", "Things that cause distress", "Things that bring comfort",
    ] },
  },
  // ---------- Health & appointments ----------
  {
    id: "medication", title: "Medication tracker", icon: "pill", group: "Health & appointments",
    desc: "A weekly grid for what to take, when, and whether each dose has been given.",
    hand: "week of ____________", intro: "Tick the box once each dose has been given. One row per medicine.",
    layout: { kind: "table", cols: ["Medicine & dose", "Time", ...DAYS], rows: 8, centerFrom: 2,
      after: { label: "Notes / side effects to mention to the doctor:", lines: 3 } },
  },
  {
    id: "appointments", title: "Appointment tracker", icon: "calendar", group: "Health & appointments",
    desc: "Dates, who you're seeing, questions to ask, and what was said — all in one place.",
    hand: "keep it together", intro: "Before the visit, jot the questions you want to ask. After, write down what was said.",
    layout: { kind: "table", cols: ["Date & time", "Who / where", "Reason & questions to ask"], rows: 6, widths: ["22%", "26%", "auto"],
      after: { label: "What the doctor said / next steps:", lines: 4 } },
  },
  {
    id: "hospital-passport", title: "Hospital Passport", icon: "cross", group: "Health & appointments",
    desc: "A one-page summary to hand over at hospital or any appointment, so staff know what matters fast.",
    hand: "please read me first", intro: "Bring this to every hospital visit. It tells staff what they need to know when there isn't time to ask.",
    layout: { kind: "fields", lines: 2, fields: [
      "Medical conditions", "Current medications", "Allergies", "How I communicate & understand best",
      "Mobility & help I need", "Emergency contacts",
    ] },
  },
  {
    id: "symptoms", title: "Symptoms Log", icon: "chart", group: "Health & appointments",
    desc: "Track how things change week to week — invaluable for spotting trends and briefing the doctor.",
    hand: "week of ____________", intro: "Each day, rate from 1 (good) to 5 (difficult), or jot a quick note. Patterns tell the story.",
    layout: { kind: "weekgrid", rows: ["Memory", "Sleep", "Mood", "Appetite", "Mobility", "Confusion"],
      after: { label: "Anything else worth noting this week:", lines: 2 } },
  },
  {
    id: "emergency", title: "Emergency contacts", icon: "phone", group: "Health & appointments",
    desc: "One printed sheet for the fridge — every number a carer or visitor might need in a hurry.",
    hand: "for the fridge", intro: "Fill this in and stick it somewhere visible. Anyone helping out should be able to find it fast.",
    layout: { kind: "fields", lines: 1, fields: [
      "Person's full name", "Date of birth", "Home address", "Main carer + phone", "Second contact + phone",
      "GP surgery + phone", "Allergies", "Key medicines", "Other conditions", "NHS / insurance no.",
    ], footer: "In an emergency call 999. For urgent but non-life-threatening advice call 111." },
  },
  // ---------- Patterns & daily care ----------
  {
    id: "behaviour", title: "Behaviour Tracker", icon: "clipboard", group: "Patterns & daily care",
    desc: "Spot what sets off difficult moments. Once you see the pattern, you can often prevent the next one.",
    hand: "what's behind it?", intro: "Note what happened just before, during and after. Over a week or two, triggers usually reveal themselves.",
    layout: { kind: "table", cols: ["Date", "Time", "What happened", "Trigger (before)", "What you did", "Outcome"], rows: 8,
      widths: ["12%", "10%", "26%", "20%", "18%", "auto"] },
  },
  {
    id: "care-notes", title: "Daily Care Notes", icon: "notes", group: "Patterns & daily care",
    desc: "A shared handover sheet when several family members or carers are involved — nothing gets missed.",
    hand: "today, ____________", intro: "One sheet per day. Whoever's on shift fills it in, so the next person picks up exactly where things stand.",
    layout: { kind: "fields", lines: 2, fields: [
      "Meals & drinks taken", "Medication given (what & when)", "Mood & how the day felt",
      "Activities & moments that went well", "Concerns to pass on",
    ] },
  },
  {
    id: "routine", title: "Daily routine planner", icon: "sun", group: "Patterns & daily care",
    desc: "A calm, predictable day mapped out, morning to night — steadiness eases confusion.",
    hand: "calm & predictable", intro: "A steady rhythm eases confusion. Sketch a gentle day — keep it realistic and flexible.",
    layout: { kind: "routine", rows: ["Waking", "Breakfast", "Morning", "Lunch", "Afternoon", "Dinner", "Evening", "Bedtime"] },
  },
  {
    id: "activities", title: "Activity Planner", icon: "leaf", group: "Patterns & daily care",
    desc: "Gentle activity ideas to plan around what they can still enjoy — purpose and pleasure matter.",
    hand: "small joys", intro: "Meaningful activity lifts mood and fills the day. Note ideas to try and what worked, matched to their ability.",
    layout: { kind: "activities", items: [
      { name: "Music", hint: "favourite songs, singing, old radio shows" },
      { name: "Gardening", hint: "potting, watering, time outdoors" },
      { name: "Reminiscence", hint: "photos, mementoes, telling old stories" },
      { name: "Walking", hint: "a familiar loop, fresh air, gentle pace" },
      { name: "Puzzles", hint: "simple jigsaws, sorting, word games" },
      { name: "Arts & crafts", hint: "painting, folding, hands-on making" },
    ] },
  },
  // ---------- Safety ----------
  {
    id: "wandering", title: "Wandering Safety Plan", icon: "walk", group: "Safety",
    desc: "Prepare now, so that if they ever go missing you can act calmly and fast.",
    hand: "just in case", intro: "Complete this before you need it. If they go missing and you can't find them quickly, call 999.",
    layout: { kind: "fields", lines: 2, photo: true, fields: [
      "Usual routes & places they head for", "Important contacts (neighbours, police)",
      "Medical information & medications", "Clothing / ID they usually carry",
      "What to do if they go missing — step by step",
    ] },
  },
  {
    id: "hospital-bag", title: "Hospital Bag Checklist", icon: "bag", group: "Safety",
    desc: "A grab-bag checklist by the door, ready for any unplanned hospital trip.",
    hand: "grab & go", intro: "Tick each item as it goes in the bag. Keep it packed and ready near the front door.",
    layout: { kind: "checklist", items: [
      "Up-to-date medication list", "Photo ID", "NHS number & details", "Hospital Passport (from this toolkit)",
      "Change of clothes", "Glasses", "Hearing aids + spare batteries", "Phone & charger",
      "Toiletries", "A comforting item (photo, blanket)", "Snacks & water", "List of emergency contacts",
    ], cols: 2 },
  },
  // ---------- Looking after you ----------
  {
    id: "self-care", title: "Caregiver Self-Care Check-In", icon: "heart", group: "Looking after you",
    desc: "You matter too. A gentle weekly check on how you're really doing — because carers so often forget.",
    hand: "how are YOU?", intro: "Each day, give yourself an honest rating from 1 to 5. If a row keeps scoring low, that's a sign to ask for help.",
    layout: { kind: "weekgrid", rows: ["Sleep", "Stress level", "Exercise / movement", "Breaks taken", "Mood"],
      after: { label: "One thing I'll do for myself this week:", lines: 2 } },
  },
  // ---------- Planning ahead ----------
  {
    id: "wishes", title: "End-of-Life Wishes Planner", icon: "scroll", group: "Planning ahead",
    desc: "A sensitive but precious record of what matters most — best completed early, together, with no pressure.",
    hand: "with love & care", intro: "There's no rush, and no right answers. Capturing wishes early means decisions later can honour the person, not guess.",
    layout: { kind: "fields", lines: 2, fields: [
      "Important contacts (family, solicitor, faith)", "Care & comfort preferences",
      "Where important documents are kept", "Personal wishes & things that matter to me",
    ], footer: "A dementia support line or your GP can help you start these conversations gently." },
  },
];

const TOOLKIT_GROUPS = [
  "About the person", "Health & appointments", "Patterns & daily care", "Safety", "Looking after you", "Planning ahead",
];

/* ---- Types of dementia (overview box on Understanding page) ---- */
const TYPES = [
  { name: "Alzheimer's disease", note: "The most common type by far. Proteins build up and slowly damage memory first, then other thinking skills.", common: true, lead: true, stat: "of all dementia cases" },
  { name: "Vascular dementia", note: "Caused by reduced blood flow to the brain, often after small strokes. Can arrive in noticeable steps.", common: true },
  { name: "Dementia with Lewy bodies", note: "Tiny protein deposits affect movement, sleep and alertness. Seeing things that aren't there is common.", common: true },
  { name: "Frontotemporal dementia", note: "Affects the front of the brain first, so changes in personality, behaviour or language often come before memory loss.", common: true },
  { name: "Mixed dementia", note: "More than one type at the same time — most often Alzheimer's together with vascular dementia.", common: false },
  { name: "Young-onset dementia", note: "Any type of dementia that begins before the age of 65. Less common, but it does happen.", common: false },
];

/* ---- Section 5: Library — a browsable shelf of trusted places ----
   UK-focused, independent organisations & authors. No phone numbers
   (they change) — just names, a plain note, and a link to their own site.
   Add your own finds here as you go: keep them legit and well-established.
   Each item: { group, name, note, url?, host?, meta? }  (no url = book/reading) */
const LIBRARY_GROUPS = [
  { id: "official",  label: "Official health information", icon: "cross",     blurb: "Government and clinical sources — the ground truth for what dementia is and how the NHS can help." },
  { id: "support",   label: "Support lines & charities",   icon: "phone",     blurb: "Organisations you can call, email or chat with when you need a real person." },
  { id: "carers",    label: "Carer support",               icon: "heart",     blurb: "Help for the person doing the caring — because you matter too." },
  { id: "money",     label: "Money & legal",               icon: "scroll",    blurb: "Benefits, power of attorney and planning ahead, explained by people you can trust." },
  { id: "research",  label: "Research & new science",      icon: "flask",     blurb: "Where the latest thinking, trials and discoveries are shared. A space to grow as the field moves." },
  { id: "books",     label: "Books to read",               icon: "book",      blurb: "Memoirs and guides — from lived experience to practical day-to-day help." },
  { id: "voices",    label: "Voices & awareness",          icon: "megaphone", blurb: "Educators and advocates worth following. Independent voices — have a look and judge for yourself." },
];

const LIBRARY = [
  // Official health information
  { group: "official", name: "NHS — Dementia guide", host: "nhs.uk", url: "https://www.nhs.uk/conditions/dementia/", note: "The NHS's plain-English guide to symptoms, diagnosis, treatment and the care available." },
  { group: "official", name: "NICE — Dementia guideline", host: "nice.org.uk", url: "https://www.nice.org.uk/guidance/ng97", note: "The clinical standard for how dementia should be assessed and supported in the UK." },
  { group: "official", name: "SCIE — Dementia resources", host: "scie.org.uk", url: "https://www.scie.org.uk/dementia/", note: "The Social Care Institute for Excellence — practical, evidence-based care guidance." },
  // Support lines & charities
  { group: "support", name: "Alzheimer's Society", host: "alzheimers.org.uk", url: "https://www.alzheimers.org.uk", note: "The UK's biggest dementia charity — a support line, local services and a vast information library." },
  { group: "support", name: "Dementia UK", host: "dementiauk.org", url: "https://www.dementiauk.org", note: "Home of Admiral Nurses — specialist dementia nurses you can speak to for one-to-one advice." },
  { group: "support", name: "Age UK", host: "ageuk.org.uk", url: "https://www.ageuk.org.uk", note: "Wide-ranging support for older people and families, with local branches across the country." },
  { group: "support", name: "Alzheimer Scotland", host: "alzscot.org", url: "https://www.alzscot.org", note: "Dedicated dementia support, information and services across Scotland." },
  // Carer support
  { group: "carers", name: "Carers UK", host: "carersuk.org", url: "https://www.carersuk.org", note: "Advice on your rights, benefits and wellbeing as an unpaid carer." },
  { group: "carers", name: "Carers Trust", host: "carers.org", url: "https://carers.org", note: "Practical support, breaks and a network of local carer services." },
  { group: "carers", name: "Tide — Together in Dementia Everyday", host: "tide.uk.net", url: "https://www.tide.uk.net", note: "A UK-wide community and voice specifically for carers of people with dementia." },
  // Money & legal
  { group: "money", name: "GOV.UK — Lasting Power of Attorney", host: "gov.uk", url: "https://www.gov.uk/power-of-attorney", note: "How to set up the legal authority to make decisions on someone's behalf." },
  { group: "money", name: "GOV.UK — Attendance Allowance", host: "gov.uk", url: "https://www.gov.uk/attendance-allowance", note: "A benefit that helps with extra care costs for people over State Pension age." },
  { group: "money", name: "Citizens Advice", host: "citizensadvice.org.uk", url: "https://www.citizensadvice.org.uk", note: "Free, confidential help with money, benefits and legal questions." },
  // Research & new science
  { group: "research", name: "Alzheimer's Research UK", host: "alzheimersresearchuk.org", url: "https://www.alzheimersresearchuk.org", note: "The UK's leading dementia research charity — accessible news on discoveries and trials." },
  { group: "research", name: "UK Dementia Research Institute", host: "ukdri.ac.uk", url: "https://ukdri.ac.uk", note: "The country's flagship research institute. Read what scientists are uncovering right now." },
  { group: "research", name: "Join Dementia Research", host: "nihr.ac.uk", url: "https://www.joindementiaresearch.nihr.ac.uk", note: "Sign up to take part in studies — open to people with dementia, carers and healthy volunteers." },
  { group: "research", name: "Dementias Platform UK", host: "dementiasplatform.uk", url: "https://www.dementiasplatform.uk", note: "A research platform speeding up early detection and prevention work." },
  // Books to read
  { group: "books", name: "Somebody I Used to Know", meta: "Memoir · Wendy Mitchell", note: "A luminous first-hand account of living with young-onset dementia." },
  { group: "books", name: "The 36-Hour Day", meta: "Guide · Mace & Rabins", note: "The classic, comprehensive day-to-day handbook for families and carers." },
  { group: "books", name: "Dementia: The One-Stop Guide", meta: "Guide · June Andrews", note: "Clear, no-nonsense practical advice from a leading UK dementia expert." },
  { group: "books", name: "What the Hell Happened to My Brain?", meta: "Memoir · Kate Swaffer", note: "Living with dementia, written by a global advocate diagnosed in her forties." },
  { group: "books", name: "Still Alice", meta: "Novel · Lisa Genova", note: "A widely-loved novel that helps families feel the experience from the inside." },
  // Voices & awareness
  { group: "voices", name: "Teepa Snow — Positive Approach to Care", host: "teepasnow.com", url: "https://teepasnow.com", meta: "Care educator", note: "A hugely respected dementia-care trainer whose videos make hands-on techniques click." },
  { group: "voices", name: "Dementia Friends", host: "dementiafriends.org.uk", url: "https://www.dementiafriends.org.uk", meta: "Awareness", note: "A national movement turning understanding into small everyday actions. Anyone can join." },
  { group: "voices", name: "DEEP — Dementia Voices", host: "dementiavoices.org.uk", url: "https://www.dementiavoices.org.uk", meta: "Lived experience", note: "The UK network of groups led by people living with dementia, in their own words." },
];

/* ---- Trust signals: when content was last checked, and what it's grounded in ---- */
const REVIEWED = "June 2026";
const SOURCES = "Written in plain language and grounded in guidance from the NHS, NICE, Alzheimer's Society and Dementia UK.";

window.BLB = { BRAIN_REGIONS, UNDERSTANDING, CAREGIVER, FAQ, TOOLKIT, TOOLKIT_GROUPS, TYPES, LIBRARY, LIBRARY_GROUPS, REVIEWED, SOURCES };
