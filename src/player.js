export class Player {
    score = 0; 

  constructor(name) {
      this.name = name;
    //   this.score = score; 
  }

  score(amount) {
    this.score += amount;
  }
    
    choice() { 
    const number = Math.floor(Math.random() * 3);
        switch (number) {
            case 0: 
            return `rock`
                break; 
            case 1: 
            return `paper`
                break; 
            case 2:
            return 'scissors'
                break; 
        }
  }
}; 
