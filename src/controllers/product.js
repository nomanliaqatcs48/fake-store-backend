const Product = require("../models/product");

module.exports.getAllProducts = (req, res) => {
  const limit = Number(req.params.limit) || 0;
  const sort = req.query.sort === "desc" ? -1 : 1;

  Product.find()
    .select(["-_id"])
    .limit(limit)
    .sort({ id: sort })
    .then((products) => {
      res.json(products);
    })
    .catch((err) => console.log(err));
};

module.exports.getProduct = (req, res) => {
  const id = req.params.id;

  Product.findOne({ id })
    .select(["-_id"])
    .then((product) => {
      res.json(product);
    })
    .catch((err) => console.log(err));
};

module.exports.addProduct = (req, res) => {
  if (typeof req.body == undefined) {
    res.json({
      status: "error",
      message: "data is undefined",
    });
  } else {
    Product.countDocuments({}).then((count) => {
      const product = new Product({
        id: count + 1,
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
        image: req.body.image,
        price: req.body.price,
        rating: req.body.rating,
      });
      product
        .save()
        .then((data) =>
          res.json({
            error: false,
            data,
            message: "successfully product created",
          })
        )
        .catch((err) =>
          res.status(400).send({ error: true, message: err.message, data: {} })
        );
    });
  }
};

module.exports.updateProduct = (req, res) => {
  if (typeof req.body == undefined || req.params.id == null) {
    res
      .status(400)
      .send({
        error: true,
        message: "something went wrong! check your sent data",
      });
  } else {
    Product.findOneAndUpdate({ id: req.params.id }, req.body, {
      new: true,
    })
      .then((product) =>
        res.json({
          error: false,
          data: product,
          message: "successfully product updated",
        })
      )
      .catch((err) =>
        res.status(400).send({ error: true, message: err.message, data: {} })
      );
  }
};

module.exports.deleteProduct = (req, res) => {
  if (req.params.id == null) {
    res
      .status(400)
      .send({ error: true, message: "product id should be provided" });
  } else {
    Product.findOneAndDelete({ id: req.params.id })
      .then((product) =>
        res.json({
          error: false,
          data: product,
          message: "successfully product deleted!",
        })
      )
      .catch((err) =>
        res.status(400).send({ error: true, message: err.message, data: {} })
      );
  }
};
