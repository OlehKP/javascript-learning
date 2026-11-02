

const grades = ["Sehr gut", "Gut", "befriedigend", "Ausreichend", "mangelhaft", "Ungenügend"]

function getGradeName(grade){
      if (Number.isInteger(grade) && grade > 0 && grade <=6 ) {
          return grades[grade -1]
      } else {
        console.log("ungültige Note")
      }
}

console.log(getGradeName(ik));