package pl.edu.demo.service

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import pl.edu.demo.entiti.AppUser
import pl.edu.demo.entiti.User
import pl.edu.demo.repository.AppUserRepository

@Service
class CreateUserService {

    @Autowired
    private lateinit var userRepository: AppUserRepository

    fun addUser(user: User): AppUser{
        val newUser = AppUser(user.userName, user.email, user.password)
        userRepository.save(newUser)
        return newUser
    }
}