var katzDeli = [];

// takes in: current line, name; returns: position in line
function takeANumber(katzDeliLine, name) {
  const number = katzDeliLine.length + 1;
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${number} in line.`;
}

// return first person in line and delete from katzDeliLine
function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return `There is nobody waiting to be served!`;
  }
  var current_person = katzDeliLine.shift();
  //delete katzDeliLine[0];
  return `Currently serving ${current_person}.`;
}

takeANumber(katzDeli, `floris`);
console.log(nowServing(katzDeli));
console.log(katzDeli.length);

/*
// returns defined string with numbered katzDeliLine
function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return `The line is currently empty`;
  }
  var new_line = [];
  var i = 0;
  for(i=0; i < katzDeliLine.length; i++) {
    new_line.push(katzDeliLine[i]);
  return `The line is currently: ` + new_line;
  }
}


/*
  describe('nowServing', () => {
    it('returns the line is empty when no one is on line', () => {
      expect(nowServing([])).toEqual("There is nobody waiting to be served!");
    });

    it('returns an announcement about the person it is serving, and shifts the line', () => {
      const deliLine = ["Steven", "Blake", "Avi"]
      expect(nowServing(deliLine)).toEqual("Currently serving Steven.");
      expect(deliLine).toEqual(["Blake", "Avi"]);
    });
  });

  describe('currentLine(line)', () => {
    it('returns "The line is currently empty." if no one is in line', () => {
      expect(currentLine([])).toEqual("The line is currently empty.");
    });

    it('says who is in line when there are people waiting', () => {
      expect(currentLine(["Bill", "Jane", "Ann"])).toEqual("The line is currently: 1. Bill, 2. Jane, 3. Ann");
    });
  });
})
*/