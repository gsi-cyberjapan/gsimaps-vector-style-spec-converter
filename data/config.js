GSIBV.CONFIG = {};

// 編集不可フラグ
//GSIBV.CONFIG.ReadOnly = true;

// PC版URL
GSIBV.CONFIG.URL = "./";
// モバイル版URL
GSIBV.CONFIG.MOBILE_FILENAME = "index_m.html";
GSIBV.CONFIG.MOBILEURL = "./" + GSIBV.CONFIG.MOBILE_FILENAME;



// モバイルフラグ
GSIBV.CONFIG.MOBILE = false;
GSIBV.CONFIG.GPS_FLYTO_ZOOM = 14;

// 画面操作不可時には追加を多くし、操作可能になったら休みを多くする
GSIBV.CONFIG.LayerAppend = {
  "count" : 200, // 【操作不可時】一回の処理で追加するレイヤ数（デフォルト200）
  "interval" : 0, // 【操作不可時】読み込み中システムに処理をさせる時間(ミリ秒)（デフォルト10）
  "count2" : 50, // 一回の処理で追加するレイヤ数（デフォルト50）
  "interval2" : 0, // 読み込み中システムに処理をさせる時間(ミリ秒)（デフォルト200）
};

GSIBV.CONFIG.EditRefreshInterval = 1500; // 編集されたスタイルを地図に反映する間隔


// バイナリタイル読込状態の表示設定
// full-righttop: 画面を覆った後右上に表示
// full: ずっと画面を覆う
// righttop: 右上のみ
// none: 表示なし
GSIBV.CONFIG.ProgressMode = 'righttop';


// コンテキストメニュー右に表示されるプロパティの表示項目を指定する
// この指定がない場合、全てが表示される
GSIBV.CONFIG.ComtextMenuProps = [
  "ftCode",
  "annoCtg",
  "annoChar", 
  "knj",
  "kana",
  "motorway",
  "rdCtg",    
  "tollSect",
  "medSect",
  "rnkWidth",
  "snglDbl",
  "railState",
  "railTunnel",
  "nRNo",
  "uRNo",
  "alti",
  "depth",
  "altiDpth",
  "name"
];

// コンテキストメニュー右に表示されるプロパティの表示項目の値を変換する
// この指定がない場合、元の値がそのまま表示される

GSIBV.CONFIG.ComtextMenuValues = {
  "motorway" : {
    "0" : "高速道路以外",
    "1" : "高速道路",
    "9" : "不明"
  },
  "rdCtg" : {
    "0" : "国道",
    "1" : "都道府県道",
    "2" : "市区町村道",
    "3" : "高速自動車国道等",
    "5" : "その他",
    "6" : "不明"
  },
  "tollSect" : {
    "0" : "無料",
    "1" : "有料",
    "2" : "暫定無料",
    "9" : "不明"
  },
  "medSect" : {
    "0" : "無",
    "1" : "有"
  },
  "rnkWidth" : {
    "0" : "3m未満",
    "1" : "3m-5:5m未満",
    "2" : "5.5m-13m未満",
    "3" : "13m-19.5m未満",
    "4" : "19.5m以上",
    "6" : "不明"
  },
  "snglDbl" : {
    "0" : "非表示",
    "1" : "単線",
    "2" : "複線以上",
    "3" : "側線",
    "4" : "駅部分"
  },
  "railState" : {
    "0" : "通常部",
    "1" : "橋・高架",
    "2" : "トンネル",
    "3" : "地下",
    "4" : "雪覆い",
    "5" : "運休中",
    "6" : "その他"
  },
  "railTunnel" : {
    "0" : "地上",
    "100" : "トンネル",
    "200" : "雪覆い",
    "300" : "地下",
    "400" : "路面",
    "500" : "坑口無しトンネル"
  }
};


GSIBV.CONFIG.Sprite = {
  "defaultGroup": "std",
  "list": [
    {
      "id": "std",
      "title": "標準地図",
      "url": "./sprite/std"
    },
    {
      "id": "pale",
      "title": "淡色地図",
      "url": "./sprite/pale"
    }
  ]
};


