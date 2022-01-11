module.exports.info = {
	name: "setprefix",
    version: "1.0.0",
    permissions: 2,
    author: {
        name: "Henry",
        facebook: "https://facebook.com/s2.henry"
    },
	description: {
        long: "Đổi prefix cho nhóm hiện tại",
        short: "Đổi prefix"
    },
	group: "Box Settings",
	guide: [
		'[prefix]',
	],
	countdown: 5
};

module.exports.handleReactionMessage = async function({ api, event, multiple, Threads, Reaction }) {
	if (event.userID != Reaction.author) return;
	api.unsendMessage(Reaction.messageID);
	const { threadID } = event;
	var data = await Threads.getData(threadID);
	data.prefix = Reaction.PREFIX;
	await Threads.setData(threadID, data);
	await multiple.allThreadsInfo.set(parseInt(threadID), { prefix: data.prefix });
	return api.sendMessage(`Đã chuyển đổi Prefix của nhóm thành: ${Reaction.PREFIX}`, threadID);
}

module.exports.run = async ({ api, event, args, multiple, Threads, Cherry }) => {
	if (typeof args[0] == "undefined") return api.sendMessage("Không được để trống Prefix", event.threadID, event.messageID);
	let prefix = args[0].trim();
	if (!prefix) return api.sendMessage("Không được để trống Prefix", event.threadID, event.messageID);
	if (prefix == "default") {
		var data = await Threads.getData(event.threadID);
		data.Prefix = Cherry.configs.prefix;
		await Threads.setData(event.threadID, data);
		await multiple.threadsInfo.set(parseInt(event.threadID), { prefix: data.prefix });
		return api.sendMessage(`Đã reset Prefix về mặc định ${Cherry.configs.prefix}`, event.threadID, event.messageID);
	} else return api.sendMessage("Bạn có chắc bạn muốn đổi Prefix của nhóm thành: " + prefix + "\n\nThả cảm xúc vào tin nhắn này để xác nhận.", event.threadID, (error, info) => {
		multiple.handleReactionMessage.push({
			name: this.info.name,
			messageID: info.messageID,
			author: event.senderID,
			PREFIX: prefix
		})
	})
}