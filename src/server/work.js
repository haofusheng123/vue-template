let data=[//数据库文件
  {id:1001,imgSrc:"./img/small/1.jpg",descText:"万代（BANDAI）高达模型 RG敢达拼装玩具 1/144 系列 RG 14 强袭自由 送支架+光翼",spec:"RG 14 强袭自由 送支架+光翼",current:178.00,shopSite:"#",num:1,shop:"哆啦动漫专营店",discounts:"risk",sell:"299",comment:"699",new:"499"},
  {id:1002,imgSrc:"./img/small/2.jpg",descText:"万代（BANDAI）高达Gundam拼插拼装模型玩具HG 1/144铁血巴巴托斯天狼座帝王0212197",spec:"HG033 巴巴托斯天狼座帝王形态",current:125.00,shopSite:"#",num:1,shop:"大白鲸动漫专营店",discounts:"gift",sell:"999",comment:"299",new:"799"},
  {id:1003,imgSrc:"./img/small/3.jpg",descText:"万代（BANDAI） MR超合金魂 高达 手办模型玩具 14cm MR 巴巴托斯帝王形态",spec:"MR 巴巴托斯帝王形态",current:1790.00,shopSite:"#",num:1,shop:"万代京东自营专区",discounts:"self",sell:"399",comment:"799",new:"999"},
  {id:1004,imgSrc:"./img/small/4.jpg",descText:"万代（BANDAI） MB超合金 高达 手办模型玩具 18cm MB 00七剑",spec:"MB 00七剑",current:2190.00,shopSite:"#",num:1,shop:"哆啦动漫专营店",discounts:"risk",sell:"799",comment:"999",new:"599"},
  {id:1005,imgSrc:"./img/small/5.jpg",descText:"万代高达手办拼装模型 HIRM 1/100 合金骨架模型玩具 零式飞翼EW版 216746",spec:"零式飞翼EW版 216746",current:1665.00,shopSite:"#",num:1,shop:"大白鲸动漫专营店",discounts:"gift",sell:"699",comment:"199",new:"299"},
  {id:1006,imgSrc:"./img/small/6.jpg",descText:"万代（BANDAI）高达模型 RG敢达拼装玩具 1/144 系列 RG 18 OO RAISER【送支架】",spec:"RG 18 OO RAISER【送支架】",current:162.90,shopSite:"#",num:1,shop:"大白鲸动漫专营店",discounts:"gift",sell:"4999",comment:"999",new:"899"},
  {id:1007,imgSrc:"./img/small/7.jpg",descText:"万代（BANDAI） HG 高达创战者HGBF2 拼装模型玩具 14cm HGBF035 骷髅海盗全装备",spec:"HGBF035 骷髅海盗全装备",current:149.00,shopSite:"#",num:1,shop:"万代京东自营专区",discounts:"self",sell:"9999",comment:"499",new:"399"},
  {id:1008,imgSrc:"./img/small/8.jpg",descText:"万代BANDAI高达模型MG 1/100 seed 拼插拼装敢达 深度强袭224034",spec:"深度强袭224034",current:1089.00,shopSite:"#",num:1,shop:"哆啦动漫专营店",discounts:"risk",sell:"499",comment:"499",new:"899"},
  {id:1009,imgSrc:"./img/small/9.jpg",descText:"万代（BANDAI） MG 高达卡版 拼装模型 18cm MG卡 牛高达",spec:"MG卡 牛高达",current:459.00,shopSite:"#",num:1,shop:"万代京东自营专区",discounts:"self",sell:"999",comment:"999",new:"499"},
  {id:1010,imgSrc:"./img/small/10.jpg",descText:"万代模型 RG 1/144 Nu高达 浮游炮套装",spec:"RG 1/144 Nu高达",current:600.00,shopSite:"#",num:1,shop:"哆啦动漫专营店",discounts:"risk",sell:"299",comment:"999",new:"1999"},
  {id:1011,imgSrc:"./img/small/11.jpg",descText:"万代（BANDAI）高达Gundam拼插拼装模型玩具 HG 1/144 铁血的奥尔芬斯036 铁血巴尔05055453",spec:"HG 1/144 铁血巴尔05055453",current:600.00,shopSite:"#",num:1,shop:"万代京东自营专区",discounts:"self",sell:"1999",comment:"299",new:"199"},
  {id:1012,imgSrc:"./img/small/12.jpg",descText:"万代高达拼装模型玩具RG 敢达1/144系列 RG29沙扎比230363",spec:"RG 29沙扎比 230363",current:279.00,shopSite:"#",num:1,shop:"大白鲸动漫专营店",discounts:"gift",sell:"299",comment:"199",new:"999"},
  {id:1013,imgSrc:"./img/small/13.jpg",descText:"万代（BANDAI）高达Gundam拼插拼装模型玩具 HG版 UC独角兽毁灭形态0161011",spec:"HGUC100 独角兽毁灭形态",current:158.00,shopSite:"#",num:1,shop:"万代京东自营专区",discounts:"self",sell:"899",comment:"599",new:"299"},
];
const qString=require("querystring");
module.exports= {
  home(req,res){
    res.send("打开了主页");
  },
  data(req,res) {
    res.send(data);
  },
  show(req,res) {
    console.log(qString.parse(req.url.split('?')[1]));
    const item=data.filter(function (item) {
      return item.id===Number(qString.parse(req.url.split('?')[1]).id)
    })[0];
    res.send(JSON.stringify(item))
  }
};
