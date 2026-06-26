/* ============================================================
   KINGDOM HEARTS LOREBOOK — DATA
   Loaded first; later scripts read these globals.
   ============================================================ */

const FACTIONS = {
  light:      { name: "Guardians of Light", color: "#f0c44e" },
  disney:     { name: "Disney", color: "#4aa6ff" },
  org13:      { name: "Organization XIII", color: "#aab2c4" },
  seekers:    { name: "Seekers of Darkness", color: "#b15cff" },
  villain:    { name: "Darkness", color: "#d04a8a" },
  foreteller: { name: "Age of Fairy Tales", color: "#d9c47a" },
  ally:       { name: "Independent", color: "#8fa0c0" },
};

// entry (game) → tag color
const ENTRY = {
  "Union χ":             "#cdb86a",
  "Birth by Sleep":      "#6ad0b0",
  "Kingdom Hearts":      "#f0c44e",
  "Chain of Memories":   "#d06ab0",
  "358/2 Days":          "#e0a23a",
  "Kingdom Hearts II":   "#5aa6ff",
  "coded":               "#7adf6a",
  "Dream Drop Distance": "#b06aff",
  "Kingdom Hearts III":  "#f07a4a",
  "Quadratum":           "#5ad6ff",
};

/* Character fields: id, name, faction, role, personality, bio, spoilerBio?,
   background? (paragraphs), bgSpoiler?, tidbit, portrait, short?, keys? */
