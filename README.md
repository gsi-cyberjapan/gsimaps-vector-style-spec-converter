# 地理院地図Vector地図デザインファイル変換サイト

## 本レポジトリについて

本レポジトリでは、[地理院地図Vector（仮称）](https://maps.gsi.go.jp/vector)で、ベクトルタイルを使った地図のデザインを規定しているファイル（地図デザインファイル、いわゆるstyle.json）を、
ベクトルタイルを表示する代表的なライブラリである[Mapbox GL JS](https://github.com/mapbox/mapbox-gl-js)でそのまま利用できるファイルに変換できるサイトを提供いたします。

本変換サイトを利用することで、地理院地図Vectorで提供しているベクトルタイルとstyle.jsonが、地理院地図Vector以外のサイト・アプリケーションでも利用しやすくなります。

なお、本変換サイトは実験的な提供のため、今後、予告なく変更・削除する可能性があります。動作保証もいたしません。また、変換後のstyle.jsonでは、地理院地図Vectorとは、地図の表示が異なる部分がございます。

## style.jsonの仕様について

*	Mapbox GL JSで利用できるstyle.jsonについては、以下の通り、仕様が定められています。

    [Mapbox Style Specification](https://docs.mapbox.com/mapbox-gl-js/style-spec/)

*	一方、地理院地図Vectorで利用しているstyle.jsonは、上記のStyle Specificationをベースにしたうえで、若干の拡張を施しています。

    [地理院地図Vector（仮称） style.jsonの仕様](https://github.com/gsi-cyberjapan/gsimaps-vector-experiment#stylejson)
 
※地理院地図Vectorのstyle.jsonの仕様は検討中のものであり、今後変更する可能性があります。

## style.json変換サイトについて

地理院地図Vectorのstyle.jsonを、Mapbox GL JSでそのまま利用できるMapbox Style Specificationに準拠した形式に変換できるサイトです。

[地理院地図Vector（仮称） style.json変換サイト](https://gsi-cyberjapan.github.io/gsimaps-vector-style-spec-converter)

### 変換サイトの使い方

*	変換サイトにアクセスした後、地図をお好みのデザインに変更します。変換サイト上でデザインの編集ができるほか、地理院地図Vectorで作成し、保存したstyle.jsonを取り込むこともできます。
*	保存したいデザインが表示されている状態で、「変換」ボタンをクリックします。
*	その後、「ダウンロード」ボタンから、変換されたstyle.jsonを取得することができます。
*	「縦書き対応」にチェックを入れると、縦書きをできるだけ表現したstyle.jsonを作成できます（[変換後のstyle.jsonについて](#%E5%A4%89%E6%8F%9B%E5%BE%8C%E3%81%AEstylejson%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6)参照）。チェックは、「変換」ボタンを押す前に入れてください。

#### 注意点

*	本サイトは、PC版のみ機能します。モバイル版は機能しません。
*	以下のベクトルタイル以外の情報（GeoJSON形式のベクトルタイルやラスタタイル、作図情報等）は変換後のstyle.jsonに保存されません。

    [地理院地図Vector（仮称）提供実験 タイル一覧](https://github.com/gsi-cyberjapan/gsimaps-vector-experiment#%E3%82%BF%E3%82%A4%E3%83%AB%E4%B8%80%E8%A6%A7)

### 変換後のstyle.jsonについて

変換したstyle.jsonの使い方については、以下のレポジトリを参考にしていただけます 。

[Mapbox GL JSで地理院地図Vector風の地図を表示するサンプル](https://github.com/gsi-cyberjapan/gsivectortile-mapbox-gl-js)

なお、変換後のstyle.jsonでは、地理院地図Vectorとは、地図の表示が異なる部分がございます。

#### 地図の表示が異なる部分の例

*	建物等のハッチング表現は行わず、すべて塗りつぶしで表現しております。
*	注記は、すべて横書きとなっております。そのため、本来の注記位置とのずれ等、表示に不具合が生じることがあります。
*	ツールの「縦書き対応」にチェックを入れることで、縦書きをできる限り表現したスタイルも出力できますが、伸ばし棒「―」等 が縦書き表示になりません。これは、Mapbox GL JSの仕様によるものです（2020年9月14日 現在）。

## 注意事項

*	本変換サイトは、実験的に提供しているものです。
*	本変換サイトの動作保証は行っておりません。
*	本変換サイトは、予告なく変更・削除する可能性があります。
*	本変換サイトの利用により生じた損失及び損害等について、国土地理院はいかなる責任も負わないものとします。
