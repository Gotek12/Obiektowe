package pl.edu.demo

import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Controller
import org.springframework.ui.Model
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestMapping
import pl.edu.demo.entiti.AppUser
import pl.edu.demo.entiti.User
import pl.edu.demo.service.AuthService
import pl.edu.demo.service.CreateUserService

@Controller
@RequestMapping("/")
class SignInController {
    private val logger = LoggerFactory.getLogger(Logger.ROOT_LOGGER_NAME)
    private var logUser: AppUser? = null

    @Autowired
    private lateinit var auth: AuthService
    @Autowired
    private lateinit var add: CreateUserService

    @GetMapping("/")
    fun mail(): String {
        return "redirect:/login"
    }

    @GetMapping("/login")
    fun loginPage(user: User): String {
        return "login"
    }

    @GetMapping("/signOut")
    fun signOutPage(): String {
        logUser = null
        return "redirect:/login"
    }

    @GetMapping("/signup")
    fun signUpPage(user: User): String {
        return "signup"
    }

    @PostMapping("/signup")
    fun saveUser(user: User): String {
        val us = add.addUser(user)
        logUser = us
        return "redirect:/main"
    }

    @PostMapping("/login")
    fun login(user: User, model: Model): String {
        val appUser = auth.checkUser(user)

        if (appUser == null) {
            model.addAttribute("errorMessage", "wrong login or password")
            return "login"
        }

        logUser = appUser
        logger.info(appUser.id.toString() + " " + appUser.userName + " " + appUser.password)
        return "redirect:/main"
    }

    @GetMapping("/main")
    fun mainPage(model: Model): String {
        if (logUser == null) {
            return "index_not"
        }
        model.addAttribute("user", logUser)
        return "index"
    }
}
