module.exports.info = {
	name: "setname",
    version: "1.0.0",
    permissions: 1,
    author: {
        name: "Henry",
        facebook: "https://facebook.com/s2.henry"
    },
	description: {
        long: "Đổi biệt danh của bản thân hoặc người được tag",
        short: "Đổi biệt danh"
    },
	group: "Tools",
	guide: [
		'[tag/tên]',
	],
	countdown: 5
};

module.exports.run = async function({ api, event, args }) {
	const name = args.join(" ")
	const mention = Object.keys(event.mentions)[0];
	if (!mention) return api.changeNickname(`${name}`, event.threadID, event.senderID);
	if (mention[0]) return api.changeNickname(`${name.replace(event.mentions[mention], "")}`, event.threadID, mention);
}