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
	const { threadID, senderID, mentions } = event, ID = [];
	if (!mentions) return api.changeNickname(`${name}`, threadID, senderID);
    for (var [id, name] of Object.entries(mentions)) {
        ID.push(id)
        args.filter(item => item != name);
    }
    var nickname = args.join(" ")
    for (var i of ID) setTimeout(() => {
        api.changeNickname(`${nickname}`, threadID, i)
    }, 1000)
}