const CHARACTERS = [
  /* ---------- GUARDIANS OF LIGHT ---------- */
  { id:"sora", name:"Sora", keys:["Sora"], faction:"light", role:"Keyblade wielder",
    personality:"Relentlessly cheerful, big-hearted and stubborn, Sora leads with friendship and gut instinct over strategy. His refusal to abandon anyone — friend or stranger — is both his greatest strength and the lever every villain tries to pull.",
    bio:"A boy from Destiny Islands chosen by the Keyblade, who travels countless worlds with Donald and Goofy to seal the darkness and protect his friends.",
    background:[
      "Sora grew up on Destiny Islands dreaming of seeing other worlds with his best friend Riku and their friend Kairi. When darkness swallowed the islands, the Keyblade chose him — though, as he later learns, it was first meant for another.",
      "Across his journeys his heart becomes a kind of crossroads: it shelters the sleeping heart of Ventus, gives rise to the Nobody Roxas, and is tied to Xion, Naminé, and even Kairi, whose heart once hid within his. Sora's defining trait is that his heart connects to others' — which is why saving everyone keeps falling to him.",
      "His warmth makes him underestimated and endlessly targeted, but it is exactly that bond-forging heart that lets him wake the lost, rally the Guardians of Light, and stand as Xehanort's final opponent — even at terrible personal cost."
    ],
    tidbit:"The Destiny trio's names spell out a theme: Sora means 'sky', Riku means 'land', and Kairi derives from 'sea' (kai). In the English dub Sora is voiced by Haley Joel Osment — who also voices his dark mirror, Vanitas.",
    portrait:{ skin:"#f0caa0", hair:"#6e4226", style:"spiky", eyes:"#4aa6ff", clothes:"#20223a" } },

  { id:"riku", name:"Riku", keys:["Riku"], faction:"light", role:"Keyblade Master",
    personality:"Proud, intense and self-critical, Riku matures from a jealous rival into the most disciplined of the heroes. Having walked through darkness himself, he wields it without being ruled by it — and judges himself far harder than he judges anyone else.",
    bio:"Sora's best friend and rival from Destiny Islands, who falls to darkness, claws his way back, and becomes a true Keyblade Master.",
    background:[
      "Riku opened the door to other worlds first — and his envy and impatience let darkness in. Manipulated by Maleficent and then possessed by Ansem, Seeker of Darkness, he spends KH1 as Sora's enemy before turning on his master from within.",
      "His penance is long: he fights his own darkness in Castle Oblivion, takes on the form of Ansem to wield the dark powers safely, and labors in the shadows alongside the King and DiZ to restore Sora.",
      "By Dream Drop Distance he passes the Mark of Mastery where Sora falters — becoming a Keyblade Master and, fittingly, the one who repeatedly dives into others' hearts (Sora's included) to bring them back."
    ],
    bgSpoiler:true,
    tidbit:"Riku spends most of Kingdom Hearts II hidden in the body of Ansem, Seeker of Darkness, to keep his borrowed darkness in check — only regaining his own form near the very end, thanks to Kingdom Hearts being closed.",
    portrait:{ skin:"#f0caa0", hair:"#dadfe2", style:"messy", eyes:"#8fd0d0", clothes:"#2a3340" } },

  { id:"kairi", name:"Kairi", keys:["Kairi"], faction:"light", role:"Princess of Heart · Keyblade wielder",
    personality:"Warm, steady and braver than the 'damsel' role the early games trapped her in. Kairi is the calm anchor the boys orbit — and increasingly a fighter determined not to be only the one waiting to be saved.",
    bio:"Sora and Riku's closest friend, one of the seven Princesses of Heart, who eventually takes up a Keyblade of her own.",
    spoilerBio:"Kairi is originally from Radiant Garden; her heart, lacking darkness, fled into Sora's during the islands' fall, which is part of how Sora first became able to wield the Keyblade for others. Her Nobody is Naminé.",
    tidbit:"Kairi's grandmother tells the in-universe legend of the Keyblade War in KH1 — a 'fairy tale' that turns out to be literal series backstory, foreshadowing the Age of Fairy Tales decades before those games existed.",
    portrait:{ skin:"#f2cda8", hair:"#b5523a", style:"short", eyes:"#6a86c8", clothes:"#b03a5a" } },

  { id:"mickey", name:"King Mickey", short:"Mickey", keys:["Mickey","King Mickey"], faction:"light", role:"King of Disney Castle · Keyblade Master",
    personality:"Earnest, decisive and quietly wise, King Mickey acts while others deliberate. Small, relentless and utterly without ego, he is the moral compass that keeps the heroes pointed toward the light.",
    bio:"The King of Disney Castle and a Keyblade Master who studied under Yen Sid, slipping between worlds to fight the darkness — often arriving exactly when hope runs out.",
    tidbit:"Mickey wields the Kingdom Key D, a 'reverse' Keyblade from the Realm of Darkness, and is one of the only people who can safely travel the dark corridors. His debut as a Keyblade-wielding king reframed the entire Disney mascot as a hardened veteran of a cosmic war.",
    portrait:{ style:"mouse", hair:"#16161c", clothes:"#1a1a26", eyes:"#1c1c1c" } },

  { id:"donald", name:"Donald Duck", short:"Donald", keys:["Donald"], faction:"disney", role:"Court Magician",
    personality:"Hot-tempered, proud and prone to squawking meltdowns, Donald is fiercely loyal underneath the bluster. He'll abandon a strategy the instant a friend is in danger — usually while yelling about it.",
    bio:"The royal court magician of Disney Castle, sent with Goofy to find the Keyblade wielder and keep him in line. The party's mage.",
    tidbit:"Donald's healing magic is famously stingy in battle — a long-running fan joke — but in story he's a powerful sorcerer whose 'Zettaflare' in KH3 is treated as one of the most devastating spells ever cast.",
    portrait:{ style:"duck", clothes:"#2a55a0" } },

  { id:"goofy", name:"Goofy", keys:["Goofy"], faction:"disney", role:"Captain of the Royal Knights",
    personality:"Gentle, goofy and deceptively perceptive, Goofy is the heart of the trio — slow to anger, quick to forgive, and often the one who quietly says the wisest thing in the room. A pacifist who fights only to protect.",
    bio:"Captain of Disney Castle's royal knights, who travels with Donald and Sora. He fights with a shield and refuses to draw a sword.",
    tidbit:"Goofy is the only party member who never wields a sword — only a shield — reflecting his protective, non-aggressive nature. His knack for blurting out the obvious truth repeatedly cuts through the series' tangled drama.",
    portrait:{ style:"dog", skin:"#caa06a", clothes:"#2a6a3a" } },

  { id:"roxas", name:"Roxas", keys:["Roxas"], faction:"light", role:"Sora's Nobody · Key of Destiny",
    personality:"Quiet and earnest, then increasingly anguished, Roxas just wants a normal life and real friends. His arc is a slow, painful discovery that his existence — and even his memories — were never fully his own.",
    bio:"The Nobody born when Sora briefly became a Heartless. Number XIII of Organization XIII, who dual-wields Keyblades and befriends Axel and Xion.",
    spoilerBio:"Roxas exists only because Sora gave up his heart to free Kairi's. He's a 'special' Nobody who can wield the Keyblade, kept by the Organization as a tool. To restore Sora, DiZ dissolves Roxas back into him — but the connections he made were real, and he is ultimately given his own life back in KH3.",
    background:[
      "Roxas spent 358 days in Organization XIII believing he was a person, slowly bonding with Axel and the replica Xion over sea-salt ice cream atop Twilight Town's clock tower.",
      "When he learns he is Sora's Nobody — that the only way for Sora to wake is for Roxas to cease — he rebels, but is ultimately captured by DiZ and placed in a virtual Twilight Town to live out simulated final days before merging back into Sora.",
      "His 'death' isn't death so much as becoming part of Sora again. Years later, with a new replica body, Roxas is restored as his own person — finally getting the ordinary life with friends he always wanted."
    ],
    bgSpoiler:true,
    tidbit:"Every Organization member's name is an anagram of their original name plus an 'X': Roxas = Sora + X, Axel = Lea + X, Xemnas = Ansem + X. The 'X' (read as the Greek 'χ') quietly ties the whole Organization to the ancient Keyblade War.",
    portrait:{ skin:"#f0caa0", hair:"#e8c14a", style:"spiky", eyes:"#4aa6ff", clothes:"#14141c" } },

  { id:"namine", name:"Naminé", keys:["Naminé","Namine"], faction:"light", role:"Kairi's Nobody · Memory witch",
    personality:"Soft-spoken, lonely and burdened by guilt, Naminé does terrible things under orders and spends her existence trying to undo them. Gentle to a fault, she quietly engineers others' salvation from the margins.",
    bio:"A 'special' Nobody born of Kairi, with the unique power to rearrange and dismantle the memories of Sora and those connected to him.",
    spoilerBio:"Organization XIII forces Naminé to rewrite Sora's memories in Castle Oblivion. Wracked with guilt, she defects to help DiZ and Riku put Sora's memories back together — a year-long sleep that costs Roxas and Xion their place in the world. She's later restored alongside them.",
    tidbit:"Naminé isn't a numbered Organization member and her name isn't a standard anagram — she's a one-of-a-kind Nobody. Her crayon drawings on the white walls of Castle Oblivion literally encode the memories she's altering.",
    portrait:{ skin:"#f3d6b6", hair:"#ecdf9a", style:"long", eyes:"#6a86c8", clothes:"#eef2f6" } },

  { id:"xion", name:"Xion", keys:["Xion"], faction:"light", role:"Replica · No. XIV",
    personality:"Searching and selfless, Xion wrestles with whether she has any right to exist at all. Once she understands what she is, she chooses sacrifice over self — the quiet tragedy at the heart of 358/2 Days.",
    bio:"A replica created by the Organization that absorbs Sora's memories, taking the form of a girl. The fourteenth member, and Roxas and Axel's closest friend.",
    spoilerBio:"Xion is a puppet built to copy Roxas/Sora's power; as she grows she destabilizes Sora's recovery. She chooses to be defeated by Roxas and erased so Sora can wake — and everyone forgets her, until she too is restored with a replica body in KH3.",
    tidbit:"Xion's face is never fixed — different characters literally see her as different people (Kairi, Sora, or a black-haired girl) depending on their connection to Sora's memories. The fandom's grief over her erased existence made her revival in KH3 a huge emotional payoff.",
    portrait:{ skin:"#f0caa0", hair:"#1c1c22", style:"short", eyes:"#4aa6ff", clothes:"#14141c" } },

  { id:"lea", name:"Lea / Axel", short:"Lea", keys:["Axel","Lea"], faction:"light", role:"Ex-Organization XIII · Keyblade wielder",
    personality:"Glib, sardonic and allergic to sincerity — until his friends are threatened, at which point the mask drops entirely. Axel learns, painfully, that a Nobody can absolutely have a heart of his own.",
    bio:"Number VIII of Organization XIII, a chakram-wielding pyromaniac whose loyalty to Roxas and Xion turns him against the Organization. As Lea, he gains his own Keyblade and joins the Guardians of Light.",
    spoilerBio:"Axel's whole arc undercuts the Organization's lie that Nobodies can't feel — his grief over Xion and Roxas is unmistakably real. Recompleted as Lea, he trains under Merlin/Yen Sid and earns a Keyblade, fighting for the friends he failed to save.",
    tidbit:"Axel's catchphrase 'Got it memorized?' (Japanese: a play on his own name) made him a breakout fan favorite — so much so that the spin-off 358/2 Days exists largely to expand his friendship with Roxas and Xion.",
    portrait:{ skin:"#f0caa0", hair:"#c43a2a", style:"slick", eyes:"#3a8f5a", clothes:"#14141c", acc:["scar"] } },

  { id:"ventus", name:"Ventus", short:"Ven", keys:["Ventus","Ven"], faction:"light", role:"Keyblade wielder",
    personality:"Bright, innocent and impulsive, Ventus is the open-hearted youngest of the Birth by Sleep trio. His trusting nature makes him easy to manipulate, but his loyalty to Terra and Aqua is absolute.",
    bio:"A young Keyblade wielder trained alongside Terra and Aqua under Master Eraqus, and the original owner of the heart that later shelters within Sora.",
    spoilerBio:"Xehanort extracted the darkness from Ventus to create Vanitas, nearly destroying Ven. His shattered heart was healed by connecting to a newborn Sora — which is why Roxas and Ventus look identical. After the BBS climax, Aqua hides Ven's sleeping body in Castle Oblivion until KH3.",
    tidbit:"Roxas and Ventus are visually identical because Roxas is Sora's Nobody, and Ventus's heart had been sleeping inside Sora's for years. The resemblance is an in-universe clue, not a coincidence.",
    portrait:{ skin:"#f0caa0", hair:"#e8c14a", style:"spiky", eyes:"#4aa6ff", clothes:"#2a3a32" } },

  { id:"aqua", name:"Aqua", keys:["Aqua"], faction:"light", role:"Keyblade Master",
    personality:"Composed, responsible and quietly burdened, Aqua is the first of the trio to attain Mastery — and spends years paying for it with loneliness. Dutiful to the point of self-erasure, she carries everyone else's safety as her own.",
    bio:"A Keyblade Master and the steady center of the Birth by Sleep trio, who gives everything to protect Terra and Ventus.",
    background:[
      "Aqua passes the Mark of Mastery exam alongside a faltering Terra, and is quietly tasked by Eraqus to watch over her friends as Xehanort's schemes pull them apart across the worlds.",
      "At the Keyblade Graveyard she saves Ventus's empty body and, soon after, dives into the Realm of Darkness to save the falling Terra — sacrificing her own way home.",
      "She wanders the Realm of Darkness for over a decade, slowly losing hope, until Sora and the King finally reach her in KH3. Her rescue, and her reunion with Ventus and Terra, is one of the saga's longest-awaited payoffs."
    ],
    bgSpoiler:true,
    tidbit:"Aqua spent roughly ten in-universe years lost in the Realm of Darkness — the playable prologue 'Kingdom Hearts 0.2: A Fragmentary Passage' was made specifically to depict that descent before her KH3 rescue.",
    portrait:{ skin:"#f0caa0", hair:"#4a78c8", style:"short", eyes:"#4a78c8", clothes:"#2a3550" } },

  { id:"terra", name:"Terra", keys:["Terra"], faction:"light", role:"Keyblade wielder",
    personality:"Earnest, strong and insecure, Terra is undone by his fear of his own darkness. His good intentions and need to prove himself make him the perfect mark — a hero who loses himself precisely by trying so hard to be one.",
    bio:"The eldest of the Birth by Sleep trio, a powerful wielder tempted toward darkness in his struggle to become a Keyblade Master.",
    spoilerBio:"Terra fails the Mark of Mastery and, manipulated by Xehanort, is ultimately possessed — his body becomes the vessel 'Terra-Xehanort.' His will survives within his own discarded Lingering Will armor, waiting years for the chance to take his body back.",
    tidbit:"After being possessed, Terra's heart endures as the 'Lingering Will' — his empty armor, animated by sheer determination, that even defeats foes on its own. It's one of the hardest secret bosses in the series.",
    portrait:{ skin:"#e8c096", hair:"#5a4030", style:"messy", eyes:"#4a78c8", clothes:"#3a4a3a" } },

  { id:"yensid", name:"Yen Sid", keys:["Yen Sid"], faction:"light", role:"Retired Keyblade Master · Sorcerer",
    personality:"Grave, patient and economical with words, Yen Sid speaks in measured truths and lets the young heroes make their own mistakes. A retired master who guides from his tower rather than the field.",
    bio:"A powerful sorcerer and former Keyblade Master who taught King Mickey, now the heroes' chief advisor on the war against Xehanort.",
    tidbit:"'Yen Sid' is 'Disney' spelled backwards. His design is lifted directly from the sorcerer in Fantasia's 'The Sorcerer's Apprentice' — the very segment that starred Mickey Mouse.",
    portrait:{ skin:"#e0c0a0", hair:"#b6b6be", style:"elder", eyes:"#4a3a4a", clothes:"#2a2a55", acc:["beard"] } },

  { id:"eraqus", name:"Master Eraqus", short:"Eraqus", keys:["Eraqus"], faction:"light", role:"Keyblade Master",
    personality:"Honorable and rigid, Eraqus believes in the light so absolutely that he can be blind and even ruthless in its defense. A devoted teacher whose inflexibility helps push his own students toward tragedy.",
    bio:"The Keyblade Master who trained Terra, Aqua, and Ventus, and an old friend turned philosophical opponent of Xehanort.",
    spoilerBio:"Eraqus is willing to destroy Ventus to stop Xehanort's χ-blade plot, and is struck down by Xehanort in front of Terra. His heart, however, survives within Terra's — and returns in KH3 to help end his old friend.",
    tidbit:"Eraqus and Xehanort's relationship is mirrored in the chess-like board they play on; their light-vs-darkness friendship is the template the whole saga's master-apprentice tragedies repeat.",
    portrait:{ skin:"#d8b48c", hair:"#2a2622", style:"neat", eyes:"#5a4636", clothes:"#3a4a44", acc:["beard","ponytail"] } },

  { id:"ansemwise", name:"Ansem the Wise / DiZ", short:"Ansem the Wise", keys:["Ansem the Wise","DiZ"], faction:"light", role:"Ruler of Radiant Garden",
    personality:"Brilliant, proud and consumed by vengeance, Ansem the Wise lets his quest to undo Xehanort curdle into cruelty — using Roxas and Naminé as means to an end before regret redeems him.",
    bio:"The benevolent ruler and scientist of Radiant Garden whose apprentices betrayed him. He resurfaces, masked and bitter, as the mysterious 'DiZ'.",
    spoilerBio:"Betrayed and cast into the Realm of Darkness by his apprentice Xehanort, Ansem returns as 'DiZ' (Darkness in Zero) bent on destroying the Organization — coldly sacrificing Roxas to restore Sora. He repents, helping the heroes before a machine of his own backfires, scattering him.",
    tidbit:"'DiZ' stands for 'Darkness in Zero.' His real research was stolen and corrupted by his apprentice Xehanort, who even took his name — becoming 'Ansem, Seeker of Darkness' to throw the worlds off the trail.",
    portrait:{ skin:"#d8a878", hair:"#b0a088", style:"neat", eyes:"#c98a2a", clothes:"#6a1414", acc:["beard"] } },

  /* ---------- SEEKERS OF DARKNESS (Xehanort's facets) ---------- */
  { id:"mxehanort", name:"Master Xehanort", short:"Xehanort", keys:["Xehanort","Master Xehanort"], faction:"seekers", role:"Keyblade Master · The Seeker of Darkness",
    personality:"Patient, eloquent and utterly convinced of his own righteousness, Xehanort is a philosopher-villain who plays a decades-long chess game with reality. He sacrifices everyone — including his own selves — for a 'balance' only he believes in.",
    bio:"The aged Keyblade Master whose obsession with the Keyblade War, the χ-blade, and forging a new world drives nearly every tragedy in the saga.",
    background:[
      "Born on the Destiny Islands, Xehanort left to seek the truth behind the Keyblade and the ancient war. He came to believe the world had grown unbalanced toward light, and that recreating the Keyblade War — clashing seven lights against thirteen darknesses — would forge the χ-blade and let him remake everything.",
      "To do it he scattered himself across time and bodies: as a young man he became an apprentice to Ansem the Wise and split into a Heartless (Ansem, Seeker of Darkness) and a Nobody (Xemnas). He possessed Terra, created Vanitas from Ventus, and pulled his younger self forward through time to assemble his 'true Organization XIII.'",
      "Every Organization, every betrayal, and every vessel traces back to one man's plan — making Xehanort less a single villain than a will distributed across the entire series, finally confronted by Sora at the last Keyblade War."
    ],
    bgSpoiler:true,
    tidbit:"Almost every major antagonist — Ansem the Seeker of Darkness, Xemnas, Young Xehanort, Terra-Xehanort — is a fragment of one person: Xehanort. The series' notorious complexity is, at its core, one man refusing to stay in one body or one time.",
    portrait:{ skin:"#8a6a55", hair:"#1a1a1f", style:"bald", eyes:"#e8b53a", glow:true, clothes:"#2a2230", acc:["beard"] } },

  { id:"yxehanort", name:"Young Xehanort", short:"Young Xehanort", keys:["Young Xehanort"], faction:"seekers", role:"Xehanort, pulled through time",
    personality:"Cold, certain and eerily composed for his age, Young Xehanort is the master's own youth — recruited across time to serve the plan he will one day author. He speaks of fate as something he already knows.",
    bio:"The teenage Xehanort, brought forward through time to join the true Organization XIII and ensure his future self's plan comes to pass.",
    spoilerBio:"Young Xehanort uses time travel (which requires leaving one's body and a version of oneself at each point in time) to gather the thirteen seekers across eras. He is the same person as Master Xehanort — a paradox the plan depends on.",
    tidbit:"Kingdom Hearts' time travel has strict rules introduced in Dream Drop Distance: you can only travel to times where a version of your heart already exists, and you can't change recorded history — loopholes Xehanort exploits to recruit himself.",
    portrait:{ skin:"#8a6a55", hair:"#dadfe2", style:"spiky", eyes:"#e8b53a", glow:true, clothes:"#14141c" } },

  { id:"ansemsod", name:"Ansem, Seeker of Darkness", short:"Ansem (SoD)", keys:["Ansem, Seeker of Darkness","Seeker of Darkness"], faction:"seekers", role:"Xehanort's Heartless",
    personality:"Grandiose and seductive, this Ansem preaches the supremacy of darkness as the heart's true nature. Calm, mocking and theatrical, he treats the worlds as a thesis to be proven by ending them.",
    bio:"The Heartless of Xehanort, who stole his master's name. The primary antagonist of the first Kingdom Hearts, who possesses Riku and seeks the heart of all worlds.",
    spoilerBio:"When Xehanort gave himself to darkness, his Heartless retained his mind and ego — uniquely. He manipulates Maleficent and Riku to open the door to Kingdom Hearts, believing it to be pure darkness. He returns as one of Xehanort's thirteen seekers.",
    tidbit:"For years players knew this villain only as 'Ansem' — the reveal that he was never the real Ansem, but Xehanort's Heartless wearing the name, was the series' first great identity twist and set the template for all that followed.",
    portrait:{ skin:"#8a6a55", hair:"#dadfe2", style:"long", eyes:"#e8b53a", glow:true, clothes:"#3a2230" } },

  { id:"xemnas", name:"Xemnas", keys:["Xemnas"], faction:"org13", role:"Superior of Organization XIII · Xehanort's Nobody",
    personality:"Icy, aloof and grandiose, Xemnas speaks in riddles about hearts and nothingness. The most composed of Xehanort's facets, he runs the Organization like a cult, withholding the truth from his own members.",
    bio:"The Nobody of Xehanort and the enigmatic leader (the 'Superior') of Organization XIII, who seeks to complete the artificial Kingdom Hearts.",
    spoilerBio:"Xemnas leads the original Organization XIII — a group of Nobodies — toward a Kingdom Hearts made of harvested hearts, ostensibly to regain their own. In truth it's another step in Xehanort's plan. He is the final boss of Kingdom Hearts II and returns as a seeker.",
    tidbit:"'Xemnas' is an anagram of 'Ansem' + X — yet another layer of Xehanort hiding behind his old master's stolen name. He's secretly drawn to the empty husk of his original self, Terra-Xehanort's discarded room.",
    portrait:{ skin:"#8a6a55", hair:"#dadfe2", style:"long", eyes:"#e8b53a", glow:true, clothes:"#14141c" } },

  { id:"vanitas", name:"Vanitas", keys:["Vanitas"], faction:"seekers", role:"Ventus's darkness",
    personality:"Cruel, mocking and seething with pain, Vanitas is negative emotion given a body. He torments Ventus precisely because they are two halves of one person — and his rage is, underneath, agony.",
    bio:"The embodiment of the darkness Xehanort extracted from Ventus's heart, masked and bent on forging the χ-blade by reuniting — violently — with Ven.",
    spoilerBio:"Vanitas wears a mask because, unmasked, he has Sora's face — a side effect of Ventus's heart having bonded with Sora's. He generates the Unversed from his own suffering. Forging the χ-blade requires him and Ventus to clash as light and darkness.",
    tidbit:"Vanitas is voiced by Haley Joel Osment, the same actor as Sora, and unmasked he is Sora's exact double — a clue that Ventus's heart, and thus Vanitas's origin, is bound up with Sora's.",
    portrait:{ skin:"#f0caa0", hair:"#1c1c22", style:"spiky", eyes:"#e8b53a", glow:true, clothes:"#1a1a22" } },

  { id:"xigbar", name:"Xigbar / Luxu", short:"Xigbar", keys:["Xigbar","Luxu","Braig"], faction:"seekers", role:"Org. XIII No. II · the Master's apprentice",
    personality:"Smug, drawling and always two moves ahead, Xigbar treats the entire war as a game he already knows the ending of. His cocky banter hides the oldest and most patient schemer in the saga.",
    bio:"The free-shooting, gravity-bending Number II of Organization XIII — and, secretly, far older and more important than anyone suspects.",
    spoilerBio:"Xigbar is Braig, an apprentice of Ansem the Wise — but he is also Luxu, the Foreteller entrusted by the Master of Masters with the No Name Keyblade and a centuries-long mission, body-hopping across ages to set the new Keyblade War in motion. He may be the true architect behind even Xehanort.",
    tidbit:"The reveal that Xigbar is Luxu — a figure from the Age of Fairy Tales who has been quietly steering events for centuries via a body-swapping Keyblade — recontextualized the entire series, suggesting Xehanort may have been a pawn all along.",
    portrait:{ skin:"#d8b48c", hair:"#2a2622", style:"slick", eyes:"#e8b53a", glow:true, clothes:"#14141c", acc:["eyepatch","ponytail"] } },

  /* ---------- ORGANIZATION XIII (Nobodies) ---------- */
  { id:"saix", name:"Saïx / Isa", short:"Saïx", keys:["Saïx","Saix","Isa"], faction:"org13", role:"Org. XIII No. VII",
    personality:"Cold, controlled and quietly furious, Saïx serves the Organization as Xemnas's enforcer — but his real loyalty was always to a friend. Beneath the berserker calm is a man searching for someone he lost.",
    bio:"The Luna Diviner, Number VII and the Organization's stern second-in-command, who flies into berserk rage under the moon.",
    spoilerBio:"Saïx is the Nobody of Isa, Lea's childhood best friend. He joined the Organization to find Lea, and their broken-then-mended friendship mirrors Roxas and Axel's. Isa is recompleted and reunites with Lea in KH3.",
    tidbit:"Saïx and Axel's history as the human boys Isa and Lea — sneaking into Radiant Garden's castle together — is the quiet emotional spine connecting the Organization back to Ansem the Wise's lab.",
    portrait:{ skin:"#e0c0a0", hair:"#4a78c8", style:"long", eyes:"#e8b53a", glow:true, clothes:"#14141c", acc:["scar"] } },

  { id:"marluxia", name:"Marluxia / Lauriam", short:"Marluxia", keys:["Marluxia","Lauriam"], faction:"org13", role:"Org. XIII No. XI",
    personality:"Elegant, smiling and ruthlessly ambitious, Marluxia masks a coup behind courtly grace. As his old self he is something far gentler — a brother searching for his lost sister.",
    bio:"The Graceful Assassin, Number XI, who wields a scythe and plots to seize the Organization from within Castle Oblivion.",
    spoilerBio:"Marluxia is the Nobody of Lauriam, a Keyblade wielder from the Age of Fairy Tales whose sister Strelitzia was murdered. He joins the Organization to find her — his treachery in Chain of Memories is, at root, that search.",
    tidbit:"Marluxia's connection to the Union χ era — as Lauriam, brother of Strelitzia — retroactively turned a one-off Chain of Memories villain into a thread linking the modern saga back to the Keyblade War.",
    portrait:{ skin:"#f0caa0", hair:"#d06ab0", style:"long", eyes:"#6a86c8", clothes:"#14141c" } },

  { id:"larxene", name:"Larxene / Elrena", short:"Larxene", keys:["Larxene","Elrena"], faction:"org13", role:"Org. XIII No. XII",
    personality:"Sadistic, sharp-tongued and gleefully cruel, Larxene enjoys other people's misery as a hobby. The lone woman of the original Organization, and proud of being its nastiest.",
    bio:"The Savage Nymph, Number XII, a lightning-fast knife-fighter and Marluxia's co-conspirator in Castle Oblivion.",
    spoilerBio:"Larxene is the Nobody of Elrena, another Keyblade wielder from the Age of Fairy Tales, brought back as one of the new seekers in KH3 — tying yet another Organization member to the ancient war.",
    tidbit:"Larxene was the only female member of the original Organization XIII; the later 'real' Organization deliberately broadened its roster, retroactively recruiting her past self Elrena from the χ era.",
    portrait:{ skin:"#f0caa0", hair:"#e8c14a", style:"slick", eyes:"#3a8f8f", clothes:"#14141c" } },

  { id:"vexen", name:"Vexen / Even", short:"Vexen", keys:["Vexen","Even"], faction:"org13", role:"Org. XIII No. IV",
    personality:"Prickly, paranoid and proud of his intellect, Vexen is the Organization's chief scientist — cowardly in a fight but pivotal in the lab. His later guilt over his creations drives a quiet redemption.",
    bio:"The Chilly Academic, Number IV, an ice-wielding scientist and the Organization's leading researcher into replicas and memory.",
    spoilerBio:"As Even, an apprentice of Ansem the Wise, he pioneered the Replica Program — the tech behind Xion, the Riku Replica, and ultimately the new bodies that save Roxas, Xion, and others. His defection to help the heroes is a key turning point in KH3.",
    tidbit:"Vexen's Replica Program is the unsung MacGuffin that makes the happy ending possible — the same technology used to create and torment Xion is repurposed to give the lost Nobodies their own bodies back.",
    portrait:{ skin:"#e8c096", hair:"#d8c060", style:"long", eyes:"#5a6a4a", clothes:"#14141c" } },

  { id:"zexion", name:"Zexion / Ienzo", short:"Zexion", keys:["Zexion","Ienzo"], faction:"org13", role:"Org. XIII No. VI",
    personality:"Soft-spoken, analytical and manipulative, Zexion fights with illusions and information rather than force. As Ienzo he matures into a thoughtful researcher trying to atone for the lab that started everything.",
    bio:"The Cloaked Schemer, Number VI, who wields a Lexicon and manipulates the senses, scheming in the shadows of Castle Oblivion.",
    spoilerBio:"Zexion is the Nobody of Ienzo, the youngest of Ansem the Wise's apprentices — a child when the others' experiments orphaned him. Recompleted, Ienzo leads the restored Radiant Garden research that helps recover Roxas, Xion, and Ansem the Wise's lost data.",
    tidbit:"Ienzo was just a boy when Xehanort and the others began their fatal heart experiments, making him both a victim and, eventually, one of the scientists who undoes their damage.",
    portrait:{ skin:"#e8c096", hair:"#6a7a9a", style:"neat", eyes:"#5a6a7a", clothes:"#14141c" } },

  { id:"lexaeus", name:"Lexaeus / Aeleus", short:"Lexaeus", keys:["Lexaeus","Aeleus"], faction:"org13", role:"Org. XIII No. V",
    personality:"Silent, immense and stoic, Lexaeus lets his strength speak for him. A man of few words and immovable calm, loyal to those he serves.",
    bio:"The Silent Hero, Number V, an axe-sword-wielding powerhouse and one of the Castle Oblivion schemers.",
    spoilerBio:"As Aeleus, he was one of Ansem the Wise's apprentice-guards; recompleted, he returns to guard duty in the restored Radiant Garden alongside Dilan.",
    tidbit:"Lexaeus, Vexen, and Zexion are dispatched together in Chain of Memories — the trio of 'Castle Oblivion' Nobodies whose defeat (and later recompletion) quietly seeds half of the series' science subplot.",
    portrait:{ skin:"#d8a878", hair:"#b0623a", style:"buzz", eyes:"#5a4636", clothes:"#14141c" } },

  { id:"xaldin", name:"Xaldin / Dilan", short:"Xaldin", keys:["Xaldin","Dilan"], faction:"org13", role:"Org. XIII No. III",
    personality:"Cruel and calculating, Xaldin preys on others' bonds and weaknesses, twisting hearts toward darkness. A disciplined soldier turned predatory manipulator.",
    bio:"The Whirlwind Lancer, Number III, who commands six lances and the wind, and famously torments the Beast in his castle.",
    spoilerBio:"As Dilan, another of Ansem the Wise's apprentice-guards; recompleted, he resumes his post in Radiant Garden.",
    tidbit:"Xaldin's scheme to sever the Beast from his friends and his rose is one of the few times an Organization plot plays out entirely within a single Disney world — a small showcase of the Nobodies' specialty: exploiting hearts.",
    portrait:{ skin:"#8a6a55", hair:"#1c1c22", style:"long", eyes:"#3a3a3a", clothes:"#14141c", acc:["beard"] } },

  { id:"demyx", name:"Demyx", keys:["Demyx"], faction:"org13", role:"Org. XIII No. IX",
    personality:"Lazy, laid-back and conflict-averse, Demyx would rather strum his sitar than fight. The Organization's comic-relief slacker — though his casual competence hints at hidden depths.",
    bio:"The Melodious Nocturne, Number IX, who summons water and an army of dancing water-clones with his sitar.",
    tidbit:"Demyx is a fan-favorite precisely because he's so unserious in a deadly-serious group — and his sudden, surprisingly tough boss fight ('Dance, water, dance!') is one of KH2's most memorable difficulty spikes.",
    portrait:{ skin:"#e8c096", hair:"#b0904a", style:"messy", eyes:"#4a8f8f", clothes:"#14141c" } },

  { id:"luxord", name:"Luxord", keys:["Luxord"], faction:"org13", role:"Org. XIII No. X",
    personality:"Suave, gambling and unflappable, Luxord treats every confrontation as a game with rules only he fully understands. Courteous even in defeat, and always playing a longer hand than he lets on.",
    bio:"The Gambler of Fate, Number X, who wields time and a deck of giant cards.",
    tidbit:"Luxord's control over time and his cryptic talk of 'players' and 'the game' in KH3 hint he may know far more about Xehanort's plan — and the series' deeper rules — than a mere card-flinging Nobody should.",
    portrait:{ skin:"#e0c0a0", hair:"#d8c060", style:"buzz", eyes:"#5a86c8", clothes:"#14141c", acc:["beard"] } },

  { id:"repliku", name:"Riku Replica", short:"Repliku", keys:["Riku Replica","Replica"], faction:"org13", role:"Vexen's replica of Riku",
    personality:"Resentful and identity-starved, the Replica rages against being 'just a copy,' desperate to be someone real. His grasping for selfhood is its own small tragedy.",
    bio:"A replica of Riku created by Vexen in Castle Oblivion, used to manipulate the heroes — and tormented by the knowledge that his memories aren't his own.",
    spoilerBio:"The Riku Replica's empty body later becomes the vessel that restores Roxas to life in KH3 — a discarded copy turned into the means of a friend's resurrection.",
    tidbit:"The Riku Replica's leftover body is literally the container used to bring Roxas back — one of several ways the Replica Program's cruel experiments are repurposed into the series' happy ending.",
    portrait:{ skin:"#f0caa0", hair:"#dadfe2", style:"messy", eyes:"#8fd0d0", clothes:"#14141c" } },

  /* ---------- DISNEY VILLAINS ---------- */
  { id:"maleficent", name:"Maleficent", keys:["Maleficent"], faction:"villain", role:"Mistress of All Evil",
    personality:"Imperious, theatrical and supremely confident, Maleficent covets dominion over all worlds and treats every ally as a disposable pawn. Even when outmaneuvered, her pride never once wavers.",
    bio:"The horned sorceress who gathers Disney's villains and an army of Heartless to seize the worlds, hunting the seven Princesses of Heart.",
    spoilerBio:"Maleficent is herself a pawn — Ansem (Seeker of Darkness) uses her ambition to open the door to Kingdom Hearts before discarding her. She spends the later games doggedly (and comically) hunting a mysterious 'data' and the Black Box, refusing to stay defeated.",
    tidbit:"Maleficent can transform into a colossal dragon — the same climactic form from Sleeping Beauty — and her recurring obsession in the modern games with the mysterious 'Black Box' keeps her tied to the series' deepest mystery.",
    portrait:{ skin:"#6aa05a", hair:"#14141c", style:"veiled", eyes:"#d04a8a", glow:true, clothes:"#1a1422", acc:["horns"] } },

  { id:"pete", name:"Pete", keys:["Pete"], faction:"villain", role:"Maleficent's henchman",
    personality:"Blustering, bumbling and endlessly scheming, Pete is a small-time villain with big-time delusions. More comic nuisance than threat, but persistent enough to keep causing trouble across the worlds.",
    bio:"A perennial Disney troublemaker who serves Maleficent, ferrying Heartless and meddling across worlds.",
    tidbit:"Pete is one of Disney's oldest characters (predating Mickey himself), and Kingdom Hearts casts him as Maleficent's bumbling sidekick — a steward of darkness who's far more bark than bite.",
    portrait:{ style:"cat", hair:"#3a3a40", clothes:"#b03a2a" } },

  /* ---------- AGE OF FAIRY TALES ---------- */
  { id:"mom", name:"Master of Masters", short:"Master", keys:["Master of Masters"], faction:"foreteller", role:"The first Keyblade Master",
    personality:"Flippant, cryptic and disarmingly casual about world-ending stakes, the Master hides cosmic knowledge behind jokes and a perpetual hood. Impossible to read — which is exactly how he likes it.",
    bio:"The enigmatic founder of the Keyblade Masters, author of the Book of Prophecies, who could see the future through his Gazing Eye.",
    spoilerBio:"The Master of Masters foresaw a coming darkness and set his Foretellers — and his secret seventh apprentice, Luxu — on roles to either avert or engineer it. His true goals remain the saga's central mystery, resurfacing in the Quadratum era.",
    tidbit:"The Master of Masters gave the No Name Keyblade to Luxu with a hidden 'Gazing Eye' embedded in it, letting him watch across centuries — meaning he has, in some sense, been spectating the entire series through Xigbar's body.",
    portrait:{ style:"hood", clothes:"#14141c", eyes:"#5ad6ff" } },

  { id:"ava", name:"Ava", keys:["Ava"], faction:"foreteller", role:"Foreteller · Master of Vulpes",
    personality:"Kind, gentle and quietly determined, Ava defies despair to plant hope for a future she may not see. The most compassionate of the Foretellers.",
    bio:"One of the five Foretellers of the Age of Fairy Tales, leader of the Vulpes union, tasked by the Master with a secret mission.",
    spoilerBio:"Ava secretly gathers the 'Dandelions' — chosen wielders kept out of the Keyblade War — to survive its end and seed a new generation of light, a lineage that distantly leads to the modern heroes.",
    tidbit:"Ava's Dandelions are the reason any Keyblade wielders exist after the apocalyptic Keyblade War — the entire modern saga grows, quite literally, from the seeds she scattered.",
    portrait:{ skin:"#f0caa0", hair:"#ecdf9a", style:"long", eyes:"#6a86c8", clothes:"#3a3a55" } },

  { id:"ephemer", name:"Ephemer", keys:["Ephemer"], faction:"foreteller", role:"Dandelion · Union leader",
    personality:"Curious, brave and idealistic, Ephemer chases the truth behind the Keyblade Masters with an explorer's optimism, determined to unite a fractured world.",
    bio:"A young, inquisitive Keyblade wielder of the Age of Fairy Tales who becomes a leader of the Dandelions and, later, the Union Leaders.",
    tidbit:"Ephemer is the first true 'friend' character of the χ era and ultimately becomes the leader who guides the Dandelions into the new world — a foundational figure most modern players never meet.",
    portrait:{ skin:"#f0caa0", hair:"#cfd6da", style:"spiky", eyes:"#6a86c8", clothes:"#2a3a50" } },

  { id:"strelitzia", name:"Strelitzia", keys:["Strelitzia"], faction:"foreteller", role:"Dandelion · Lauriam's sister",
    personality:"Shy, gentle and hopeful, Strelitzia admires others from afar and dreams of belonging. Her quiet kindness makes her loss all the more cruel.",
    bio:"A gentle Keyblade wielder of the Age of Fairy Tales and the younger sister of Lauriam (later Marluxia).",
    spoilerBio:"Strelitzia is murdered before she can take up her intended role among the Dandelions — a death that sends her brother Lauriam into the Organization searching for her, linking the ancient war to Chain of Memories.",
    tidbit:"Strelitzia's murder is one of the series' enduring cold cases; the search for her killer (and her connection to Marluxia) is a thread the modern games are still slowly unraveling.",
    portrait:{ skin:"#f0caa0", hair:"#d07a4a", style:"long", eyes:"#5a8f5a", clothes:"#3a4a3a" } },
];

