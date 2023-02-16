import AppController from "./app.js";

class UserController extends AppController {
  constructor(model) {
    super(model);
  }
  userCreate(req, res, next) {
    // console.log(res, "noman: ", req)
    create(req, res, next);
    // return res.status(200).json({
    //         error: false,
    //         data: req.body,
    //         message: "successfully user created",
    //       });
  }
}

export default UserController;
