var listOfNum = [] // stores it in a list

function storeNum(num) {  // function is simply returning the "num" into "listOfNum"
    listOfNum.push(num)
}



//---------------------------------

function sortingArr() {
    return listOfNum.sort(function (a, b) {
        return a - b
    });

}

sortingArr()

//---------------------------------

function returnList() {
    console.log(listOfNum)
}



//---------------------------------

module.exports = {

    storeNum: storeNum,
    returnList: returnList


};




/*
1 - Create a module that exports a function that takes a number as a parameter
and stores it in a list. The list should not be accessible from outside the module.

2-step Export another function that returns a version of the data list that is sorted in
ascending order. The function you use to sort the data correctly should not be
accessible from outside the module.
(Think back to the Custom Sorting Exercise when handling sorting)
*/