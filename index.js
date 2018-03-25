var katzDeli = [];

// takes in: current line, name; returns: position in line
function takeANumber(katzDeliLine, name) {
  const number = katzDeliLine.length + 1;
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${number} in line.`;
}

// return first person in line and delete from katzDeliLine
function nowServing(katzDeliLine) {
  katzDeliLine.shift()
}

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
describe('deli', () => {
  describe('takeANumber', () => {
    var katzDeli;
    var otherDeli;

    beforeEach(() => {
      katzDeli = [];
      otherDeli = ["Steven", "Blake", "Avi"];
    });

    it('adds a person to the line', () => {
      expect(takeANumber(katzDeli, 'Ada')).toEqual("Welcome, Ada. You are number 1 in line.");
      expect(katzDeli).toEqual(['Ada']);
    });

    it('appends the person the end of the line if there are already people on it', () => {
      expect(takeANumber(otherDeli, 'Grace')).toEqual("Welcome, Grace. You are number 4 in line.");
      expect(otherDeli).toEqual(["Steven", "Blake", "Avi", "Grace"]);
    });

    it("properly handles multiple people being added", () => {
      takeANumber(katzDeli, 'Ada');
      takeANumber(katzDeli, 'Grace');
      takeANumber(katzDeli, 'Kent');

      expect(katzDeli).toEqual(["Ada", "Grace", "Kent"]);
    });
  });

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