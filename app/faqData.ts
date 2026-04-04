export const faqItems = [
  {
    question: "What kind of trip should I book first?",
    answer:
      "Most first-time guests start with a guided day trip or a lodge package that includes at least one guided day. If you already read tides and flats water confidently, a DIY kayak day can make sense too.",
  },
  {
    question: "What time does a guided trip run?",
    answer:
      "Guided trips typically depart around 7:30am, fish until about 2:00pm, and are timed so guests coming from Providenciales can usually make the 4:00pm ferry back.",
  },
  {
    question: "How much is the ferry from Providenciales to North Caicos?",
    answer:
      "The ferry is $70 round trip. It usually runs Monday through Saturday, while Sunday and holiday schedules differ, so always confirm the current schedule before booking flights.",
  },
  {
    question: "Do I need my own tackle or flies?",
    answer:
      "No. Guided trips include tackle and equipment. If you need fly gear, it can be hired for $60 plus tax. DIY anglers can also bring their own preferred setup.",
  },
  {
    question: "How do deposits and final payment work?",
    answer:
      "A $175 deposit confirms the booking. Deposits can be paid by credit card or PayPal. The balance can be paid in cash on the day, or the day before by Venmo, card, or PayPal. Card, PayPal, and Venmo payments add a 3.5% processing fee.",
  },
  {
    question: "When is the best time of year to fish?",
    answer:
      "Bonefish are available year-round. Spring and fall are the classic peak periods, but good fishing is possible in every season depending on conditions, wind, and tides.",
  },
  {
    question: "Can beginners book a trip?",
    answer:
      "Yes. Guided days are a good fit for beginners because your guide handles positioning, timing, and coaching. DIY fishing is better suited to anglers who already have some flats experience.",
  },
  {
    question: "Where do you actually fish?",
    answer:
      "Our fishing is centered on Bottle Creek and the nearby North Caicos flats, channels, creeks, and estuaries. We do not market the trip as broad Caicos Bank fishing.",
  },
];

export const homepageFaqItems = faqItems.slice(0, 5);

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};
