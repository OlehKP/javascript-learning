

grades = ["Sehr gut", "Gut", "befriedigend", "Ausreichend", "mangelhaft", "Ungenügend"]

const grade = prompt("deine Note:");
function getGradeName(grade){
      if (grade > 0 && grade <=6 ) {
          return grades[grade -1].getGradeName
      }
}