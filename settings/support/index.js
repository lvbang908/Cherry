module.exports = function({ api, Cherry, multiple, Threads, Users, Others }) {

    async function commandError(command, threadID, messageID) {
        var { prefix: threadPrefix} = multiple.allThreadsInfo.get(threadID);
        var generalPrefix = Cherry.configs.prefix;
        return api.sendMessage(`Có thể bạn đã dùng sai format lệnh, vui lòng sử dụng '${threadPrefix ? threadPrefix : generalPrefix}help ${command}' để biết thêm chi tiết cách sử dụng!`, threadID, messageID);
    }

    async function downloadFile(url, path) {
        const { createWriteStream } = require('fs-extra');
        const axios = require('axios');
    
        var { data } = await axios.get(url, { responseType: 'stream' });
        var writer = createWriteStream(path);
        data.pipe(writer);
        return new Promise((resolve, reject) => {
            writer.on('finish', resolve);
            writer.on('error', reject);
        })
    }

    async function getContent(link) {
        try {
            const axios = require("axios");
    
            const response = await axios({
                method: 'GET',
                link
            });
    
            const data = response;
    
            return data;
        } catch (e) { return console.log(e); };
    }

    function randomString(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()_+=-';
        var charactersLength = characters.length || 5;
        for ( var i = 0; i < length; i++ ) result += characters.charAt(Math.floor(Math.random() * charactersLength));
        return result;
    }

    function autoUnsend(ID, Time) {
        return setTimeout(() => api.unsendMessage(ID), Time);
    }

    function calcTime(fullTime) {
        fullTime = fullTime.match(/[0-9]{2}\/[0-9]{2}\/[0-9]{4}/);
        fullTime = fullTime[0].replace(/\//g, " ").split(' ');
        var date = fullTime[0], month = fullTime[1] - 1, year = fullTime[2];
        var dateNow = Cherry.getTime('date'), monthNow = Cherry.getTime('month') - 1, yearNow = Cherry.getTime('year');
        var date1 = new Date(year, month, date);
        var date2 = new Date(yearNow, monthNow, dateNow);
        return parseInt((date2 - date1) / 86400000);
    }

    function session() {
        var hours = Cherry.getTime('hours');
        var session = hours < 3 ? "đêm khuya" : hours < 8 ? "buổi sáng" : hours < 12 ? "buổi trưa" : hours < 17 ? "buổi chiều" : hours < 23 ? "buổi tối" : "đêm khuya";
        return session;
    }

    async function saveAttachments(attachments, saveTo) {
        try {
            if (!Array.isArray(attachments)) return console.log('Attachments phải là một Array.');
            if (!/\/$/g.test(saveTo)) return console.log('Đường dẫn để lưu phải là một thư mục, không phải một tệp tin.');
            var path = [], number = 1;
            for (var i of attachments) {
                var dotEx = ['photo', 'audio', 'video', 'gif'];
                if (!dotEx.includes(i.type)) continue;
                var fileType = i.type.replace('photo', '.png').replace('audio', '.mp3').replace('video', '.mp4').replace('gif', '.gif');
                var downloadTo = saveTo + `${i.filename}_${number++}${fileType}`;
                await Cherry.downloadFile(`${i.url}`, downloadTo);
                path.push(downloadTo);
            }
            return { error: null, path: path };
        } catch (error) {
            return { error: error, path: null };
        }
    }

    return { commandError, downloadFile, getContent, randomString, autoUnsend, calcTime, session, saveAttachments }
}
