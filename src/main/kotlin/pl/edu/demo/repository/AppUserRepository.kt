package pl.edu.demo.repository

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import pl.edu.demo.entiti.AppUser
import javax.transaction.Transactional

@Repository
@Transactional
interface AppUserRepository : JpaRepository<AppUser, Long> {
    fun findOneByUserName(userName: String): AppUser?
}