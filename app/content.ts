export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  group?: string;
}

export interface PageMeta {
  title: string;
  description: string;
  ogImage?: string;
}

export interface FishingSpot {
  name: string;
  slug: string;
  description: string;
  excerpt: string;
  highlights: string[];
  imageUrl: string;
}

export interface Rate {
  title: string;
  price: string;
  note: string;
  details: string[];
}

export interface Package {
  title: string;
  price: string;
  description: string;
  includes: string[];
  extraDays?: { guided?: string; selfGuided?: string };
}

export interface Accommodation {
  name: string;
  type: string;
  description: string;
  highlights: string[];
}

export const siteConfig = {
  name: "Great Bone Fishing",
  tagline: "World-Class Bonefishing in the Turks & Caicos",
  phoneUSA: "(336) 655-0541",
  phoneTCI: "(649) 241-6263",
  email: "GreatBonefishing@gmail.com",
  address: "Bottle Creek, North Caicos TCI",
  baseUrl: "https://greatbonefishing.com",
};

export const tripAdvisorUrl =
  "https://www.tripadvisor.com/Attraction_Review-g656907-d12094913-Reviews-The_Great_Bonefishing_Company-North_Caicos_Turks_and_Caicos.html";

export const tripAdvisorSummary = {
  rating: "4.7",
  reviewCount: 62,
};

export interface GuestReview {
  reviewer: string;
  meta: string;
  quote: string;
  source: "Tripadvisor" | "Google";
}

export const guestReviews: GuestReview[] = [
  {
    reviewer: "WanderlustRG",
    meta: "Ketchum, Idaho · January 2025",
    quote:
      "This fishery is pretty darn special. Lots of places to look for fish and incredible scenery. We went out with Darrel and he moved us all around Bottle Creek. We saw ample amounts of fish early in the day.",
    source: "Tripadvisor",
  },
  {
    reviewer: "tbarkerboston",
    meta: "Richmond, Virginia · December 2024",
    quote:
      "I had a great experience doing my first bonefishing on the fly. Darrel is an expert guide knowledgeable about the fish, the area, and a great instructor. An incredible setting.",
    source: "Tripadvisor",
  },
  {
    reviewer: "Cullen H",
    meta: "Google · June 2024",
    quote:
      "Had a great time fishing with Darrel. Even though I wasn’t casting well Darrel put me all over fish. Hooked 6 and caught five. Unique opportunity to fish in an unbelievable setting.",
    source: "Google",
  },
  {
    reviewer: "Mitch F",
    meta: "November 2024",
    quote:
      "Incredible fishery, incredible guiding. 10/10. If you don’t bonefish often and want to catch fish — get a guide. Spotting these fish and fooling them is very difficult if you’re not accustomed to it.",
    source: "Tripadvisor",
  },
  {
    reviewer: "Kim G",
    meta: "Google · January 2025",
    quote:
      "Husband and friend went with Rudy. They had the best time ever. Smiles from ear to ear — caught 4 apiece.",
    source: "Google",
  },
  {
    reviewer: "wheresmatt",
    meta: "Denver, Colorado · June 2022",
    quote:
      "My 15-year-old son and I went out on a guided fly fishing trip. Our guide Derral was definitely a ‘bonefish whisperer’ — spotting bonefish 100' away and instructing us exactly when and where to cast.",
    source: "Tripadvisor",
  },
  {
    reviewer: "rtailshie",
    meta: "April 2022",
    quote:
      "Great trip and absolutely beautiful scenery. Had a very nice day with Darrel. He took his time to work with us on our casting and helping with the small details involved with hooking up on fish.",
    source: "Tripadvisor",
  },
  {
    reviewer: "rickt505",
    meta: "Kaslo, Canada · January 2022",
    quote:
      "My wife and I just spent 4 days at the lodge and we’re very pleased with everything. The fishing here is exceptional under the skillful guiding of Derral. Bonefish are abundant and the size is way above average.",
    source: "Tripadvisor",
  },
];

export const navItems: NavItem[] = [
  {
    label: "Fishing",
    href: "/fishing",
    children: [
      { label: "Where to Bonefish", href: "/where-to-bonefish-turks-caicos", group: "Where to Fish" },
      { label: "Our Locations", href: "/fishing/north-caicos", group: "Where to Fish" },
      { label: "Bottle Creek", href: "/fishing/bottle-creek", group: "Where to Fish" },
      { label: "East Bay & South Cays", href: "/fishing/east-bay", group: "Where to Fish" },
      { label: "Guided Day", href: "/fishing/guided-day", group: "Where to Fish" },
      { label: "Why Turks & Caicos", href: "/fishing/why-turks-caicos", group: "Where to Fish" },
      { label: "Kayak Access", href: "/diy", group: "After Guided Day" },
      { label: "Fishing Kayaks", href: "/diy/fishing-kayaks", group: "After Guided Day" },
      { label: "Guided First", href: "/diy/guided-vs-diy", group: "After Guided Day" },
    ],
  },
  { label: "Lodge", href: "/lodge" },
  { label: "Gallery", href: "/gallery" },
  { label: "Reviews", href: "/reviews" },
  { label: "Rates", href: "/rates" },
  { label: "Book", href: "/book" },
];

