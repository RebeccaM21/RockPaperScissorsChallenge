import express from 'express'; 

export const router = express.Router();

router.post('/', (req, res) => {
    const versus = req.app.locals.versus
    versus.turn();
    versus.switchPlayer();

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
