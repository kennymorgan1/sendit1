const parcels = [
    {parcelId: 1, name:'cargo1', email:'cargo1@sendit.com', local:'loc1', category:'cat1', destination:'dest1', status:'pending'},
    {parcelId: 2, name:'cargo2', email:'cargo2@sendit.com', local:'loc2', category:'cat2', destination:'dest2', status:'pending'},
    {parcelId: 3, name:'cargo3', email:'cargo3@sendit.com', local:'loc3', category:'cat3', destination:'dest3', status:'pending'}
]
class ParcelControllers { 

static parcelsGetAll (req, res,) {
    res.json({success:true, message:'parcels retrieved successfully', parcels});
}

static parcelsGetById (req, res,) {
    const parcel = parcels.find(c => c.parcelId === parseInt(req.params.parcelId));
    if (!parcel) res.status(404).json({success:false, error:'The parcel with the given ID was not found'});
    res.status(200).json({success:true, message:'parcel retrieved successfully', parcels});
}

static parcelsPost (req, res) {
    if(!req.body.name || !req.body.email || !req.body.local || !req.body.category || !req.body.destination){
        res.status(400).json({success:false, error:'All fields are required'});
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
    this.parcels.push(parcel);
    res.status(201).json({success:true, message:'parcel created successfully', parcels});
}

static parcelsPut (req, res) {
    const parcel = parcels.find(c => c.parcelId === parseInt(req.params.parcelId));
    if (!parcel) res.status(404).json({success:false, error:'The parcel with the given ID was not found'});
        parcel.status = 'cancelled'
    res.status(200).json({success:false, message:'updated succesfully', parcels});
}

}

export default ParcelControllers;