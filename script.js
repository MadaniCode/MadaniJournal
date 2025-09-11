// --- Custom renderer for marked ---
// Adds support for ![audio](file.mp3) and ![video](file.mp4)
const renderer = new marked.Renderer();

renderer.image = function (href, title, text) {
  // Newer versions of marked sometimes pass an object instead of strings
  if (typeof href === "object" && href !== null) {
    const token = href;
    href = token.href;
    title = token.title;
    text = token.text;
  }

  if (text === "audio") {
    return `<audio controls src="${href}" style="width:100%;"></audio>`;
  }
  if (text === "video") {
    return `<video controls src="${href}" style="max-width:100%; height:auto; display:block; margin:10px 0;"></video>`;
  }
  return `<img src="${href}" alt="${text || ""}" style="max-width:100%; height:auto; display:block; margin:10px 0;">`;
};

marked.setOptions({ renderer });

// --- Entries stored directly in JS (Markdown format) ---
const entries = [
       {
    date: "Thu 11th September",
    content: [
      "do less, better, faster, whilst focused.",
      "today i started [Folded. ](https://www.instagram.com/foldedissue/)",
      "![Notebook1](Images/Notebookspread.png)",
    ]
   },
     {
    date: "Wed 10th September",
    content: [
      "![things](Images/howimage.png)",
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
      "I was telling this story to a friend. He asked me why I sounded so underwhelmed. It didn’t do it for me.",
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
  },

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
        // Closing entry
        contentDiv.classList.remove("open");
        dateDiv.classList.remove("active");

        // Pause all media inside when collapsed
        contentDiv.querySelectorAll("audio, video").forEach(media => {
          media.pause();
        });
      } else {
        // Opening entry
        contentDiv.classList.add("open");
        dateDiv.classList.add("active");
      }
    });
  });
}

renderEntries();
