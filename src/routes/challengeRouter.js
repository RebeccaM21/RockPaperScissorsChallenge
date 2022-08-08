import express from 'express'; 
import Versus from '../versus.js'; 

export const router = express.Router();

router.post('/', (req, res) => {
    const versus = new Versus(); 
    const names = [req.body.firstPlayer, req.body.secondPlayer];
    versus.setup(names);
    req.app.locals.versus = versus;

    res.redirect('/challenge')
})

router.get('/', (req, res) => {
    const player = req.app.locals.versus.firstPlayer();
    
    res.render('challenge', {
        name: player.name,
        score: player.score
    });
})
