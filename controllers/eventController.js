// SQL

const connection = require ('../config/db.js');

//get all list
exports.getAllList = (req,res)=>{
    connection.query('SELECT * FROM eventmanagement ORDER BY date_time ASC;', (err,rows,fields) => {
        if (err) throw err;
            res.json(rows);
    });
};

//Search a user by Id
exports.getEventById=(req,res)=> {
    const id=req.params.id;
    connection.query('SELECT * FROM eventmanagement WHERE id=?', [id], (err, rows,fields)=> {
        if(err) throw err;
        if(rows.length>0)
            res.json(rows);
        else
            res.status(404).json
            ({message:'User not found'});
    });
}


//Add new Event
//crud - create
exports.addEvent=(req,res)=> {
    const {event_name, date_time, address, reservation_name} = req.body;
    connection.query('INSERT INTO eventmanagement (event_name, date_time, address, reservation_name) VALUES (?,?,?,?)',[event_name, date_time, address, reservation_name], (err,result)=> {
        if(err) throw err;
        res.json({message:'Event Added Successfully', userId:
        result.insertId});
    })
}

//Update Event
//crud -update
exports.updateEvent=(req,res)=>{
    const {id, event_name, date_time, address, reservation_name} = req.body;
    connection.query('UPDATE eventmanagement SET event_name=?, date_time=?, address=?, reservation_name=? WHERE id=?', [event_name, date_time, address, reservation_name, id], (err,result) => {
        if (err) throw err;
        if(result.affectedRows>0)
            res.json({message:'Event Update Succesfully'});
        else
            res.status(404).json({message:'Event not found'});
    });
};

//delete Event
//crud-delete
exports.deleteEvent=(req,res)=>{
    const {id}  = req.body;
    
    connection.query('DELETE FROM eventmanagement WHERE id=?', [id], (err,result) => {
        if (err) throw err;
        if(result.affectedRows>0)
            res.json({message:'Event Deleted Succesfully'});
        else
            res.status(404).json({message:'User not found'});
    });
};
