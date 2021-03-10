// // My guess is it's Javascript animation. 
// It picks a random item from the array of labels. 
// Then it goes into a loop, changing the label to the next item 
// in the array until it gets to the chosen one, 
// and using animation for the transitions.


function init() {
    const form = document.getElementById('sub-btn');
    form.addEventListener('submit', e => { returnSearch(e) })
}

// init()

function returnSearch(e) {
    e.preventDefault();
    fetch('http://localhost:3000/results')
    .then(res => res.json())
    .then(addResultsToPage)
    .catch(err => console.warn('OH NO, something went wrong!', err))
}  

function addResultsToPage(data) {
    document.getElementsByClassName('container').remove()
    
}
    // id = "lucky-btn"
    // id = "sub-btn"
