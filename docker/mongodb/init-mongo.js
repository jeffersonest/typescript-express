db.createUser(
    {
        user: "canguru",
        pwd: "canguru",
        roles: [
            {
                role: "readWrite",
                db: "canguru"
            }
        ]
    }
)