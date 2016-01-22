# Spammer blogs

## Prerequisites

* node
* phantomjs
* casperjs

## Install

```
npm install
```

## Run

```
casperjs index.js http://myfamousblog.fr/somearticle
```

## Run it with some datas !

Si vous avez généré une liste de site grâce au [Google Scrapper](https://github.com/Sryther/google-scrapper) vous pouvez utiliser ce script :

```
./run.sh <path>.json
```

Example:

```
./run.sh /some/directories/sites.json
```
