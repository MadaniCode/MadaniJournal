

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
