import * as fs from "fs";

export const CountApiManager = {
    count: 0,

    increment() {
        this.count++;
        console.log(`Request count: ${this.count}`);
    },
    getCount() {
        return this.count;
    },

    readFile() {
        // read file from fs
        try{
            this.count = +fs.readFileSync('requestCount.txt', 'utf8');
        }catch (e) {
            this.count = 0;
        }

    },

    writeLatestCount() {
        // write file to fs
        fs.writeFileSync('requestCount.txt', `${this.count}`, 'utf8');
    },

    setSaveInterval(time: number) {
        setInterval(() => {
            this.writeLatestCount();
        }, time);
    }
}