// relationship types (KH-flavored)
const RTYPE = {
  love:   { stroke:"#ff7ab0", icon:"♥", label:"love",   dash:"" },
  bond:   { stroke:"#5ad6ff", icon:"✦", label:"bond",   dash:"" },
  master: { stroke:"#f0c44e", icon:"➜", label:"master", dash:"6 5" },
  linked: { stroke:"#b15cff", icon:"◈", label:"linked", dash:"3 4" },
  enemy:  { stroke:"#e2576b", icon:"⚔", label:"enmity", dash:"4 5" },
};

/* [from, to, type, label?, spoilerTrue?] — spoiler ties hidden until decrypted.
   "linked" = connected hearts: Nobody/Somebody, Heartless, replica, or split hearts. */
const RELATIONS = [
  // Destiny trio + companions
  ["sora","riku","bond","best friends"],
  ["sora","kairi","love","heart's anchor"],
  ["riku","kairi","bond","childhood"],
  ["sora","donald","bond","party"],
  ["sora","goofy","bond","party"],
  ["donald","goofy","bond","royal duo"],
  ["mickey","donald","master","their king"],
  ["mickey","goofy","master","their king"],
  ["mickey","riku","bond","dark-road allies"],
  ["yensid","mickey","master","mentor"],
  ["yensid","sora","master","exam"],
  ["yensid","riku","master","exam"],
  // Nobodies / replicas / linked hearts (spoiler)
  ["sora","roxas","linked","Nobody", true],
  ["sora","ventus","linked","sheltered heart", true],
  ["sora","xion","linked","memories", true],
  ["sora","vanitas","linked","same face", true],
  ["kairi","namine","linked","Nobody", true],
  ["roxas","ventus","linked","same face", true],
  ["roxas","namine","linked","fellow Nobody", true],
  // 358 trio
  ["roxas","lea","bond","ice cream"],
  ["roxas","xion","bond","ice cream"],
  ["lea","xion","bond","ice cream"],
  ["lea","saix","bond","Isa & Lea"],
  ["repliku","riku","linked","replica of", true],
  ["repliku","roxas","linked","vessel for", true],
  // Birth by Sleep trio
  ["terra","aqua","bond","wayfinders"],
  ["terra","ventus","bond","wayfinders"],
  ["aqua","ventus","bond","wayfinders"],
  ["eraqus","terra","master","apprentice"],
  ["eraqus","aqua","master","apprentice"],
  ["eraqus","ventus","master","apprentice"],
  ["eraqus","mxehanort","bond","old friends"],
  ["ventus","vanitas","linked","split heart", true],
  // Xehanort's web (spoiler-heavy)
  ["mxehanort","ansemsod","linked","his Heartless", true],
  ["mxehanort","xemnas","linked","his Nobody", true],
  ["mxehanort","yxehanort","linked","his past self", true],
  ["mxehanort","terra","linked","stole his body", true],
  ["mxehanort","vanitas","master","created him", true],
  ["mxehanort","eraqus","enemy","light vs darkness"],
  ["mxehanort","xigbar","master","apprentice", true],
  ["ansemsod","riku","enemy","possessed him", true],
  ["ansemsod","maleficent","enemy","used her", true],
  // Organization XIII
  ["xemnas","saix","master","Superior"],
  ["xemnas","roxas","master","No. XIII"],
  ["xemnas","xigbar","bond","inner circle"],
  ["marluxia","larxene","bond","co-conspirators"],
  ["vexen","zexion","bond","scientists"],
  ["vexen","lexaeus","bond","Castle Oblivion"],
  ["vexen","namine","master","created her", true],
  ["vexen","xion","master","created her", true],
  ["vexen","repliku","master","created it", true],
  ["ansemwise","mxehanort","master","betrayed by", true],
  ["ansemwise","namine","bond","secret ally", true],
  ["ansemwise","roxas","enemy","sacrificed him", true],
  // Disney villains
  ["maleficent","pete","master","henchman"],
  // Age of Fairy Tales
  ["mom","xigbar","master","Luxu's role", true],
  ["mom","ava","master","Foreteller"],
  ["mom","ephemer","linked","successor", true],
  ["ava","ephemer","master","Dandelions"],
  ["marluxia","strelitzia","linked","lost sister", true],
  ["larxene","ava","bond","χ-era wielders", true],
  // the war
  ["sora","mxehanort","enemy","nemesis"],
  ["sora","ansemsod","enemy","nemesis"],
  ["sora","xemnas","enemy","nemesis"],
  ["riku","mxehanort","enemy","the war"],
  ["aqua","vanitas","enemy","the Graveyard"],
  // keep these connected in the encrypted view
  ["namine","riku","bond","Castle Oblivion"],
  ["ansemwise","riku","bond","secret allies"],
  ["yxehanort","sora","enemy","Mark of Mastery"],
  ["xaldin","saix","bond","Organization"],
  ["demyx","saix","bond","Organization"],
  ["luxord","saix","bond","Organization"],
  ["repliku","marluxia","bond","Castle Oblivion"],
  ["strelitzia","ephemer","bond","Dandelions"],
];