//ベクトルタイルの読み込むズーム設定(※廃止)
GSIBV.CONFIG.VectorTileSourceList = [
  {"minzoom":4,"maxzoom":17} // ZL4～17までそれぞれのZLのタイル使用
];

//ベクトルタイルの読み込むズーム設定(※廃止)
GSIBV.CONFIG.VectorTileSource = {"minzoom":4,"maxzoom":17};


/*
//ZL14以降はZL14のタイルを使用する例
GSIBV.CONFIG.VectorTileSourceList = [
  {"minzoom":4,"maxzoom":14} // ZL4～14までそれぞれのZLのタイル使用、それ以降は14が使用される
];

//ZL4,8,10,14,17のタイルを使用する例
GSIBV.CONFIG.VectorTileSourceList =[
  {"minzoom":4,"maxzoom":4},
  {"minzoom":8,"maxzoom":8}, 
  {"minzoom":11,"maxzoom":11},
  {"minzoom":14,"maxzoom":14},
  {"minzoom":17,"maxzoom":17}
];
*/


GSIBV.CONFIG.RECOMMEND = [

  {
    "id": "vstd",
    "type": "binaryvector",
    "title": "標準地図",
    "thumbnail": "./image/thumb/std.png",
    "url": "./data/std.json",
    "html": "基本となる地図<div class=\"gsi_layerinfo_copy\">(c)国土地理院</div>",
    "description": "標準地図",
    "maxNativeZoom" : 16
  },
  {
    "id": "vpale",
    "type": "binaryvector",
    "title": "淡色地図",
    "thumbnail": "./image/thumb/pale.png",
    "url": "./data/pale.json",
    "html": "淡い配色の地図<div class=\"gsi_layerinfo_copy\">(c)国土地理院</div>",
    "description": "淡色地図",
    "maxNativeZoom" : 16
  },
  {
    "id": "vblank",
    "type": "binaryvector",
    "title": "白地図",
    "thumbnail": "./image/thumb/blank.png",
    "url": "./data/blank.json",
    "html": "白黒の地図<div class=\"gsi_layerinfo_copy\">(c)国土地理院</div>",
    "description": "白地図",
    "maxNativeZoom" : 16
  },
  {
    "id": "light",
    "type": "binaryvector",
    "title": "軽い標準地図",
    "thumbnail": "./image/thumb/light.png",
    "url": "./data/light.json",
    "html": "軽い標準地図<div class=\"gsi_layerinfo_copy\">(c)国土地理院</div>",
    "description": "軽い標準地図",
    "maxNativeZoom" : 16
  },
  {
    "id": "kana",
    "type": "binaryvector",
    "title": "ひらがなちず",
    "thumbnail": "./image/thumb/kana.png",
    "url": "./data/kana.json",
    "html": "ひらがなちず<div class=\"gsi_layerinfo_copy\">(c)国土地理院</div>",
    "description": "ひらがなちず",
    "maxNativeZoom" : 16
  },
  {
    "id": "lvlabel",
    "type": "binaryvector",
    "title": "大きい文字",
    "description": "標準地図（大きい文字）",
    "thumbnail": "./image/thumb/l_label.png",
    "url": "./data/llabel.json",
    "html": "標準地図の文字を大きくしたもの<div class=\"gsi_layerinfo_copy\">(c)国土地理院</div>",
    "maxNativeZoom" : 16
  },
  {
    "id": "v2std",
    "type": "binaryvector",
    "title": "標準地図②",
    "description": "標準地図（立体交差あり）",
    "thumbnail": "./image/thumb/std2.png",
    "url": "./data/std2.json",
    "html": "基本となる地図（立体交差あり）<div class=\"gsi_layerinfo_copy\">(c)国土地理院</div>",
    "maxNativeZoom" : 16
  },
  {
    "id": "v2pale",
    "type": "binaryvector",
    "title": "淡色地図②",
    "description": "淡色地図（立体交差あり）",
    "thumbnail": "./image/thumb/pale2.png",
    "url": "./data/pale2.json",
    "html": "淡い配色の地図（立体交差あり）<div class=\"gsi_layerinfo_copy\">(c)国土地理院</div>",
    "maxNativeZoom" : 16
  },
  {
    "id": "v2blank",
    "type": "binaryvector",
    "title": "白地図②",
    "description": "白地図（立体交差あり）",
    "thumbnail": "./image/thumb/blank2.png",
    "url": "./data/blank2.json",
    "html": "白黒の地図（立体交差あり）<div class=\"gsi_layerinfo_copy\">(c)国土地理院</div>",
    "maxNativeZoom" : 16
  }

  /*
  {
      "id" : "sample02",
      "type" : "binaryvector",
      "title" : "ベクトルタイル[標準地図]",
      "thumbnail" : "./image/thumb/sample02.png" ,
      "url" : "./data/current.json",
      "html" : "【バイナリベクトルタイル】標準地図<div class=\"gsi_layerinfo_copy\">(c)国土地理院</div>"
  },
  {
      "id" : "sample04",
      "type" : "binaryvector",
      "title" : "ベクトルタイル[シンプル]",
      "thumbnail" : "./image/thumb/sample04.png" ,
      "url" : "./data/current-simple.json",
      "html" : "【バイナリベクトルタイル】シンプルな地図<div class=\"gsi_layerinfo_copy\">(c)国土地理院</div>"
  }
  */
];