export const fishingSpots: FishingSpot[] = [
  {
    name: "Bottle Creek",
    slug: "bottle-creek",
    description:
      "Protected North Caicos reserve with hard-bottom flats, clear water, and some of the most consistent sight-fishing in the islands.",
    excerpt:
      "Hard-bottom flats, clear water, and productive tidal drains only minutes from the lodge and launch.",
    highlights: [
      "Ankle-deep wading flats",
      "Classic flats skiffs",
      "Double-digit bonefish possible",
      "Only minutes from launch",
    ],
    imageUrl:
      "/images/gallery/typical-flat-in-better.jpg",
  },
  {
    name: "East Bay & South Cays",
    slug: "east-bay",
    description:
      "Remote creeks, channels, and ocean-side flats that fish best on moving tides and regularly hold larger bonefish.",
    excerpt:
      "Remote creeks, channels, cays, and ocean-side flats that reward good timing on moving water.",
    highlights: [
      "Remote and unfished",
      "Large bonefish on tides",
      "Channels and estuaries",
      "Reef snorkeling nearby",
    ],
    imageUrl:
      "/images/gallery/east-bay-cay-flat.jpg",
  },
  {
    name: "North Caicos",
    slug: "north-caicos",
    description:
      "The lushest of the Caicos Islands, with mangrove nurseries, open flats, and very light fishing pressure around Bottle Creek and nearby North Caicos water.",
    excerpt:
      "Lightly pressured North Caicos water with mangrove nurseries, open flats, cuts, and channels.",
    highlights: [
      "Average bonefish 4–5 lbs, larger common",
      "Wading directly from land possible",
      "Little fishing pressure",
      "Nature reserves nearby",
    ],
    imageUrl:
      "/images/gallery/north-caicos-flats-around.jpg",
  },
];

export const guidedRates: Rate[] = [
  {
    title: "Full-Day Guided Fishing",
    price: "$700",
    note: "plus 12% TCI tax — up to 2 guests",
    details: [
      "8am – 2pm",
      "Guided on classic flats skiff",
      "All tackle and equipment",
      "Fishing license available ($15/day)",
      "$175 deposit to confirm",
    ],
  },
];

export const lodgePackages: Package[] = [
  {
    title: "4 Nights / 3 Days Package",
    price: "$1,250",
    description:
      "Stay at our lodge on Bottle Creek with guided fishing and kayak access when appropriate.",
    includes: [
      "4 nights lodge accommodation (dbl)",
      "1 guided day on flats skiff",
      "Kayak access when appropriate",
      "Guided day comes first for local water and safety",
      "Transfers to/from Sandy Point",
      "Breakfast and lunch (guided day)",
      "Kayak rental and cleaning fee",
    ],
    extraDays: {
      guided: "$1,050/day",
      selfGuided: "$110/person/day",
    },
  },
];

export const accommodations: Accommodation[] = [
  {
    name: "Bonefish Lodge",
    type: "On-Site Lodge",
    description:
      "Newly constructed lodge on Bottle Creek, directly across from our most productive flat. One and two bedroom units, each air-conditioned with full kitchen, bathroom, and deck overlooking the water.",
    highlights: [
      "Steps from the fishing flats",
      "Kayak launch from property",
      "Early morning tailing bonefish",
      "Full kitchen and laundry",
    ],
  },
  {
    name: "Villa Dolce Vita",
    type: "Luxury Beachfront Villa",
    description:
      "Mediterranean-inspired luxury villa on a secluded North Caicos cove. Three buildings, infinity pool, outdoor dining, and spectacular ocean views. The ultimate private escape.",
    highlights: [
      "50+ ft infinity pool",
      "Three separate buildings",
      "Direct beachfront",
      "Full luxury appointments",
    ],
  },
  {
    name: "Pelican Beach Hotel",
    type: "Hotel",
    description:
      "Long-established hotel in Whitby, directly on Pelican Beach. Comfortable rooms, restaurant with local seafood, and the famous Barracuda beach bar. Run by Clifford and Susie Gardiner.",
    highlights: [
      "On the beach",
      "Local seafood restaurant",
      "Famous Barracuda bar",
      "Air-conditioned rooms",
    ],
  },
];

export const legacyRedirects: Record<string, string> = {
  "/flyfishing-in-the-turks-and-caicos/": "/fishing",
  "/flyfishing-in-the-turks-and-caicos/north-caicos/": "/fishing/north-caicos",
  "/flyfishing-in-the-turks-and-caicos/bottle-creek/": "/fishing/bottle-creek",
  "/flyfishing-in-the-turks-and-caicos/east-baysouth-cays/": "/fishing/east-bay",
  "/flyfishing-in-the-turks-and-caicos/wading_for_bonefish/": "/diy",
  "/why-the-turks-and-caicos-is-great-for-bonefishing/": "/fishing/why-turks-caicos",
  "/catch-and-release-bonefish-handling/": "/learn/catch-and-release",
  "/seasons/": "/learn/seasons",
  "/bonefish-spawning-and-fishing-season/": "/learn/bonefish-season",
  "/bonefish-flies/": "/learn/bonefish-flies",
  "/bonefishing-rates/": "/rates",
  "/book-a-trip/": "/book",
  "/diy-bonefishing/": "/diy",
  "/diy-bonefishing-boat/": "/diy/guided-vs-diy",
  "/fishing-kayaks/": "/diy/fishing-kayaks",
  "/transport-provo/": "/travel",
  "/bonefishing-lodge-turks-caicos/": "/lodge",
  "/accommodation/": "/lodge#other-accommodation",
  "/contact-us/": "/book",
  "/hello-world/": "/",
  "/twitter-test/": "/",
  "/extra-stuff-dont-wanna-delete-get/": "/",
  "/payment-successful/": "/payment-successful",
  "/links/": "/",
  "/offshore-fishing-in-the-turks-and-caicos/": "/fishing",
  "/last-chance/": "/travel",
  "/bonefishing-trip/": "/fishing",
  "/fly-fish-bonefish/": "/fishing",
  "/size-bonefish-can-expect-see/": "/fishing",
  "/the-great-bonefishing-company-2/": "/",
  "/solitude-seclusion-success-2/": "/fishing",
};
