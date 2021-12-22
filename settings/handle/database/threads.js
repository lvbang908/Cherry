const moment = require("moment-timezone");
const fullTime = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss DD/MM/YYYY");
const fs = require("fs");

module.exports = function ({ Cherry, api }) {
    const log = Cherry.log;

    try {
        var threadsData = JSON.parse(fs.readFileSync('./settings/data/threadsData.json', 'utf8'));
    } catch {
        fs.writeFileSync('./settings/data/threadsData.json', "{}");
    }
    
	async function createData(threadID, userID, callback) {
		try {
            if (!threadID) throw new Error("threadID không được để trống");
            if (isNaN(threadID)) throw new Error("threadID không hợp lệ");
            if (!userID) throw new Error("userID không được để trống");
            if (isNaN(userID)) throw new Error("userID không hợp lệ");
            var threadInfo = await api.getThreadInfo(threadID);
            if (JSON.stringify(threadsData) === "{}" || !threadsData) {
                threadsData = {
                    [threadID]: {
                        ID: threadID,
                        name: threadInfo.threadName,
                        emoji: threadInfo.emoji,
                        prefix: "",
                        members: {
                            [userID]: {
                                ID: userID,
                                totalMsg: 1,
                                bietdanh: threadInfo.nicknames[userID] || "",
                                banned: {
                                    status: false,
                                    lido: ""
                                }
                            }
                        },
                        color: threadInfo.color,
                        totalMsg: threadInfo.messageCount,
                        adminIDs: threadInfo.adminIDs,
                        avatarGroup: threadInfo.imageSrc,
                        msgWelcome: "",
                        msgLeave: "",
                        banned: {
                            status: false,
                            lido: ""
                        },
                        createTime: {
                            timestamp: Date.now(),
                            fullTime: fullTime
                        },
                        lastUpdate: Date.now()
                    }
                }
                log("THREADS - CREATE DATA", "New Threads: " + threadInfo.name + " | ID: " + threadID + " | Giờ Tạo: " + fullTime, "magenta");
                var newThreadData = JSON.stringify(threadsData, null, 4);
                fs.writeFileSync("./settings/data/threadsData.json", newThreadData);
            } else {
                if (threadsData.hasOwnProperty(threadID) == true) throw new Error(`Threads mang ID: ${threadID} đã tồn tại trong Database`);
                threadsData = Object.assign(threadsData, {
                    [threadID]: {
                        ID: threadID,
                        name: threadInfo.threadName,
                        emoji: threadInfo.emoji,
                        prefix: "",
                        members: {
                            [userID]: {
                                ID: userID,
                                totalMsg: 1,
                                bietdanh: threadInfo.nicknames[userID] || "",
                                banned: {
                                    status: false,
                                    lido: ""
                                }
                            }
                        },
                        color: threadInfo.color,
                        totalMsg: threadInfo.messageCount,
                        adminIDs: threadInfo.adminIDs,
                        avatarGroup: threadInfo.imageSrc,
                        msgWelcome: "",
                        msgLeave: "",
                        banned: {
                            status: false,
                            lido: ""
                        },
                        createTime: {
                            timestamp: Date.now(),
                            fullTime: fullTime
                        },
                        lastUpdate: Date.now()
                    }
                });
                log("THREADS - CREATE DATA", "New Threads: " + threadInfo.name + " | ID: " + threadID + " | Giờ Tạo: " + fullTime, "magenta");
                var newThreadData = JSON.stringify(threadsData, null, 4);
                fs.writeFileSync("./settings/data/threadsData.json", newThreadData);
            }
            if (callback && typeof callback == "function") callback(null, threadsData[threadID]);
            return threadsData[threadID];
        }
        catch (error) {
            if (callback && typeof callback == "function") callback(error, null);
            log("THREADS - CREATE DATA", error.stack, "error");
        }
	}

	async function getAll(keys, callback) {
        try {
            if (!keys) return threadsData;
            if (!Array.isArray(keys)) throw new Error("Tham số truyền vào phải là 1 array");
            const data = [];
            for (let threadID in threadsData) {
                const database = {id: threadID};
                const dataThread = threadsData[threadID];
                for (let key of keys) database[key] = dataThread[key];
                data.push(database);
            }
            if (callback && typeof callback == "function") callback(null, data);
            return data;
        } catch (error) {
            if (callback && typeof callback == "function") callback(err, null);
            return log("THREADS - GET ALL DATA", error.stack, "error");
        }
    }

	async function getData(threadID, userID, callback) {
        try {
            if (!threadID) throw new Error("threadID không được để trống");
            if (isNaN(threadID)) throw new Error("threadID không hợp lệ");
            if (JSON.stringify(threadsData) == '{}' || !threadsData[threadID]) createData(threadID, userID);
            const data = threadsData[threadID];
            if (callback && typeof callback == "function") callback(null, data);
            return data;
        }
        catch(error) {
            if (callback && typeof callback == "function") callback(error, null);
            return log("THREADS - GET DATA", error.stack, "error");
        }
    }

	async function setData(threadID, options, callback) {
        try {
            if (!threadID) throw new Error("threadID không được để trống");
            if (isNaN(threadID)) throw new Error("threadID không hợp lệ");
            if (JSON.stringify(threadsData) == '{}' || !threadsData[threadID]) throw new Error("threadID không tồn tại trong Database");
            if (typeof options != 'object') throw new Error("Tham số options truyền vào phải là 1 object");
            threadsData[threadID] = {...threadsData[threadID], ...options};
            let dataThread = JSON.stringify(threadsData, null, 4);
            fs.writeFileSync("./settings/data/threadsData.json", dataThread);
            if (callback && typeof callback == "function") callback(null, dataThread[threadID]);
            return dataThread[threadID];
        }
        catch(error) {
            if (callback && typeof callback == "function") callback(error, null);
            return log("THREADS - SET DATA", error, "error");
        }
	}

	async function delData(threadID) {
		try {
            if (!threadID) throw new Error("threadID không được để trống");
            if (isNaN(threadID)) throw new Error("threadID không hợp lệ");
            if (JSON.stringify(threadsData) == '{}' || !threadsData[threadID]) throw new Error("threadID không tồn tại trong Database");
            delete threadsData[threadID];
            let dataThread = JSON.stringify(threadsData, null, 4);
            fs.writeFileSync("./settings/data/threadsData.json", dataThread);
            if (callback && typeof callback == "function") callback(null, "REMOVE THREAD "+ threadID + " SUCCES");
            return true;
        } catch(error) {
            log("THREADS - REMOVE DATA", error.stack, "error");
            if (callback && typeof callback == "function") callback(error, null);
        }
	}

    async function getInfo(threadID) {
		try {
            if (!threadID) throw new Error("threadID không được để trống");
            if (isNaN(threadID)) throw new Error("threadID không hợp lệ");
            var threadInfo = await api.getThreadInfo(threadID);
            return threadInfo;
		} catch (error) {
			return log('THREADS - GET INFO', error, "error");
		}
	}

	return {
		createData,
		getAll,
		getData,
		setData,
		delData,
        getInfo
	}
};