// トップ階層の順序
GSIBV.CONFIG.TOPORDER = [
  "注記",
  "記号",
  "境界",
  "道路",
  "鉄道",
  "航路",
  "建物",
  "交通構造物",
  "構造物",
  "海岸線",
  "河川",
  "湖池",
  "水域",
  "標高",
  "等高線等深線",
  "地形"
];

GSIBV.CONFIG.STYLETEMPLATE = [
  {
    "id": "std",
    "title": "標準地図",
    "url": "./data/std.json"
  },{
    "id": "pale",
    "title": "淡色地図",
    "url": "./data/pale.json"
  },{
    "id": "blank",
    "title": "白地図",
    "url": "./data/blank.json"
  },
  {
    "id": "label",
    "title": "注記のみ",
    "url": "./data/label.json"
  }
];

GSIBV.CONFIG.MENU = [
/*  {
    "id": "eng",
    "title": "English"
  },*/
  {
    "id": "help",
    "title": "ヘルプ"
  },
  {
    "id": "gsimaps",
    "title": "地理院地図で表示"
  },
  {
    "id":"centercross",
    "type":"check",
  	"title":"中心十字線"
  },
  {
    "id":"draw",
  	"title":"作図"
  },
  {
    "id":"print",
  	"title":"印刷"
  },
  {
    "id":"to-mobile",
    "title": "スマホ版で表示"
  }
  
];


GSIBV.CONFIG.GSIMAPLAYERS = [
  {
    "url": 'https://maps.gsi.go.jp/layers_txt/layers1.txt'
  },
  {
    "url": 'https://maps.gsi.go.jp/layers_txt/layers2.txt'
  },
  {
    "url": 'https://maps.gsi.go.jp/layers_txt/layers3.txt'
  },
  {
    "url": 'https://maps.gsi.go.jp/layers_txt/layers4.txt'
  },
  {
    "url": 'https://maps.gsi.go.jp/layers_txt/layers5.txt'
  },
  {
    "url": 'https://maps.gsi.go.jp/layers_txt/layers6.txt'
  },
  {
    "url": 'https://maps.gsi.go.jp/layers_txt/layers7.txt'
  }
];

