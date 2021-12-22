const moment = require("moment-timezone");
const hours = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss");
const fullTime = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss DD/MM/YYYY");
const fs = require("fs");

module.exports = function ({ Cherry, api }) {
    const log = Cherry.log;

    try {
        var usersData = JSON.parse(fs.readFileSync('./settings/data/usersData.json'));
    } catch {
        fs.writeFileSync('./settings/data/usersData.json', "{}");
    }
    
	async function createData(userID, callback) {
		try {
            if (!userID) throw new Error("userID không được để trống");
            if (isNaN(userID)) throw new Error("userID không hợp lệ");
            var userInfo = (await api.getUserInfo(userID))[userID];
            if (JSON.stringify(usersData) === "{}" || !usersData) {
                usersData = {
                    [userID]: {
                        ID: userID,
                        name: userInfo.name,
                        facebookID: userInfo.vanity,
                        gioitinh: (userInfo.gender ? (userInfo.gender == 2 ? "Nam" : "Nữ") : "Khác"),
                        isBirthDay: userInfo.isBirthday,
                        banned: {
                            status: false,
                            lido: ""
                        },
                        active: {
                            status: false,
                            lido: ""
                        },
                        createTime: {
                            timestamp: Date.now(),
                            fullTime: fullTime
                        },
                        lastUpdate: Date.now()
                    }
                };
                log("USERS - CREATE DATA", "Người Dùng Mới: " + userInfo.name + " | ID: " + userID + " | Giờ Tạo: " + fullTime, "warn");
                var newUserData = JSON.stringify(usersData, null, 4);
                fs.writeFileSync("./settings/data/usersData.json", newUserData);
            } else {
                if (usersData.hasOwnProperty(userID) == true) throw new Error(`Người dùng mang ID: ${userID} đã tồn tại trong Database`);
                usersData = Object.assign(usersData, {
                    [userID]: {
                        ID: userID,
                        name: userInfo.name,
                        facebookID: userInfo.vanity,
                        gioitinh: (userInfo.gender ? (userInfo.gender == 2 ? "Nam" : "Nữ") : "Khác"),
                        isBirthDay: userInfo.isBirthday,
                        banned: {
                            status: false,
                            lido: ""
                        },
                        active: {
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
                log("USERS - CREATE DATA - UPDATE", "Người Dùng Mới: " + userInfo.name + " | ID: " + userID + " | Giờ Tạo: " + fullTime, "users");
                var newUserData = JSON.stringify(usersData, null, 4);
                fs.writeFileSync("./settings/data/usersData.json", newUserData);
            }
            if (callback && typeof callback == "function") callback(null, usersData[userID]);
            return usersData[userID];
        }
        catch (error) {
            if (callback && typeof callback == "function") callback(error, null);
            return log("USERS - CREATE DATA", error.stack, "error");
        }
	}

	async function getAll(keys, callback) {
		try {
            if (!keys) return usersData;
            if (!Array.isArray(keys)) throw new Error("Tham số truyền vào phải là 1 array");
            const data = [];
            for (let userID in usersData) {
                const database = {id: userID};
                const dataUser = usersData[userID];
                for (let key of keys) database[key] = dataUser[key];
                data.push(database);
            }
            if (callback && typeof callback == "function") callback(null, data);
            return data;
        } catch (error) {
            if (callback && typeof callback == "function") callback(error, null);
            log("USERS - GET ALL DATA", error.stack, "error");
        }
	}

	async function getData(userID, callback) {
		try {
            if (!userID) throw new Error("userID không được để trống");
            if (isNaN(userID)) throw new Error("userID không hợp lệ");
            if (JSON.stringify(usersData) == '{}' || !usersData[userID]) createData(userID);
            const data = usersData[userID];
            if (callback && typeof callback == "function") callback(null, data);
            return data;
        }
        catch(error) {
            log("USERS - GET DATA", error.stack, "error");
            if (callback && typeof callback == "function") callback(error, null);
        }
	}

	async function setData(userID, options, callback) {
		try {
            if (!userID) throw new Error("userID không được để trống");
            if (isNaN(userID)) throw new Error("userID không hợp lệ");
            if (!usersData[userID]) throw new Error("userID không tồn tại trong Database");
            if (typeof options != 'object') throw new Error("Tham số options truyền vào phải là 1 object");
            usersData[userID] = {...usersData[userID], ...options};
            let dataUser = JSON.stringify(usersData, null, 4);
            fs.writeFileSync("./settings/data/usersData.json", dataUser);
            if (callback && typeof callback == "function") callback(null, dataUser[userID]);
            return dataUser[userID];
        }
        catch(error) {
            log("USERS - SET DATA", error.stack, "error");
            if (callback && typeof callback == "function") callback(error, null);
        }
	}

	async function delData(userID) {
		try {
            if (!userID) throw new Error("userID không được để trống");
            if (isNaN(userID)) throw new Error("userID không hợp lệ");
            if (Object.keys((usersData)).includes(userID) == false) throw new Error("userID không tồn tại trong Database");
            delete usersData[userID];
            let usersData = JSON.stringify(usersData, null, 4);
            fs.writeFileSync("./settings/data/usersData.json", usersData);
            if (callback && typeof callback == "function") callback(null, data);
            return usersData[userID];
        } catch (error) {
            log("USERS - REMOVE DATA", error.stack, "error");
            if (callback && typeof callback == "function") callback(error, null);
        }
	}
    
    async function getInfo(userID) {
		try {
            if (!userID) throw new Error("userID không được để trống");
            if (isNaN(userID)) throw new Error("userID không hợp lệ");
            var userInfo = await api.getUserInfo(userID);
            return userInfo;
		} catch (error) {
			log('USERS - GET INFO', error, "error");
		}
	}

	return {
		createData,
		getAll,
		getData,
		setData,
		delData,
        getInfo
	};
};