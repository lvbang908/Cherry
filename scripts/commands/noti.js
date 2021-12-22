module.exports.info = {
	name: "noti",
    version: "1.0.1",
    permissions: 2,
    author: {
        name: "Henry",
        facebook: "https://facebook.com/s2.henry"
    },
	description: {
        long: "Gửi thông báo tới tất cả các box có ID trong Database",
        short: "Gửi thông báo"
    },
	group: "Dành Cho Quản Lí",
	guide: [
		'[text]',
	],
	countdown: 5
};

module.exports.run = async ({ api, event, args, Threads }) => {
	var allThread = await Threads.getAll(["ID"]);
	var noti = (event.body);
	noti = noti.slice(6);
	var count = 0,
	    cannotSend = 0;
    if (noti == "") return api.sendMessage("Bạn cần nhập thông báo.", event.threadID, event.messageID);
    for (var thread of allThread) {
        if (thread.ID != event.threadID) {
            api.sendMessage(`» Thông Báo «\n\n${noti}`, thread.ID, (error, info) => {
                if (error) cannotSend++;
            });
            count++;
        } else if (isNaN(thread.ID)) console.log("Không tồn tại nhóm này" + thread.ID)
    }
	return api.sendMessage(`Đã gửi thông báo đến: ${count} nhóm\n\nKhông thể gửi thông báo đến: ${cannotSend} nhóm`, event.threadID, event.messageID);
}