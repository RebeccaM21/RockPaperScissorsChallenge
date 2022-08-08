export class Player {
    score = 0; 

  constructor(name = 'Computer') {
      this.name = name; 
  }
 
    score(amount){
        this.score += amount;
        return this.score; 
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