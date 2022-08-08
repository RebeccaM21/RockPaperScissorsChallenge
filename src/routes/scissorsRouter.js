import express from 'express'; 

export const router = express.Router();

router.post('/', (req, res) => {
    const versus = req.app.locals.versus
    if (versus.turn() == 'paper') { 
        firstPlayer.score(1); 
    } else if (versus.turn() == 'rock') { 
        secondPlayer.score(1)
    } 

    res.redirect('/scissors'); 
})

    router.get('/', (req, res) => {
    const firstPlayer = req.app.locals.versus.firstPlayer();
    const secondPlayer = req.app.locals.versus.secondPlayer();
    
    res.render('scissors', {
    firstPlayer: firstPlayer,
    secondPlayer: secondPlayer
  });
})
