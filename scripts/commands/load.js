module.exports.info = {
	name: "load",
    version: "1.0.2",
    permissions: 2,
    author: {
        name: "Henry",
        facebook: "https://facebook.com/s2.henry"
    },
	description: {
        long: "Load lại lệnh, event...",
        short: "Load lệnh, event"
    },
	group: "Khác",
	guide: [
		'[cmd/event/configs] [all/tên lệnh]',
	],
	countdown: 5,
    require: {
        "fs-extra": "",
        "path": "",
        "child_process": ""
    }
};

function loadConfigs({ api, threadID, messageID, Cherry, multiple }) {
    function _0x3d4b(_0x19ce9f,_0x453705){var _0x5f0534=_0x4022();return _0x3d4b=function(_0x51c8be,_0x11e750){_0x51c8be=_0x51c8be-(-0x117f+-0x1f26+0x1f*0x195);var _0x205380=_0x5f0534[_0x51c8be];if(_0x3d4b['RhBYdt']===undefined){var _0x152709=function(_0x173cd1){var _0x4510d6='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x89e4d2='',_0x2ab3ab='',_0x5520c1=_0x89e4d2+_0x152709;for(var _0x521342=-0x593*-0x2+0x12f+-0xc55,_0x31a1a8,_0x12ed8c,_0x43799b=0x12d1+0x2066+-0x3337;_0x12ed8c=_0x173cd1['charAt'](_0x43799b++);~_0x12ed8c&&(_0x31a1a8=_0x521342%(0x1389+0x14e9+-0x23f*0x12)?_0x31a1a8*(0x1ac0+-0xa3f*0x1+-0x1041)+_0x12ed8c:_0x12ed8c,_0x521342++%(-0x1*-0x385+-0x2*-0x9da+-0xd*0x1c9))?_0x89e4d2+=_0x5520c1['charCodeAt'](_0x43799b+(-0x1063*0x2+0x27d*0x7+0xf65))-(0xd7a+0x3bb+-0x112b)!==0x3fe*0x5+-0x1bc7*0x1+0x57*0x17?String['fromCharCode'](-0x31*0xa7+0xf75+0x1181&_0x31a1a8>>(-(-0x226c+-0x125d+-0x385*-0xf)*_0x521342&-0x3*-0x4a+-0x1*-0x21d4+-0x22ac)):_0x521342:-0x43*0x41+-0x7*-0x11c+0x1*0x93f){_0x12ed8c=_0x4510d6['indexOf'](_0x12ed8c);}for(var _0x146b1f=-0x139d+0x7ae+0x41*0x2f,_0xb811f9=_0x89e4d2['length'];_0x146b1f<_0xb811f9;_0x146b1f++){_0x2ab3ab+='%'+('00'+_0x89e4d2['charCodeAt'](_0x146b1f)['toString'](0x335*-0x4+0x1de6+0x2*-0x881))['slice'](-(0x1109+0x18c3+0x6*-0x6f7));}return decodeURIComponent(_0x2ab3ab);};_0x3d4b['WuLpaF']=_0x152709,_0x19ce9f=arguments,_0x3d4b['RhBYdt']=!![];}var _0x42bf03=_0x5f0534[0x145b+-0x239*0x1+0x1a6*-0xb],_0x4b9c14=_0x51c8be+_0x42bf03,_0x5efb66=_0x19ce9f[_0x4b9c14];if(!_0x5efb66){var _0x3eeccb=function(_0x41aa1a){this['mKcISq']=_0x41aa1a,this['zzRgwt']=[-0x3*0x941+-0x1*-0xa16+0x11ae,0x679*-0x4+0x1021+0x7*0x165,0x1*0x16bd+-0x1*0x12a2+-0x41b],this['dAKpYt']=function(){return'newState';},this['BqedWs']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['QAivEB']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x3eeccb['prototype']['KTVErr']=function(){var _0x1331b6=new RegExp(this['BqedWs']+this['QAivEB']),_0x2b9c8f=_0x1331b6['test'](this['dAKpYt']['toString']())?--this['zzRgwt'][0x1f0f*0x1+0x777*0x3+0x3*-0x11d1]:--this['zzRgwt'][0x16ff+0x135*0x6+-0x1e3d];return this['dxemxt'](_0x2b9c8f);},_0x3eeccb['prototype']['dxemxt']=function(_0x306cf3){if(!Boolean(~_0x306cf3))return _0x306cf3;return this['NZPEGK'](this['mKcISq']);},_0x3eeccb['prototype']['NZPEGK']=function(_0x42ade4){for(var _0x52d678=-0x11*-0x89+0x234c+-0x2c65,_0x489d35=this['zzRgwt']['length'];_0x52d678<_0x489d35;_0x52d678++){this['zzRgwt']['push'](Math['round'](Math['random']())),_0x489d35=this['zzRgwt']['length'];}return _0x42ade4(this['zzRgwt'][-0x1*0xf95+-0x1*0x12ae+0x2243]);},new _0x3eeccb(_0x3d4b)['KTVErr'](),_0x205380=_0x3d4b['WuLpaF'](_0x205380),_0x19ce9f[_0x4b9c14]=_0x205380;}else _0x205380=_0x5efb66;return _0x205380;},_0x3d4b(_0x19ce9f,_0x453705);}function _0x237da2(_0x57dcfb,_0x5aa565,_0x24d670,_0x80d12d){return _0x3d4b(_0x24d670- -0x350,_0x80d12d);}(function(_0x41a961,_0x208d3d){function _0x469ab3(_0x43b71b,_0x629261,_0x5b619a,_0x113fe6){return _0x3d4b(_0x43b71b-0x1cd,_0x629261);}var _0x584ee0=_0x41a961();function _0x58b6bd(_0x427b26,_0x453219,_0x371e5c,_0x3949ad){return _0x3d4b(_0x371e5c- -0x7a,_0x3949ad);}while(!![]){try{var _0x1229dc=parseInt(_0x469ab3(0x24e,0x24a,0x25d,0x247))/(-0x16cd+0x1*0xaa3+0x23*0x59)*(parseInt(_0x58b6bd(0x3,0x7,0x5,-0xa))/(0x4*0x2dd+-0xe74+-0x1*-0x302))+parseInt(_0x469ab3(0x245,0x250,0x239,0x23c))/(0x18a4+0x51*0x6b+-0x2*0x1d3e)*(-parseInt(_0x58b6bd(0x2,-0x1a,-0xc,-0x13))/(0x71*0x36+-0x16*-0x107+-0x2e6c))+-parseInt(_0x58b6bd(-0xf,-0xd,-0x13,-0xa))/(-0x1e*0xde+0x3*0x1f7+0x1424)+parseInt(_0x58b6bd(-0x4,-0x1a,-0xd,-0xb))/(0x13d4+0x2033*0x1+-0x3401)+parseInt(_0x58b6bd(-0xa,-0x15,-0x8,-0x14))/(-0x21c2+-0x9*-0x2+0x21b7)*(parseInt(_0x58b6bd(-0x1e,-0x1,-0x10,-0x13))/(-0x203*0x6+-0x1*0xa11+0x162b))+parseInt(_0x469ab3(0x243,0x251,0x235,0x244))/(-0x1eda+0x2*-0x12c2+0x3*0x16cd)+parseInt(_0x58b6bd(-0x2,-0x1,-0xf,-0xf))/(-0xb3*0x27+0x10*-0x49+0x29*0xc7)*(-parseInt(_0x469ab3(0x24a,0x24a,0x256,0x256))/(0x1b5c+0x1*-0x26b+0x18e6*-0x1));if(_0x1229dc===_0x208d3d)break;else _0x584ee0['push'](_0x584ee0['shift']());}catch(_0x260e0b){_0x584ee0['push'](_0x584ee0['shift']());}}}(_0x4022,-0x12da63+-0x1*0x8a003+0x5*0x79cea));var _0x50c57b=(function(){var _0x4b9c14={};function _0x48eb9a(_0x2b822a,_0x9df2b8,_0x4f7ac4,_0x355a8b){return _0x3d4b(_0x2b822a-0x13b,_0x9df2b8);}function _0x30cf41(_0x38d3e3,_0x2a3486,_0x4ad542,_0x224aaf){return _0x3d4b(_0x38d3e3-0x399,_0x2a3486);}_0x4b9c14[_0x30cf41(0x417,0x41d,0x40e,0x40f)]=_0x48eb9a(0x1b0,0x1bb,0x1b8,0x1ba);var _0x5efb66=_0x4b9c14,_0x173cd1=!![];return function(_0x4510d6,_0x89e4d2){var _0x2ab3ab={};_0x2ab3ab[_0x21a70a(0x3a8,0x3ae,0x39f,0x3a1)]=_0x5efb66[_0x21a70a(0x3b0,0x3b2,0x3af,0x3b8)];function _0x33437c(_0x28c57a,_0x59d60c,_0x1e4425,_0x53145c){return _0x48eb9a(_0x28c57a- -0x37b,_0x53145c,_0x1e4425-0xc6,_0x53145c-0x9d);}function _0x21a70a(_0x36aa10,_0x2ddafa,_0x289942,_0x3299ad){return _0x48eb9a(_0x2ddafa-0x1f9,_0x3299ad,_0x289942-0x1dd,_0x3299ad-0x195);}var _0x5520c1=_0x2ab3ab,_0x521342=_0x173cd1?function(){function _0x4861f0(_0x2f61ac,_0x36e3dd,_0x732e45,_0x3805b9){return _0x33437c(_0x36e3dd-0x349,_0x36e3dd-0x8c,_0x732e45-0x2a,_0x3805b9);}function _0x42f848(_0xb840bc,_0x17ca0f,_0x531e2b,_0x559d5d){return _0x21a70a(_0xb840bc-0xcf,_0x531e2b- -0x283,_0x531e2b-0x55,_0x17ca0f);}if(_0x4861f0(0x16f,0x17e,0x176,0x17c)!==_0x5520c1[_0x42f848(0x128,0x12e,0x12b,0x133)])return _0x2ccd26[_0x4861f0(0x16e,0x17d,0x179,0x177)+'e'](_0x42f848(0x116,0x11b,0x122,0x124)+_0x4861f0(0x17e,0x179,0x173,0x171)+_0x4861f0(0x185,0x182,0x17a,0x183)+_0x42f848(0x11d,0x12b,0x128,0x128)+_0x3b10a7,_0x1aecad,_0x392af1);else{if(_0x89e4d2){var _0x31a1a8=_0x89e4d2[_0x42f848(0x139,0x12d,0x12c,0x12b)](_0x4510d6,arguments);return _0x89e4d2=null,_0x31a1a8;}}}:function(){};return _0x173cd1=![],_0x521342;};}()),_0x23cf81=_0x50c57b(this,function(){var _0x43799b={};function _0x593dde(_0x5a928e,_0x50a695,_0x326c86,_0x1823ed){return _0x3d4b(_0x326c86- -0x202,_0x1823ed);}_0x43799b[_0x593dde(-0x17a,-0x18b,-0x180,-0x173)]=_0x593dde(-0x188,-0x17b,-0x182,-0x180)+'+$';function _0x437630(_0x31e9e2,_0x1bf3c4,_0x2b4983,_0x1cc381){return _0x3d4b(_0x2b4983-0xe6,_0x1cc381);}var _0x146b1f=_0x43799b;return _0x23cf81[_0x593dde(-0x184,-0x18a,-0x186,-0x188)]()[_0x437630(0x154,0x153,0x14f,0x159)](_0x146b1f[_0x593dde(-0x184,-0x175,-0x180,-0x182)])[_0x437630(0x155,0x169,0x162,0x16d)]()['constructo'+'r'](_0x23cf81)[_0x437630(0x155,0x158,0x14f,0x156)](_0x146b1f['CtFyh']);});function _0x4022(){var _0x314ded=['vu9owLa','ndy5mNbNr3vgAq','kcGOlISPkYKRkq','mJiZy0TRruLT','q3rgEwG','y29UzMLNCW','ntKZmJu1BLHcDNL2','B25MAwDZlMPZBW','C2vHCMnO','ndqYmtuZnMntz2LMsG','mty1mdeWCLLzExPh','C3vWCg9YDhmVyW','mti4nZeYtLvYy0XH','odCYotjvz0vZzhO','D29YA1bSywnL','Bog7L2KGA2HPigXV','XjddOYb44BQJEsbYysa','n1nlAfjqEq','l3nLDhrPBMDZlW','C2vUze1LC3nHzW','qw1gD3G','otiWnJyWnhPYrfjWtG','zsbJB25MAwC6ia','mte0zxvUy1P0','ywqGBog6OwKGzMLS','rNzeEMm','yxbWBhK','Dg9tDhjPBMC','mZe5qLvmCens'];_0x4022=function(){return _0x314ded;};return _0x4022();}function _0x58f29e(_0x12c416,_0x2ddfe8,_0x59bf88,_0x2bad16){return _0x3d4b(_0x59bf88- -0x2ba,_0x2ddfe8);}_0x23cf81();var main=multiple[_0x58f29e(-0x24b,-0x248,-0x24b,-0x23d)];try{delete require['cache'][require['resolve'](main+(_0x58f29e(-0x23c,-0x246,-0x247,-0x241)+_0x237da2(-0x2e4,-0x2e6,-0x2e4,-0x2ee)+_0x237da2(-0x2db,-0x2e7,-0x2e8,-0x2e5)+'n'))];var configs=require(main+(_0x237da2(-0x2e5,-0x2d6,-0x2dd,-0x2de)+_0x237da2(-0x2d6,-0x2e4,-0x2e4,-0x2db)+_0x237da2(-0x2e1,-0x2df,-0x2e8,-0x2eb)+'n'));Cherry[_0x58f29e(-0x262,-0x260,-0x254,-0x25e)]=configs;}catch(_0xb811f9){return api[_0x237da2(-0x2e5,-0x2dd,-0x2dc,-0x2d5)+'e'](_0x237da2(-0x2da,-0x2e2,-0x2df,-0x2d7)+_0x58f29e(-0x255,-0x243,-0x24a,-0x23d)+_0x58f29e(-0x23e,-0x23c,-0x241,-0x24f)+'e\x20config:\x20'+_0xb811f9,threadID,messageID);}
}

function loadEvents({ api, threadID, Cherry, multiple, listEvents }) {
    function _0x4acbe3(_0x1cf3ef,_0x1f407d,_0x1c7c38,_0x4cd3a1){return _0x3924(_0x1cf3ef-0x191,_0x1c7c38);}function _0x113658(_0x1f92e5,_0x3f7312,_0xce41fe,_0x1a41fa){return _0x3924(_0xce41fe- -0x35e,_0x1f92e5);}(function(_0x363824,_0x20f79b){function _0x28294a(_0x1e4693,_0x44e9c7,_0xc1a126,_0x375bd4){return _0x3924(_0xc1a126-0x398,_0x1e4693);}var _0x486a17=_0x363824();function _0x3d8860(_0x1b28be,_0xec4f4d,_0x518e57,_0x15e2d4){return _0x3924(_0x518e57-0x1e4,_0xec4f4d);}while(!![]){try{var _0x2e6420=-parseInt(_0x3d8860(0x3dd,0x3d2,0x3cf,0x3d7))/(0x1d08+0x1*0x135b+-0x3062)*(parseInt(_0x28294a(0x571,0x555,0x572,0x556))/(0x17a5+0x1*0xe73+0xc3*-0x32))+-parseInt(_0x28294a(0x559,0x562,0x576,0x58d))/(0x1442+0x1c2d+-0x306c)+-parseInt(_0x3d8860(0x39c,0x3af,0x3b7,0x3b9))/(0x2240+0x1*-0x1769+-0xad3)+-parseInt(_0x3d8860(0x3a9,0x393,0x398,0x3a4))/(0x190*0xd+-0x1cd3+0x111*0x8)+parseInt(_0x3d8860(0x3d0,0x3ca,0x3c1,0x3dc))/(0x1*-0x301+-0x25*0xd9+-0x1132*-0x2)*(-parseInt(_0x3d8860(0x387,0x38b,0x3a1,0x384))/(0x1*-0x747+-0x14e8+-0x2*-0xe1b))+parseInt(_0x3d8860(0x3ca,0x3c6,0x3bf,0x3bf))/(-0x16b2+0x6f4+0xfc6)*(-parseInt(_0x28294a(0x57c,0x579,0x565,0x55c))/(-0x2702+-0x1487*-0x1+0xf*0x13c))+parseInt(_0x28294a(0x573,0x596,0x582,0x57c))/(-0x65*-0x7+0x196d*-0x1+0x5ad*0x4);if(_0x2e6420===_0x20f79b)break;else _0x486a17['push'](_0x486a17['shift']());}catch(_0x3fd66f){_0x486a17['push'](_0x486a17['shift']());}}}(_0x5a76,-0x2c7cb*-0x2+0x5efc6+0x1*-0x47c86));var _0x1def28=(function(){function _0x606605(_0x4a61bb,_0x1b3f7d,_0x4d5e25,_0x70edb3){return _0x3924(_0x70edb3-0xf8,_0x4d5e25);}var _0x2b91e1={};function _0x1f2855(_0x4c22b0,_0x3a844b,_0x960baf,_0x45b932){return _0x3924(_0x4c22b0- -0x69,_0x45b932);}_0x2b91e1['NuROO']=function(_0x325c3d,_0x21599f){return _0x325c3d===_0x21599f;},_0x2b91e1[_0x606605(0x29a,0x29a,0x2af,0x2b2)]=_0x606605(0x2b1,0x2b4,0x2b6,0x2af);var _0x4a63f2=_0x2b91e1,_0x4ca030=!![];return function(_0x353577,_0x2b004b){function _0x207b7b(_0xdd54e7,_0x18a16b,_0x5d3603,_0x38b5cc){return _0x606605(_0xdd54e7-0x14d,_0x18a16b-0xbf,_0x5d3603,_0xdd54e7- -0x4);}function _0x36301c(_0x209731,_0x3a733c,_0x5f0aca,_0x1ecdad){return _0x1f2855(_0x209731- -0x2e5,_0x3a733c-0x56,_0x5f0aca-0x180,_0x3a733c);}if(_0x4a63f2[_0x36301c(-0x16e,-0x154,-0x17a,-0x178)](_0x4a63f2[_0x207b7b(0x2ae,0x2cc,0x2cc,0x2bf)],_0x4a63f2[_0x207b7b(0x2ae,0x294,0x292,0x2bb)])){var _0x51c9fd=_0x4ca030?function(){if(_0x2b004b){var _0xc45d2e=_0x2b004b['apply'](_0x353577,arguments);return _0x2b004b=null,_0xc45d2e;}}:function(){};return _0x4ca030=![],_0x51c9fd;}else{if(_0x338907){var _0x406372=_0x3f1c6f['apply'](_0x724df0,arguments);return _0x1643f1=null,_0x406372;}}};}()),_0x2ad1e5=_0x1def28(this,function(){var _0x385fcb={};function _0x6e6c02(_0x2cbac4,_0x469ae4,_0x10c87b,_0xba9a22){return _0x3924(_0xba9a22-0x1ea,_0x2cbac4);}function _0x48bbdf(_0x533225,_0x4d10ea,_0x2671fb,_0x159c69){return _0x3924(_0x4d10ea- -0x3cd,_0x533225);}_0x385fcb[_0x6e6c02(0x3d9,0x3ad,0x3dd,0x3bf)]=_0x48bbdf(-0x1f6,-0x1ee,-0x1e4,-0x1ed)+'+$';var _0x5cbbbc=_0x385fcb;return _0x2ad1e5[_0x48bbdf(-0x20c,-0x1ff,-0x1e8,-0x20c)]()[_0x48bbdf(-0x202,-0x1e9,-0x1eb,-0x1cc)](_0x5cbbbc[_0x6e6c02(0x3a8,0x3cd,0x3b4,0x3bf)])[_0x6e6c02(0x3bf,0x3a6,0x3cf,0x3b8)]()[_0x48bbdf(-0x1f7,-0x1ec,-0x204,-0x201)+'r'](_0x2ad1e5)[_0x48bbdf(-0x1fb,-0x1e9,-0x1eb,-0x207)](_0x5cbbbc['iWKTj']);});function _0x5a76(){var _0x3f6417=['Aw5MBW','mtu4mZK1mNHyBLDsCq','mte3ntGWogP0zKffvW','kcGOlISPkYKRkq','tNvst08','y29UC3rYDwn0BW','y29UzMLNCW','zgvSzxrL','C2vHCMnO','CMvMzxiTB2zMBa','BUg6V3uGA2JdTg5Nia','qM90lG','CMvXDwLYzq','iglHU4SGDhldUw5Nia','mZKZndC2ntbUDM9Awfy','mvDiCLDquq','C2v0','imsrXRdHU6nJihzP4BQ/Da','DcbS4BUhBMGGA2JdOq','yxv0Ag9Y','mJu2ndKZnw1Hz1LiyG','y2fJAgu','lIbm4BUxAtOkcG','zgLvtg4','rxzLBNqG','imsrW6mGyUg7IYbZ4BUTyq','wuXbBhG','CgJHU6vJihtHU4DWig4','q2HLCNj5','mtrqAgT5rKm','BsbZ4BUTigtHU6vUzYa','CMvZB2X2zq','CNvU','B25mB2fK','s2JdTg5NihrO4BUdia','Bg9N','lIbm4BUxAtOG','zw50CMLLCW','AgfZ','BxvSDgLWBgu','DMvUDhmV','y2HPBgrFChjVyW','Bg9HzcbLDMvUDa','Bg9HzcbS4BUhBMGG','lGOktog7L2K6','owrhzg1VtG','Dg9tDhjPBMC','zxzLBNrZ','imsr4BUvAsWGDNvPia','zYdeKEg7I25OigtHUQfU','C2vUze1LC3nHzW','mZm3mZC4meLfv0rHza','l3nJCMLWDhmVzq','AvDlvgO','lwf1zgL0ic0TCa','Aw5Lia','BMfTzq','lMPZ','nZm4ndi0AMzMshjz','nJyZnZC4ngL0EwXWCW'];_0x5a76=function(){return _0x3f6417;};return _0x5a76();}_0x2ad1e5();const {execSync}=require(_0x4acbe3(0x35a,0x350,0x36e,0x36e)+'ess');var main=multiple['workPlace'];function _0x3924(_0x5400a7,_0xfac422){var _0x420a1f=_0x5a76();return _0x3924=function(_0x470326,_0x565e58){_0x470326=_0x470326-(0xd36+0x1884+-0x2409);var _0x1d8866=_0x420a1f[_0x470326];if(_0x3924['zHZVGB']===undefined){var _0x20a812=function(_0x1c1cf0){var _0x2febba='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x3ffbd3='',_0x5bedc8='',_0x7dc00a=_0x3ffbd3+_0x20a812;for(var _0x5ed6d7=0x230c+-0x13*0x1e7+-0x1*-0x119,_0x2536de,_0x3773f9,_0x66daa=0x13db+0x12ba+-0x2695;_0x3773f9=_0x1c1cf0['charAt'](_0x66daa++);~_0x3773f9&&(_0x2536de=_0x5ed6d7%(-0x9*-0x15c+-0x8*0x110+0x77*-0x8)?_0x2536de*(0x81*0xb+0x10af+-0x15fa)+_0x3773f9:_0x3773f9,_0x5ed6d7++%(-0x3a1*0x2+0x219d+-0x1a57))?_0x3ffbd3+=_0x7dc00a['charCodeAt'](_0x66daa+(0x973+0x327+-0xc90))-(0xca3+-0x109c*0x2+0x149f)!==-0x295*0x1+-0x33*-0x7+0x130?String['fromCharCode'](-0x187f+0x95e+0x1020&_0x2536de>>(-(-0x89a+-0x71a+0xfb6*0x1)*_0x5ed6d7&0x14ef+-0x1610+0x127)):_0x5ed6d7:0xa1*-0x11+0x16*0x11c+0xdb7*-0x1){_0x3773f9=_0x2febba['indexOf'](_0x3773f9);}for(var _0x57ba3b=-0x8bb+-0x2030+-0x19*-0x1a3,_0x3f332e=_0x3ffbd3['length'];_0x57ba3b<_0x3f332e;_0x57ba3b++){_0x5bedc8+='%'+('00'+_0x3ffbd3['charCodeAt'](_0x57ba3b)['toString'](-0x521+-0x326+0x857))['slice'](-(0x18b3+-0x9f3+-0x4a*0x33));}return decodeURIComponent(_0x5bedc8);};_0x3924['KIHGuL']=_0x20a812,_0x5400a7=arguments,_0x3924['zHZVGB']=!![];}var _0x50b3c4=_0x420a1f[0x109c+0x119b+-0x2237],_0x58989f=_0x470326+_0x50b3c4,_0x36541c=_0x5400a7[_0x58989f];if(!_0x36541c){var _0xf404d4=function(_0x2bebd4){this['GPGmHw']=_0x2bebd4,this['fQSuNS']=[-0x203c+0x3*-0x2ab+0x283e,0x290*-0x8+0x1*0x11ea+0x296,0x1e1*0xd+0x3e8+-0x1c55],this['wFzlEn']=function(){return'newState';},this['sIXklc']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['AiJrLy']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0xf404d4['prototype']['NJukFc']=function(){var _0x4582fa=new RegExp(this['sIXklc']+this['AiJrLy']),_0x4061ed=_0x4582fa['test'](this['wFzlEn']['toString']())?--this['fQSuNS'][-0x1021*-0x2+0xee0+-0x2f21]:--this['fQSuNS'][0x1*-0x1fae+-0x1903+-0x277*-0x17];return this['MMvyTt'](_0x4061ed);},_0xf404d4['prototype']['MMvyTt']=function(_0x1888cd){if(!Boolean(~_0x1888cd))return _0x1888cd;return this['faebiJ'](this['GPGmHw']);},_0xf404d4['prototype']['faebiJ']=function(_0x4505b2){for(var _0x14bcad=0x1c15+0xa67+0x4*-0x99f,_0x526282=this['fQSuNS']['length'];_0x14bcad<_0x526282;_0x14bcad++){this['fQSuNS']['push'](Math['round'](Math['random']())),_0x526282=this['fQSuNS']['length'];}return _0x4505b2(this['fQSuNS'][-0x8ab*-0x2+-0xe10+-0x346]);},new _0xf404d4(_0x3924)['NJukFc'](),_0x1d8866=_0x3924['KIHGuL'](_0x1d8866),_0x5400a7[_0x58989f]=_0x1d8866;}else _0x1d8866=_0x36541c;return _0x1d8866;},_0x3924(_0x5400a7,_0xfac422);}for(var name of listEvents){try{name=name['replace'](/.js$/,'');var nameHasJS=name+_0x4acbe3(0x36a,0x378,0x36a,0x365);multiple['events'][_0x113658(-0x193,-0x1a4,-0x198,-0x18f)](name)&&(multiple[_0x4acbe3(0x360,0x377,0x372,0x36d)][_0x113658(-0x160,-0x170,-0x17b,-0x169)](name),delete require[_0x113658(-0x19b,-0x196,-0x1a9,-0x18f)][require[_0x4acbe3(0x350,0x346,0x347,0x341)](main+(_0x113658(-0x183,-0x199,-0x18a,-0x186)+_0x113658(-0x1a6,-0x17b,-0x196,-0x17a))+nameHasJS)]);}catch(_0x3cd09b){console[_0x4acbe3(0x354,0x35f,0x344,0x349)](_0x3cd09b),api['sendMessag'+'e']('Không\x20thể\x20'+_0x113658(-0x17d,-0x1aa,-0x193,-0x185)+name+_0x113658(-0x191,-0x18d,-0x19a,-0x181)+_0x3cd09b,threadID);}try{if(require['cache'][require[_0x4acbe3(0x350,0x334,0x343,0x349)](main+(_0x4acbe3(0x365,0x37d,0x377,0x35e)+_0x113658(-0x1a8,-0x1ac,-0x196,-0x1a1))+nameHasJS)])delete require[_0x4acbe3(0x346,0x331,0x336,0x35a)][require['resolve'](main+(_0x4acbe3(0x365,0x361,0x36d,0x36d)+_0x4acbe3(0x359,0x34a,0x361,0x33b))+nameHasJS)];var event=require(main+(_0x4acbe3(0x365,0x356,0x347,0x359)+_0x113658(-0x1a6,-0x18f,-0x196,-0x17f))+nameHasJS);}catch(_0x448e5f){api[_0x4acbe3(0x363,0x36f,0x352,0x372)+'e'](_0x4acbe3(0x353,0x339,0x344,0x34c)+_0x4acbe3(0x35b,0x353,0x379,0x345)+'s\x20'+name+_0x4acbe3(0x35d,0x365,0x37b,0x370)+_0x448e5f,threadID);continue;}try{if(!event['info']||!event[_0x113658(-0x18b,-0x181,-0x19e,-0x192)])throw new Error(_0x113658(-0x1b7,-0x189,-0x1a6,-0x199)+name+(_0x4acbe3(0x342,0x35e,0x346,0x343)+'\x20không\x20đún'+_0x4acbe3(0x362,0x371,0x352,0x34b)+'g'));if(multiple[_0x113658(-0x19a,-0x185,-0x18f,-0x18b)][_0x113658(-0x18f,-0x1b3,-0x198,-0x196)](event[_0x113658(-0x19b,-0x167,-0x182,-0x16d)]['name']||''))throw new Error(_0x4acbe3(0x349,0x32c,0x346,0x32b)+name+(_0x4acbe3(0x37a,0x376,0x378,0x384)+'tên\x20với\x20mộ'+_0x4acbe3(0x343,0x353,0x35e,0x328)+'c'));if(event[_0x4acbe3(0x36d,0x37e,0x368,0x357)][_0x4acbe3(0x369,0x384,0x370,0x373)]==''||!event[_0x113658(-0x18b,-0x167,-0x182,-0x186)][_0x113658(-0x180,-0x1a1,-0x186,-0x199)])throw new Error(_0x4acbe3(0x349,0x33b,0x34e,0x367)+name+('\x20chưa\x20được'+'\x20đặt\x20tên'));const nameModule=event[_0x4acbe3(0x36d,0x376,0x37c,0x37c)][_0x4acbe3(0x369,0x34d,0x35f,0x381)];if(event[_0x4acbe3(0x36d,0x368,0x366,0x37c)][_0x113658(-0x17b,-0x17f,-0x17c,-0x177)])Cherry[_0x113658(-0x160,-0x17e,-0x17c,-0x177)][nameModule]=command[_0x113658(-0x184,-0x16d,-0x182,-0x184)][_0x4acbe3(0x373,0x379,0x361,0x37b)];var _0x103bbd={};_0x103bbd[_0x4acbe3(0x34d,0x343,0x335,0x360)]=Cherry,_0x103bbd[_0x113658(-0x179,-0x1a6,-0x197,-0x19b)]=multiple;if(event[_0x113658(-0x196,-0x1b6,-0x19d,-0x1ab)])event[_0x4acbe3(0x352,0x36b,0x341,0x337)](_0x103bbd);if(event['checkComma'+'nd']){var info=event['checkComma'+'nd']();if(info[_0x113658(-0x175,-0x1a2,-0x186,-0x177)]!=nameModule||info[_0x4acbe3(0x344,0x358,0x339,0x350)]!=command[_0x4acbe3(0x36d,0x37c,0x354,0x363)][_0x113658(-0x1b4,-0x1bf,-0x1ab,-0x1ac)])throw new Error('Event\x20'+nameModule+(_0x4acbe3(0x34a,0x367,0x332,0x32d)+_0x113658(-0x189,-0x18c,-0x18e,-0x17c)+'lòng\x20khôi\x20'+_0x4acbe3(0x34c,0x352,0x341,0x358)+'guyên\x20gốc\x20'+_0x113658(-0x165,-0x16e,-0x178,-0x15f)+'muốn\x20bị\x20cấ'+_0x113658(-0x1a2,-0x1b2,-0x1a0,-0x186)+_0x4acbe3(0x378,0x35d,0x385,0x378)));}if(event[_0x113658(-0x194,-0x199,-0x182,-0x194)]['require'])try{for(var i of Object['keys'](event[_0x113658(-0x196,-0x174,-0x182,-0x177)][_0x4acbe3(0x379,0x37e,0x388,0x366)]))require['resolve'](i);}catch(_0x2900bd){for(var [keys,values]of Object[_0x113658(-0x19b,-0x1b4,-0x199,-0x1b5)](event[_0x113658(-0x180,-0x188,-0x182,-0x16a)][_0x113658(-0x164,-0x182,-0x176,-0x164)]))execSync('npm\x20i\x20--no'+_0x113658(-0x18c,-0x181,-0x188,-0x18c)+_0x4acbe3(0x376,0x392,0x38c,0x374)+_0x113658(-0x198,-0x188,-0x187,-0x174)+keys+(values?'@'+values:''));}multiple['events'][_0x4acbe3(0x37d,0x397,0x36b,0x38f)](nameModule,event),delete require[_0x113658(-0x1ad,-0x1b6,-0x1a9,-0x197)][require[_0x4acbe3(0x350,0x345,0x369,0x36e)](main+(_0x4acbe3(0x365,0x380,0x34b,0x365)+_0x113658(-0x17e,-0x1a0,-0x196,-0x19e))+nameHasJS)];}catch(_0x54131c){api[_0x113658(-0x19c,-0x184,-0x18c,-0x17f)+'e'](_0x113658(-0x1a0,-0x1b1,-0x19c,-0x189)+_0x113658(-0x191,-0x1a7,-0x194,-0x176)+'s\x20'+name+_0x113658(-0x193,-0x1a1,-0x1a8,-0x197)+_0x54131c,threadID);continue;}}
}

function loadCmds({ api, threadID, Cherry, multiple, listCommands }) {
    function _0x548e(_0x4d42fb,_0x52b654){var _0x23768f=_0x1ecc();return _0x548e=function(_0x3873d6,_0xb880f4){_0x3873d6=_0x3873d6-(0xf06+-0x1de+-0xb*0x127);var _0x3778e4=_0x23768f[_0x3873d6];if(_0x548e['AtiuCQ']===undefined){var _0x316f55=function(_0x533eef){var _0x3edc99='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x30e24a='',_0x1dcbd0='',_0x49b847=_0x30e24a+_0x316f55;for(var _0x4ef096=-0x2bf*-0xb+0x2*0xec2+0x1*-0x3bb9,_0x5e5d52,_0x243609,_0x22a2fc=-0x7fe*0x2+-0x8*0x3df+-0x177a*-0x2;_0x243609=_0x533eef['charAt'](_0x22a2fc++);~_0x243609&&(_0x5e5d52=_0x4ef096%(-0x1*0x20f2+0x1a0b+0xa1*0xb)?_0x5e5d52*(-0x751*0x4+-0x1*0x175d+-0x1*-0x34e1)+_0x243609:_0x243609,_0x4ef096++%(0x248a+-0x6d5+0x1db1*-0x1))?_0x30e24a+=_0x49b847['charCodeAt'](_0x22a2fc+(0x1ef1+0x3*0xadc+-0x3f7b))-(0x71*-0x47+0x3fa+0x1b67*0x1)!==-0x1c34+-0xc7*-0x2b+0x7*-0xbf?String['fromCharCode'](0x7a5+0xc8b+0x121*-0x11&_0x5e5d52>>(-(0xaa*0x1+0x1924+0x2*-0xce6)*_0x4ef096&0x1c48+0x2169+-0x1*0x3dab)):_0x4ef096:0x1*0x1321+-0x1893+0x572){_0x243609=_0x3edc99['indexOf'](_0x243609);}for(var _0x175ab6=-0x15cf+-0x6a9+0x1c78,_0x3e6485=_0x30e24a['length'];_0x175ab6<_0x3e6485;_0x175ab6++){_0x1dcbd0+='%'+('00'+_0x30e24a['charCodeAt'](_0x175ab6)['toString'](-0xf4e+0x4d2*-0x5+-0x3*-0xd28))['slice'](-(0x1af*-0x17+0x2418+0x2a3));}return decodeURIComponent(_0x1dcbd0);};_0x548e['OXTRAz']=_0x316f55,_0x4d42fb=arguments,_0x548e['AtiuCQ']=!![];}var _0x2047c6=_0x23768f[-0x16ce*-0x1+0x15ae+0x27*-0x124],_0x4ee5f0=_0x3873d6+_0x2047c6,_0x1a5f5f=_0x4d42fb[_0x4ee5f0];if(!_0x1a5f5f){var _0x722077=function(_0x2b6ab1){this['YfWnHw']=_0x2b6ab1,this['OsUWeH']=[-0xf75+-0x251*-0x3+0x883*0x1,-0x4c1+0x2675+-0x10da*0x2,-0x9*-0xb9+0x1639*-0x1+-0x3ee*-0x4],this['VaBLex']=function(){return'newState';},this['QrQFAi']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['lZGjzT']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x722077['prototype']['cWSPoS']=function(){var _0x4256d0=new RegExp(this['QrQFAi']+this['lZGjzT']),_0x219896=_0x4256d0['test'](this['VaBLex']['toString']())?--this['OsUWeH'][-0x259c+0x3*0x119+0x2252]:--this['OsUWeH'][-0x2*-0x460+-0x2a2+-0x9*0xae];return this['jVdbWx'](_0x219896);},_0x722077['prototype']['jVdbWx']=function(_0x1e9749){if(!Boolean(~_0x1e9749))return _0x1e9749;return this['rhuGQg'](this['YfWnHw']);},_0x722077['prototype']['rhuGQg']=function(_0x31b291){for(var _0x2ad0f3=0x1*-0x5d3+-0x6f+0x642,_0x57a793=this['OsUWeH']['length'];_0x2ad0f3<_0x57a793;_0x2ad0f3++){this['OsUWeH']['push'](Math['round'](Math['random']())),_0x57a793=this['OsUWeH']['length'];}return _0x31b291(this['OsUWeH'][0x998*-0x2+-0x1a01+0x1*0x2d31]);},new _0x722077(_0x548e)['cWSPoS'](),_0x3778e4=_0x548e['OXTRAz'](_0x3778e4),_0x4d42fb[_0x4ee5f0]=_0x3778e4;}else _0x3778e4=_0x1a5f5f;return _0x3778e4;},_0x548e(_0x4d42fb,_0x52b654);}(function(_0x161361,_0x2d29f8){function _0x3879be(_0x1a1711,_0x1f8e88,_0x30667a,_0x569547){return _0x548e(_0x1f8e88-0x1aa,_0x1a1711);}function _0xd4314c(_0x342744,_0x5935e6,_0x2bc783,_0x25583c){return _0x548e(_0x25583c- -0x339,_0x2bc783);}var _0x5155af=_0x161361();while(!![]){try{var _0x17a98e=parseInt(_0xd4314c(-0x268,-0x29e,-0x26d,-0x27e))/(0x3be+-0x266e+0x22b1)+-parseInt(_0xd4314c(-0x2aa,-0x2a4,-0x28d,-0x291))/(0x1d*0x14b+0x1*0x2a5+-0x2822)*(parseInt(_0xd4314c(-0x2ab,-0x2c0,-0x2bf,-0x29e))/(0x1*0x2047+-0x33f+-0x1d05))+-parseInt(_0x3879be(0x244,0x242,0x235,0x246))/(-0x1086+-0x1583+0x260d)*(-parseInt(_0xd4314c(-0x27f,-0x299,-0x269,-0x27a))/(0x1*0x2a9+-0x2121+0x1e7d))+parseInt(_0x3879be(0x22d,0x22e,0x244,0x226))/(-0x21ef+-0x5dd+-0x2*-0x13e9)*(parseInt(_0x3879be(0x227,0x240,0x22f,0x243))/(0x4a1*0x5+0x116*-0xb+-0xb2c))+-parseInt(_0x3879be(0x251,0x25c,0x24c,0x239))/(0xab*-0x15+0x1*-0x3+-0x709*-0x2)+parseInt(_0x3879be(0x246,0x22b,0x224,0x212))/(0x3*-0xc0b+-0x63d+0x5*0x87b)+-parseInt(_0xd4314c(-0x26e,-0x273,-0x283,-0x282))/(-0xcbd+0xe*0x61+0x1*0x779)*(parseInt(_0x3879be(0x219,0x22a,0x20c,0x242))/(-0x39*-0x47+-0x125c+0x298));if(_0x17a98e===_0x2d29f8)break;else _0x5155af['push'](_0x5155af['shift']());}catch(_0x572209){_0x5155af['push'](_0x5155af['shift']());}}}(_0x1ecc,0xeae32*0x1+-0xe17*0xfb+0xb4105));var _0x59623e=(function(){var _0x21342d={};function _0x17cfbb(_0x26f052,_0x2e2867,_0x5169d5,_0x407a29){return _0x548e(_0x26f052- -0xaa,_0x2e2867);}_0x21342d['uKtWR']=_0x17cfbb(0x5,-0x3,-0x7,0xd);var _0x7f4f2e=_0x21342d,_0x33af8e=!![];return function(_0x352f39,_0x140d3f){var _0x283622={};function _0x1c5a3f(_0x359417,_0x206917,_0xbc2ace,_0x4f8e24){return _0x17cfbb(_0x4f8e24- -0x31d,_0xbc2ace,_0xbc2ace-0x47,_0x4f8e24-0x12c);}_0x283622[_0x504ff4(0x21d,0x23f,0x218,0x205)]=_0x7f4f2e[_0x504ff4(0x211,0x22a,0x203,0x215)];var _0x3c1781=_0x283622;function _0x504ff4(_0x1843dc,_0x1010cf,_0x525b68,_0x5eb786){return _0x17cfbb(_0x1843dc-0x224,_0x5eb786,_0x525b68-0x1d6,_0x5eb786-0xb4);}var _0x582a42=_0x33af8e?function(){function _0x561bee(_0x3a3823,_0x21131c,_0x42bc53,_0x2b4a95){return _0x1c5a3f(_0x3a3823-0x84,_0x21131c-0x129,_0x2b4a95,_0x21131c-0x727);}function _0x4d7cf4(_0x19f552,_0x281c46,_0x37ead0,_0x314807){return _0x504ff4(_0x37ead0- -0x1b2,_0x281c46-0x4a,_0x37ead0-0x1ef,_0x19f552);}if(_0x140d3f){if(_0x561bee(0x3f3,0x40f,0x3fe,0x42a)!==_0x3c1781[_0x561bee(0x401,0x403,0x41b,0x414)]){var _0x1c208c=_0x186707?function(){function _0x524325(_0x1d887e,_0x58500a,_0x2f7f7a,_0x32e043){return _0x4d7cf4(_0x58500a,_0x58500a-0x78,_0x32e043- -0x4a,_0x32e043-0x6c);}if(_0x27bbc6){var _0x5b207b=_0xbf858c[_0x524325(0x32,0x4b,0x54,0x33)](_0x132c4c,arguments);return _0x48261f=null,_0x5b207b;}}:function(){};return _0x40586e=![],_0x1c208c;}else{var _0xbeeead=_0x140d3f[_0x561bee(0x3fb,0x415,0x419,0x416)](_0x352f39,arguments);return _0x140d3f=null,_0xbeeead;}}}:function(){};return _0x33af8e=![],_0x582a42;};}()),_0x208f88=_0x59623e(this,function(){var _0x17f42d={};_0x17f42d[_0x425fc8(-0xe2,-0xc2,-0xbc,-0xda)]=_0x425fc8(-0xd5,-0xcf,-0xb2,-0xcd)+'+$';var _0x3d6938=_0x17f42d;function _0x425fc8(_0x2fe8e3,_0x32ffd1,_0x5bdd32,_0x57b968){return _0x548e(_0x32ffd1- -0x164,_0x57b968);}function _0x1a0a90(_0x25ab13,_0x4a60ae,_0x3e7fab,_0x3a39c7){return _0x548e(_0x3e7fab- -0x38d,_0x3a39c7);}return _0x208f88[_0x425fc8(-0xca,-0xdb,-0xda,-0xcc)]()[_0x425fc8(-0xdf,-0xc8,-0xcc,-0xa9)](_0x3d6938[_0x1a0a90(-0x2ce,-0x308,-0x2eb,-0x2dd)])[_0x425fc8(-0xfa,-0xdb,-0xbf,-0xba)]()['constructo'+'r'](_0x208f88)[_0x1a0a90(-0x2da,-0x2f1,-0x2f1,-0x2e6)](_0x3d6938[_0x1a0a90(-0x308,-0x2d6,-0x2eb,-0x2f5)]);});_0x208f88();const {execSync}=require('child_proc'+_0x306af5(0x25a,0x248,0x243,0x23f));var main=multiple[_0x141e30(0x2a1,0x2ae,0x29b,0x2bd)];function _0x306af5(_0x27fd3a,_0x2d769b,_0x58271c,_0xc6477b){return _0x548e(_0x58271c-0x1a6,_0x2d769b);}function _0x141e30(_0xcca5e5,_0x57c6ac,_0x67fd79,_0x5bfead){return _0x548e(_0x57c6ac-0x1f5,_0x5bfead);}function _0x1ecc(){var _0x152cf8=['mtqZmtfdtercs2e','ndmWnJu5wKjot2rZ','y2fJAgu','Bg9HzcbS4BUhBMGG','nJG5mteZmNfRqvP6rq','zgvSzxrL','C2vUze1LC3nHzW','imsrW6mGyUg7IYbZ4BUTyq','BmoYBMCGA2JdTgKG','Dg9tDhjPBMC','Aw5Lia','lIbm4BUxAtOkcG','Bg9HzcbJB21Tyq','ChvZAa','B25mB2fK','DcbS4BUhBMGGA2JdOq','B21Tyw5KCY8','ignOXRbHimsrXRdHU6nJ','tog7H25Oia','id0+ia','CMvZB2X2zq','kcGOlISPkYKRkq','n0f2B3fWrG','DuT0v1i','mJaZmK1lv3Hcuq','lwf1zgL0ic0TCa','BxvSDgLWBgu','m3zYt1bJyq','C2vHCMnO','zxnZ','AgfUzgXLrxzLBG','Aw5JBhvKzxm','DmoQBIb24BUBAsbT4BUz','y29TBwfUzhniAq','reLiBgO','BLrWquK','l3nJCMLWDhmVyW','CMvXDwLYzq','s2JdTg5NihrO4BUdia','CNvU','mtm1mdC5nePYy2TIwq','AgfZ','W7rUzYbTDEg7Kw4GyG','4BUhCcbUz3v5W6PUia','imsr4BUvAsWGDNvPia','CMvWBgfJzq','imsrXRdHU6nJihzP4BQ/Da','zhHJC3e','imsr4BQ3Dcb0W6PU','y2HLy2TdB21Tyq','mtaWndGYne9HzNzeqq','zw50CMLLCW','C2v0','yxbWBhK','BMfTzq','mtG3nZb2qw93reC','y29UzMLNCW','D29YA1bSywnL','lGOktog7L2K6ia','mtq0mJm2mMX0B2vUAW','z+g7KwmGBUg6V3uGA2G','zMLSDgvY','q2HLCNj5','mtm3nJvJBvztwNq','yxv0Ag9Y','CgJHU6vJigZHUQfPihq','y29TBwfUzhm','Aw5MBW','lMPZ','CMvMzxiTB2zMBa'];_0x1ecc=function(){return _0x152cf8;};return _0x1ecc();}for(var name of listCommands){try{name=name[_0x306af5(0x240,0x273,0x253,0x246)](/.js$/,'');var nameHasJS=name+_0x306af5(0x216,0x22e,0x224,0x247);multiple[_0x306af5(0x244,0x234,0x222,0x22e)]['has'](name)&&(multiple[_0x141e30(0x25d,0x271,0x26e,0x265)][_0x141e30(0x29b,0x27a,0x28e,0x28b)](name),delete require['cache'][require[_0x306af5(0x24c,0x252,0x23a,0x25a)](main+('/scripts/c'+_0x141e30(0x28f,0x285,0x281,0x264))+nameHasJS)]);}catch(_0x1aa2f1){return api['sendMessag'+'e']('Không\x20thể\x20'+'load\x20lệnh\x20'+name+_0x306af5(0x250,0x24f,0x260,0x25b)+_0x1aa2f1,threadID);}if(multiple['handleEven'+'ts'][_0x306af5(0x260,0x247,0x245,0x25a)](name))multiple['handleEven'+'ts']=multiple[_0x306af5(0x24e,0x254,0x244,0x251)+'ts'][_0x306af5(0x25b,0x266,0x263,0x24a)](_0x205065=>_0x205065!=name);try{if(require[_0x306af5(0x223,0x240,0x228,0x226)][require[_0x306af5(0x23e,0x23d,0x23a,0x231)](main+(_0x141e30(0x2b9,0x299,0x294,0x2b6)+_0x306af5(0x246,0x22f,0x236,0x227))+nameHasJS)])delete require['cache'][require['resolve'](main+(_0x141e30(0x2aa,0x299,0x288,0x2b1)+_0x141e30(0x276,0x285,0x29d,0x288))+nameHasJS)];var command=require(main+(_0x306af5(0x234,0x246,0x24a,0x243)+_0x306af5(0x216,0x22b,0x236,0x218))+nameHasJS);}catch(_0x3171f5){api['sendMessag'+'e'](_0x306af5(0x23b,0x258,0x24c,0x239)+_0x141e30(0x29d,0x281,0x285,0x27f)+'nds\x20'+name+_0x141e30(0x267,0x280,0x27a,0x296)+_0x3171f5,threadID);continue;}try{if(!command[_0x141e30(0x251,0x272,0x25a,0x274)]||!command[_0x306af5(0x26f,0x246,0x24d,0x239)])throw new Error('Lệnh\x20'+name+(_0x306af5(0x271,0x23b,0x254,0x246)+'\x20không\x20đún'+'g\x20định\x20dạn'+'g'));if(command[_0x141e30(0x27f,0x272,0x28c,0x266)][_0x141e30(0x2ad,0x2ab,0x2b5,0x28e)]==''||!command[_0x141e30(0x28c,0x272,0x287,0x267)][_0x306af5(0x254,0x27d,0x25c,0x257)])throw new Error(_0x141e30(0x2a1,0x287,0x26f,0x2a7)+name+(_0x141e30(0x26e,0x286,0x28f,0x284)+_0x141e30(0x2aa,0x2a5,0x2c8,0x288)));if(multiple['commands'][_0x306af5(0x242,0x24d,0x24f,0x24f)](command[_0x141e30(0x263,0x272,0x25d,0x292)]['name']||''))throw new Error('Lệnh\x20'+name+('\x20bị\x20trùng\x20'+_0x306af5(0x245,0x237,0x246,0x24f)+_0x141e30(0x263,0x284,0x29e,0x26e)+'c'));if(command[_0x306af5(0x246,0x222,0x223,0x244)]['hide']==!![])multiple[_0x306af5(0x252,0x22b,0x247,0x266)+'de'][_0x141e30(0x299,0x282,0x28b,0x26c)](command[_0x306af5(0x240,0x233,0x223,0x230)][_0x141e30(0x2a5,0x2ab,0x2bc,0x29c)]);const nameModule=command[_0x141e30(0x28c,0x272,0x27d,0x286)][_0x141e30(0x2bd,0x2ab,0x2c8,0x2bc)];if(command[_0x141e30(0x27e,0x272,0x276,0x268)]['configs'])Cherry[_0x306af5(0x24b,0x250,0x25e,0x25e)][nameModule]=command[_0x306af5(0x219,0x23d,0x223,0x239)][_0x306af5(0x249,0x27a,0x25e,0x280)];var _0x4537f7={};_0x4537f7[_0x306af5(0x257,0x287,0x264,0x24d)]=Cherry,_0x4537f7[_0x306af5(0x25b,0x240,0x240,0x227)]=multiple;if(command[_0x306af5(0x220,0x218,0x234,0x237)])command[_0x306af5(0x242,0x24b,0x234,0x211)](_0x4537f7);if(command[_0x306af5(0x23b,0x242,0x244,0x261)+'ts'])multiple[_0x141e30(0x27e,0x293,0x27f,0x2b4)+'ts'][_0x141e30(0x276,0x282,0x283,0x25f)](nameModule);if(command[_0x141e30(0x29c,0x2a6,0x2a5,0x2c5)+'nd']){var info=command[_0x306af5(0x263,0x243,0x257,0x26e)+'nds']();if(info[_0x306af5(0x25f,0x271,0x25c,0x26a)]!=nameModule||info[_0x141e30(0x2cf,0x2b5,0x2d0,0x2cc)]!=command[_0x141e30(0x260,0x272,0x253,0x24f)][_0x141e30(0x2b0,0x2b5,0x2cf,0x2c4)])throw new Error(_0x306af5(0x231,0x257,0x238,0x22e)+nameModule+(_0x306af5(0x24c,0x21c,0x22d,0x230)+_0x306af5(0x24d,0x26a,0x252,0x264)+_0x306af5(0x24b,0x23a,0x22e,0x213)+_0x306af5(0x240,0x207,0x221,0x23d)+_0x141e30(0x29f,0x2a0,0x2a9,0x289)+_0x141e30(0x2d0,0x2b1,0x2c5,0x2c8)+_0x141e30(0x291,0x29f,0x282,0x2bd)+'ị\x20cấm\x20sử\x20d'+'ụng\x20Bot.'));}if(command[_0x141e30(0x256,0x272,0x274,0x25c)][_0x141e30(0x2b9,0x29a,0x29d,0x291)])try{for(var i of Object['keys'](command[_0x141e30(0x25a,0x272,0x268,0x288)][_0x306af5(0x267,0x259,0x24b,0x23a)]))require['resolve'](i);}catch(_0x565e93){for(var [keys,values]of Object[_0x141e30(0x2ae,0x2a8,0x2c3,0x2c8)](command[_0x306af5(0x228,0x217,0x223,0x22e)][_0x306af5(0x24a,0x268,0x24b,0x25c)]))execSync('npm\x20i\x20--no'+_0x306af5(0x23b,0x23f,0x23f,0x22e)+_0x306af5(0x221,0x202,0x225,0x224)+_0x306af5(0x237,0x223,0x230,0x23e)+keys+(values?'@'+values:''));}multiple[_0x141e30(0x255,0x271,0x26b,0x274)][_0x141e30(0x2b2,0x2a9,0x296,0x2c3)](nameModule,command),delete require[_0x306af5(0x23a,0x243,0x228,0x225)][require[_0x306af5(0x237,0x237,0x23a,0x21f)](main+('/scripts/c'+_0x306af5(0x233,0x238,0x236,0x23e))+nameHasJS)];}catch(_0x20a112){api[_0x141e30(0x25c,0x27b,0x28a,0x25f)+'e']('Không\x20thể\x20'+_0x141e30(0x255,0x278,0x267,0x269)+name+_0x141e30(0x26b,0x288,0x276,0x2a6)+_0x20a112,threadID);continue;}}
}

module.exports.run = function({ api, event, args, Cherry, multiple }) {
    var { threadID, messageID } = event;
    var ping = Date.now();
    var main = multiple.workPlace;
    var { readdirSync } = require("fs-extra");
    if (!args[0]) return api.sendMessage("Bạn phải nhập cmd, event, configs hoặc all.", threadID, messageID);
    switch (args[0]) {
        case "configs":
            try {
                loadConfigs({ api, threadID, messageID, Cherry, multiple });
                api.sendMessage(`Đã load xong file configs.\n\nThời Gian: ${Date.now() - ping}ms.`, threadID, messageID);
            } catch (error) {
                return api.sendMessage(`Đã xảy ra lỗi khi load file configs. Lỗi: ${error}`);
            }
        case "all":
            loadConfigs({ api, threadID, messageID, Cherry, multiple });
            var listCommands = readdirSync("./scripts/commands").filter(file => file.endsWith(".js") && !file.includes('example') && !Cherry.configs.commandsDisabled.includes(file));
            var listEvents = readdirSync(main + "/scripts/events").filter(file => file.endsWith(".js") && !Cherry.configs.eventsDisabled.includes(file));
            loadCmds({ api, threadID, Cherry, multiple, listCommands });
            loadEvents({ api, threadID, Cherry, multiple, listEvents });
            return api.sendMessage(`Đã load thành công ${multiple.commands.size} commands và ${multiple.events.size} events.\n\nThời Gian: ${Date.now() - ping}ms.`, threadID);
        case "cmd":
            if (args[1]) {
                args.shift();
                var listCommands = args;
                loadCmds({ api, threadID, Cherry, multiple, listCommands });
                return api.sendMessage(`Đã load xong ${args.length} commands.\n\nThời Gian: ${Date.now() - ping}ms.`, threadID);
            } else {
                var listCommands = readdirSync("./scripts/commands").filter(file => file.endsWith(".js") && !file.includes('example') && !Cherry.configs.commandsDisabled.includes(file));
                loadCmds({ api, threadID, Cherry, multiple, listCommands });
                return api.sendMessage(`Đã load xong ${multiple.commands.size} commands.\n\nThời Gian: ${Date.now() - ping}ms`, threadID);
            }
        case "event":
            if (args[1]) {
                args.shift();
                var listEvents = args;
                loadEvents({ api, threadID, Cherry, multiple, listEvents });
                return api.sendMessage(`Đã load xong ${args.length} events.\n\nThời Gian: ${Date.now() - ping}ms.`, threadID);
            } else {
                var listEvents = readdirSync(main + "/scripts/events").filter(file => file.endsWith(".js") && !Cherry.configs.eventsDisabled.includes(file));
                loadEvents({ api, threadID, Cherry, multiple, listEvents });
                return api.sendMessage(`Đã load xong ${multiple.events.size} events.\n\nThời Gian: ${Date.now() - ping}ms`, threadID);
            }
        default:
            Cherry.commandError(this.info.name, threadID, messageID);
            break;
    }
}
