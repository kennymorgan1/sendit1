import express from 'express';

const router = express.Router();


const parcels = [
    {parcelId: 1, name:'cargo1', email:'cargo1@sendit.com', local:'loc1', category:'cat1', destination:'dest1', status:'pending'},
    {parcelId: 2, name:'cargo2', email:'cargo2@sendit.com', local:'loc2', category:'cat2', destination:'dest2', status:'pending'},
    {parcelId: 3, name:'cargo3', email:'cargo3@sendit.com', local:'loc3', category:'cat3', destination:'dest3', status:'pending'}
]

router.get('/', (req, res,) => {
    res.send(parcels);
});

router.get('/:parcelId', (req, res,) => {
    const parcel = parcels.find(c => c.parcelId === parseInt(req.params.parcelId));
    if (!parcel) res.status(404).send('The parcel with the given ID was not found');
    res.send(parcel).status(200);
});

router.post('/', (req, res) => {
    if(!req.body.name || !req.body.email || !req.body.local || !req.body.category || !req.body.destination){
        res.status(400).send('All fields are required');
    }
    const parcel = {
        parcelId: parcels.length + 1,
        name: req.body.name,
        email: req.body.email,
        local: req.body.local,
        category: req.body.category,
        destination: req.body.destination,
        status: "pending"
    };
    parcels.push(parcel);
    res.status(201).send(parcel);
});

router.put('/:parcelId/cancel', (req, res) => {
    const parcel = parcels.find(c => c.parcelId === parseInt(req.params.parcelId));
    if (!parcel) res.status(404).send('The parcel with the given ID was not found');

        parcel.status = 'cancelled'
    res.send(parcel).status(200);
});


module.exports = router;