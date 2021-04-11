package pl.edu.demo.entiti

import javax.persistence.*

@Entity
data class AppUser(
        var userName: String,
        var email: String,
        var password: String,
){
        @Id
        @GeneratedValue(strategy=GenerationType.IDENTITY)
        var id: Long? =null

//        var enabled: Boolean = true
//        var accountNonExpired: Boolean = true
//        var accountNonLocked: Boolean = true
//
//        @Enumerated(EnumType.STRING)
//        lateinit var role: Role

        constructor(user: AppUser) : this(user.userName, user.email, user.password){
                id = user.id
                userName = user.userName
                email = user.email
                password = user.password
        }
}
