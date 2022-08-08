import express from 'express'; 
import Versus from '../versus.js'; 

export const router = express.Router();


router.post('/', (req, res) => {
    const versus = new Versus(); 
    const names = [req.body.player1, req.body.player2];
    versus.setup(names); 
    req.app.locals.Versus = Versus;

    res.redirect('/challenge')
})

router.get('/', (req, res) => {
    const player = req.app.locals.Versus.firstPlayer();
    
    res.render('challenge', {
        name: player.name,
        score: player.score
    });
})