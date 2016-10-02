# 概要
本リポジトリはピカルんのピカルんによるピカルんのための教育リポジトリです。ま、正直好きなように技術を試して学習していくための道場的なところです。

# 開発環境
本リポジトリでは以下の開発ツールを使って学習を進めます。

* SourceTree  

  1. 以下のURLより、SourceTreeのインストーラをダウンロードする。  
  https://www.sourcetreeapp.com/  
  2. ダウンロードしたインストーラを実行する。インストール中に、Bitbucketのアカウントのサインアップ、SSHキーを読み込みについて聞かれることがあるが、「No」と答えてよい。  
  3. インストールが完了したら、リポジトリのクローンを作成する。元のURLに「https://ユーザー名@github.com/edu-pika/web-dojo.git 」を入力し、保存先のパスに任意のパスを設定する。

    ※参考サイト: http://tonari-it.com/git-sourcetree/


* Atom

  1. 以下のURLより、Atomのインストーラをダウンロードする。  
  https://atom.io/?__hstc=150021993.eecf1596255d6f4e9393f969330ae333.1474201869929.1474201869929.1474201869931.2&__hssc=150021993.1.1474201869931&__hsfp=2053865735  
  2. ダウンロードしたインストーラを実行する。  
  3. インストール完了後、File > SettingのInstallより「Japanese-menu」というパッケージを入れることでメニューを日本語表記にすることができる。  

    ※参考サイト: https://blog.codecamp.jp/atom_utility#i-3

* node.js

 1. 以下のURLより、nodistをダウンロードする。  
 https://github.com/marcelklehr/nodist/releases  
 2. ダウンロードしたインストーラを実行する。インストール後にコマンドプロンプト上で「nodist -v」を実行し、バージョンを確認することでインストールされたことを確認できる。
 3. 「nodist dist」を実行すると、Node.jsのバージョン一覧が表示される。その中から一つ選択し、「nodist + v{バージョン}」(今回は6.7.0)を実行する。インストールしたNode.jsをWindowsで扱うために「nodist v(バージョン)」を入力し、「node -v」でインストールしたバージョンが確認できる。
 4. Node.jsと同時にインストールされるnpmについて、「npm update -g npm」で最新化する(今回は2.15.10) 。

    ※参考サイト：http://qiita.com/satoyan419/items/56e0b5f35912b9374305


* guｌp
 1. 「package.json」という名前のファイルをテキストエディタで作成し、「{}」とだけ記載する。
 2. 「npm install -g gulp」と「npm install --save-dev gulp」を実行してglupのインストールを行う。「gulp -v」でインストールが完了したか確認ができる。

    ※参考サイト：https://app.codegrid.net/entry/gulp-1
