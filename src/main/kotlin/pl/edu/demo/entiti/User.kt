package pl.edu.demo.entiti

import lombok.AllArgsConstructor
import lombok.Getter
import lombok.Setter

@Getter
@Setter
@AllArgsConstructor
open class User(
    var userName: String = "",
    var password: String = ""
) {
    var email: String = ""

    constructor(user: User) : this(user.userName, user.password) {
        userName = user.userName
        password = user.password
        email = user.email
    }
}
