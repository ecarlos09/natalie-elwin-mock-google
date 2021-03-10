const resultsData = require("../data");

class Result {
    constructor(data) {
        this.id = data.id;
        this.subject = data.subject;
        this.link = data.link; 
    }

    static get all() {
        // try {
        //     const results = resultsData.map((result) => new Result(result));
        //     return results;
        // } catch (err) {
        //     throw new Error('Your search is invalid.  Come no further!');
        // }
        const results = resultsData.map((result) => new Result(result));
        return results;        
    };

    static resultById(id) {
        try {
            const resultData = resultData.filter((result) => result[id] === id)[0];
            const result = new Result(resultData);
            return result;
        } catch(err) {
            throw new Error('This is not the result you are looking for ...');
        }
    }
}

module.exports = Result;