import express from 'express'; 

export const router = express.Router();

router.post('/', (req, res) => {
    const versus = req.app.locals.versus
    const firstPlayer = versus.firstPlayer(); 
    const secondPlayer = versus.secondPlayer(); 
  versus.turn(); 
  if (secondPlayer.choice() === 'rock') {
    firstPlayer.increaseScore();
  } else if (secondPlayer.choice() == 'scissors') {
    secondPlayer.increaseScore();
  }

    res.redirect('/paper'); 
})
    router.get('/', (req, res) => {
    const firstPlayer = req.app.locals.versus.firstPlayer();
    const secondPlayer = req.app.locals.versus.secondPlayer();
    
    res.render('paper', {
    firstPlayer: firstPlayer,
    secondPlayer: secondPlayer
  });
})