const EVENTS = [
  // ---- The Age of Fairy Tales ----
  { era:"The Age of Fairy Tales", entry:"Union χ", yr:"aeons ago", title:"The Master of Masters & the Book of Prophecies", art:"bookofprophecies",
    blurb:"In an age when Keyblade wielders were plentiful, the enigmatic Master of Masters writes the Book of Prophecies — a record of the future seen through his Gazing Eye — and entrusts five Foretellers, and a secret sixth apprentice named Luxu, with roles to come.",
    detail:"The Master foresees a catastrophe: a great war that will end the age of light. He divides his pupils into five Unions and vanishes, leaving each a fragment of his foresight and contradictory instructions. To Luxu alone he gives the No Name Keyblade — secretly housing his own Gazing Eye — and a centuries-long mission to pass the blade (and his watchful eye) down through history. It's the seed of every plot to come." },
  { era:"The Age of Fairy Tales", entry:"Union χ", yr:"aeons ago", title:"The Keyblade War", art:"keybladewar",
    blurb:"Mistrust between the Unions erupts into the legendary Keyblade War. Countless wielders clash over the real Kingdom Hearts and the χ-blade, and the world is all but destroyed — shattering into the many separate worlds of the present day.",
    detail:"The war is the apocalypse that frames the entire series. When it ends, the world has broken apart and the true Kingdom Hearts is swallowed by darkness; the χ-blade is lost. The Keyblade Graveyard — a desert of rusting Keyblades planted in cracked earth — is all that remains of the fallen, and it is to this exact spot that every later 'final battle' returns." },
  { era:"The Age of Fairy Tales", entry:"Union χ", yr:"aeons ago", title:"The Dandelions & a New World", art:"dandelions",
    blurb:"Foreseeing the war's end, the Foreteller Ava secretly gathers the 'Dandelions' — chosen wielders kept out of the fighting — to survive into a rebuilt world and carry the light forward.",
    detail:"Ava's Dandelions, led eventually by Ephemer, are spared the war and seeded into the new, reformed world to begin the lineage of Keyblade wielders that survives to the present. It's a quiet act of hope amid catastrophe — and the reason heroes like Sora can exist at all. The era's darker threads (Strelitzia's murder, Luxu's hidden role) would echo for centuries." },

  // ---- Birth by Sleep ----
  { era:"Birth by Sleep", entry:"Birth by Sleep", yr:"~12 yrs before", title:"Masters Eraqus & Xehanort", art:"twomasters",
    blurb:"Two Keyblade Masters and old friends — the light-devoted Eraqus and the darkness-curious Xehanort — fall into a philosophical feud over the balance of the worlds, with Xehanort quietly plotting to reignite the Keyblade War.",
    detail:"Xehanort, obsessed with the legends of the war and the χ-blade, comes to believe the worlds have tilted too far toward light and must be 'rebalanced.' Eraqus clings to the light absolutely. Their chessboard friendship — light against darkness — becomes the template for every master-and-apprentice tragedy the saga will repeat, and the fuse for the events of Birth by Sleep." },
  { era:"Birth by Sleep", entry:"Birth by Sleep", yr:"~12 yrs before", title:"The Forging of Vanitas", spoiler:true, art:"vanitascreation",
    blurb:"To recreate the χ-blade, Xehanort splits the heart of the young wielder Ventus, extracting its darkness to form a masked being: Vanitas. Forging the blade will require the two halves — pure light and pure darkness — to clash.",
    detail:"The χ-blade can only be forged when the seven pure lights and thirteen pure darknesses collide — or, in Xehanort's first attempt, when Ventus (light) and Vanitas (darkness) destroy each other. The extraction nearly kills Ventus, whose shattered heart only survives by drifting into and bonding with the heart of a newborn on Destiny Islands: Sora. That bond is why Vanitas wears Sora's face, and why Sora's heart is so crowded for the rest of the saga." },
  { era:"Birth by Sleep", entry:"Birth by Sleep", yr:"~11 yrs before", title:"Terra, Aqua & Ventus", art:"bbstrio",
    blurb:"Eraqus's three apprentices — earnest Terra, dutiful Aqua, and innocent Ventus — set out across the worlds after their Mark of Mastery exam, unknowingly playing roles in Xehanort's design.",
    detail:"Aqua passes the Mastery exam; Terra, tempted by darkness, fails — a wound Xehanort exploits at every turn, steering the trio apart across Disney worlds. Their shared keepsake, the star-shaped Wayfinders Aqua makes, becomes the emotional throughline of the whole sub-saga: an 'unbreakable connection' that is tested to its absolute limit." },
  { era:"Birth by Sleep", entry:"Birth by Sleep", yr:"~11 yrs before", title:"Clash at the Keyblade Graveyard", spoiler:true, art:"graveyardclash",
    blurb:"At the Keyblade Graveyard, Xehanort's plan converges: he possesses Terra's body, Ventus and Vanitas clash to forge the χ-blade, and everything the trio is falls apart at once.",
    detail:"Xehanort abandons his aged body to possess Terra's, becoming 'Terra-Xehanort' — though Terra's will survives in his discarded armor as the Lingering Will. Ventus battles Vanitas inside his own heart to stop the χ-blade and is left comatose, his heart again taking refuge in Sora. Aqua defeats the new Xehanort vessel but at devastating cost. Three young lives are effectively ended in a single afternoon — the saga's foundational tragedy." },
  { era:"Birth by Sleep", entry:"Birth by Sleep", yr:"~11 yrs before", title:"Aqua and the Realm of Darkness", spoiler:true, art:"realmofdarkness",
    blurb:"Saving the falling Terra, Aqua sacrifices her path home and is left to wander the Realm of Darkness — alone, for over a decade — while she hides Ventus's sleeping body away in Castle Oblivion.",
    detail:"Aqua lays Ventus to rest in the Chamber of Waking within Castle Oblivion, then plunges into the dark realm to pull Terra back, giving up her own escape. She drifts through a lightless world for roughly ten years, slowly losing herself, until Sora and King Mickey finally reach her in Kingdom Hearts III — making her rescue one of the longest-deferred promises in the series." },

  // ---- Kingdom Hearts (KH1) ----
  { era:"Kingdom Hearts", entry:"Kingdom Hearts", yr:"~1 yr before", title:"The Heartless & the Fall of Radiant Garden", spoiler:true, art:"heartlessfall",
    blurb:"Apprenticed to the kindly scientist Ansem the Wise, a young Xehanort experiments on the heart — unleashing the Heartless. Radiant Garden falls to darkness and becomes Hollow Bastion; Ansem the Wise is betrayed and cast out.",
    detail:"Xehanort and the other apprentices (Braig, Dilan, Even, Aeleus, Ienzo) pry into the darkness of the heart, manufacturing the shadow-creatures called Heartless. The experiments consume their own world and themselves — they lose their hearts and become the first Nobodies of Organization XIII, while Xehanort's Heartless takes his master's name and his Nobody becomes Xemnas. Ansem the Wise is exiled into darkness, setting his vengeful 'DiZ' persona in motion." },
  { era:"Kingdom Hearts", entry:"Kingdom Hearts", yr:"Year 0", title:"Destiny Islands & the Door", art:"destinyislands",
    blurb:"On a peaceful island world, three friends — Sora, Riku, and Kairi — dream of seeing other worlds. One night the islands are swallowed by darkness; Riku reaches for it, Kairi's heart vanishes, and the Keyblade chooses Sora.",
    detail:"The trio build a raft to leave their small world, never imagining how. When the Heartless come, Riku — impatient and envious — lets the darkness take him in exchange for power, while Kairi's heart, which has no darkness, flees into Sora. Sora is left with the Keyblade and washes up in Traverse Town, beginning the journey that defines him: chasing his two lost friends across the worlds." },
  { era:"Kingdom Hearts", entry:"Kingdom Hearts", yr:"Year 0", title:"Sora, Donald & Goofy", art:"keyblade",
    blurb:"Sent by King Mickey to find the Keyblade's chosen wielder, Donald and Goofy join Sora. The trio travel world to world, sealing Keyholes against the Heartless and searching for Riku, Kairi, and the missing King.",
    detail:"Their pact is simple and load-bearing for the whole series: stick together, no frowning, no sad faces. World by world they lock the Keyholes that lead to each world's heart, keeping the Heartless from consuming them — meeting Disney heroes and villains, and always one step behind Riku, who is being courted by Maleficent and a shadow calling itself Ansem." },
  { era:"Kingdom Hearts", entry:"Kingdom Hearts", yr:"Year 0", title:"Maleficent's Council & the Princesses of Heart", art:"maleficentcouncil",
    blurb:"Maleficent gathers a council of Disney villains and an army of Heartless, hunting the seven Princesses of Heart — maidens of pure light whose hearts can open the final door to Kingdom Hearts.",
    detail:"The seven Princesses (Snow White, Cinderella, Aurora, Belle, Jasmine, Alice, and Kairi) hold hearts with no darkness at all; together they can reveal the Keyhole to the heart of all worlds. Maleficent believes she's orchestrating this for her own conquest — never realizing that 'Ansem' is using her ambition, and will discard her the moment the door is open." },
  { era:"Kingdom Hearts", entry:"Kingdom Hearts", yr:"Year 0", title:"Hollow Bastion & the Door to Darkness", spoiler:true, art:"doortodarkness",
    blurb:"At Hollow Bastion, Sora frees Kairi's heart from his own — briefly becoming a Heartless before she restores him. The villain 'Ansem' possesses Riku, opens the door to Kingdom Hearts, and is defeated; Sora, Riku, and Mickey seal the door from both sides.",
    detail:"To free Kairi, Sora stabs himself with the Keyblade of People's Hearts, becoming a Heartless — only for Kairi's light to bring him back, the first proof that his bond-forging heart can defy the rules. 'Ansem' (Xehanort's Heartless) reaches Kingdom Hearts expecting pure darkness and finds light instead. Riku and King Mickey lock the Door to Darkness from the far side, and Sora sets out to find a way back to them — leaving on the promise that he'll see Riku and Kairi again." },

  // ---- Chain of Memories / 358 Days ----
  { era:"Chain of Memories", entry:"Chain of Memories", yr:"Year 0–1", title:"Castle Oblivion & Naminé", spoiler:true, art:"castleoblivion",
    blurb:"In the white halls of Castle Oblivion, Organization XIII forces the witch Naminé to rewrite Sora's memories. Sora must sleep for a year to restore them, while Riku battles his own inner darkness in the basement.",
    detail:"As Sora climbs the castle, Naminé reweaves his memories — even inserting herself in Kairi's place — under Marluxia's scheme to control him. Realizing the cruelty of it, she defects to help. Sora enters a year-long sleep in a memory pod to undo the damage, and Riku, guided by King Mickey and the masked DiZ, claws back from the brink of darkness in the castle below. The whole game runs on a single mechanic: memories as both weapon and wound." },
  { era:"Chain of Memories", entry:"358/2 Days", yr:"Year 0–1", title:"Roxas, Axel & Xion", spoiler:true, art:"roxasxion",
    blurb:"Sora's Nobody, Roxas, joins Organization XIII and befriends Axel and the replica Xion over sea-salt ice cream. But Xion's existence drains Sora's recovery — and one friend must erase the other to set things right.",
    detail:"For 358 days Roxas lives as a person, dual-wielding Keyblades for the Organization and sharing sunsets atop the Twilight Town clock tower with Axel and Xion. The tragedy is structural: Xion is a replica feeding on Sora's memories, and as long as she and Roxas exist, Sora cannot wake. Xion chooses to be defeated by Roxas and forgotten; a grief-stricken Roxas leaves the Organization, only to be captured by DiZ — the saddest 'friendship' arc in a series full of them." },

  // ---- Kingdom Hearts II ----
  { era:"Kingdom Hearts II", entry:"Kingdom Hearts II", yr:"Year 1", title:"The Fake Twilight Town", spoiler:true, art:"faketwilight",
    blurb:"To complete Sora's restoration, DiZ traps Roxas in a digital Twilight Town to live out simulated final days. As the simulation unravels, Roxas accepts the truth and rejoins Sora, who wakes at last.",
    detail:"Roxas believes he's an ordinary boy on summer vacation — until glitches, stolen memories, and the white-coated figures of the Organization reveal the town is a data-prison built to siphon him peacefully back into Sora. His furious, heartbreaking 'Why do I have to disappear?' gives way to acceptance: 'Sora… you're lucky. Looks like my summer vacation is over.' Sora awakens in the pod with no memory of the boy who made it possible." },
  { era:"Kingdom Hearts II", entry:"Kingdom Hearts II", yr:"Year 1", title:"Organization XIII's Kingdom Hearts", spoiler:true, art:"orgkingdomhearts",
    blurb:"Xemnas's Organization harvests hearts to build their own artificial Kingdom Hearts — a heart-shaped moon over the World That Never Was. Sora's party dismantles the Organization, and Sora and Riku defeat Xemnas together.",
    detail:"The Nobodies claim they need Kingdom Hearts to regain their lost hearts; in truth Xemnas is advancing Xehanort's design. Sora, Donald, and Goofy cut down the Organization one by one; Riku — finally freed from Ansem's form — fights at Sora's side against Xemnas above the heart-shaped moon. Naminé and Roxas are returned to Kairi and Sora, and the friends reunite on Destiny Islands at last — a rare, hard-won happy ending before the saga widens again." },

  // ---- coded / Dream Drop Distance ----
  { era:"coded · Dream Drop Distance", entry:"coded", yr:"Year 1", title:"Jiminy's Journal", art:"journal",
    blurb:"A cryptic line appears in Jiminy's chronicle of Sora's travels: 'Their hurt will be mended.' King Mickey digitizes the journal, and a data-Sora's adventure reveals that those connected to Sora — Roxas, Xion, Naminé, and more — can still be saved.",
    detail:"coded is the bridge the saga needed: by exploring a datascape recreation of Sora's journey, Mickey learns that the sorrows tied to Sora's heart aren't truly gone, and that recovering the lost Nobodies and sleeping wielders is possible. It hands the heroes their new mission — and the audience the promise that no one is gone for good." },
  { era:"coded · Dream Drop Distance", entry:"Dream Drop Distance", yr:"Year 1", title:"The Mark of Mastery & Time Travel", spoiler:true, art:"timetravel",
    blurb:"Sora and Riku take a Mark of Mastery exam through sleeping worlds — and walk into a trap. Xehanort reveals he has gathered thirteen versions of himself across time to forge the χ-blade. Riku passes as a Master; Sora is nearly claimed.",
    detail:"Dream Drop Distance lays out the endgame's rules and stakes: Xehanort needs seven 'pure lights' and thirteen 'pure darknesses' to clash and recreate the χ-blade, and he's recruited his own younger and Heartless and Nobody selves across time to fill the thirteen. Sora is nearly made the final vessel; Riku dives into his heart to save him and earns true Mastery. The two sides — seven Guardians of Light versus thirteen Seekers of Darkness — are now set for a final Keyblade War." },

  // ---- Kingdom Hearts III ----
  { era:"Kingdom Hearts III", entry:"Kingdom Hearts III", yr:"Year 2", title:"Gathering the Guardians of Light", art:"guardians",
    blurb:"To answer Xehanort's thirteen, the heroes reassemble the seven Guardians of Light — rekindling Sora's power, freeing Aqua and Ventus, and restoring Roxas, Xion, and Lea through new replica bodies.",
    detail:"Sora relearns the 'power of waking' to reach sleeping hearts; the heroes finally descend into the Realm of Darkness to save Aqua, who in turn helps wake Ventus. Vexen's once-cruel Replica Program is turned to good, giving Roxas and Xion bodies of their own. Lea, Kairi, Mickey, Riku, Aqua, Ventus, and Sora — seven lights — gather for the war Xehanort has spent the entire saga engineering." },
  { era:"Kingdom Hearts III", entry:"Kingdom Hearts III", yr:"Year 2", title:"The Final Keyblade War", spoiler:true, art:"finalkeyblade",
    blurb:"At the Keyblade Graveyard, the Guardians of Light clash with the thirteen Seekers of Darkness. Sora's friends fall and are recovered through the bonds of their hearts, and Xehanort — Kingdom Hearts in hand — is finally defeated.",
    detail:"Xehanort overwhelms the Guardians and even momentarily wipes them out, but Sora refuses the loss, traveling heart to heart to bring everyone back — the ultimate expression of his connecting heart. Aided by the heart of his old friend Eraqus (surviving within Terra), the heroes free Terra at last and corner Xehanort as he opens Kingdom Hearts. He yields it willingly in the end, and the door of light is closed. For a moment, every lost friend is whole." },
  { era:"Kingdom Hearts III", entry:"Kingdom Hearts III", yr:"Year 2", title:"The Price", spoiler:true, art:"theprice",
    blurb:"To rescue Kairi, whose heart was scattered in the war, Sora pushes the 'power of waking' past its limit. He brings her back — and pays the price, fading from the world entirely.",
    detail:"The ReMind epilogue makes Sora's defining trait his undoing: using a forbidden power to reach a single lost heart, he wears himself away and vanishes, the cost of saving everyone finally landing on him. The friends he reunited are left whole; the hero who connected them is gone — a bittersweet ending that quietly opens the door to a strange new chapter." },

  // ---- The Quadratum ----
  { era:"The Quadratum", entry:"Quadratum", yr:"after", title:"Sora in the Quadratum", spoiler:true, art:"quadratum",
    blurb:"Sora awakens in Quadratum — a vast, neon city of 'unreality' said to be a world of the dead. The Master of Masters, a mysterious Black Box, and old prophecies stir, setting the stage for a new saga.",
    detail:"The Dark Seeker saga is over, but Sora's disappearance lands him in Quadratum, a Shibuya-like realm beyond the worlds he knows, where he must find his way back to Kairi. Threads from the Age of Fairy Tales resurface — the Master of Masters, the Lost Masters, the long-sought Black Box, and a being called the Lich — promising that the deepest mysteries the series planted at its origin are only now beginning to pay off." },
];

