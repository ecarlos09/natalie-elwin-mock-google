(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const search = document.getElementById('sub-btn')
const lucky = document.getElementById('lucky-btn')

search.addEventListener('click', returnSearch)

// function init() {
//     const clickButton = document.getElementById('sub-btn');
//     clickButton.addEventListener('submit', e => { returnSearch(e) })
// }

function returnSearch(e) {
    e.preventDefault();
    fetch('http://localhost:3000/results')
        .then(res => res.json())
        .then(addAResult)
        .catch(err => console.warn('OH NO, something went wrong!', err))
}

function addAResult(searchData) {
    const newLi = document.createElement('li');
    newLi.textContent = `${searchData.subject} \n ${searchData.link}`
    const searchList = document.getElementById('append-here');
    console.log(searchList)
    searchList.append(newLi);
};


 // document.getElementsByClassName('container').remove()


// function addResultsToPage(data) {
//     console.log(data)
//     // data.for(addAResult);
//     for (let i = 0; i < data.length; i++) {
//         addAResult
//     }
// }
},{}]},{},[1]);
