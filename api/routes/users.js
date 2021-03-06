import express from 'express';

const app = express();

const router = express.Router();

const parcels = [
    {parcelId: 1, name:'cargo1', email:'cargo1@sendit.com', local:'loc1', category:'cat1', destination:'dest1', userId:1, status:'pending'},
    {parcelId: 2, name:'cargo2', email:'cargo2@sendit.com', local:'loc2', category:'cat2', destination:'dest2', userId:2, status:'pending'},
    {parcelId: 3, name:'cargo3', email:'cargo3@sendit.com', local:'loc3', category:'cat3', destination:'dest3', userId:1, status:'pending'}
]

router.get('/:userId/parcels', (req, res,) => {
    let user = parcels.filter((parcel) => {
        return parcel.userId === parseInt(req.params.userId);
    });
    if (!user) res.status(404).send('The user has no parcel');
    res.send(user);
});

module.exports = router;