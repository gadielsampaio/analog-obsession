export interface CategoryDefinition {
  slug: string;
  number: string;
  navLabel: string;
  homeLabel: string;
  directoryNote: string;
  signal: string;
  titleLines: readonly string[];
  heroMeta: readonly [string, string];
  catalogLabel: string;
  pageTitle: string;
  description: string;
  footerLabel: string;
}

export const categories = [
  {
    "slug": "equalization",
    "number": "01",
    "navLabel": "EQ",
    "homeLabel": "EQUALIZATION",
    "directoryNote": "FREQUENCY / TONE / FILTERING",
    "signal": "IN → FREQ → OUT",
    "titleLines": [
      "EQUALIZATION"
    ],
    "heroMeta": [
      "FREQUENCY MANIPULATION",
      "ANALOG HARDWARE EMULATION"
    ],
    "catalogLabel": "EQ MODULES",
    "pageTitle": "EQUALIZATION - ANALOG OBSESSION",
    "description": "Equalization — Analog Obsession plugin directory.",
    "footerLabel": "DIRECTORY // EQUALIZATION 01"
  },
  {
    "slug": "dynamics",
    "number": "02",
    "navLabel": "DYNAMICS",
    "homeLabel": "DYNAMIC PROCESSING",
    "directoryNote": "COMPRESSION / LIMITING / TRANSIENT",
    "signal": "IN → LEVEL → OUT",
    "titleLines": [
      "DYNAMIC",
      "PROCESSING"
    ],
    "heroMeta": [
      "COMPRESSION / TRANSIENT / GATE",
      "OFFICIAL RELEASE LINKS"
    ],
    "catalogLabel": "DYNAMIC MODULES",
    "pageTitle": "DYNAMIC PROCESSING — ANALOG OBSESSION",
    "description": "DYNAMIC PROCESSING — Analog Obsession plugin directory.",
    "footerLabel": "DIRECTORY // DYNAMIC PROCESSING 02"
  },
  {
    "slug": "color-preamp-saturation",
    "number": "03",
    "navLabel": "COLOR / PRE",
    "homeLabel": "COLOR / PREAMP / SATURATION",
    "directoryNote": "HARMONICS / GAIN / CHARACTER",
    "signal": "IN → GAIN → COLOR",
    "titleLines": [
      "COLOR / PREAMP",
      "SATURATION"
    ],
    "heroMeta": [
      "PREAMP / SATURATION / COLOR",
      "OFFICIAL RELEASE LINKS"
    ],
    "catalogLabel": "COLOR / PREAMP MODULES",
    "pageTitle": "COLOR / PREAMP / SATURATION — ANALOG OBSESSION",
    "description": "COLOR / PREAMP / SATURATION — Analog Obsession plugin directory.",
    "footerLabel": "DIRECTORY // COLOR / PREAMP / SATURATION 03"
  },
  {
    "slug": "channel-strip",
    "number": "04",
    "navLabel": "CHANNEL",
    "homeLabel": "CHANNEL STRIP",
    "directoryNote": "COMBINED SIGNAL PROCESSING",
    "signal": "IN → STRIP → OUT",
    "titleLines": [
      "CHANNEL STRIP"
    ],
    "heroMeta": [
      "MULTI-STAGE PROCESSING",
      "OFFICIAL RELEASE LINKS"
    ],
    "catalogLabel": "CHANNEL STRIPS",
    "pageTitle": "CHANNEL STRIP — ANALOG OBSESSION",
    "description": "CHANNEL STRIP — Analog Obsession plugin directory.",
    "footerLabel": "DIRECTORY // CHANNEL STRIP 04"
  },
  {
    "slug": "bundles",
    "number": "05",
    "navLabel": "BUNDLES",
    "homeLabel": "BUNDLE",
    "directoryNote": "GROUPED RELEASES / MATCHED SETS",
    "signal": "SET → GROUP → OUT",
    "titleLines": [
      "BUNDLES"
    ],
    "heroMeta": [
      "GROUPED RELEASES",
      "OFFICIAL RELEASE LINKS"
    ],
    "catalogLabel": "BUNDLES",
    "pageTitle": "BUNDLE — ANALOG OBSESSION",
    "description": "BUNDLE — Analog Obsession plugin directory.",
    "footerLabel": "DIRECTORY // BUNDLE 05"
  }
] as const satisfies readonly CategoryDefinition[];

export type Category = (typeof categories)[number];
export type CategorySlug = Category['slug'];

export interface PluginSpec {
  label: string;
  value: string;
}

export interface Plugin {
  id: string;
  category: CategorySlug;
  number: string;
  tag: string;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
  url: string;
  specs: readonly PluginSpec[];
}