const COMPENDIUM = [
  /* ===== Hearts & Their Shadows ===== */
  { cat:"Hearts & Their Shadows", sigil:"♥", title:"The Heart", color:"#f0c44e",
    body:"In Kingdom Hearts, the heart is the seat of the self — the source of will, memory, and connection. Everything in the saga turns on hearts: where they go when bodies fall, how they link to one another, and what light or darkness they hold." },
  { cat:"Hearts & Their Shadows", sigil:"◆", title:"Light & Darkness", color:"#f0c44e",
    body:"Every heart holds both. Darkness isn't simply evil — it's a natural part of the heart that becomes dangerous when one gives in to it. The series' central argument, against Xehanort, is that light persists through the bonds between hearts, not the purity of any one." },
  { cat:"Hearts & Their Shadows", sigil:"☣", title:"Heartless", color:"#b15cff",
    body:"When a heart is consumed by darkness, the body and soul are lost and the heart becomes a Heartless — a shadow-creature that hunts other hearts. Powerful hearts can keep their human form and mind as Heartless, as Xehanort's did." },
  { cat:"Hearts & Their Shadows", sigil:"✗", title:"Nobodies", color:"#aab2c4",
    body:"When a strong-willed person becomes a Heartless, the empty husk left behind — body and soul without a heart — becomes a Nobody. Organization XIII is made of them. The Organization claims Nobodies can't feel; the friendships of Roxas, Axel, and Xion prove otherwise." },
  { cat:"Hearts & Their Shadows", sigil:"◑", title:"Replicas", color:"#aab2c4",
    body:"Artificial vessels built to copy a person's data and power — the Riku Replica, Xion. Tragic at first (puppets given just enough self to suffer), the same Replica Program ultimately provides the empty bodies that bring Roxas and Xion back to life." },
  { cat:"Hearts & Their Shadows", sigil:"↺", title:"Recompletion", color:"#5ad6ff",
    body:"If both a person's Heartless and Nobody are destroyed, their original self is restored — 'recompleted.' It's how Ansem the Wise's apprentices return as themselves (Ienzo, Even, Isa…) to help undo the damage they once caused." },

  /* ===== Keyblades & Power ===== */
  { cat:"Keyblades & Power", sigil:"⚷", title:"The Keyblade", color:"#f0c44e",
    body:"A weapon shaped like a key, able to lock and unlock anything — including the hearts of worlds and people. Wielders are chosen by inheritance of will ('the Keyblade chose you'), and the blade is the only thing that can truly fight the darkness." },
  { cat:"Keyblades & Power", sigil:"✚", title:"The χ-blade", color:"#b15cff",
    body:"Pronounced 'keyblade,' the original from which all Keyblades descend. It can unlock the true Kingdom Hearts. Forging it requires twenty pure hearts — seven of light and thirteen of darkness — to clash, which is the entire purpose of Xehanort's plan." },
  { cat:"Keyblades & Power", sigil:"⚔", title:"The Keyblade War", color:"#cdb86a",
    body:"The apocalyptic conflict of the Age of Fairy Tales, fought over Kingdom Hearts and the χ-blade. It shattered the world into the many separate worlds of today and left the Keyblade Graveyard — and Xehanort means to start it again." },
  { cat:"Keyblades & Power", sigil:"✦", title:"Mark of Mastery", color:"#f0c44e",
    body:"The exam that elevates a Keyblade wielder to true Master. Passing it (Aqua, Riku, Mickey) and failing it (Terra, nearly Sora) repeatedly decides who falls to Xehanort's schemes — the rite is a trap as often as an honor." },
  { cat:"Keyblades & Power", sigil:"❂", title:"Power of Waking", color:"#5ad6ff",
    body:"Sora's ability to travel between hearts and rouse those lost in sleep or darkness. It's how he reaches Ventus, Aqua, and his fallen friends in the final war — and, used past its limit to save Kairi, the power that costs Sora himself." },

  /* ===== Worlds & Forces ===== */
  { cat:"Worlds & Forces", sigil:"♛", title:"Kingdom Hearts", color:"#f0c44e",
    body:"The heart of all worlds and the source of all light — a vast repository of hearts, often appearing as a great heart-shaped moon. Whoever opens it could remake everything, which is why villain after villain reaches for it." },
  { cat:"Worlds & Forces", sigil:"◐", title:"Realms of Light & Darkness", color:"#b15cff",
    body:"Reality is layered: the Realm of Light (the ordinary worlds), the Realm of Darkness beneath it (where Aqua is lost for years), and the realms between. Dark corridors let travelers slip between them — at the risk of being claimed by the dark." },
  { cat:"Worlds & Forces", sigil:"✶", title:"Princesses of Heart", color:"#ff7ab0",
    body:"Seven maidens whose hearts hold no darkness at all. Together their light can reveal the door to Kingdom Hearts, making them the targets of KH1's villains. Kairi is one — which is why she's hunted, and why her heart could shelter in Sora's." },
  { cat:"Worlds & Forces", sigil:"XIII", title:"Organization XIII", color:"#aab2c4",
    body:"Two Organizations share the name: the original thirteen Nobodies who sought hearts to become whole, and the 'true' Organization — thirteen vessels of Xehanort gathered across time to forge the χ-blade. Telling them apart is half the saga's puzzle." },
  { cat:"Worlds & Forces", sigil:"❖", title:"The Book of Prophecies", color:"#cdb86a",
    body:"The Master of Masters' record of the future, copied and divided among the Foretellers. Its prophecies of the Keyblade War set the Age of Fairy Tales in motion — and its missing pages and hidden agendas still drive the mysteries of the new saga." },
  { cat:"Worlds & Forces", sigil:"◈", title:"Quadratum & Unreality", color:"#5ad6ff",
    body:"A vast city-world of 'unreality' — a realm of the dead beyond the known worlds — where Sora awakens after vanishing. It opens the next saga, tangled up with the Master of Masters, the Lost Masters, the Lich, and the long-sought Black Box." },
];
