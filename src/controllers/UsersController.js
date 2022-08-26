const AppError = require("../utils/AppError");

const sqliteConnections = require("../database/sqlite");

class UsersController {
    async create(request, response) {
        const { name, email, password } = request.body;

        const database = await sqliteConnections();
        const checkUserExists = await database.get("SELECT * FROM users WHERE email = (?)", [email])

        if (checkUserExists) {
            throw new AppError("Este e-mail já está em uso.");
        }

        return response.status(201).json();
    }
}

module.exports = UsersController;