const mv = require('mv');
const ApplicationModel = require('../Models/Application');
const Joob = require('../Models/joboff');
const VideoModel = require('../Models/Video');
const Profile = require('../Models/Profile');


module.exports.readAll = async (req, res) => {
    const { owner } = req.params;
    const jobOffers = await Joob.find({owner});
    const applicationList = await ApplicationModel
        .find({ offer: {$in: jobOffers.map(e => e._id)} })
        .populate(['video', 'user', 'photo', 'profile', 'attachments']);
    res.json(applicationList);
}

module.exports.readJobOfferApplications = async (req, res) => {
    const { jobrOffeId } = req.params;
    const applicationList = await ApplicationModel
        .find({ offer: JoobId})
        .populate(['video','attachments', 'user', 'photo', 'profile']);
    res.json(applicationList);
}

module.exports.apply = async function(req, res) {
    const { candidate, offer, attachements} = req.body;
    // console.log('attachements', attachements.split(','));
    const attachementsArray = attachements.split(',');
    const SavedVideo = await VideoModel
        .create({
            name: 'another one',
            candidate,
            offer
        });
    const profile = await Profile
      .findOne({user: candidate})
      .populate(['user', 'photo'])
    const user = profile.user;
    const photo = profile.photo;
    const savedApplication = await ApplicationModel
        .create({
            profile: profile._id,
            user: user._id,
            photo: photo ? photo._id : null,
            video: SavedVideo._id,
            offer,
            attachments: attachementsArray,
            createdAt: new Date()
        });
        mv(req.files.data.path, `uploads/${SavedVideo._id}.webm`, {mkdirp: true},function(r) {
            res.send(`upload successful ${SavedVideo}`)
        })
  }