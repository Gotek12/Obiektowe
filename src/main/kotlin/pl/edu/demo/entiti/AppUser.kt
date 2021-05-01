package pl.edu.demo.entiti

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

@Entity
data class AppUser(
    var userName: String,
    var email: String,
    var password: String,
) {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long? = null

    constructor(user: AppUser) : this(user.userName, user.email, user.password) {
        id = user.id
        userName = user.userName
        email = user.email
        password = user.password
    }
}
