
// utils/contextManager.js
const NEWS_LETTER_JID = "120363285388090068@newsletter";
const BOT_NAME = "OBITO";
const thumbnails = [
                "https://files.catbox.moe/qi2do6.png",
                "https://files.catbox.moe/c4zze2.png"
            ];

            // Select a random thumbnail
            const DEFAULT_THUMBNAIL = thumbnails[Math.floor(Math.random() * thumbnails.length)];

const createContext2 = (userJid, options = {}) => ({
    contextInfo: {
        mentionedJid: [userJid],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterJid: NEWS_LETTER_JID,
            newsletterName: BOT_NAME,
            serverMessageId: Math.floor(100000 + Math.random() * 900000)
        },
        externalAdReply: {
            title: options.title || BOT_NAME,
            body: options.body || "Premium WhatsApp Bot",
            thumbnailUrl: options.thumbnail || DEFAULT_THUMBNAIL,
            mediaType: 1,
            showAdAttribution: true,
            renderLargerThumbnail: true 
        }
    }
});

module.exports = {
    createContext2
};
