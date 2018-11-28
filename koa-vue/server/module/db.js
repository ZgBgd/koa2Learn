var MongoClient = require('mongodb').MongoClient;
const config = require('./config');
class Db {
    static getInstance() {
        if (!Db.instance) {
            Db.instance = new Db();
        }
        return Db.instance
    }
    constructor() {
        this.dbClient = "";
        this.connect();
    }
    //连接数据库
    connect() {
        return new Promise((resolve, reject) => {
            if (!this.dbClient) {
                MongoClient.connect(config.dbUrl, { useNewUrlParser:true},(err, client) => {
                    if (err) {
                        reject(err);
                    } else {
                        this.dbClient = client.db(config.dbName);
                        resolve(this.dbClient);
                    }
                })
            } else {
                resolve(this.dbClient);
            }
        })

    }
    //查找
    find(collentName, json) {
        return new Promise((resolve, reject) => {
            this.connect().then(res => {
                var result = this.dbClient.collection(collentName).find(json);
                result.toArray((err, docs) => {
                    if (err) {
                        reject(err);
                        return;
                    } else {
                        resolve(docs);
                    }
                })
            })

        })
    }
    //更新
    update(collectionName,json1,json2) {
        return new Promise((resolve, reject) => {
            this.connect().then(db => {
                // db.collection(collectionName).updateOne()
                db.collection(collectionName).updateOne(json1, { $set: json2 }, (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                })
            })
        })
    }
    //插入
    insert(collectionName,json) {
        return new Promise((resolve, reject) => {
            this.connect().then(db => {
                db.collection(collectionName).insertOne(json, (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                })
            })
        })
    }
    //删除
    delete(collectionName, json) {
        return new Promise((resolve, reject) => {
            this.connect().then(db => {
                db.collection(collectionName).deleteOne(json, (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                })
            })
        })
    }
}
module.exports = Db.getInstance();
