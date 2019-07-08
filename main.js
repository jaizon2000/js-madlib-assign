'use strict';

// Event Listeners
document.getElementById('get-result').addEventListener('click', main)

// Vars
function main() {
    let verb = document.getElementById('verb').value;
    let p_noun = document.getElementById('p-noun').value;
    let adj = document.getElementById('adj').value;
    let pt_verb = document.getElementById('pt-verb').value;
    let noun = document.getElementById('noun').value;

    let result = 'There are too many ' + verb + ' ' + p_noun + ' on this ' + adj + ' airplane!, I screamed.  “Somebody has to ' + pt_verb + ' on the ' + noun + ' to solve this problem!';

    // Output
    document.getElementById('result').innerHTML = result;
}