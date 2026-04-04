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

export const navItems: NavItem[] = [
  {
    label: "Fishing",
    href: "/fishing",
    children: [
      { label: "Our Locations", href: "/fishing/north-caicos", group: "Where to Fish" },
      { label: "Bottle Creek", href: "/fishing/bottle-creek", group: "Where to Fish" },
      { label: "East Bay & South Cays", href: "/fishing/east-bay", group: "Where to Fish" },
      { label: "Why Turks & Caicos", href: "/fishing/why-turks-caicos", group: "Where to Fish" },
      { label: "DIY Bonefishing", href: "/diy", group: "Self-Guided" },
      { label: "Kayak Rentals", href: "/diy/fishing-kayaks", group: "Self-Guided" },
      { label: "Guided vs. DIY", href: "/diy/guided-vs-diy", group: "Self-Guided" },
    ],
  },
  {
    label: "Stay",
    href: "/lodge",
  },
  {
    label: "Travel",
    href: "/travel",
    children: [
      { label: "Getting Here", href: "/travel" },
      { label: "Rates & Packages", href: "/rates" },
    ],
  },
  {
    label: "Learn",
    href: "/learn",
    children: [
      { label: "Seasons", href: "/learn/seasons" },
      { label: "Bonefish Season", href: "/learn/bonefish-season" },
      { label: "Bonefish Flies", href: "/learn/bonefish-flies" },
      { label: "Catch & Release", href: "/learn/catch-and-release" },
      { label: "Gallery", href: "/gallery" },
    ],
  },
  { label: "Book", href: "/book" },
];

export const fishingSpots: FishingSpot[] = [
  {
    name: "Bottle Creek",
    slug: "bottle-creek",
    description:
      "Protected North Caicos reserve with hard-bottom flats, clear water, and some of the most consistent sight-fishing in the islands.",
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
      "The lushest of the Caicos Islands, with mangrove nurseries, open flats, and very light fishing pressure across the Caicos Bank.",
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
      "7:30am – 2:00pm",
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
      "Stay at our lodge on Bottle Creek with guided and self-guided days mixed in.",
    includes: [
      "4 nights lodge accommodation (dbl)",
      "1 guided day on flats skiff",
      "2 days self-guided in fishing kayaks",
      "Guided day sets up your DIY strategy",
      "Transfers to/from Sandy Point",
      "Breakfast and lunch (guided day)",
      "Kayak rental and cleaning fee",
    ],
    extraDays: {
      guided: "$1,050/day",
      selfGuided: "$205/person/day",
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
  "/payment-successful/": "/book",
  "/links/": "/",
  "/offshore-fishing-in-the-turks-and-caicos/": "/fishing",
  "/last-chance/": "/travel",
  "/bonefishing-trip/": "/fishing",
  "/fly-fish-bonefish/": "/fishing",
  "/size-bonefish-can-expect-see/": "/fishing",
  "/the-great-bonefishing-company-2/": "/",
  "/solitude-seclusion-success-2/": "/fishing",
};
