import express from 'express'; 
import Versus from '../versus.js'; 

export const router = express.Router();

router.post('/', (req, res) => {
    const firstPlayer = Versus.firstPlayer();
    const secondPlayer = Versus.secondPlayer();
    Versus.turn();    
    Versus.switch();

  res.render('challenge', {
    firstPlayer: firstPlayer,
    secondPlayer: secondPlayer
  });
})