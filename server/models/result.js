const resultsData = require("../data");

class Result {
    constructor(data) {
        this.id = data.id;
        this.subject = data.subject;
        this.link = data.link; 
    }

    static get all() {
        const results = resultsData.map((result) => new Result(result));
        return results;
    }
}

module.exports = Result;