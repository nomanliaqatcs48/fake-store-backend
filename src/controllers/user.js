const User = require("../models/user");

module.exports.getAllUser = (req, res) => {
  const limit = Number(req.query.limit) || 0;
  const sort = req.query.sort == "desc" ? -1 : 1;

  User.find()
    .select(["-_id"])
    .limit(limit)
    .sort({
      id: sort,
    })
    .then((users) => {
      res.json(users);
    })
    .catch((err) => console.log(err));
};

module.exports.getUser = (req, res) => {
  const id = req.params.id;

  User.findOne({
    id,
  })
    .select(["-_id"])
    .then((user) => {
      res.json(user);
    })
    .catch((err) => console.log(err));
};

module.exports.addUser = (req, res) => {
  if (typeof req.body == undefined) {
    res.json({
      status: "error",
      message: "data is undefined",
    });
  } else {
    User.countDocuments({}).then((count) => {
      const user = new User({
        id: count + 1,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        name: {
          firstname: req.body.name.firstname,
          lastname: req.body.name.lastname,
        },
        address: {
          city: req.body.address.city,
          street: req.body.address.street,
          number: req.body.number,
          zipcode: req.body.zipcode,
          geolocation: {
            lat: req.body.address.geolocation.lat,
            long: req.body.address.geolocation.long,
          },
        },
        phone: req.body.phone,
      });
      user
        .save()
        .then((user) =>
          res.json({
            error: false,
            data: user,
            message: "successfully user created",
          })
        )
        .catch((err) =>
          res.status(400).send({ error: true, message: err.message, data: {} })
        );
    });
  }
};

module.exports.updateUser = (req, res) => {
  if (typeof req.body == undefined || req.params.id == null) {
    res
      .status(400)
      .send({
        error: true,
        message: "something went wrong! check your sent data",
      });
  } else {
    User.findOneAndUpdate({ id: req.params.id }, req.body, {
      new: true,
    })
      .then((user) =>
        res.json({
          error: false,
          data: user,
          message: "successfully user updated",
        })
      )
      .catch((err) =>
        res.status(400).send({ error: true, message: err.message, data: {} })
      );
  }
};

module.exports.deleteUser = (req, res) => {
  if (req.params.id == null) {
    res
      .status(400)
      .send({ error: true, message: "user id should be provided" });
  } else {
    User.findOneAndDelete({ id: req.params.id })
      .then((user) =>
        res.json({
          error: false,
          data: user,
          message: "successfully user deleted!",
        })
      )
      .catch((err) =>
        res.status(400).send({ error: true, message: err.message, data: {} })
      );
  }
};
