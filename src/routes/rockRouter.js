import express from 'express'; 

export const router = express.Router();

router.post('/', (req, res) => {
    const versus = req.app.locals.versus
    const firstPlayer = versus.firstPlayer(); 
    const secondPlayer = versus.secondPlayer(); 
  versus.turn(); 
  if (secondPlayer.choice() === 'scissors') {
    firstPlayer.increaseScore();
  } else if (secondPlayer.choice() == 'paper') {
    secondPlayer.increaseScore();
  }

    res.redirect('/rock'); 
})

    router.get('/', (req, res) => {
    const firstPlayer = req.app.locals.versus.firstPlayer();
    const secondPlayer = req.app.locals.versus.secondPlayer();
    
    res.render('rock', {
    firstPlayer: firstPlayer,
    secondPlayer: secondPlayer
  });
})
