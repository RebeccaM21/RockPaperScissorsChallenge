import express from 'express'; 

export const router = express.Router();

router.post('/', (req, res) => {
    const versus = req.app.locals.versus
    if (versus.turn() == 'scissors') { 
        firstPlayer.score(1); 
    } else if (versus.turn() == 'paper') { 
        secondPlayer.score(1)
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
