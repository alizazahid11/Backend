const getUser = (req, res) => {
    res.send("get all users...............");
}

const addUser = (req, res) => {
    let newUser = {
        firstName: "Aliza",
        lastName: "Zahid",
        password: "123",
        email: "aliza@yopmail.com"
    };
    Users.findOne({ email: newUser.email })
        .then(
            data => {
                if (data) {
                    console.log("User already exists.");
                    res.send("User already exists.");
                }
                else {
                    Users.create(
                        {
                            firstName: newUser.firstName,
                            lastName: newUser.lastName,
                            email: newUser.email,
                            password: newUser.password
                        },
                        function (err, user) {
                            if (err) return res.status(500).send("There was a problem registering the user.")
                            res.status(200).send({user: user });
                        });
                }
            });
}

module.exports = { getUser, addUser }