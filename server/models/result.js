const resultsData = require("../data");

class Result {
    constructor(data) {
        this.id = data.id;
        this.subject = data.subject;
        this.link = data.link; 
    }

    static get all() {
        try {
            const results = resultsData.map((result) => new Result(result));
            return results;
        } catch (err) {
            throw new Error('Your search is invalid.  Come no further!');
        }        
    };
}

module.exports = Result;