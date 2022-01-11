const moment = require("moment-timezone");
const fullTime = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss DD/MM/YYYY");
const fs = require("fs");

module.exports = function ({ Cherry }) {
    const log = Cherry.log;

    try {
        var othersData = JSON.parse(fs.readFileSync('./settings/data/othersData.json', 'utf8'));
    } catch {
        fs.writeFileSync('./settings/data/othersData.json', "{}");
    }

    async function createData(userID, callback) {
        try {
            if (!userID) throw new Error("userID không được để trống");
            if (isNaN(userID)) throw new Error("userID không hợp lệ");
            if (othersData.hasOwnProperty(userID) == true) log("OTHERS - CREATE DATA", `Người dùng mang ID: ${userID} đã tồn tại trong Database`, "error");
            othersData = Object.assign(othersData, {
                [userID]: {
                    ID: userID,
                    workTime: 0,
                    dailyTime: 0,
                    money: 0,
                    createTime: {
                        timestamp: Date.now(),
                        fullTime: fullTime
                    }
                }
            });
            var newOthersData = JSON.stringify(othersData, null, 4);
            fs.writeFileSync("./settings/data/othersData.json", newOthersData);
            if (callback && typeof callback == "function") callback(null, data);
            return othersData[userID];
        }
        catch (error) {
            if (callback && typeof callback == "function") callback(error, null);
            return log("OTHERS - CREATE DATA", error.stack, "error");
        }
    }

    async function getAll(keys, callback) {
        try {
            if (!keys) return othersData;
            if (!Array.isArray(keys)) throw new Error("Tham số truyền vào phải là 1 array");
            const data = [];
            for (let userID in othersData) {
                const database = {id: userID};
                const dataOthers = othersData[userID];
                for (let key of keys) database[key] = dataOthers[key];
                data.push(database);
            }
            if (callback && typeof callback == "function") callback(null, data);
            return data;
        } catch (error) {
            if (callback && typeof callback == "function") callback(error, null);
            return log("OTHERS - GET ALL DATA", error.stack, "error");
        }
    }

    async function getData(userID, callback) {
        try {
            if (!userID) log("OTHERS - GET DATA", "userID không được để trống", "error");
            if (isNaN(userID)) log("OTHERS - GET DATA", "userID không hợp lệ", "error");
            if (JSON.stringify(othersData) === "{}" || othersData.hasOwnProperty(userID) == false) await createData(userID);
            const data = othersData[userID];
            if (callback && typeof callback == "function") callback(null, data);
            return data;
        }
        catch(error) {
            if (callback && typeof callback == "function") callback(error, null);
            return log("OTHERS - GET DATA", error.stack, "error");
        }
    }

    async function setData(userID, options, callback) {
        try {
            if (!userID) throw new Error("Không được để trống ID người dùng");
            if (isNaN(userID)) throw new Error("ID người dùng không hợp lệ");
            if (!othersData[userID]) throw new Error ("Người dùng này chưa có trong Database")
            if (typeof options != 'object') throw new Error("Tham số options truyền vào phải là 1 object");
            othersData[userID] = {...othersData[userID], ...options};
            let dataOthers = JSON.stringify(othersData, null, 4);
            fs.writeFileSync("./settings/data/othersData.json", dataOthers);
            if (callback && typeof callback == "function") callback(null, othersData[userID]);
            return othersData[userID];
        }
        catch(error) {
            if (callback && typeof callback == "function") callback(error, null);
            return log("OTHERS - SET DATA", error, "error");
        }
    }

    async function delData(userID, callback) {
        try {
            delete othersData[userID];
            let dataOthers = JSON.stringify(othersData, null, 4);
            fs.writeFileSync("./settings/data/othersData.json", dataOthers);
            if (callback && typeof callback == "function") callback(null, data);
        } catch (error) {
            if (callback && typeof callback == "function") callback(error, null);
            return log("DELDATA OTHERS", error.stack, "error");
        }
    }

    return {
        createData,
        getAll,
        getData,
        setData,
        delData,
        othersData
    }
}