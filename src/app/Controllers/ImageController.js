const Image = require('../models/Image');
class ImageController {
  //[Get] /
  index(req, res, next) {
    res.render('Image');
  }

  //  [Post]/store
  store(req, res, next) {
    const formData = req.body;
    const Image = new Image(formData);
    course.save()
      .then(() => res.redirect('/'))
      .catch(error => {
      });
  }
}

module.exports = new ImageController();
