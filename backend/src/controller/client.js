class ClientController {
  NewUser(request, response) {
    const { Name, Mail, Phone, Password } = request.body;

    const clinetObj = {
      Name,
      Mail,
      Phone,
      Password,
    };
    response.status(200).send({ ...clinetObj });
  }

  EditUser(request, response) {
    const { Name, Mail, Phone } = request.body;

    const clinetObj = {
      Name,
      Mail,
      Phone,
    };
    response.status(200).send({ ...clinetObj });
  }

  EditPassword(request, response) {
    const { currentlyPassword, NewPassword } = request.body;

    const passwordObj = {
      currentlyPassword,
      NewPassword,
    };

    response.status(200).send({ ...passwordObj });
  }

  newAddress(request, response) {
    const {
      AddressName,
      Zipcode,
      City,
      State,
      Address,
      Number,
      Complement,
      Neighborhood,
    } = request.body;

    const addressObj = {
      AddressName,
      Zipcode,
      City,
      State,
      Address,
      Number,
      Complement,
      Neighborhood,
    };

    response.status(200).send({ ...addressObj });
  }
}

export default ClientController;
