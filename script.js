

// --- Custom renderer for marked ---
const renderer = new marked.Renderer();

// Instead of rendering <img>/<audio>/<video> immediately, we insert placeholders
renderer.image = function (href, title, text) {
  if (typeof href === "object" && href !== null) {
    const token = href;
    href = token.href;
    title = token.title;
    text = token.text;
  }

  if (text === "audio") return `<div class="media-placeholder" data-type="audio" data-src="${href}"></div>`;
  if (text === "video") return `<div class="media-placeholder" data-type="video" data-src="${href}"></div>`;
  return `<div class="media-placeholder" data-type="image" data-src="${href}" data-alt="${text || ""}"></div>`;
};

marked.setOptions({ renderer });

// --- Blog entries data --- lol  
const entries = [
                {
                date: "Wed 26th November",
                content: [
                "<iframe src='Images/KeepBookPitch.pdf' width='100%' height='100%' style='border:none; margin:10px 0;'></iframe>",
                "<a href='Images/KeepBookPitch.pdf' target='_blank'>Download PDF</a>",
                "Made at 6am this morning.",
              ]
              },
              {
              date: "Mon 24th November",
              content: [
              "![baxters baristas pisser](Images/pisser.webp)",
              ]
              },
            {
              date: "Sun 23rd November",
              content: [
              "What does it mean to be Keep coded? This is really Keep’s first opportunity to establish what imagery and direction we want people to associate with Keep.",
              "Intentionality is something I come back to again and again. I love subtlety, it’s an art.",
              '["Cream" designed by Julia Hasting](https://www.juliahasting.com/Cream)',
              "This example of the Phaidon-published book titled *Cream*, which is an art biannual, comes in a vacuum-sealed package giving it a stiff feel. But once you take it off, and it’s exposed to the air, it becomes unwieldy and flops over like a phone book. The concept of aging and being in the now is so clearly represented. Like taking the plastic off store-bought steak or the seal off a glass bottle—it will simply never be the same. Once the seal is broken, it changes form forever. It’s temporary yet fresh. You can’t let it sit around because it’s right now.",
              "Can a book be fleeting? Yes.",
              "This is the level of intention and consideration for form and content we need to have when approaching  any physical media. The standard was set decades ago, it's our turn to execute.",
              "![baxters baristas pisser](Images/baxterscreenie.webp)",

              ]
              },
            {
              date: "Sat 22nd November",
              content: [
              "wish i had more to say.",
              "![frederic blinking](Images/freddoblink.gif)",
              ]
              },
              {
              date: "Thu 20th November",
              content: [
                "I’m seeing a pattern/recurring theme of people distilling media into an alternative form. Like this [ID Magazine](https://i-d.co/) [“Confessional Zine”](https://substack.i-d.co/s/confessional-zine) which I only got because of [Brenda Hashtag](https://www.instagram.com/brendahashtag/?hl=en) tbh but it’s a compilation of all these different Substack writers brought into a magazine paper print. Obviously with this very unorthodox design language, not the kind of thing you expect from paper print. But it’s interesting to bring something that’s innately chronically online to a physical medium like this.",
                "From a content perspective it’s so interesting. The layers and layers of irony, the niche references that could only be understood by that audience mimicking Substack’s exclusive/club feel… will probably do a study very soon. Swamped atm.",
                "All of this is really just an excuse to have people fall deeper into the world building through a tertiary point of interaction. It’s an event in people’s lives.",
                "![confessional zine fam a lam](Images/myyearofrest.webp)",
                "Why is it that when good things happen to me, I feel a hint of anxiety? I’m sure of my ability to deliver, I’m not sure what else it could be."
              ]
            },
            {
              date: "Tue 18th November",
              content: [
                "Yeah, today was crazy. 24 hours of irony.",
                "Great artists aren’t needed. The best artists don’t get commissions unless it’s to directly create culture by bridging gaps. The real curators want to own the mind itself. It’s no longer about time or effort. This value isn’t tangible."
              ]
            },
              {
                date: "Mon 17th November",
                content: [
                  "Making real.",
                  "To avert expectations is to risk abandonment. How often do we consider the consequence more than the life that will flourish from our decisions? Are we conditioned to gravitate to negativity, or is everyone so jaded by reality that there is an equilibrium in how we collectively feel about the decisions we make? No one is disappointed anymore?",
                  "A thread I see in all the people I admire is taking it a step further than everyone else. Making real is part of this.",
                  "Dan saw TikTok girls complaining about the lack of dinner parties and dining experiences within friend groups. He took action and made [Comunal](https://www.instagram.com/comunal/). Human experience woven through every part of it because that's the root of the issue he is attempting to solve.",
                  "Another example is [Ye](https://www.instagram.com/ye/) making the music he wanted in the mainstream go mainstream by making it himself at an excellent standard.",
                  "[Salehe Bembury](https://www.instagram.com/salehebembury/) saw that [Versace](https://www.versace.com/) was missing out on the sneaker market whilst brands like Balenciaga and Louis Vuitton were capitalising on it. He took it that step further by sending his pitch to Dean Quinn, who was the design director at Versace. He left the company after four years with the title of “Vice President of Sneaker Design”. There's more examples obviously, but we need to think like the LinkedIn nerds basically. The guys scrounging together connections and finding hiring managers to better their chances, it's that energy we need in the design space and I'm going to start with [myself](https://www.youtube.com/watch?v=PivWY9wn5ps).",
                  "When the world isn't giving you the taste and culture you want, you need to want to move.",
                  "I've been super busy lately, writing an entry has so much friction some nights. Was watching this [video about blogging](https://www.youtube.com/watch?v=luHCRDrunYE) and it kinda opened my eyes to what this act means to people. It's kinda spiritual for some. Proof your mundane and quiet moments matter. The bad meal you ate, the days you do nothing at all, the date that didn't text you back, the pet fish that you forgot to feed one Wednesday... these moments are worth writing about for the simple reason that they happened.",
                  "For me, I really want to document my design thinking. I haven't the best memory and this is my way of keeping track of my identity as a designer.",
                  "So help me God, I'm young.",
                  "![Old Overcraw graphic](Images/bedsideselfie.webp)",
                  "I pose everything like advice, but im talking to my self."
                ]
              },
              {
              date: "Fri 14th November",
              content: [
                "At work.",
                "![flicks of me at work. pink button up and grey vneck jumper.](Images/bathroomflicktragic.webp)"
                ]
              },
              {
              date: "Thu 13th November",
              content: [
                "Truth is I should treat reels like a thing that compliments whatever I’m doing at the time.",
                "I shouldn’t stop everything else to make content, and making the content shouldn’t stop me from making new work. I’m already doing it.",
                "![Old Overcraw graphic](Images/IMG_7539.webp)",
                "It’s not often I look back and like something I made. This is one of those times, and it was a complete accident."]
            },
              {
              date: "Tue 11th November",
              content: [
                "My uncertainty isn’t rooted in a lack of faith but a lack of alignment with my vision.",
                "The changes I make will hopefully align me better with my vision, but I’m still sat in the uncomfortable and unfamiliar of it all.",
                "I meet so many degenerates. How many times have I met “creatives” that are just drug addicts in disguise. There’s no one here I want to meet and I know that’s the wrong mindset.",
                "Whilst it’s true that the only person that can help me become more than what I am is myself, the people who will help along the way are still strangers I’ve yet to meet.",
                "I need to listen to my own advice some more, just whilst I look for a mentor. It’s one of those things that you can’t want. It’s like love, you can’t *want* love. There’s no reference point. It’s never relatable and never in the same conditions or for the same reasons."
              ]
            },
              {
              date: "Sun 9th November",
              content: [
                "How can I document?",
                "I spent alot of today collecting work I've already done as I'm slowly but surely compiling my portfolio. It shouldn't have been so difficult to find the files and physicals, I need to document better.",
                "![Portfolio folder](Images/portfoliofolder.webp)",
                "I have ideas for website artworks, but they need multiple people to execute. How can I execute the bigger ideas on a smaller scale?",
                "Also, kinda unrelated, but I really need to control the media I consume. I can feel it degrading my mental and ultimately my work.",
                "![old spreads](Images/spreads.gif)",
                "ps. thank you [mokk](https://mokk.co/) and dan wasn't lying."
              ]
            },
              {
              date: "Sat 8th November",
              content: [
                "Secrets?",
                "<div class='secret-box'><input type='text' id='secretInput' placeholder='Enter your secret'><button onclick='revealSecret()'>Submit</button></div>",
                "![Let Go Of How!](Images/thedark.webp)"
              ]
            },
            {
              date: "Fri 7th November",
              content: [
                "How important is a mentor and how to find one? A conversation I’ve visited many times now.",
                "Collecting data concerning dropping out. This is consuming my mental entirely. Talking to those more successful than me, doing what I want to be doing in some way. Every anecdote is one step closer to an informed decision but you can only get so close to the ledge. At some point you have to jump regardless of the remaining uncertainty you cannot cure.",
                "It's what I make it.",
                "![mentor conversation instagram text](Images/mentor.webp)"              ]
            },
              {
              date: "Wed 5th November",
              content: [
                "London today. I’m getting close to making my decision about dropping out. I’m not so much torn anymore, more so bracing myself to rip off the bandaid.",
                "Blaze Smith [Podcast](https://open.spotify.com/episode/5VjzkEWMa2XyNeMTZ8PFBu?si=23c3b9219acb4c6b) Notes.",
                "The process is everything. Taking accountability at all times allows you to analyse and be less judgmental and emotional. Honesty and compromise are the way to manage a client relationship. Shovel is trying to get his website featured by his favourite website curators (wholesome). Don’t think, just go. Otherwise you end up talking yourself out of the thing. (Drop out foreshadowing.) Intentionality sits at the heart of web experiences and great design. Who you’re around is a huge investment, and travel is the only way to actually reset.",
                "![londontrain](Images/IMG_7299.webp)",
                "Got featured on the [lavboyslush](https://www.instagram.com/lavboyslush/) [search.](https://www.lavenderslushee.com/hub/search.html)",
                "Portfolio site design is going slowly, but it's coming together. Trying to nail a design system that's both easy to use, presents the work immediately and elegantly, and also is interesting. Something to keep you on the site even if it's just 10 seconds."
              ]
            },
              {
            date: "Sat 1st November",
            content: [
              "![loooppray](Images/letspraygif.gif)",
              "[*mobile*](Images/letsprayy.jpeg) and [*desktop*](Images/letspraydesktop.png)",
              "Thank you [Ona](https://www.instagram.com/saintona2037/) <3",
            ]
          },
           {
            date: "Fri 31st October",
            content: [
              "Now that im concious of things.",
              "Everything is about being concious.",
              "![flick](Images/Howtopretend.png)",
              "Some websites ive been looking at:",
              "[[1](https://www.exitstage.dk/) [2](https://www.p-o.space/) [3](https://noko.st/) [4](https://www.camilleschneider.ch/de) [5](https://bureau.cool/) [6](https://bear-rabe.com/) [7](https://ecologies.online/?utm_source=substack&utm_medium=email#about) [8](https://braden.lol/) [9](https://www.wherewithalgrants.org/) [10](https://www.kdrama.plus/) [11](https://www.grasshopper.co.jp/en/) [12](https://makingremaking.com/) [13](https://www.edoardolunardi.dev/) [14](https://yaleunion.org/) [15](https://aldonchen.com/) [16](https://paul-daunais.info/)]"
            ]
          },
            {
            date: "Wed 29th October",
            content: [
              "Good Morning.",
              "![flicks](Images/madaniglitch1.gif)",
              "The idea that someone else can control your thoughts. Feeling others are to blame for most of your thoughts. Trouble remembering things, feeling easily annoyed and irritated.",
              "Feeling afraid in open spaces or in public. Thoughts of ending your life.",
              "Feeling disinterested in things. Feeling fearful. Are your feelings easily hurt? Feeling like pople are unfriendly or, do you feel like people dislike you?",
              "I feel like that.",
              "<audio controls><source src='Audio/ifeellikethat.mp3' type='audio/mpeg'></audio>"
            ]
          },
          {
            date: "Mon 27th October",
            content: [
              "![flicks](Images/updatesswaggid.gif)"
            ]
          },
          {
            date: "Sun 26th October",
            content: [
              "<div class='poem'>We should all write<br>And ponder<br>And be bored<br>And read lyrics when you can’t tell what the artist is saying<br>And look at things you don’t care about<br>And collect meaningless things<br>And then attach meaning to them<br><br>But I don’t</div>",
              "Kenta's Birthday.",
              "![Kenta Birthday](Images/kentabirthday.png)"
            ]
          },
           {
          date: "Sat 25th October",
          content: [
            "![50 Coworkers.](Images/Coworkers.png)",  
          ]
        },
          {
          date: "Fri 24th October",
          content: [
            "Book.",
            "Chris talked about using advertisers for funding, and talking directly to artists as opposed to looping in managers. A [Keep](https://keepmagazine.online/) event is more feasible than I thought. It has to happen in Edinburgh and I’m not willing to negotiate on that. ",
            "![shot tonight on a walk. shiny metal gates.](Images/shinymetals.png)",  
            "How much of my ideas am I willing to sell, knowing It could be done without selling anything at all."
          ]
        },
          {
          date: "Wed 22nd October",
          content: [
            "[Frederic Interview](https://keepmagazine.online/pages/frederic-exe#) finally out. Reel could’ve been better, the content design is okay, but the scripting definitely needs work.",
            "I feel guilty doing job interviews. It feels like I’m selling out. Trading the time I should be using to create in return for temporary chips. It’s part of the process: things I need to immediately pay for, future learning, and projects I need to fund -- all things that could do with a slightly better job.",
            "I still can’t shake the feeling that if I cut out all the noise and just focused, I could do those things anyway. But money is needed, not only as an indicator of power, but simply to be heard.",
            "That’s why I want it. That’s why I want anything.",
            "I think it’s delusional to think otherwise, but as always, I can and will be wrong. I heard Sam Altman makes a list of things he was wrong about.",
            "Everything seems tangible.",
            "![feeling wholesome](Images/feetsie.png)"
          ]
        },
        {
        date: "Sun 19th October",
        content: [
          "General consensus about the gallery is that I should create an MVP, both to prove to myself I can manage the logistical side of things while staying within a tight budget, and to show the people I pitch it to a proof of concept. It’s easier to see yourself in something that already exists.",
          "I have an issue with advice -- it almost never seems personal enough to where it matters. Everything has been said. We need to separate advice from learning and talk about the things we aren’t meant to, *especially when we can’t explain why*.",
          "![plateandsink](Images/platesink.png)"
        ]
      },
      {
        date: "Fri 17th October",
        content: [
          "Reaching out soon.",
          "![madani lapse](Images/lapsegif.gif)"
        ]
      },
      {
      date: "Wed 15th October",
      content: [
        "Every time I sit down to write one of these entries, all I can think about is 2 things:",
        "1. Dropping out",
        "2. How behind I am",
        "Spent the day in Liverpool. Definitely not a design city. I wanted to do a studio visit, so a few weeks ago I contacted almost every design studio I could find. I got a few rejections but most never responded. The more I travel the UK, the more I believe that I will never visit a nicer UK city than Edinburgh. Nothing even comes close so far.",
        "I’m in a nice place where people in my circle will send me Instagram posts just to check out an interesting story or cool content design, so I’m feeling pretty aligned with the people I’m working with.",
        "Current To-do:",
        "- Create a Font",
        "- Create a Specimen for said font",
        "- Finish commission website",
        "- Find artist and funding for exhibition",
        "- Remake portfolio",
        "- [Frederic Saint Parck](https://www.instagram.com/frederic_saint_parck/) Keep Experience",
        "- Instagram videos for the [Frederic](https://www.instagram.com/frederic_saint_parck/) interview",
        "- Create sample layouts for book project",
        "- Photograph samples",
        "- Complete video edit commission",
        "All of these need to be done within a week. Some in 2 days. I’m inspired by the transparency of [Ian](https://www.instagram.com/ian.hatcherwilliams/) from [Gardner NYC](https://www.gardener.nyc/), who I’m hoping to catch on a call sometime soon. Also, the new [*Sex Talk*](https://www.instagram.com/p/DPeT86pEUPg/) series by [Sex Mag](https://www.instagram.com/sexmag/) is captivating for so many reasons. I’ll have to break down the format at some point, but I don’t think there’s much to break down. It’s really the rawness, the feeling of improvisation, and the unexpected answers that keep me watching. That’s only achieved by stripping away the guardrails that stop the interviewer and interviewee from talking truthfully, honestly, and as candidly as possible.",
      ]
    },
    {
    date: "Sun 12th October",
    content: [
      "The most productive use of my time is doing that which I love.",
      "I’m missing the art for the exhibition idea and also the audience, but I don’t think that’s any reason to stop me. Sometimes I sit on ideas waiting for a bigger budget or a better grip on software, but the more time I take, the less value the idea has. I need to act quickly.",
      "Sometimes I meet 28 year old models. They’re specialty baristas and aspiring actors all at the same time. That’s all I have to say about that. I have a distorted view of success. How will this manifest into my life and the objects I make.",
      "Every decision is scary. Sometimes I wonder if it’s worth the thought.",
      "![brutalistnetherland](Images/PHOTO-2025-10-12-13-12-04.jpg)",
      "Shot by [Ona](https://www.instagram.com/saintona2037/). “I KNEW IT. I took these pics and I said Madani is gonna love this.”"
    ]
  },
  {
    date: "Sat 11th October",
    content: [
            "Websites.",
            "Really finding websites to be an art form. I’ve discovered that anything can be an art form multiple times now, but it still surprises me. I want to be able to control every aspect of an experience the feel, sound, mood, feedback from every interaction, the story being told, the way you traverse the experience and with a website and some code, I can do all of this.",
            "I really love museums. You decide how much you want to be immersed into the world being presented to you. You can read the interpretive text, or not. You can walk quickly past a sculpture or sit and admire it. With a website, you can do all of these things too. The spaces we build are just as real.",
            "I will host an art exhibition, send out invites and gift bags with a password to get in. An exhibition where anyone with an invite can visit from wherever they are. It will only be open for a limited time, the gallery can’t be open at all hours, of course.",
            "Ultimate control over narrative. No need for permission and gatekeepers. A new type of gallery with an intimacy that physical galleries can’t offer.",
            "![nice day](Images/niceday.png)",
            "I find myself writing these entries in the last 30 minutes of the day. Goodnight."
            ]
          },
          {
            date: "Fri 10th October",
            content: [
              "I live in the time between these entries.",
              "",
              "![](Images/texturees.png)",
              "<div class='poem'>I want to be less of me<br>I want to be more of me<br>I want all of you, to want some of me</div>"
            ]
          },
            {
            date: "Sun 5th October",
            content: [
              "Metal sheets secured.",
              "Ended up in the Baxters car park yesterday dismantling microwaves after dark, before picking up a friend to get flowers for mum.",
              "Thank you [Dagg](https://www.instagram.com/jonny_dagg/).",
              "Fruitful call with [Ona](https://www.instagram.com/saintona2037/) yesterday. I find myself trying to fit an idea to a label when really I should be working the other way around. I need to start by making a book. Everything will flow from there.",
              "Me and [Kenta](https://www.instagram.com/kentaosborn/) will put the dog tags up for sale eventually these are just some promotional photos I took a while ago. I think I leaned into the military feel too hard.",
              "![dogtag photo 1](Images/tagevenbetter.gif)",
              "I love a printed image. More work for [myfendetta](https://www.instagram.com/myfendetta/)",
              "![friends](Images/friendssss.png)"
            ]
          },
          {
            date: "Fri 3rd October",
            content: [
              "Every day this week felt like a Monday and I don’t mind it.",
              "I’ve been reading articles about graduate roles and the state of the design industry and it’s pretty dire. I saw one on [It’s Nice That](https://www.itsnicethat.com/features/welcome-to-the-entry-level-void-light-and-shade-digital-220925) and also another written by a [RISD](https://www.risd.edu/) professor . My takeaway is that it’s more important than ever to start something for yourself.",
              "An economy where we pay with *exploitation* for access. Not that I’m not open to being exploited for now.",
              "‘Good things take time’ needs to be pegged by inflation because good things can be made faster each day. I can feel those around me getting sick of the acceleration.",
              "![Google Maps](Images/dogss.png)",
              "One of my modules requires me to make a book for [The Carrier Bag Theory of Fiction](https://theanarchistlibrary.org/mirror/u/uk/ursula-k-le-guin-the-carrier-bag-theory-of-fiction.pdf) by [Ursula K. Le Guin](https://www.ursulakleguin.com/). My strongest concept so far is where the book is contained in a folder of sorts. I like the idea of having everything being interchangeable, because it comes with the connotation that no narrative is set in stone and you’re really open to define it yourself.",
              "Anyway, need to go find sheets of metal in the next 2 days. Might go dumpster diving in an industrial development site.",
              "[Ona](https://www.instagram.com/saintona2037/) told me I can print on top of prints. I’m not sure how I haven’t thought of that yet but I think I can make something tasteful. I’m collecting documents. I want everything. Slavery charter papers, divorce documents, a gallery’s proof of sale, just anything.",
              "![Donald Locke](Images/donald.png)",
              "I went to the Donald Locke [RESISTANT FORMS](https://www.ikon-gallery.org/exhibition/donald-locke) exhibition at [Ikon Gallery](https://www.ikon-gallery.org/). Seeing someone’s life efforts, views and beliefs contained in a collection of ceramic sculptures was definitely eye opening to me. Much like Ursula, I find the concept of *containment* intriguing.",
              "Everything is loaded.",
            ]
          },
          {
          date: "Sun 28th September",
          content: [
            "I’m often listening to the same three songs on repeat for days. My memory allows for discovery, and undiscovery, again and again.",
            "Discussing quantity and quality in relation to the shelf life of a project. The people whose work I admire all move on schedules that value getting something right more than getting as much out as quickly as possible.",
            "Doing what you love versus creating what you love. And if you knew you could achieve anything with your work, what would you achieve?",
            "![Washing Machine](Images/washingmachine.png)"
          ]
         },

          {
          date: "Sat 27th September",
          content: [
            "A collective misunderstanding of what it means to respect.",
            "The process of making, whether it be writing or design, is liberated by honesty and ultimately shaped by how the audience will encounter it.",
            "Considerations must be made and connotations must be understood. So much language can be codified from the colour to the form. Many hidden messages can be extracted without actually looking into the content. How can I just ignore that?",
            "Thinking about dropping out after this year and trying my hand at the design industry. I never feel like what I’m doing right now is good enough and that I’m always two weeks of inactivity away from my candle burning out.",
            "Really enjoying [Betsy Johnson’s](https://www.instagram.com/betsyjohnson_/) recent work.",
            "![fehintigif](Images/fehintigif.gif)"
          ]
        },
          {
        date: "Wed 24th September",
        content: [
          "Can you *try* to play?",
          "Two years ago, I read [*Psycho-Cybernetics*](https://en.wikipedia.org/wiki/Psycho-Cybernetics) by Maxwell Maltz, and it only fueled my narcissistic desires. I don't think I do anything for the right reasons. [Kenta](https://www.instagram.com/kentaosborn/) sometimes jokingly says, 'Madani when he finds out people do things for fun,' usually in response to me asking why someone is doing something or if they make money from it.",
          "Maybe that's a tainted worldview for many. The reason I was thinking about this is because I was asking myself if I can enhance certain qualities that define my creative discipline. Like, can I learn to be more curious? Can one *try* to play? Or is that in itself a contradiction?",
          "I'm sick and my eyes hurt. [Goodnight.](https://www.youtube.com/watch?v=Xa6xZsLI5co&list=RDXa6xZsLI5co&start_radio=1)"
        ]
      },
          {
        date: "Mon 22nd September",
        content: [
          "Living in a state of anhedonia.",
          "I said *yes* too many times and it caught up to me today. I think I’m qualified to say *no* now."
        ]
      },
      {
        date: "Sun 21st September",
        content: [
          "I'm not very visual.",
          "When I was younger, reading books was my way of challenging my mind and imagination to create things. This was my first encounter with *making for nothing* in return but self pleasure.",
          "Forming vivid images in my mind, from faces to environments was a muscle I could flex so easily.",
          "Now, I find it harder than ever. *Imaginative blindness.* When I read, that light is so dim. The visions in my mind are hollow and I find little joy in everything at times because of it.",
          "![borderforceimage](Images/borderforce.png)",
          "I love taking pictures of the sink."
        ]
      },
      {
      date: "Thu 18th September",
      content: [
        "What is a *personal brand?*",
        "Make content about something in your niche, show you’re capable by breaking down examples or showing how you would do better than the example you’re highlighting. Proof of expertise comes through having the vocabulary and courage to challenge already designed systems. Provide the service and hint that you have it with a call to action, but if you do it well, people will come searching. Don’t forget to wrap it up in a recognisable format by spending way too much time on content design.",
        "[New Bridge Books](https://www.instagram.com/newbridgebooks?igsh=MW9qcHZ5bjg1cXc0eg%3D%3D), [Village](https://www.instagram.com/villagebooks.co?igsh=eGdidDUyd2M5amt5), and [Digital Archive](https://www.instagram.com/digital_archive?igsh=enhmcXgwZmJ0YWN6).",
        "All of these accounts have physical stores or an online presence. The ones with physical stores use Instagram to curate selections and highlight new additions to the shelves.",
        "The outlier is Digital Archive. Their feed is perfect for inspiration but it stops there, no breakdowns, no learning experience, just visual porn.",
        "[Folded](https://www.instagram.com/foldedissue/) would sit in this same realm. The difference is content structure: 90% reels, plus a weekly post highlighting ‘print porn’.",
        "The reels wouldn’t just showcase, they’d break down why editorial/book design works and how people can apply the lessons themselves.",
        "This attracts two types of paying customers:",
        "1. People or stores who want their books featured. I AM THE MARKETING BUDGET.",
        "2. People looking for editorial design work. Specifically in places I want to be in such as fashion and design mags as well as book design. Clients who want me on their team.",
        "The audience is anyone interested in the intersection of design and print. Same archetype as [buttered official](https://www.instagram.com/buttered_official/?hl=en).",
        "What’s missing is structure, scripting style, and content design. All being developed now.",
        "I could talk about instagram pages all day, it’s so fascinating to me but also on some [Dan Alves](https://www.instagram.com/dalves/?hl=en) shit, I wanna curate and perfect real experiences. Everything from parties and runways shows to museums.",
        "Some of my favourite feeds right now:",
        "[Brenda Hashtag](https://www.instagram.com/brendahashtag/?hl=en), [Lola Dement Myers](https://www.instagram.com/loladementmyers/), and [Forms of Publication](https://www.instagram.com/forms_of_publication/).",
      ]
    },
    {
      date: "Wed 17th September",
      content: [
        "![Flickington](Images/jumpout.png)",
        "Need to be less obsessed with time. Need to be less obsessed with life.",
        "How to find a mentor? [Saint Parck](https://www.instagram.com/frederic_saint_parck) said patience is important, but do you have time to be patient? Conversation made me realise I don't understand the true value of a mentor.",
        "[Blaze](https://www.instagram.com/shovel.studio/) really inspired me last night if I’m being honest. Study needed.",
        "Shot by [Maalia](https://www.instagram.com/lialiamaalia)",
      ]
    },
    {
    date: "Tue 16th September",
    content: [
      "![uni](Images/firstdayatuni.png)"
    ]
  },
  {
    date: "Mon 15th September",
    content: [
      "Labi Siffre talking about how he landed on the name *Nigger* for his debut poetry book.",
      "![audio](Audio/labi1.mp3)",
      "Labi Siffre on being astonished.",
      "![audio](Audio/labi2.mp3)",
      "This is how a great man thinks.",
      "[Credits](https://www.youtube.com/watch?v=xyTE3pVWnTE)",
    ]
  },
  {
    date: "Sun 14th September",
    content: [
      "The lack of formula excites me, and that’s why process can be so fascinating.",
      "Toni spoke to me about the importance of making things physical.",
      "Real people, real spaces, real food and drinks, a rejection of how we consume media. When I first began making reels for Keep, I didn’t like the idea of making video content in general, but now I’ve framed it as an art almost. Through this I found content design, and it’s something I love and enjoy. I see the value in what she said.",
      "She also told me to meet my dreams and reality halfway, and to not be consumed by dreams and delusions.",
      "![Rain in Cov](Images/covrai.png)"
    ]
  },
  {
    date: "Sat 13th September",
    content: [
      "Where do I fit, do I need to fit, or should I make room?",
      "I remember [Sam](https://www.instagram.com/p/DL_jZWsNBw8/) saying, “I’m interested in dealing with what we already have.”",
      "![Carrying](Images/carrying.png)",
      "I will soon make a list of obsessions.",
      "I’m looking to meet more people in London. I need to get out of the city more, and thats where the designers are."
    ]
  },
  {
    date: "Fri 12th September",
    content: [
      "I lost something today. It wasn’t mine to have.",
      "Scrolled the day away at work, there’s a camera in the office pointed right at my desk. The camera has a green light which sometimes turns orange. At first, I thought it could only be caused by two things.",
      "1. Motion sensor sets it off into a different recording mode.",
      "2. Someone is actively watching and accessing the feed.",
      "To test my theory, I waited for the camera to turn green, then walked by it quickly a few times. Nothing happened, so it’s likely the second possibility. Either way, I scrolled the day away.",
      "Incoming \"I got fired today\" entry."
    ]
  },
  {
    date: "Thu 11th September",
    content: [
      "do less, better, faster, whilst focused.",
      "today i started [Folded. ](https://www.instagram.com/foldedissue/)",
      "![Notebook1](Images/Notebookspread.png)"
    ]
  },
  {
    date: "Wed 10th September",
    content: [
      "![things](Images/howimage.png)"
    ]
  },
  {
    date: "Mon 8th September",
    content: [
      "I *should* be doing more.",
      "Screwdriver, flathead, wrench, pliers, bolt cutter. I’m utilitarian at heart, which is ironic because designers are treated like tools. Pick it up, use it, throw it back in its box, and retire it when it’s been worn down so much that it’s no longer functional. Designers don’t bark back really, they sit at the bottom of the food chain, and input starts at the top, just a tool.",
      "No one expects feedback from a designer. I’m not meant to be one then. [Michelangelo](https://en.wikipedia.org/wiki/Michelangelo) said, “I am still learning” at 87, [Slawn](https://www.instagram.com/olaoluslawn/) says he’s not an artist, [Virgil Abloh](https://www.instagram.com/virgilabloh/) put aside perfection for learning. It’s always time to learn.",
      "This picture was taken on the 6th. I was with [Hashim](https://www.instagram.com/tramihsah/) at a coffee shop, they were making a list of albums that they think have influenced [Justin Bieber’s](https://www.instagram.com/lilbieber/) Swag II. I like this idea of curating but also being historic and somewhat objective about it, even though it’s music.",
      "![Shortland List](Images/IMG_4574.jpg)",
      "Might be seeing Bladee in December w/ [Harris](https://www.instagram.com/higheste_____hrz/)."
    ]
  },
  {
    date: "Sun 7th September",
    content: [
      "I met [Gabriel Moses](https://www.instagram.com/gabrielomoses/?hl=en) on the 7th of May 2024.",
      "I asked him if I should move to London. He said no, that it’s too expensive and I can do everything from Instagram.",
      "It’s been a year and four months since that conversation. He was right but also wrong. I still feel like objectively moving to London will solve many of my problems, but it will create more difficult ones in return.",
      "A friend said I should apply for internships which may be slightly aspirational, like [Mowa](https://www.instagram.com/mowalola/?hl=en) and [YZY](https://www.instagram.com/yzy/?hl=en).",
      "I’ve already curated a list of 50 ‘coworkers’, as I call them, people I want to work with in due time. Why not take the chance and try to contact them all now?",
      "When I was writing the [Frederic Saint Parck](https://www.instagram.com/frederic_saint_parck/?hl=en) interview, I included a question along the lines of: \"I’m sometimes hesitant to reach out to people because I don’t think it’s the right time just yet. Like maybe if I work on my portfolio a little more I’ll be more confident reaching out. Is this a false notion? Is there a right time? And what should you have ready to show before reaching out to the people you admire or want to work with?\" I included that question for this very reason. I’m trying to pick the right time to reach out to people, but really there's nothing to lose and a lot to gain."
    ]
  },
  {
    date: "Sat 6th September",
    content: [
      "![Ona Letter](Images/OnaScan.jpg)",
      "Thank you [Ona](https://www.instagram.com/saintona2037/)."
    ]
  },
  {
    date: "Fri 5th September",
    content: [
      "People want to be entertained, not impressed.",
      "By this, I mean that the average person on any social platform is looking to be entertained rather than be impressed. Something being impressive can definitely participate in making something entertaining but it’s only 1 ingredient. Is flexing still a thing?",
      "Prior to the [Slawn](https://www.instagram.com/olaoluslawn/) interview releasing, the best case scenario for both me and [Kenta](https://www.instagram.com/kentaosborn/) was that it would get his attention. We thought it might take a big marketing effort but within a few hours, his manager contacted us and during our brief conversation he mentioned that Slawn had liked the video and shared it with him. This was better than our best case scenario and it took 10% of the effort we thought it would.",
      "I was telling this story to a friend. He asked me why I sounded so underwhelmed. It didn’t do it for me."
    ]
  },
  {
    date: "Thu 4th September",
    content: [
      "I have a reason to write, and I need an excuse to take action so I have created this blog/website/journal thing. Im honestly unsure of my intentions with it, I just want to write.",
      "I would love to say something like “I want to be able to read this in the future and reflect on how I have changed” but I don’t value that so much. But I can see why people do.",
      "Photos hold progression of your physical form, you can gauge some idea of what kind of person you were but to be able to read your thoughts in writing is far more vivid.",
      "I really just want to write and be discovered. Its selfish really."
    ]
  }
];

