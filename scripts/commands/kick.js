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

module.exports.run = async function({ api, event, Threads }) {
	var { threadID, messageID, senderID } = event;
	var mention = Object.keys(event.mentions);
	var threadInfo = await Threads.getInfo(event.threadID);
	if (!threadInfo.adminIDs.some(item => item.id == api.getCurrentUserID())) return api.sendMessage('Bot cần quyền quản trị viên nhóm\nVui lòng thêm và thử lại!', threadID, messageID);
	if (!mention[0]) return api.sendMessage("Bạn phải tag người cần kick", threadID);
	var ADMIN = Cherry.configs.ADMIN;
	let Ry = parseInt('100005548624106');
	for (var i of mention) {
		if (i == api.getCurrentUserID()) return api.sendMessage("Mày muốn sao? :/", threadID, messageID);
		if (i == Ry) return api.sendMessage(`Biết đó là ai không? Láo lol hả mạy? Boss vả nó bay hàm đi Boss`, threadID, messageID);
		if (threadInfo.adminIDs.some(item => item.id == i)) {
			for (var ID of ADMIN) {
				if (senderID == ID) setTimeout(() => api.removeUserFromGroup(i, threadID), 1500);
				else return api.sendMessage("Không thể xóa quản trị viên khỏi nhóm.", threadID, messageID);
				if (ID == i) return api.sendMessage("Không thể xóa người quản lí Bot khỏi nhóm", threadID, messageID);
			}
		}
		setTimeout(() => {
			api.removeUserFromGroup(i, threadID)
		}, 1500)
	}
}