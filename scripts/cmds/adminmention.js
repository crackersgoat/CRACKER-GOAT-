module.exports = {
  config: {
    name: "adminmention",
    version: "1.3.2",
    author: "MOHAMMAD AKASH",
    countDown: 0,
    role: 0,
    shortDescription: "Replies angrily when someone tags admins",
    longDescription: "If anyone mentions an admin, bot will angrily reply with random messages.",
    category: "fun"
  },

  onStart: async function () {},

  onChat: async function ({ event, message }) {
    const adminIDs = ["100078049308655", "100090071683807", "100092480994957"].map(String);

    // Skip if sender is admin
    if (adminIDs.includes(String(event.senderID))) return;

    // যদি কেউ মেনশন দেয়
    const mentionedIDs = event.mentions ? Object.keys(event.mentions).map(String) : [];
    const isMentioningAdmin = adminIDs.some(id => mentionedIDs.includes(id));

    if (!isMentioningAdmin) return;

    // র‍্যান্ডম রাগী রিপ্লাই
    const REPLIES = [
      " ওরে মেনশন দিস না ও এখন jinat এর সঙ্গে চিপাই আসে 🌚🤘",
      "বস এক আবাল তুমারে ডাকতেছে 😂😏",
      
    ];

    const randomReply = REPLIES[Math.floor(Math.random() * REPLIES.length)];
    return message.reply(randomReply);
  }
};