// 確認表示が必要なレイヤー
GSIBV.CONFIG.CONFIRM_LAYERS = {
  "kokuarea" : { // このグループの一意のID
    "title" : "留意事項", // 確認ダイアログに表示するタイトル

    // 表示するメッセージ
    "message" : "航空法第132条で規定する無人航空機の飛行禁止空域のうち、航空法施行規則第236条第1号から第3号までに掲げる空域（空港等の周辺空域）を表示します。緑色の面は、上空での飛行が禁止される制限表面を表します。紫色の面は、上空及びその下の空域での飛行が禁止される進入表面及び転移表面並びに上空の空域で飛行が禁止される空港等の敷地を表します。<br>" +
                "なお、この情報には誤差が含まれている場合があります。また空港等の敷地については工事等により変更がある場合がありますので、境界付近等正確な空域については空港等の管理者に確認願います。<br>" +
                  "詳細については、<a target='_blank' href='http://www.mlit.go.jp/koku/koku_tk10_000003.html'>国土交通省ホームページ</a>で確認してください。",
    "withBlend" : false, // 合成するかどうか
    "layers" : [ // レイヤーのIDを配列で指定
      "kokuarea"
    ]
  },
  "red" : {
    "title" : "ご利用上の注意", 
    "message" : "赤色立体地図及びオルソ立体地図はアジア航測株式会社の特許（第3670274号等）を使用して作成したものです。" + 
                "赤色立体地図及びオルソ立体地図を利用される場合は、<a target='_blank' href='http://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html'>国土地理院コンテンツ利用規約</a>に記載のとおり、" + 
                "<a target='_blank' href='https://www.rrim.jp/researcher/'>アジア航測株式会社の許諾条件</a>を確認してご利用下さい。",
    "withBlend" : true,
    "layers" : [
      "red",
      "20190121_sekisyokurittai_kusatsushiranesan",
      "20190121_olsorittai_kusatsushiranesan",
      "oosimared",
      "miyakejimared",
      "20180906hokkaido_atsuma_sekishoku",
      "tarumaered",
      "20180130_kusatsushiranesan_sekishokurittai",
      "20180309_sekisyokurittai_kirishima",
      "kuchinoerabured",
      "2018_sekisyokurittai_azumayama",
      "20190807asama_sekisyoku"
    ]
  }
};


GSIBV.CONFIG.PAPERSIZE = {
  "A4_portrait": { w: 650, h: 900 },  //A4縦
  "A4_landscape": { w: 950, h: 550 }, //A4横

  "A3_portrait": { w: 950, h: 1350 },  //A3縦
  "A3_landscape": { w: 1400, h: 900 },  //A3横

  "A2_portrait": { w: 1400, h: 2000, large:true },  //A2縦
  "A2_landscape": { w: 2050, h: 1350, large:true },  //A2横

  "A1_portrait": { w: 2050, h: 2950, large:true },  //A1縦
  "A1_landscape": { w: 3000, h: 2000, large:true },  //A1横

  "A0_portrait": { w: 3000, h: 4270, large:true },  //A0縦
  "A0_landscape": { w: 4320, h: 2950, large:true }  //A0横
};

GSIBV.CONFIG.HANREILIST = {
  "lcm25k_2012" : {
    "url" : "./data/hanrei/lcm25k_2012.txt"
  },
  "soil-inventory" : {
    "url" : "./data/hanrei/legend.csv",
    "layer" : {
      "url" : "https://soil-inventory.dc.affrc.go.jp/tile/figure/{z}/{x}/{y}.png",
      "minZoom": 6,
      "maxZoom": 18,
      "maxNativeZoom": 15
    }
  }
};


GSIBV.CONFIG.FREERELIEF_COLORPATTERNS = [
  {
    "title" : "デフォルト",
    "colors" : [
      "#0000FF",
      "#0095FF",
      "#00EEFF",
      "#91FF00",
      "#FFFF00",
      "#FF8C00",
      "#FF4400"
    ]
  },
  {
    "title" : "黒→白",
    "colors" : [
      {"r":70,"g":70,"b":70},
      {"r":101,"g":101,"b":101},
      {"r":132,"g":132,"b":132},
      {"r":163,"g":163,"b":163},
      {"r":193,"g":193,"b":193},
      {"r":224,"g":224,"b":224},
      {"r":255,"g":255,"b":255}]
  },
  {
    "title" : "青→白",
    "colors" : [
      {"r":0,"g":0,"b":255},
      {"r":43,"g":43,"b":255},
      {"r":85,"g":85,"b":255},
      {"r":128,"g":128,"b":255},
      {"r":170,"g":170,"b":255},
      {"r":213,"g":213,"b":255},
      {"r":255,"g":255,"b":255}]
  },
  {
    "title" : "赤→白",
    "colors" : [
      {"r":255,"g":0,"b":0},
      {"r":255,"g":43,"b":43},
      {"r":255,"g":85,"b":85},
      {"r":255,"g":128,"b":128},
      {"r":255,"g":170,"b":170},
      {"r":255,"g":213,"b":213},
      {"r":255,"g":255,"b":255}
    ]
  }
];

