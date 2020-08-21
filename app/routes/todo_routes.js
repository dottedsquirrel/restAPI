module.exports = function(app, db){

    app.get('/todo/:id', (req, res) => {
        const id = req.params.id;
        const details = {'_id': new ObjectID(id) };
		db.collection('todo').findOne(details, (err, item) => {
			if (err) {
				res.send({ 'error': 'Whoops! An error has occured' });
			} else {
				res.send(item);
			}
		});

    });

    app.put('/todo/:id', (req, res) => {
        const id = req.params.id;
		const details = {'_id': new ObjectID(id) };
		const note = { text: req.body.todo };
		db.collection('todo').update(details, note, (err, item) => {
			if (err) {
				res.send({ 'error': 'Whoops! An error has occured' });
			} else {
				res.send(item);
			}
		}); 
    });

	app.post('/todo', (req, res) => {
		const note = { text: req.body.todo };
		db.collection('todo').insert(note, (err, result) => {
			if (err) {
				res.send({ 'error': 'Whoops! An error has occured' });
			} else {
				res.send(result.ops[0]);
			}
		});
	});    


    app.delete('/todo/:id', (req, res) => {
        const id = req.params.id;
		const details = {'_id': new ObjectID(id) };
		db.collection('todo').remove(details, (err, item) => {
			if (err) {
				res.send({ 'error': 'Whoops! An error has occured' });
			} else {
				res.send('todo item ' + id + ' deleted!');
			}
		});
        
    });
}