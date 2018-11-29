import parcels from '../Data/data'

class UsersControllers{
 static usersGetAll(req, res) {
    let user = parcels.filter((parcel) => {
        return parcel.userId === parseInt(req.params.userId);
    });
    if (!user) res.status(404).send('The user has no parcel');
    res.send(user);
}
}

export default UsersControllers;