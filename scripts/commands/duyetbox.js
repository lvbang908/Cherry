module.exports.info = {
	name: "duyetbox",
	version: "1.0.0",
	permissions: 0,
	author: {
		name: "Idol mới nổi - recode by Henry",
		facebook: "https://www.facebook.com/minzquan07/"
	},
	description: {
        long: "Duyệt các box đang chờ để được sử dụng Bot",
        short: "Duyệt box"
    },
	group: "System",
	guide: [],
	countdown: 5
};

module.exports.handleMessageReply = async function({ api, event, Reply, Users }) {
    var { body, threadID, messageID, senderID } = event;
    var { list, author, messageID: message } = Reply, botID = api.getCurrentUserID();
    if (author != senderID) return;
    api.unsendMessage(message);

    if (/^cancel/.test(body)) {
        var index = body.split(' ').filter(item => parseInt(item) && item <= list.length);
        if (index.length == 0) return api.sendMessage(`Các lựa chọn bạn đưa ra không hợp lệ hoặc không có trong danh sách.`, threadID, messageID);
        var error = 0, success = 0;
        for (var i of index) {
            api.removeUserFromGroup(botID, list[i - 1].threadID, (err) => {
                if (err) error++;
                else success++;
                if (error + success == index.length) return api.sendMessage(`Đã từ chối thành công ${success} nhóm.\n\n${error > 0 ? `Đã xảy ra lỗi khi từ chối ${error} nhóm` : ''}`, threadID);
            });
        }
    }
    var index = body.split(' ').filter(item => parseInt(item) && item <= list.length);
    if (index.length == 0) return api.sendMessage(`Các lựa chọn bạn đưa ra không hợp lệ hoặc không có trong danh sách.`, threadID, messageID);
    var error = 0, success = 0;
    var { name } = await Users.getData(author);
    for (var i of index) {
        api.sendMessage(`» Thông Báo «\n\nNhóm này đã được ${name} phê duyệt để có thể sử dụng Bot.`, list[i - 1].threadID, (error) => {
            if (error) error++;
            else success++;
            if (error + success == index.length) return api.sendMessage(`Đã duyệt thành công ${success} nhóm.\n\n${error > 0 ? `Đã xảy ra lỗi khi duyệt ${error} nhóm` : ''}`, threadID);
        });
    }
}

module.exports.run = async function({ api, event, multiple }) {
	var { threadID, messageID, senderID } = event, msg = "» Hàng Chờ Duyệt «\n\n", index = 1;
    try {
        var spamList = await api.getThreadList(100, null, ["OTHER"]);
        var pendingList = await api.getThreadList(100, null, ["PENDING"]);
    } catch (error) {
        return api.sendMessage(`Đã xảy ra lỗi khi lấy danh sách cách nhóm. Lỗi: ${error}`, threadID, messageID);
    }
    
    var merge = spamList.concat(pendingList).filter(status => status.isSubscribed && status.isGroup);
    if (merge.length == 0) return api.sendMessage(`Hiện tại không có nhóm nào trong hàng chờ.`, threadID, messageID);
    for (var i of merge) msg += `${index++}. ${i.name}: ${i.threadID}\n`;
    msg += `\nTổng Nhóm Chờ Duyệt: ${merge.length} nhóm\nReply tin nhắn này số tương ứng với nhóm mà bạn cần duyệt.`;
    return api.sendMessage(msg, threadID, (error, info) => multiple.handleMessageReply.push({ name: this.info.name, messageID: info.messageID, author: senderID, list: merge }), messageID);
}