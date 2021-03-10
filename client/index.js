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