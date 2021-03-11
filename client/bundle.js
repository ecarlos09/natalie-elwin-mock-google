(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

// Click search button
const search = document.getElementById('sub-btn')
search.addEventListener('click', returnSearch)

function returnSearch(e) {
    e.preventDefault();
    fetch('http://localhost:3000/results')
        .then(res => res.json())
        .then(addASearchResult)
        .catch(err => console.warn('OH NO, something went wrong!', err))
}

// return all data
function addASearchResult(searchData) {
    const body = document.body
    const allSubjects = searchData.map(result => {
        return result.subject
    })

    const allLinks = searchData.map(result => {
        return result.link
    })

    const allIDs = searchData.map(result => {
        return result.id
    })
    const allResults = allIDs.map(result => {
        let s = allSubjects[result - 1]
        let l = allLinks[result - 1]
        return `${s} <br> <a href="${l}">Click Me</a><br><br>`
    })

    const searchList = document.getElementById('append-here');
    const showResults = searchList.innerHTML = `${allResults}`


    //     const body = document.body
    //     const randomResult = getAllResults(searchData)
    //     const results1 = `${ getAllResults.subject }`
    //     const results2 = `${ getAllResults.link } `
    //     const searchList = document.getElementById('append-here');
    //     const showResults = searchList.innerText = `${ results1 } \n ${ results2 } `
};


// function getAllResults() {

// }

// function getAResult(array) {
//     return array[getRandomIndex(array)]
// }

// function getAnIndex(array) {
//     return Math.floor(Math.random() * array.length)
// }



//     

// Click lucky button
const lucky = document.getElementById('lucky-btn')
lucky.addEventListener('click', returnLucky)

function returnLucky(e) {
    e.preventDefault();
    fetch('http://localhost:3000/results')
        .then(res => res.json())
        .then(addAResult)
        .catch(err => console.warn('OH NO, something went wrong!', err))
}

// returns one lucky result
function addAResult(searchData) {
    const body = document.body
    const randomResult = getRandomResult(searchData)
    const results1 = `${randomResult.subject} `
    const results2 = `${randomResult.link} `
    const searchList = document.getElementById('append-here');
    const showResults = searchList.innerText = `${results1} \n ${results2} `
};

function getRandomResult(array) {
    return array[getRandomIndex(array)]
}

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length)
}



// return all data
// function addAResult(searchData) {
//     const body = document.body
//     const results1 = `${ searchData[0].subject } `
//     const results2 = `${ searchData[0].link } `
//     const searchList = document.getElementById('append-here');
//     const showResults = searchList.innerText = `${ results1 } \n ${ results2 } `



    // console.log(searchData[0].subject)
    // body.append(showResults)

    // const searchList = document.getElementById('append-here');



 // document.getElementsByClassName('container').remove()


// function addResultsToPage(data) {
//     console.log(data)
//     // data.for(addAResult);
//     for (let i = 0; i < data.length; i++) {
//         addAResult
//     
},{}]},{},[1]);
