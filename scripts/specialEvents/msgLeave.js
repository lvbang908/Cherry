module.exports.info = {
	name: "msgLeave",
	eventType: ["log:unsubscribe"],
	version: "1.0.0",
	author: {
		name: "Henry",
		facebook: "https://facebook.com/s2.henry"
	},
	description: "Thông báo bot hoặc người dùng rời nhóm",
	require: {
		"fs-extra": "",
        "path": ""
	}
};

module.exports.run = async function({ api, event, Threads, Users, multiple, Cherry }) {
	var botSytem = '4127643970650750';
	const { createReadStream, existsSync, mkdirSync } = require("fs-extra");
	const { join } =  require("path");
	const { threadID } = event;
	const data = await Threads.getData(threadID);
    var fullTime = await Cherry.getTime("fullTime");
	if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) {
        multiple.allThreadsInfo.delete(threadID);
        for (var i of data.members) multiple.allUsersInfo.delete(i.ID);
        return api.sendMessage(`${event.author != api.getCurrentUserID() ? `Người dùng có ID: ${event.author} đã kick Bot ra khỏi nhóm ${data.name}!` : `Bot đã tự rời khỏi nhóm: ${data.name}`} vào lúc ${fullTime}`, botSytem);
    }
	var info = multiple.allUsersInfo.get(event.logMessageData.leftParticipantFbId) || await Users.getInfo(event.logMessageData.leftParticipantFbId);
	const name = info.name;
	const type = (event.author == event.logMessageData.leftParticipantFbId) ? "tự rời" : "bị quản trị viên xóa";
	const path = join(__dirname, "cache", "leaveGif");
	const gifPath = join(path, `${threadID}.gif`);
	var msg, formPush;
	if (existsSync(path)) mkdirSync(path, { recursive: true });
    if (data.msgLeave ? msg = data.msgLeave : msg = `{name} Đã {type} khỏi nhóm vào lúc ${fullTime}`)
	msg = msg.replace(/\{name}/g, name).replace(/\{type}/g, type);

	if (existsSync(gifPath)) formPush = { body: msg, attachment: createReadStream(gifPath) }
	else formPush = { body: msg }
	
	return api.sendMessage(formPush, threadID);
}
