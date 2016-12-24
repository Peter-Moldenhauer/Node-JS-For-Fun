// Understanding the difference between == and ===

// Two equal signs (==) are used when you only want to compare values
// comparing the literal 19 with the string 19...the string contains 19 so the two are indeed equal
// the fact that its a string (type) is irrelevant with ==
console.log(19 == '19'); // this will print true


// Three equal signs (===) are used when you want to compare values AND types
// comparing the literal 19 with the string 19...same as above but this is now false
// because the literal (integer) 19 is not the same type as the string 19
console.log(19 === '19'); // this will print false