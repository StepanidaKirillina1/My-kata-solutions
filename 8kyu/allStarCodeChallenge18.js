/* Create a function that accepts a string and a single character, 

and returns an integer of the count of occurrences the 2nd argument is found in the first one.

If no occurrences can be found, a count of 0 should be returned. */

function strCount(str, letter) {

    let count = 0;

    for (let i = 0; i < str.length; i++) {

        if (str[i] == letter) {
            count++;
        }

    } 
    
    return count

}


function strCount(str, letter) {

    let count = 0;

    for (let lett of str) {

        if (lett == letter) {
            count++
        }
    }

    return count
}