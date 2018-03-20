# twitter_crawler(트위터 크롤러)
twitter advanced search page crawler
트위터 고급 검색 페이지 크롤러


## 실험 환경(tested environment)

Chrome 65.0.3325.162(64bit)
크롬 65.0.3325.162(64비트)


## 사용법(how to use)

1. Go to twitter advanced search page.(https://twitter.com/search-advanced?lang=en)
2. Fill the filed on the search page with the data you want to find and press "search".
3. Press F12 to open developer tools on result page.
4. Select "Console" on the developer tools and paste the whole code in the twitter_crawler.js.
5. At console, call scrollBot() function and just take a break while scrollBot reach the botom of result page(end of the result). scrollBot automatically scroll to bottom of page again and again.
```sh
scrollBot()
```
6. After nothing loaded at the page, call getTweet() to collect tweet and call console.save(data, "filename.json") to download the result as json file.
```sh
getTweet();
console.save(data, "filename.json");
//replace filename as what you want.
//filename 부분을 원하는 파일 이름으로 대체하세요.
```
+ if you want to chage the json file to csv file, run jsonToCsv.py with python. This code need to be modify the variable filename to your json file's name(line 2).

1. 트위터 고급검색 페이지로 이동한다.(https://twitter.com/search-advanced?lang=ko)
2. 검색하고자 하는 데이터로 검색 페이지 항목들을 채운 뒤 검색 버튼을 누른다.
3. 검색 결과 화면에서 F12를 눌러 개발자 도구 창을 연다.
4. 개발자 도구의 콘솔창으로 이동하고, twitter_crawler.js의 전체 코드를 붙여넣는다.
5. 콘솔 창에 scrollBot()을 입력하여 함수를 호출한 뒤, 검색 결과 페이지의 끝까지 스크롤 할 때 까지 기다린다(결과가 다 나올 때 까지). scrollBot함수가 호출되면 자동으로 페이지의 끝으로 스크롤을 반복한다.
```sh
scrollBot()
```
6. 검색 결과 화면에 더이상 새로운 데이터가 로딩되지 않으면 getTweet() 함수를 호출하여 트윗 정보를 수집하고 console.save(data, "파일명.json")을 호출하여 결과를 json 파일로 다운로드 받는다.
```sh
getTweet();
console.save(data, "filename.json");
//replace filename as what you want.
//filename 부분을 원하는 파일 이름으로 대체하세요.
```
+ 만약 json으로 생성된 결과를 csv 파일로 변환하고 싶다면, jsonToCsv.py파일을 실행해 해당 파일을 csv로 변환하세요. 파이썬 코드 실행 전에 코드 내의 변수 filename을 json파일의 파일 이름으로 대체해 주셔야 합니다(line 2).

## 안내 사항(Alerts)
this code only crawling the text in each tweets, not inclue emoji, image et all.
이 코드는 트윗 내의 텍스트만 추출하는 코드입니다. 이모티콘, 이미지 등은 추출되지 않습니다.
