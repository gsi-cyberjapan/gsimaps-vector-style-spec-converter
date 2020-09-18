var getMapStyle = function() {
     
      const a = document.getElementById('download');
      a.href = "";
      
      if(GSIBV.application._map && GSIBV.application._map._map){
        
        //現在表示中ののstyleを取得
        var mymap = GSIBV.application._map._map;
        var mystyle = mymap.getStyle();
        var mylayers = [];
        var mysources = {};
        
        
        //条件設定
        var verticalFlag = document.getElementById("verticalFlagCheck").checked; //縦書きの対応をする場合はtrue
        var vectoronlyFlag = true; //バイナリベクトルタイル以外を除外する場合はtrue
        var circleFlag = true; //バイナリベクトルタイル以外のアイコンをCircleに変換する場合はtrue
        var fillpatternFlag  = true; //fillpatternを塗りつぶしに変換する場合はtrue
        
        //sourceの整理
        for(ss in mystyle.sources){
          if( ss.match(/^_/)){
            if(vectoronlyFlag){
               console.log("sourcesから '" + ss + "' を除外");
               continue;
            }
          }
          mysources[ss] = JSON.parse( JSON.stringify( mystyle.sources[ss] ));
          if( ss.match("gsibv-vectortile-source") ){
            mysources[ss].attribution = '<a href="https://maps.gsi.go.jp/vector/" target="_blank">地理院地図Vector（仮称）</a>';
          }
        }
        
        //layersの整理
        for(sl in mystyle.layers){
                
                //console.log(sl);
                var jsonLayerContent = JSON.stringify(mystyle.layers[sl]);
                var jsonLayerObject = JSON.parse(jsonLayerContent);
                
                //バイナリベクトルタイル以外の処理
                if(mystyle.layers[sl].id.match(/^_/)){
                  if(vectoronlyFlag){
                    continue;
                  }else{
                    var jsonLayerObject = JSON.parse(jsonLayerContent);
                    
                    if(circleFlag && jsonLayerObject.type == "symbol" && jsonLayerObject.layout["icon-image"]){
                        
                        var circel_r = Math.floor(Math.random()*255);
                        var circel_g = Math.floor(Math.random()*255);
                        var circel_b = Math.floor(Math.random()*255);
                        
                        jsonLayerObject = {
                            id: jsonLayerObject.id,
                            type: 'circle',
                            source: jsonLayerObject.source,
                            metadata: {
                              "description": "Converted to Circle from icon."
                            },
                            filter: jsonLayerObject.filter ? jsonLayerObject.filter : {},
                            paint: {
                              "circle-radius": 5,
                              "circle-color": "rgb(" + circel_r + "," + circel_g + ","+ circel_b + ")" 
                            }
                        }
                    }
                    
                    mylayers.push(jsonLayerObject);
                    continue;
                  }
                }
                
                
                //バイナリベクトルタイルの処理
                
                //縦書きの対応準備（レイヤを縦書き用・横書き用に分離し、text-writing-modeを適用）
                var textField = {};
                if(mystyle.layers[sl]["layout"]) textField = JSON.parse( JSON.stringify( mystyle.layers[sl]["layout"] ) );
                
                if(verticalFlag && jsonLayerContent.indexOf('<gsi-vertical>') > 0 ){
                //縦書き・横書きを区別する場合
                //<gsi-vertical>がレイヤに含まれている場合に処理を行う
                //縦書き用、横書き用の2レイヤを新たに生成
                    
                        
                        //HorizontalとVerticalを分離
                        // JSON文字列をオブジェクトとしてパースして、ディープコピー。
                        var jsonLayerObjectHorizontal = JSON.parse(jsonLayerContent);
                        var jsonLayerObjectVertical = JSON.parse(jsonLayerContent);
                        
                        
                        //HorizontalとVertical、それぞれのfilter条件をセット
                        //メモ：styleの新旧方式(["get", "prop"]と"prop")を混在させないように、"get"の有無で方式を分ける。
                        
                        var filterstr = "";
                        if(jsonLayerObject.filter){
                            filterstr = JSON.stringify(jsonLayerObject.filter);
                        }
                        var jsonLayerFilterH = ["!=","arrng",2];
                        var jsonLayerFilterV = ["==","arrng",2];
                        if(filterstr.match(/\"get\"/)){ //火山（標高）のみかと思われる。
                            jsonLayerFilterH = ["!=",["get", "arrng"],2];
                            jsonLayerFilterV = ["==",["get", "arrng"],2];
                        }
                        
                        if(textField["text-field"]){
                        
                            /*-------
                            縦書きを含むtext-fieldは以下のような形式なので、決め打ちで3番目の配列を取り出す。
                            "text-field":[
                               "case",
                               ["!=",["get","arrng"],2],
                               ["get","knj"], //ここを取り出したい。
                               ["concat","<gsi-vertical>",["get","knj"],"</gsi-vertical>"]
                            ]
                            -------*/
                            
                            var textFieldName = textField["text-field"][2];
                            
                            //引数なしのslice()で配列の値渡し。
                            jsonLayerObjectHorizontal["layout"]["text-field"] = textFieldName.slice();;
                            jsonLayerObjectVertical["layout"]["text-field"] = textFieldName.slice();;
                            
                        }
                        
                        
                        //text-writing-modeを追加
                        jsonLayerObjectHorizontal["layout"]["text-writing-mode"] = ["horizontal"];
                        jsonLayerObjectVertical["layout"]["text-writing-mode"] = ["vertical"];
                        
                        
                        //filterを追加
                        jsonLayerObjectHorizontal["filter"]=[
                           "all",
                           jsonLayerObjectHorizontal["filter"],
                           jsonLayerFilterH
                        ];
                        jsonLayerObjectVertical["filter"]=[
                           "all",
                           jsonLayerObjectVertical["filter"],
                           jsonLayerFilterV
                        ];
                        
                        
                        //id名をHorizontalとVerticalで重複しないよう変更
                        jsonLayerObjectHorizontal["id"] = jsonLayerObjectHorizontal["id"] + "h";
                        jsonLayerObjectVertical["id"] = jsonLayerObjectVertical["id"] + "v";
                        
                        
                        //レイヤとしてスタイルに追加
                        mylayers.push(jsonLayerObjectHorizontal);
                        mylayers.push(jsonLayerObjectVertical);
                        
                    
                }else if(jsonLayerContent.indexOf('<gsi-vertical>') > 0 ){
                //縦書き・横書きを区別しない場合
                //<gsi-vertical>がレイヤに含まれている場合の処理を行う
                //縦書き・横書きを区別しない場合は、<gsi-vertical>を削除する        
                        //text-fieldを変換                        
                        if(textField["text-field"]){
                        
                            /*-------
                            縦書きを含むtext-fieldは以下のような形式なので、決め打ちで3番目の配列を取り出し、それでtext-field全体を置き換える。
                            "text-field":[
                               "case",
                               ["!=",["get","arrng"],2],
                               ["get","knj"], //ここを取り出したい。
                               ["concat","<gsi-vertical>",["get","knj"],"</gsi-vertical>"]
                            ]
                            -------*/
                            
                            var textFieldName = textField["text-field"][2];
                            
                            //引数なしのslice()で配列の値渡し。
                            jsonLayerObject["layout"]["text-field"] = textFieldName.slice();
                            //console.log(jsonLayerObject);
                            
                        }
                        
                        //レイヤとしてスタイルに追加
                        mylayers.push(jsonLayerObject);
                        
                        
                }else{ //<gsi-vertical>がレイヤに含まれていない場合の処理
                        
                        
                        //ハッチを変更
                        if(fillpatternFlag && jsonLayerObject["paint"] && jsonLayerObject["paint"]["fill-pattern"]){
                          if(jsonLayerObject.type == "fill"){
                            
                            var fpat = jsonLayerObject["paint"]["fill-pattern"];
                            var fpatarr = fpat.split("-");
                            var fpatrgba = fpatarr[5].split(",");
                            var fill_r = fpatrgba[0] * 1;
                            var fill_g = fpatrgba[1] * 1;
                            var fill_b = fpatrgba[2] * 1;
                            var fill_a = fpatrgba[3] * 1;
                            
                            var fill_hsl = MA.Color.rgb2hsl({
                              "r": fill_r,
                              "g": fill_g,
                              "b": fill_b,
                              "a": fill_a
                            });
                            
                            //ハッチのパターンに合わせて、明るさを調整
                            switch (fpatarr[3]) {
                              
                              case "cross":
                                fill_hsl.l = 0.6;
                                break;
                              
                              /*
                              case "ltrb":
                              case "rtlb":
                              case "minus":
                              case "dot":
                              case "plus":
                                fill_hsl.l = 0.8;
                                break;
                              */
                              
                              default:
                                fill_hsl.l = 0.8;
                                
                            }
                            
                            var fill_rgb = MA.Color.hsl2rgb(fill_hsl);
                            
                            jsonLayerObject["paint"]["fill-color"] = "rgba(" + fill_rgb.r + "," + fill_rgb.g + "," + fill_rgb.b + "," + fill_rgb.a + ")";
                            jsonLayerObject["metadata"]["fill-pattern"] = jsonLayerObject["paint"]["fill-pattern"];
                            
                            delete jsonLayerObject["paint"]["fill-pattern"];
                          
                          }
                        }
                        
                        mylayers.push(jsonLayerObject);
                    
                }
          
        }//for文閉じる。
        
        
        
        //出力用のstyle.json生成
        var resultsstyle = JSON.parse(JSON.stringify(mystyle));
        resultsstyle.layers = mylayers;
        resultsstyle.sources = mysources;
        
        //spriteを追加
        var spriteType = "pale"; //vpale, vblank, v2pale, v2blank
        var hash_keys = Object.keys(GSIBV.application._map._layerList._hash);
        if(hash_keys.includes("vstd")|hash_keys.includes("vlabel")|hash_keys.includes("lvlabel")|hash_keys.includes("v2std")|hash_keys.includes("light")|hash_keys.includes("kana")){
                spriteType = "std";
        }
        resultsstyle.sprite = "https://gsi-cyberjapan.github.io/gsivectortile-mapbox-gl-js/sprite/" + spriteType;
        
        //メタデータ整理
        if(!resultsstyle.metadata) resultsstyle.metadata = {};
        resultsstyle.metadata["gsimaps-vector-url"] = "https://maps.gsi.go.jp/vector/" + GSIBV.application._hashManager._currentHash;
        resultsstyle.metadata.center = mymap.getCenter();
        resultsstyle.metadata.zl = mymap.getZoom();
        
        //文字列変換・icon-imageの処理
        var myresstring = JSON.stringify(resultsstyle, null, 4)
        myresstring = myresstring.replace(/std\/\/\//g, ""); // sprite
        myresstring = myresstring.replace(/pale\/\/\//g, ""); // sprite
        
        
        // ダウンロード処理
        var blob = new Blob([myresstring], {type: 'application\/json'});
        var url = URL.createObjectURL(blob);
        const a = document.getElementById('download');
        a.href = window.URL.createObjectURL(blob);
        
        console.log("スタイルの取得と変換、ダウンロード準備が完了しました。「ダウンロード」ボタンからダウンロードしてください。");
        
        
      }else{
        alert("スタイルを取得できませんでした。再度お試しください。");
      }
}