// --- Render entries ---
function renderEntries() {
  
  const blogContainer = document.getElementById("blog");

  entries.forEach(entry => {
    const entryDiv = document.createElement("div");
    entryDiv.classList.add("entry");

    const dateDiv = document.createElement("div");
    dateDiv.classList.add("date");
    dateDiv.textContent = entry.date;

    const contentDiv = document.createElement("div");
    contentDiv.classList.add("content");

    entry.content.forEach(block => {
      const div = document.createElement("div");
      div.innerHTML = marked.parse(block);
      contentDiv.appendChild(div);
    });

    entryDiv.appendChild(dateDiv);
    entryDiv.appendChild(contentDiv);
    blogContainer.appendChild(entryDiv);

    // Toggle open/close
    dateDiv.addEventListener("click", () => {
      const isOpen = contentDiv.classList.contains("open");
      if (isOpen) {
        contentDiv.classList.remove("open");
        dateDiv.classList.remove("active");
        contentDiv.querySelectorAll("audio, video").forEach(media => media.pause());
      } else {
        contentDiv.classList.add("open");
        dateDiv.classList.add("active");
        contentDiv.querySelectorAll(".media-placeholder").forEach(ph => {
          const type = ph.dataset.type;
          const src = ph.dataset.src;

          if (type === "audio") {
            const audio = document.createElement("audio");
            audio.controls = true;
            audio.src = src;
            audio.style.width = "100%";
            audio.style.margin = "10px 0";
            ph.replaceWith(audio);
          }

          if (type === "video") {
            const video = document.createElement("video");
            video.controls = true;
            video.src = src;
            video.style.maxWidth = "100%";
            video.style.height = "auto";
            video.style.display = "block";
            video.style.margin = "10px 0";
            ph.replaceWith(video);
          }

          if (type === "image") {
            const img = new Image();
            img.src = src;
            img.alt = ph.dataset.alt || "";
            img.loading = "lazy";
            img.decoding = "async";

            const wrapper = document.createElement("div");
            wrapper.style.display = "block";
            wrapper.style.maxWidth = "100%";
            wrapper.style.margin = "10px 0";
            wrapper.style.position = "relative";

            img.onload = () => {
              wrapper.style.aspectRatio = `${img.naturalWidth} / ${img.naturalHeight}`;
              img.style.width = "100%";
              img.style.height = "100%";
              img.style.objectFit = "contain";
            };

            wrapper.appendChild(img);
            ph.replaceWith(wrapper);
          }
        });
      }
    });
  });
}

renderEntries();

function revealSecret() {
  const box = event.target.closest('.secret-box');
  if (box) {
    box.innerHTML = "<p>Your secret is safe with me</p>";
  }
}