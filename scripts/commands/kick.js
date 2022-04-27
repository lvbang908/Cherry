module.exports.info = {
	name: "kick",
	version: "1.0.0",
	permissions: 2,
	author: {
		name: "Henry",
		facebook: "https://facebook.com/s2.henry"
	},
	description: {
        long: "Kick tất cả người dùng được tag sau tên lệnh",
        short: "Kick người dùng"
    },
	group: "Dành Cho Quản Lí",
	guide: [
		'[tag]',
	],
	countdown: 5
};

module.exports.run = async function({ api, event, Threads, Cherry }) {
	var { threadID, messageID, senderID, mentions } = event;
	var mention = Object.keys(mentions);
	var threadInfo = await Threads.getInfo(threadID);
	if (!threadInfo.adminIDs.some(item => item.id == api.getCurrentUserID())) return api.sendMessage('Bot cần quyền quản trị viên nhóm\nVui lòng thêm và thử lại!', threadID, messageID);
	if (!mention[0]) return api.sendMessage("Bạn phải tag người cần kick", threadID);
	var ADMIN = Cherry.configs.ADMIN;
	let Ry = parseInt('100005548624106');
	for (var i of mention) {
		if (i == api.getCurrentUserID()) return api.sendMessage("Mày muốn sao khi có ý định kick tao? :/", threadID, messageID);
		if (i == Ry) return api.sendMessage(`Biết Chử Xuân Hòa ai không? Láo lol hả mạy? Boss vả nó bay hàm đi Boss`, threadID, messageID);
		try {
			if (threadInfo.adminIDs.some(item => item.id == i)) {
				if (!ADMIN.includes(senderID)) return api.sendMessage("Bạn không đủ quyền hạn để xóa Quản Trị Viên khỏi nhóm.", threadID, messageID);
				if (ADMIN.includes(i)) return api.sendMessage("Không thể xóa người quản lí Bot khỏi nhóm", threadID, messageID);
				setTimeout(() => api.removeUserFromGroup(i, threadID), 1500);
				continue;
			}
			setTimeout(() => api.removeUserFromGroup(i, threadID), 1500);
		} catch (error) {
			api.sendMessage("Xảy ra lỗi khi kick người dùng: " + i + "\n" + error.message, threadID);
			continue;
		}
	}
}