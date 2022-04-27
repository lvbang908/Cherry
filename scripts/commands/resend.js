module.exports.info = {
	name: "resend",
    version: "1.0.2",
    permissions: 2,
    author: {
        name: "Henry",
        facebook: "https://facebook.com/s2.henry"
    },
	description: {
        long: "Gửi lại các tin nhắn mà thành viên đã gỡ (Điều kiện tin nhắn đó nằm trong phiên hoạt động của Bot)",
        short: "Resend"
    },
	group: "Tools",
	guide: [
		'',
	],
	countdown: 5,
    hide: true,
    require: {
        "fs-extra": "",
        "path": ""
    },
    configs: {
        status: false,
        ID: '0',//ID mà bot sẽ gửi tin nhắn mà thành viên đã gỡ về đó
        banned: ["ID", "Box", "Bot", "Sẽ", "Không", "Gửi lại tin nhắn khi có thành viên gỡ"]
    }
};

module.exports.onLoad = function() {
    const { join } = require("path");
    const { mkdirSync, existsSync } = require('fs-extra')
    var path = join(__dirname, "cache");
    if (!existsSync(path)) mkdirSync(path, { recursive: true });
}

module.exports.handleEvents = async function ({ event, api, Cherry, Users }) {
    const { createReadStream, unlinkSync } = require('fs-extra');
    var { messageID, threadID, senderID, body, attachments, type } = event;
    var { resend } = Cherry.configs;
    if (resend.status == false || senderID == api.getCurrentUserID() || resend.banned.includes(threadID)) return;
    if (!Cherry.logMessage) Cherry.logMessage = new Map();
    if (type == 'message_unsend') {
        var getMsg = Cherry.logMessage.get(messageID);
        if (!getMsg) return;
        let { name } = await Users.getData(senderID);
        if (getMsg.attachment.length == 0) return api.sendMessage(`${name} đã gỡ 1 tin nhắn.\n\nNội dung: ${getMsg.body}`, resend.ID);
        var msg = { body: `${name} vừa gỡ ${getMsg.attachment.length} tệp đính kèm. ${getMsg.body ? `Với nội dung:\n\n${getMsg.body}` : ''}`, attachment: [] }, path = [], number = 1, fileType;
        for (var i of getMsg.attachment) {
            if (i.type == 'photo') fileType = '.png';
            if (i.type == 'audio') fileType = '.mp3';
            if (i.type == 'video') fileType = '.mp4';
            if (!fileType) continue;
            var filePath = `${__dirname}/cache/${threadID}_${senderID}_${number++}${fileType}`;
            await Cherry.downloadFile(`${i.url}`, filePath);
            msg.attachment.push(createReadStream(filePath));
            path.push(filePath);
        }
        return api.sendMessage(msg, resend.ID, () => {
            for (var i of path) unlinkSync(i);
        })
    }
    Cherry.logMessage.set(messageID, {
        body: body,
        attachment: attachments
    });
}
        
module.exports.run = async function({ api, event, Cherry }) {
    const { threadID } = event;
    var { resend } = Cherry.configs;
    if (resend.status == true) {
        resend.status = false;
        return api.sendMessage("Đã tắt chế độ resend.", threadID);
    } else {
        resend.status = true;
        return api.sendMessage("Đã bật chế độ resend.", threadID);
    }
}
