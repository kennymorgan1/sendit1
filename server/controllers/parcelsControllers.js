import parcels from '../Data/data'

class ParcelControllers { 

static parcelsGetAll (req, res ) {
    res.json({success:true, message:'parcels retrieved successfully', parcels});
}

static parcelsGetById (req, res) {
    const parcel = parcels.find(c => c.parcelId === parseInt(req.params.parcelId));
    if (!parcel) res.status(404).json({success:false, error:'The parcel with the given ID was not found'});
    res.status(200).json({success:true, message:'parcel retrieved successfully', parcel});
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
        status: "pending",
        userId: Math.floor((Math.random() * 5) + 1)
    };
    parcels.push(parcel);
    res.status(201).json({success:true, message:'parcel created successfully', parcel});
}

static parcelsPut (req, res) {
    const parcel = parcels.find(c => c.parcelId === parseInt(req.params.parcelId));
    if (!parcel) res.status(404).json({success:false, error:'The parcel with the given ID was not found'});
        parcel.status = 'cancelled'
    res.status(200).json({success:false, message:'updated succesfully', parcel});
}

}

export default ParcelControllers;