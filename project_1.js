/**********************************************
**  Program:            project_1.js
**  Version:            1.0
**  Proposite:          This program creates a pyramid with 
**                      characters, which can be inverted or not 
**                      inverted depending on the change of a 
**                      variable.
**  Author:             Eng. Bulmaro Noguera
**  History:            08/20/2024       1:37pm       Original Version
***********************************************/

/**
 * In this section, the project variables 
 * are declared.
 * */
const character = "@";    //Constant character
const count = 10;        // count constant
const rows = [];         // const array
let inverted = false;   // boolean variable

/**
 *I create a function where the pyramid is generated from the 
 data supplied to the program. 
 **/
 function padRow(rowNumber, rowCount) {
    /**
     * Function name:  padRow
     * Proposite:      Generate the piramid blocks   
     **/
    return " ".repeat(rowCount - rowNumber) + 
    character.repeat(2 * rowNumber - 1) 
    + " ".repeat(rowCount - rowNumber);
  }

  /**
   * I create a for loop to generate the pyramid 
   * from the previously written function called padRow.
   **/
   for (let i = 1; i <= count; i++) {
    /**
     * Loop proposite: Generates the pyramid based on 
     *                 the array generated with the previous 
     *                 function.
     **/
    if (inverted) {
      rows.unshift(padRow(i, count));  //adds to the beginning of the array
    } else {
      rows.push(padRow(i, count));  // adds to the end of the array
    }
  }

  //The screen print is created
let result = ""  //result variable

for (const row of rows) {
    /**
     *  Creation of pyramid
     */
  result = result + "\n" + row;
}

console.log(result);  //print