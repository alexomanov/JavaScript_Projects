/**********************************************
**  Program:            project_2.js
**  Version:            1.0
**  Proposite:          This project is oriented to create a program to send messages 
to                      students with information about their grades in a course.
**  Author:             Eng. Bulmaro Noguera
**  History:            08/20/2024       5:57pm       Original Version
***********************************************/

/**********************************
 * functions used in this project
 **********************************/

// getAverage function
 function getAverage(scores) {
    /*******************
     * This function allows to calculate the average number of 
     * grades by dividing the sum of all grades by the number of 
     * records in the array containing the scopes.
     *******************/
    let sum = 0;  // sum variable
  
    for (const score of scores) {
        /************************
         *  A for loop that sweeps through an array and adds up 
         * each of its elements.
         ***********************/
        sum += score;  //variable storing the sum of all the elements of the array
    }
  
    return sum / scores.length; //return of the average
  }

  
  // getGrade function
  function getGrade(score) {
   /************************
   * This function generates the letter grade obtained 
   * by the student, based on the score. This grade can be 
   * A++, A, B, C, D or F.
   ************************/
    if (score === 100) {  //first conditional sentence (if)
        /***************
         * conditional if statement allowing the grade to 
         * be selected in different cases by using else if and else
         **************/
      return "A++";
    } else if (score >= 90) {  //second conditional sentence
      return "A";
    } else if (score >= 80) {  //third conditional sentence
      return "B";
    } else if (score >= 70) {  //fourth conditional sentence
      return "C";
    } else if (score >= 60) {  //fifth conditional sentence
      return "D";
    } else {                   //lastone conditional sentence
      return "F";
    }
  }


  // hasPassingGrade function
  function hasPassingGrade(score) {
    /******************************
     * This function allows to know if the student passed or failed 
     * the course based on the grade obtained, if he/she obtained F 
     * he/she failed otherwise he/she passed.
     ******************************/
    return getGrade(score) !== "F"; 
  }

  
  //studentMsg function
  function studentMsg(totalScores, studentScore) {
    /*********************************************
     * This function allows you to create a message to the student, 
     * showing their average score, grade and whether they passed 
     * or failed the course.
     ********************************************/
    const average = getAverage(totalScores); //call to getAverage function
    const grade = getGrade(studentScore);    //call to getGrade function
    if (hasPassingGrade(studentScore) === true) {  //conditional sentence that call hasPassingFuntion
      return "Class average: " + average + ". Your grade: " + grade + ". You passed the course.";  //Message
    } else {
      return "Class average: " + average + ". Your grade: " + grade + ". You failed the course.";  //Message
    }
    
  }

  /************************
   * End of the functions
   ************************/

  /************************
   * main code of the program
   ************************/
   console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));  //screen printing of the message


  