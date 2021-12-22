module.exports.info = {
	name: "sim",
	version: "1.0.0",
	permissions: 1,
	author: {
		name: "Henry",
		facebook: "https://facebook.com/s2.henry"
	},
	description: {
        long: "Chat với cđ bot mất dạy nhất hệ mặt trời",
        short: "Reaction with Bot"
    },
	group: "Reaction with Bot",
	guide: [
		'[on/off]',
	],
	countdown: 5,
    require: {
        axios: ''
    }
};

module.exports.handleEvents = async function({ api, event, Cherry }) {
    if (!Cherry.sim) return;
    var { threadID, messageID, senderID, body } = event;
    if (Cherry.sim.has(threadID)) {
        if (senderID == api.getCurrentUserID() || body == "" || body.length < 3) return;
        var axios = require("axios")
        var { data } = await axios({ url: `https://api.simsimi.net/v2/?text=${encodeURIComponent(body)}&lc=vn`, method: "GET" });
        return api.sendMessage(data.success, threadID)
    }
}

module.exports.run = function({ api, event, Cherry, args }) {
    var { threadID, messageID } = event;
    if (!Cherry.sim) Cherry.sim = new Map();
    if (args.length == 0) return api.sendMessage("Bạn cần nhập lệnh on/off", threadID, messageID);
    switch (args[0]) {
        case "on":
        case "ON":
            Cherry.sim.has(threadID) ? api.sendMessage("Simsimi đã nhập vào Bot từ lâu rồi :v", threadID, messageID) : (api.sendMessage("Bot đã bị Simsimi nhập xác >:)", threadID, messageID), Cherry.sim.set(threadID));
            break;
        case "off":
        case "OFF":
            Cherry.sim.has(threadID) ? (Cherry.sim.delete(threadID), api.sendMessage("Đã trục xuất Simsimi khỏi Bot :3", threadID, messageID)) : api.sendMessage("Bot chưa bị Simsimi nhập :3", threadID, messageID);
            break;
    }
}