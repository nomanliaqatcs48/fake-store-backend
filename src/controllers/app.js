class AppController {
  constructor(model) {
    if (new.target === AppController) {
      throw new TypeError("Cannot construct Abstract instances directly");
    }
    this._model = model;
    this.create = this.create.bind(this);
  }
  create(req, res, next) {
    console.log("create trest");
    let obj = req.body;
    const validator = this._model.validateCreate(obj);
    if (validator.passes()) {
      let object = new this._model(obj);
      object.save().then(
        (savedObject) => {
          console.log("response: ", savedObject);
          return res.status(200).json(savedObject);
        },
        (err) => {
          return next(err);
        }
      );
    } else {
      return res.status(400).json(validator.errors.all());
    }
  }
}

export default AppController;
