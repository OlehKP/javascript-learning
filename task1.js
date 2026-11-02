

const grades = ["Sehr gut", "Gut", "befriedigend", "Ausreichend", "mangelhaft", "Ungenügend"]

function getGradeName(grade){
      if (Number.isInteger(grade) && grade > 0 && grade <=6 ) {
          return grades[grade -1]
      } else {
        return ("ungültige Note")
      }
}

console.log(getGradeName(1));   // "Sehr gut"
console.log(getGradeName(6));   // "Ungenügend"
console.log(getGradeName(2.5)); // "Ungültige Note"
console.log(getGradeName(0));   // "Ungültige Note"