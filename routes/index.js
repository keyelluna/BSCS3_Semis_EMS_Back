const express = require ('express');
router = express.Router();
const eventController = require('../controllers/eventController');

//route to get all list
router.get('/eventList', eventController.getAllList);
//Route to serach ID
router.get('/eventId/:id', eventController.getEventById);
//Route to serach lastName
// router.get('/users/:gender', eventController.getUserByGender);

//Route to add new event
router.post('/add', eventController.addEvent);

//Route to Update event
router.put('/update', eventController.updateEvent);

//router delete event
router.delete('/delete', eventController.deleteEvent);

module.exports=router;