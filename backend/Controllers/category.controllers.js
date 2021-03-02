const Category = require('../Models/category.model');
const User = require('../Models/User');

exports.createCategory = async (req, res) => {
    let name = req.body.name
    let image = req.file.path
    console.log(name, image);
 const updatedPerson = await User.findOneAndUpdate({_id: req.user.user.id},{photo:name},{new:true})
 return res.send(updatedPerson)
    // const category = new Category({
    //     name: name,
    //     image: image
    // })
    // category.save((err, category) => {
    //     if (err) {
    //         console.log(err)
    //         return res.status(400).json({
    //             errors: err.meesage
    //         })
    //     }
    //     return res.json({
    //         message: "Created category successfully",
    //         category
    //     })
    // })

}