export const plugins = [
  {
    "id": "equalization-indeq",
    "category": "equalization",
    "number": "001",
    "tag": "INDUCTOR",
    "name": "INDEQ",
    "description": "Pure inductor based equalizer!",
    "image": "https://analogobsession.com/wp-content/uploads/2025/08/INDEQ-1024x576.png",
    "imageAlt": "INDEQ Equalizer",
    "url": "https://www.patreon.com/posts/135944425",
    "specs": [
      {
        "label": "TYPE",
        "value": "Inductor Based"
      },
      {
        "label": "CHANNELS",
        "value": "Stereo / Dual Mono"
      }
    ]
  },
  {
    "id": "equalization-poortec",
    "category": "equalization",
    "number": "002",
    "tag": "PASSIVE",
    "name": "POORTEC",
    "description": "Not just another P*LT*C!",
    "image": "https://analogobsession.com/wp-content/uploads/2025/01/POORTEC-1024x576.png",
    "imageAlt": "POORTEC Equalizer",
    "url": "https://www.patreon.com/posts/poortec-119632465",
    "specs": [
      {
        "label": "TYPE",
        "value": "Passive Tube EQ"
      },
      {
        "label": "BANDS",
        "value": "Low / High (Boost/Atten)"
      }
    ]
  },
  {
    "id": "equalization-tilta",
    "category": "equalization",
    "number": "003",
    "tag": "TILT",
    "name": "TILTA",
    "description": "Easy to use Tilt Equalizer! No need any other words!",
    "image": "https://analogobsession.com/wp-content/uploads/2023/12/TILTA-1024x665.png",
    "imageAlt": "TILTA Equalizer",
    "url": "https://www.patreon.com/posts/tilta-63538579",
    "specs": [
      {
        "label": "TYPE",
        "value": "Tilt EQ"
      },
      {
        "label": "CONTROL",
        "value": "Continuous Center Freq"
      }
    ]
  },
  {
    "id": "equalization-steq",
    "category": "equalization",
    "number": "004",
    "tag": "CONSOLE",
    "name": "STEQ",
    "description": "Small format console eq from well known tape machine brand.",
    "image": "https://analogobsession.com/wp-content/uploads/2023/12/STEQ-1024x665.png",
    "imageAlt": "STEQ Equalizer",
    "url": "https://www.patreon.com/posts/steq-35318911",
    "specs": [
      {
        "label": "TYPE",
        "value": "Console EQ"
      },
      {
        "label": "FORMAT",
        "value": "Compact Channel"
      }
    ]
  },
  {
    "id": "equalization-ssq",
    "category": "equalization",
    "number": "005",
    "tag": "CONSOLE",
    "name": "SSQ",
    "description": "Famous console equalizer with 4x oversampling and more features!",
    "image": "https://analogobsession.com/wp-content/uploads/2023/12/SSQ-1024x665.png",
    "imageAlt": "SSQ Equalizer",
    "url": "https://www.patreon.com/posts/ssq-54598496",
    "specs": [
      {
        "label": "TYPE",
        "value": "British Console EQ"
      },
      {
        "label": "ENGINE",
        "value": "4x Oversampling"
      }
    ]
  },
  {
    "id": "equalization-oaq",
    "category": "equalization",
    "number": "006",
    "tag": "MASTERING",
    "name": "OAQ",
    "description": "Mastering degree Dual-Mono/Stereo/Mid-Side equalizer.",
    "image": "https://analogobsession.com/wp-content/uploads/2023/12/OAQ-1024x665.png",
    "imageAlt": "OAQ Equalizer",
    "url": "https://www.patreon.com/posts/oaq-69993062",
    "specs": [
      {
        "label": "APPLICATION",
        "value": "Master Bus"
      },
      {
        "label": "ROUTING",
        "value": "L-R / M-S"
      }
    ]
  },
  {
    "id": "equalization-n492me",
    "category": "equalization",
    "number": "007",
    "tag": "MASTERING",
    "name": "N492ME",
    "description": "4 Band Mastering Equalizer with High Pass Filter.",
    "image": "https://analogobsession.com/wp-content/uploads/2023/12/N492ME-1024x665.png",
    "imageAlt": "N492ME Equalizer",
    "url": "https://www.patreon.com/posts/n492me-34323127",
    "specs": [
      {
        "label": "BANDS",
        "value": "4 + HPF"
      },
      {
        "label": "CIRCUIT",
        "value": "Discrete Op-Amps"
      }
    ]
  },
  {
    "id": "equalization-mpreq",
    "category": "equalization",
    "number": "008",
    "tag": "PRE / EQ",
    "name": "MPReq",
    "description": "Vintage mic preamp & program eq from 1960s.",
    "image": "https://analogobsession.com/wp-content/uploads/2023/12/MPReq-1024x665.png",
    "imageAlt": "MPReq Equalizer",
    "url": "https://www.patreon.com/posts/mpreq-34293647",
    "specs": [
      {
        "label": "ERA",
        "value": "1960s"
      },
      {
        "label": "FUNCTION",
        "value": "Preamp + Program EQ"
      }
    ]
  },
  {
    "id": "equalization-maxbax",
    "category": "equalization",
    "number": "009",
    "tag": "BAXANDALL",
    "name": "MAXBAX",
    "description": "Fully passive Baxandall eq with extra Mid band!",
    "image": "https://analogobsession.com/wp-content/uploads/2023/12/MAXBAX-1024x665.png",
    "imageAlt": "MAXBAX Equalizer",
    "url": "https://www.patreon.com/posts/maxbax-64791433",
    "specs": [
      {
        "label": "TYPE",
        "value": "Passive Baxandall"
      },
      {
        "label": "BANDS",
        "value": "Low / Mid / High"
      }
    ]
  },
  {
    "id": "equalization-ureq",
    "category": "equalization",
    "number": "010",
    "tag": "STRIPPED",
    "name": "UREQ",
    "description": "U-Style Stripped Down Classic Equalizer!",
    "image": "https://analogobsession.com/wp-content/uploads/2023/08/UREQ-1024x665.png",
    "imageAlt": "UREQ Equalizer",
    "url": "https://www.patreon.com/posts/88488633",
    "specs": [
      {
        "label": "STYLE",
        "value": "U-Style Classic"
      },
      {
        "label": "INTERFACE",
        "value": "Stripped Down"
      }
    ]
  },
  {
    "id": "equalization-treq",
    "category": "equalization",
    "number": "011",
    "tag": "CONSOLE",
    "name": "TREQ",
    "description": "T-Style Classic Four Band Equalizer!",
    "image": "https://analogobsession.com/wp-content/uploads/2023/07/TREQ-1024x665.png",
    "imageAlt": "TREQ Equalizer",
    "url": "https://www.patreon.com/posts/34323331",
    "specs": [
      {
        "label": "STYLE",
        "value": "T-Style Classic"
      },
      {
        "label": "BANDS",
        "value": "4 Band Parametric"
      }
    ]
  },
  {
    "id": "equalization-frank",
    "category": "equalization",
    "number": "012",
    "tag": "ULTIMATE",
    "name": "FRANK",
    "description": "Ultimate analog equalizer is now better than ever!",
    "image": "https://analogobsession.com/wp-content/uploads/2023/05/Frank-1024x665.png",
    "imageAlt": "Frank Equalizer",
    "url": "https://www.patreon.com/posts/f-bundle-83415951",
    "specs": [
      {
        "label": "TYPE",
        "value": "Hybrid Analog"
      },
      {
        "label": "STATUS",
        "value": "V2 Engine"
      }
    ]
  },
  {
    "id": "equalization-blendeq",
    "category": "equalization",
    "number": "013",
    "tag": "DUAL-CIRCUIT",
    "name": "BLENDEQ",
    "description": "\"Dual-Circuit\" analog modeling equalizer with \"Blendable\" bands.",
    "image": "https://analogobsession.com/wp-content/uploads/2023/05/BLENDEQ-1024x665.png",
    "imageAlt": "BLENDEQ Equalizer",
    "url": "https://www.patreon.com/posts/67460087",
    "specs": [
      {
        "label": "ARCHITECTURE",
        "value": "Dual-Circuit"
      },
      {
        "label": "FEATURE",
        "value": "Per-Band Blend"
      }
    ]
  },
  {
    "id": "equalization-bxq",
    "category": "equalization",
    "number": "014",
    "tag": "BAXANDALL",
    "name": "BXQ",
    "description": "Baxandall EQ with Left/Right & Mid/Side processing.",
    "image": "https://analogobsession.com/wp-content/uploads/2023/05/BXQ-1024x665.png",
    "imageAlt": "BXQ Equalizer",
    "url": "https://www.patreon.com/posts/35000375",
    "specs": [
      {
        "label": "TYPE",
        "value": "Baxandall"
      },
      {
        "label": "ROUTING",
        "value": "L-R / M-S"
      }
    ]
  },
  {
    "id": "equalization-fiver",
    "category": "equalization",
    "number": "015",
    "tag": "PARAMETRIC",
    "name": "FIVER",
    "description": "Versatile five bands equalizer with low/high shelf and three variable bandwidth bands.",
    "image": "https://analogobsession.com/wp-content/uploads/2026/01/FIVER-1024x576.png",
    "imageAlt": "FIVER Equalizer",
    "url": "https://www.patreon.com/posts/48483719",
    "specs": [
      {
        "label": "BANDS",
        "value": "5 (2 Shelf + 3 Bell)"
      },
      {
        "label": "Q-FACTOR",
        "value": "Continuously Variable"
      }
    ]
  },
  {
    "id": "equalization-g395a",
    "category": "equalization",
    "number": "016",
    "tag": "CLASS A",
    "name": "G395A",
    "description": "Early 70s discrete/Class A 3-Band EQ with selectable mid and fixed hi/lo frequencies.",
    "image": "https://analogobsession.com/wp-content/uploads/2023/05/G395a-1024x665.png",
    "imageAlt": "G395a Equalizer",
    "url": "https://www.patreon.com/posts/50059272",
    "specs": [
      {
        "label": "CIRCUIT",
        "value": "Discrete Class A"
      },
      {
        "label": "ERA",
        "value": "Early 1970s"
      }
    ]
  },
  {
    "id": "equalization-harqules",
    "category": "equalization",
    "number": "017",
    "tag": "COLOR EQ",
    "name": "HARQULES",
    "description": "Colorfully smooth eq with silky highs. Shape your sound as you want.",
    "image": "https://analogobsession.com/wp-content/uploads/2023/05/Harqules-1024x665.png",
    "imageAlt": "Harqules Equalizer",
    "url": "https://www.patreon.com/posts/34306427",
    "specs": [
      {
        "label": "CHARACTER",
        "value": "Smooth / Silky Highs"
      },
      {
        "label": "APPLICATION",
        "value": "Tone Shaping"
      }
    ]
  },
  {
    "id": "equalization-hlqse",
    "category": "equalization",
    "number": "018",
    "tag": "TYPE 69",
    "name": "HLQSE",
    "description": "Type 69 style eq with discrete bands. Boost or cut bands at the same time!",
    "image": "https://analogobsession.com/wp-content/uploads/2023/05/HLQSE-1024x665.png",
    "imageAlt": "HLQSE Equalizer",
    "url": "https://www.patreon.com/posts/34292290",
    "specs": [
      {
        "label": "STYLE",
        "value": "Type 69"
      },
      {
        "label": "BANDS",
        "value": "Discrete Split"
      }
    ]
  },
  {
    "id": "equalization-graphack",
    "category": "equalization",
    "number": "019",
    "tag": "GRAPHIC",
    "name": "GRAPHACK",
    "description": "Where Analog meets Digital! Graphic equalization redefined.",
    "image": "https://analogobsession.com/wp-content/uploads/2023/04/GrapHack-1-1024x665.png",
    "imageAlt": "GrapHack Equalizer",
    "url": "https://www.patreon.com/posts/graphack-80663451",
    "specs": [
      {
        "label": "TYPE",
        "value": "Graphic / Digital Hybrid"
      },
      {
        "label": "INTERFACE",
        "value": "Sliders"
      }
    ]
  },
  {
    "id": "equalization-britchannel",
    "category": "equalization",
    "number": "020",
    "tag": "CHANNEL STRIP",
    "name": "BRITCHANNEL",
    "description": "Classic British Equalizer & Preamp with Line & Mic input!",
    "image": "https://analogobsession.com/wp-content/uploads/2023/04/BritChannel-1-1024x665.png",
    "imageAlt": "BritChannel Equalizer",
    "url": "https://www.patreon.com/posts/britbundle-79798060",
    "specs": [
      {
        "label": "CIRCUIT",
        "value": "British Class A/B"
      },
      {
        "label": "FUNCTION",
        "value": "Mic Pre + EQ"
      }
    ]
  },
  {
    "id": "dynamics-thebus",
    "category": "dynamics",
    "number": "001",
    "tag": "DYNAMICS",
    "name": "TheBus",
    "description": "No clone, no variant!",
    "image": "https://analogobsession.com/wp-content/uploads/2026/07/TheBus-1024x576.png",
    "imageAlt": "TheBus — Analog Obsession",
    "url": "https://www.patreon.com/analogobsession/posts/thebus-163129163?pr=true",
    "specs": [
      {
        "label": "SECTION",
        "value": "Dynamics"
      },
      {
        "label": "SOURCE",
        "value": "Official Patreon Post"
      }
    ]
  },
  {
    "id": "dynamics-muchild",
    "category": "dynamics",
    "number": "002",
    "tag": "DYNAMICS",
    "name": "MuChild",
    "description": "Holy Grail Of Compressors!",
    "image": "https://analogobsession.com/wp-content/uploads/2026/05/MuChild-1024x576.png",
    "imageAlt": "MuChild — Analog Obsession",
    "url": "https://www.patreon.com/posts/157419821?pr=true",
    "specs": [
      {
        "label": "SECTION",
        "value": "Dynamics"
      },
      {
        "label": "SOURCE",
        "value": "Official Patreon Post"
      }
    ]
  },
  {
    "id": "dynamics-laea",
    "category": "dynamics",
    "number": "003",
    "tag": "DYNAMICS",
    "name": "LAEA",
    "description": "Solid-State Optical Compressor!",
    "image": "https://analogobsession.com/wp-content/uploads/2026/03/LAEA-1024x576.png",
    "imageAlt": "LAEA — Analog Obsession",
    "url": "https://www.patreon.com/posts/153437904?pr=true",
    "specs": [
      {
        "label": "SECTION",
        "value": "Dynamics"
      },
      {
        "label": "SOURCE",
        "value": "Official Patreon Post"
      }
    ]
  },
  {
    "id": "dynamics-edcomp",
    "category": "dynamics",
    "number": "004",
    "tag": "DYNAMICS",
    "name": "EDComp",
    "description": "Pre-emphasis and De-emphasis based compressor!",
    "image": "https://analogobsession.com/wp-content/uploads/2025/05/EDComp.png",
    "imageAlt": "EDComp — Analog Obsession",
    "url": "https://www.patreon.com/posts/129902016?pr=true",
    "specs": [
      {
        "label": "SECTION",
        "value": "Dynamics"
      },
      {
        "label": "SOURCE",
        "value": "Official Patreon Post"
      }
    ]
  },
  {
    "id": "dynamics-attractor",
    "category": "dynamics",
    "number": "005",
    "tag": "DYNAMICS",
    "name": "ATTRACTOR",
    "description": "Dynamic processor with transient manipulation!",
    "image": "https://analogobsession.com/wp-content/uploads/2025/02/ATTRACTOR-1024x576.png",
    "imageAlt": "ATTRACTOR — Analog Obsession",
    "url": "https://www.patreon.com/posts/122556016?pr=true",
    "specs": [
      {
        "label": "SECTION",
        "value": "Dynamics"
      },
      {
        "label": "SOURCE",
        "value": "Official Patreon Post"
      }
    ]
  },
  {
    "id": "dynamics-drgate",
    "category": "dynamics",
    "number": "006",
    "tag": "DYNAMICS",
    "name": "DrGate",
    "description": "Drum Specific Gate Plug-in!",
    "image": "https://analogobsession.com/wp-content/uploads/2024/11/DrGate-1024x665.png",
    "imageAlt": "DrGate — Analog Obsession",
    "url": "https://www.patreon.com/posts/116225259?pr=true",
    "specs": [
      {
        "label": "SECTION",
        "value": "Dynamics"
      },
      {
        "label": "SOURCE",
        "value": "Official Patreon Post"
      }
    ]
  },
  {
    "id": "dynamics-loades",
    "category": "dynamics",
    "number": "007",
    "tag": "DYNAMICS",
    "name": "LOADES",
    "description": "Smooth & powerful de-esser!",
    "image": "https://analogobsession.com/wp-content/uploads/2024/09/LOADES-1024x665.png",
    "imageAlt": "LOADES — Analog Obsession",
    "url": "https://www.patreon.com/posts/62370686",
    "specs": [
      {
        "label": "SECTION",
        "value": "Dynamics"
      },
      {
        "label": "SOURCE",
        "value": "Official Patreon Post"
      }
    ]
  },
  {
    "id": "dynamics-trax",
    "category": "dynamics",
    "number": "008",
    "tag": "DYNAMICS",
    "name": "TRAX",
    "description": "Easy to and versatile transient designer!",
    "image": "https://analogobsession.com/wp-content/uploads/2024/02/TRAX-1024x665.png",
    "imageAlt": "TRAX — Analog Obsession",
    "url": "https://www.patreon.com/posts/70970958",
    "specs": [
      {
        "label": "SECTION",
        "value": "Dynamics"
      },
      {
        "label": "SOURCE",
        "value": "Official Patreon Post"
      }
    ]
  },
  {
    "id": "dynamics-fetcb",
    "category": "dynamics",
    "number": "009",
    "tag": "DYNAMICS",
    "name": "FetCB",
    "description": "Forgotten Beast Alive!",
    "image": "https://analogobsession.com/wp-content/uploads/2023/11/FetCB-1024x665.png",
    "imageAlt": "FetCB — Analog Obsession",
    "url": "https://www.patreon.com/posts/92444426?pr=true",
    "specs": [
      {
        "label": "SECTION",
        "value": "Dynamics"
      },
      {
        "label": "SOURCE",
        "value": "Official Patreon Post"
      }
    ]
  },
  {
    "id": "dynamics-kolinmb",
    "category": "dynamics",
    "number": "010",
    "tag": "DYNAMICS",
    "name": "KolinMB",
    "description": "Vintage limiting amplifier Kolin is multi-band, now!",
    "image": "https://analogobsession.com/wp-content/uploads/2023/06/KolinMB-1-1024x665.png",
    "imageAlt": "KolinMB — Analog Obsession",
    "url": "https://www.patreon.com/posts/85062886?pr=true",
    "specs": [
      {
        "label": "SECTION",
        "value": "Dynamics"
      },
      {
        "label": "SOURCE",
        "value": "Official Patreon Post"
      }
    ]
  },
  {
    "id": "dynamics-fetish",
    "category": "dynamics",
    "number": "011",
    "tag": "DYNAMICS",
    "name": "FETish",
    "description": "Classic FET Compressor/Limiter with extra features!",
    "image": "https://analogobsession.com/wp-content/uploads/2023/04/FETish-1024x665.png",
    "imageAlt": "FETish — Analog Obsession",
    "url": "https://www.patreon.com/posts/51962024",
    "specs": [
      {
        "label": "SECTION",
        "value": "Dynamics"
      },
      {
        "label": "SOURCE",
        "value": "Official Patreon Post"
      }
    ]
  },
  {
    "id": "dynamics-fetsnap",
    "category": "dynamics",
    "number": "012",
    "tag": "DYNAMICS",
    "name": "FetSnap",
    "description": "Modified side-chain from classic FET Compressor to create transient designer!",
    "image": "https://analogobsession.com/wp-content/uploads/2023/04/FetSnap-1024x665.png",
    "imageAlt": "FetSnap — Analog Obsession",
    "url": "https://www.patreon.com/posts/51962024",
    "specs": [
      {
        "label": "SECTION",
        "value": "Dynamics"
      },
      {
        "label": "SOURCE",
        "value": "Official Patreon Post"
      }
    ]
  },
  {
    "id": "dynamics-comper",
    "category": "dynamics",
    "number": "013",
    "tag": "DYNAMICS",
    "name": "COMPER",
    "description": "“Multi-Mode”, “Serial Compression” with “Switchable” and “Blendable” circuits!",
    "image": "https://analogobsession.com/wp-content/uploads/2023/04/COMPER-1-1024x665.png",
    "imageAlt": "COMPER — Analog Obsession",
    "url": "https://www.patreon.com/posts/comper-74729047",
    "specs": [
      {
        "label": "SECTION",
        "value": "Dynamics"
      },
      {
        "label": "SOURCE",
        "value": "Official Patreon Post"
      }
    ]
  },
  {
    "id": "dynamics-dbcomp",
    "category": "dynamics",
    "number": "014",
    "tag": "DYNAMICS",
    "name": "dBComp",
    "description": "Great drum compressor / limiter for studio and live use!",
    "image": "https://analogobsession.com/wp-content/uploads/2023/04/dBComp-1-1024x665.png",
    "imageAlt": "dBComp — Analog Obsession",
    "url": "https://www.patreon.com/posts/dbcomp-56933944",
    "specs": [
      {
        "label": "SECTION",
        "value": "Dynamics"
      },
      {
        "label": "SOURCE",
        "value": "Official Patreon Post"
      }
    ]
  },
  {
    "id": "dynamics-busterse",
    "category": "dynamics",
    "number": "015",
    "tag": "DYNAMICS",
    "name": "BUSTERse",
    "description": "Classic console compressor with extra Filter and Transient sidechain options to dominate whole signal!",
    "image": "https://analogobsession.com/wp-content/uploads/2023/04/BUSTERse-1-1024x665.png",
    "imageAlt": "BUSTERse — Analog Obsession",
    "url": "https://www.patreon.com/posts/busterse-42658623",
    "specs": [
      {
        "label": "SECTION",
        "value": "Dynamics"
      },
      {
        "label": "SOURCE",
        "value": "Official Patreon Post"
      }
    ]
  },
  {
    "id": "dynamics-varimoon",
    "category": "dynamics",
    "number": "016",
    "tag": "DYNAMICS",
    "name": "VariMoon",
    "description": "Famous 600 Style Vari-Mu Compressor/Limiter with extra features!",
    "image": "https://analogobsession.com/wp-content/uploads/2023/04/VariMoon-1-1024x665.png",
    "imageAlt": "VariMoon — Analog Obsession",
    "url": "https://www.patreon.com/posts/varimoon-34323360",
    "specs": [
      {
        "label": "SECTION",
        "value": "Dynamics"
      },
      {
        "label": "SOURCE",
        "value": "Official Patreon Post"
      }
    ]
  },
  {
    "id": "dynamics-oss",
    "category": "dynamics",
    "number": "017",
    "tag": "DYNAMICS",
    "name": "OSS",
    "description": "176 style compressor with improved sidechain section!",
    "image": "https://analogobsession.com/wp-content/uploads/2023/04/OSS-1-1024x665.png",
    "imageAlt": "OSS — Analog Obsession",
    "url": "https://www.patreon.com/posts/oss-34292591",
    "specs": [
      {
        "label": "SECTION",
        "value": "Dynamics"
      },
      {
        "label": "SOURCE",
        "value": "Official Patreon Post"
      }
    ]
  },
  {
    "id": "dynamics-lala",
    "category": "dynamics",
    "number": "018",
    "tag": "DYNAMICS",
    "name": "LALA",
    "description": "The go-to vocal compressor & standard in analog world!",
    "image": "https://analogobsession.com/wp-content/uploads/2023/04/LALA-1-1024x665.png",
    "imageAlt": "LALA — Analog Obsession",
    "url": "https://www.patreon.com/posts/lala-36128829",
    "specs": [
      {
        "label": "SECTION",
        "value": "Dynamics"
      },
      {
        "label": "SOURCE",
        "value": "Official Patreon Post"
      }
    ]
  },
  {
    "id": "dynamics-yala",
    "category": "dynamics",
    "number": "019",
    "tag": "DYNAMICS",
    "name": "YALA",
    "description": "Iconic Vari-Mu limiting amplifier with extra features!",
    "image": "https://analogobsession.com/wp-content/uploads/2023/04/YALA-1-1024x665.png",
    "imageAlt": "YALA — Analog Obsession",
    "url": "https://www.patreon.com/posts/yala-34323384",
    "specs": [
      {
        "label": "SECTION",
        "value": "Dynamics"
      },
      {
        "label": "SOURCE",
        "value": "Official Patreon Post"
      }
    ]
  },
  {
    "id": "dynamics-kolin",
    "category": "dynamics",
    "number": "020",
    "tag": "DYNAMICS",
    "name": "Kolin",
    "description": "Vintage limiting amplifier with additional features like adjustable attack and release!",
    "image": "https://analogobsession.com/wp-content/uploads/2023/04/Kolin-1-1024x665.png",
    "imageAlt": "Kolin — Analog Obsession",
    "url": "https://www.patreon.com/posts/49184069",
    "specs": [
      {
        "label": "SECTION",
        "value": "Dynamics"
      },
      {
        "label": "SOURCE",
        "value": "Official Patreon Post"
      }
    ]
  },
  {
    "id": "dynamics-britpressor",
    "category": "dynamics",
    "number": "021",
    "tag": "DYNAMICS",
    "name": "Britpressor",
    "description": "Classic British Compressor!",
    "image": "https://analogobsession.com/wp-content/uploads/2023/04/Britpressor-1-1024x665.png",
    "imageAlt": "Britpressor — Analog Obsession",
    "url": "https://www.patreon.com/posts/britbundle-79798060",
    "specs": [
      {
        "label": "SECTION",
        "value": "Dynamics"
      },
      {
        "label": "SOURCE",
        "value": "Official Patreon Post"
      }
    ]
  },
  {
    "id": "color-preamp-saturation-thedi",
    "category": "color-preamp-saturation",
    "number": "001",
    "tag": "COLOR / PREAMP",
    "name": "THEDI",
    "description": "Famous colored DI BOX in the box!",
    "image": "https://analogobsession.com/wp-content/uploads/2026/08/THEDI-1024x576.png",
    "imageAlt": "THEDI — Analog Obsession",
    "url": "https://www.patreon.com/analogobsession/posts/thedi-165629782",
    "specs": [
      {
        "label": "SECTION",
        "value": "Color / Preamp"
      },
      {
        "label": "SOURCE",
        "value": "Official Patreon Post"
      }
    ]
  },
  {
    "id": "color-preamp-saturation-lovend",
    "category": "color-preamp-saturation",
    "number": "002",
    "tag": "COLOR / PREAMP",
    "name": "LOVEND",
    "description": "Harmonic – Bass Enhancer!",
    "image": "https://analogobsession.com/wp-content/uploads/2026/06/LOVEND-1024x576.png",
    "imageAlt": "LOVEND — Analog Obsession",
    "url": "https://www.patreon.com/posts/34669483",
    "specs": [
      {
        "label": "SECTION",
        "value": "Color / Preamp"
      },
      {
        "label": "SOURCE",
        "value": "Official Patreon Post"
      }
    ]
  },
  {
    "id": "color-preamp-saturation-razorclip",
    "category": "color-preamp-saturation",
    "number": "003",
    "tag": "COLOR / PREAMP",
    "name": "RazorClip",
    "description": "Ideally analog modeled clipper!",
    "image": "https://analogobsession.com/wp-content/uploads/2026/02/RazorClip-1024x576.png",
    "imageAlt": "RazorClip — Analog Obsession",
    "url": "https://www.patreon.com/posts/151529497",
    "specs": [
      {
        "label": "SECTION",
        "value": "Color / Preamp"
      },
      {
        "label": "SOURCE",
        "value": "Official Patreon Post"
      }
    ]
  },
  {
    "id": "color-preamp-saturation-midboss",
    "category": "color-preamp-saturation",
    "number": "004",
    "tag": "COLOR / PREAMP",
    "name": "MidBoss",
    "description": "Rule the mids!",
    "image": "https://analogobsession.com/wp-content/uploads/2025/10/MidBoss-1024x576.png",
    "imageAlt": "MidBoss — Analog Obsession",
    "url": "https://www.patreon.com/posts/141665938?pr=true",
    "specs": [
      {
        "label": "SECTION",
        "value": "Color / Preamp"
      },
      {
        "label": "SOURCE",
        "value": "Official Patreon Post"
      }
    ]
  },
  {
    "id": "color-preamp-saturation-mythpre",
    "category": "color-preamp-saturation",
    "number": "005",
    "tag": "COLOR / PREAMP",
    "name": "MythPre",
    "description": "Low-End focused tube preamp!",
    "image": "https://analogobsession.com/wp-content/uploads/2025/04/MythPre-1024x576.png",
    "imageAlt": "MythPre — Analog Obsession",
    "url": "https://www.patreon.com/posts/126118073?pr=true",
    "specs": [
      {
        "label": "SECTION",
        "value": "Color / Preamp"
      },
      {
        "label": "SOURCE",
        "value": "Official Patreon Post"
      }
    ]
  },
  {
    "id": "color-preamp-saturation-relife",
    "category": "color-preamp-saturation",
    "number": "006",
    "tag": "COLOR / PREAMP",
    "name": "ReLife",
    "description": "Your tracks deserve a second chance!",
    "image": "https://analogobsession.com/wp-content/uploads/2024/10/ReLife-1024x665.png",
    "imageAlt": "ReLife — Analog Obsession",
    "url": "https://www.patreon.com/posts/58488732",
    "specs": [
      {
        "label": "SECTION",
        "value": "Color / Preamp"
      },
      {
        "label": "SOURCE",
        "value": "Official Patreon Post"
      }
    ]
  },
  {
    "id": "color-preamp-saturation-cite",
    "category": "color-preamp-saturation",
    "number": "007",
    "tag": "COLOR / PREAMP",
    "name": "CITE",
    "description": "Easy to use High Frequency Processor!",
    "image": "https://analogobsession.com/wp-content/uploads/2024/05/CITE-1024x665.png",
    "imageAlt": "CITE — Analog Obsession",
    "url": "https://www.patreon.com/posts/105307600?pr=true",
    "specs": [
      {
        "label": "SECTION",
        "value": "Color / Preamp"
      },
      {
        "label": "SOURCE",
        "value": "Official Patreon Post"
      }
    ]
  },
  {
    "id": "color-preamp-saturation-color-bundle",
    "category": "color-preamp-saturation",
    "number": "008",
    "tag": "COLOR / PREAMP",
    "name": "COLOR BUNDLE",
    "description": "Multi-Mode distortion plugin!",
    "image": "https://analogobsession.com/wp-content/uploads/2024/05/COLOR_BUNDLE-1024x665.png",
    "imageAlt": "COLOR BUNDLE — Analog Obsession",
    "url": "https://www.patreon.com/posts/color-bundle-97654574",
    "specs": [
      {
        "label": "SECTION",
        "value": "Color / Preamp"
      },
      {
        "label": "SOURCE",
        "value": "Official Patreon Post"
      }
    ]
  },
  {
    "id": "color-preamp-saturation-moma",
    "category": "color-preamp-saturation",
    "number": "009",
    "tag": "COLOR / PREAMP",
    "name": "MoMa",
    "description": "Here is Mojo MAster plug-in ‘MoMa’!",
    "image": "https://analogobsession.com/wp-content/uploads/2024/03/MoMa-1024x665.png",
    "imageAlt": "MoMa — Analog Obsession",
    "url": "https://www.patreon.com/posts/100041804",
    "specs": [
      {
        "label": "SECTION",
        "value": "Color / Preamp"
      },
      {
        "label": "SOURCE",
        "value": "Official Patreon Post"
      }
    ]
  },
  {
    "id": "color-preamp-saturation-tuba",
    "category": "color-preamp-saturation",
    "number": "010",
    "tag": "COLOR / PREAMP",
    "name": "TUBA",
    "description": "Based on famous tube console. DIY version of original hardware with mods!",
    "image": "https://analogobsession.com/wp-content/uploads/2023/04/TUBA-1-1024x665.png",
    "imageAlt": "TUBA — Analog Obsession",
    "url": "https://www.patreon.com/posts/49184069",
    "specs": [
      {
        "label": "SECTION",
        "value": "Color / Preamp"
      },
      {
        "label": "SOURCE",
        "value": "Official Patreon Post"
      }
    ]
  },
  {
    "id": "color-preamp-saturation-britpre",
    "category": "color-preamp-saturation",
    "number": "011",
    "tag": "COLOR / PREAMP",
    "name": "BritPre",
    "description": "Classic British Preamp with Filters!",
    "image": "https://analogobsession.com/wp-content/uploads/2023/04/BritPre-1-1024x665.png",
    "imageAlt": "BritPre — Analog Obsession",
    "url": "https://www.patreon.com/posts/britbundle-79798060",
    "specs": [
      {
        "label": "SECTION",
        "value": "Color / Preamp"
      },
      {
        "label": "SOURCE",
        "value": "Official Patreon Post"
      }
    ]
  },
  {
    "id": "color-preamp-saturation-tupre",
    "category": "color-preamp-saturation",
    "number": "012",
    "tag": "COLOR / PREAMP",
    "name": "TuPre",
    "description": "Tube line amp with custom passive program equalizer. Colorful and solid design for you!",
    "image": "https://analogobsession.com/wp-content/uploads/2023/04/TuPre-1-1024x665.png",
    "imageAlt": "TuPre — Analog Obsession",
    "url": "https://www.patreon.com/posts/49184069",
    "specs": [
      {
        "label": "SECTION",
        "value": "Color / Preamp"
      },
      {
        "label": "SOURCE",
        "value": "Official Patreon Post"
      }
    ]
  },
  {
    "id": "color-preamp-saturation-fetdrive",
    "category": "color-preamp-saturation",
    "number": "013",
    "tag": "COLOR / PREAMP",
    "name": "FetDrive",
    "description": "Classic FET Compressor’s Saturation",
    "image": "https://analogobsession.com/wp-content/uploads/2023/04/FetDrive-1024x665.png",
    "imageAlt": "FetDrive — Analog Obsession",
    "url": "https://www.patreon.com/posts/51962024",
    "specs": [
      {
        "label": "SECTION",
        "value": "Color / Preamp"
      },
      {
        "label": "SOURCE",
        "value": "Official Patreon Post"
      }
    ]
  },
  {
    "id": "channel-strip-atone",
    "category": "channel-strip",
    "number": "001",
    "tag": "CHANNEL STRIP",
    "name": "ATONE",
    "description": "A Channel Strip with A-Type EQ, Filters and 436 style Compressor!",
    "image": "https://analogobsession.com/wp-content/uploads/2024/04/ATONE-1024x665.png",
    "imageAlt": "ATONE — Analog Obsession",
    "url": "https://www.patreon.com/posts/atone-102446579",
    "specs": [
      {
        "label": "SECTION",
        "value": "Channel Strip"
      },
      {
        "label": "SOURCE",
        "value": "Official Patreon Post"
      }
    ]
  },
  {
    "id": "channel-strip-frankcs",
    "category": "channel-strip",
    "number": "002",
    "tag": "CHANNEL STRIP",
    "name": "FrankCS",
    "description": "Better than ever with selectable preamp and compressor!",
    "image": "https://analogobsession.com/wp-content/uploads/2023/05/FrankCS-1024x665.png",
    "imageAlt": "FrankCS — Analog Obsession",
    "url": "https://www.patreon.com/posts/f-bundle-83415951",
    "specs": [
      {
        "label": "SECTION",
        "value": "Channel Strip"
      },
      {
        "label": "SOURCE",
        "value": "Official Patreon Post"
      }
    ]
  },
  {
    "id": "bundles-color-bundle",
    "category": "bundles",
    "number": "001",
    "tag": "BUNDLE",
    "name": "Color Bundle",
    "description": "Colorful saturation & distortion bundle!",
    "image": "https://analogobsession.com/wp-content/uploads/2024/02/COLOR_BUNDLE-1024x665.png",
    "imageAlt": "Color Bundle — Analog Obsession",
    "url": "https://www.patreon.com/posts/97654574",
    "specs": [
      {
        "label": "SECTION",
        "value": "Bundle"
      },
      {
        "label": "SOURCE",
        "value": "Official Patreon Post"
      }
    ]
  },
  {
    "id": "bundles-rare-bundle",
    "category": "bundles",
    "number": "002",
    "tag": "BUNDLE",
    "name": "Rare Bundle",
    "description": "Well known Vintage Program Equalizer with L/R & M/S processing feature!",
    "image": "https://analogobsession.com/wp-content/uploads/2023/10/Rare_Bundle-1024x665.png",
    "imageAlt": "Rare Bundle — Analog Obsession",
    "url": "https://www.patreon.com/posts/90832098?pr=true",
    "specs": [
      {
        "label": "SECTION",
        "value": "Bundle"
      },
      {
        "label": "SOURCE",
        "value": "Official Patreon Post"
      }
    ]
  },
  {
    "id": "bundles-american-bundle",
    "category": "bundles",
    "number": "003",
    "tag": "BUNDLE",
    "name": "American Bundle",
    "description": "Colorful Console Equalizer!",
    "image": "https://analogobsession.com/wp-content/uploads/2023/09/AMERICAN_BUNDLE-1-1024x576.png",
    "imageAlt": "American Bundle — Analog Obsession",
    "url": "https://www.patreon.com/posts/55358141",
    "specs": [
      {
        "label": "SECTION",
        "value": "Bundle"
      },
      {
        "label": "SOURCE",
        "value": "Official Patreon Post"
      }
    ]
  },
  {
    "id": "bundles-f-bundle",
    "category": "bundles",
    "number": "004",
    "tag": "BUNDLE",
    "name": "F-Bundle",
    "description": "Ultimate Equalizer with all colors!",
    "image": "https://analogobsession.com/wp-content/uploads/2023/05/F-Bundle-1024x665.png",
    "imageAlt": "F-Bundle — Analog Obsession",
    "url": "https://www.patreon.com/posts/51962024",
    "specs": [
      {
        "label": "SECTION",
        "value": "Bundle"
      },
      {
        "label": "SOURCE",
        "value": "Official Patreon Post"
      }
    ]
  },
  {
    "id": "bundles-fet-bundle",
    "category": "bundles",
    "number": "005",
    "tag": "BUNDLE",
    "name": "Fet Bundle",
    "description": "Feel the FAT & FET with each part!",
    "image": "https://analogobsession.com/wp-content/uploads/2023/04/FetBundle-1024x665.png",
    "imageAlt": "Fet Bundle — Analog Obsession",
    "url": "https://www.patreon.com/posts/51962024",
    "specs": [
      {
        "label": "SECTION",
        "value": "Bundle"
      },
      {
        "label": "SOURCE",
        "value": "Official Patreon Post"
      }
    ]
  },
  {
    "id": "bundles-britbundle",
    "category": "bundles",
    "number": "006",
    "tag": "BUNDLE",
    "name": "BritBundle",
    "description": "Classic British Equalizer & Preamp & Compressor!",
    "image": "https://analogobsession.com/wp-content/uploads/2023/04/BritBundle-1-1024x665.png",
    "imageAlt": "BritBundle — Analog Obsession",
    "url": "https://www.patreon.com/posts/britbundle-79798060",
    "specs": [
      {
        "label": "SECTION",
        "value": "Bundle"
      },
      {
        "label": "SOURCE",
        "value": "Official Patreon Post"
      }
    ]
  },
  {
    "id": "bundles-nos-bundle",
    "category": "bundles",
    "number": "007",
    "tag": "BUNDLE",
    "name": "NOS Bundle",
    "description": "All tube based plugins from same era!",
    "image": "https://analogobsession.com/wp-content/uploads/2023/04/NOSBundle-1-1024x665.png",
    "imageAlt": "NOS Bundle — Analog Obsession",
    "url": "https://www.patreon.com/posts/49184069",
    "specs": [
      {
        "label": "SECTION",
        "value": "Bundle"
      },
      {
        "label": "SOURCE",
        "value": "Official Patreon Post"
      }
    ]
  }
] as const satisfies readonly Plugin[];

export function getPluginsByCategory(category: CategorySlug) {
  return plugins.filter((plugin) => plugin.category === category);
}
