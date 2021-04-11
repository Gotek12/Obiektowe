package pl.edu.demo.service

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import pl.edu.demo.entiti.User
import pl.edu.demo.entiti.AppUser
import pl.edu.demo.repository.AppUserRepository
//https://kotlinlang.org/docs/all-open-plugin.html#spring-support
@Service
class AuthService {

    @Autowired
    private lateinit var userRepository: AppUserRepository

    fun checkUser(user: User): AppUser? {
        var appUser = userRepository.findOneByUserName(user.userName)

        if(appUser != null && user.password == appUser.password){
            return appUser
        }
        return null
    }
}