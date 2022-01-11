module.exports.info = {
	name: "loi",
    version: "1.0.0",
    permissions: 1,
    author: {
        name: "Henry",
        facebook: "https://facebook.com/s2.henry"
    },
	description: {
        long: "Tìm lời bài hát trên chiasenhac",
        short: "Tìm lời bài hát"
    },
	group: "Khác",
	guide: [
		'[tên bài hát]',
	],
	countdown: 5,
    require: {
        "axios": ""
    }
};

module.exports.run = async ({ api, event, args, Cherry }) => {
    const axios = require("axios");
    let timkiem = encodeURIComponent(args.join(" "));
    const res = await axios.get(`https://le31.glitch.me/lyrics-csn?q=${timkiem}`);
    var lyrics = res.data.lyrics;
    var name = res.data.name;
    return api.sendMessage(`Lời bài hát: ${name}\n≻───── ⋆✩⋆ ─────≺\n\n${lyrics} `, event.threadID, (error, info) => { Cherry.autoUnsend(info.messageID, 180000, api) }, event.messageID);
}