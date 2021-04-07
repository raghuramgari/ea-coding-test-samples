package com.energyaustralia.eatest

import com.energyaustralia.eatest.di.appModule
import com.energyaustralia.eatest.repository.FestivalRepository
import org.koin.core.context.startKoin
import org.koin.java.KoinJavaComponent.inject
import retrofit2.HttpException

class LabelListing {
    private val festivalRepository by inject(FestivalRepository::class.java)

    /**
     * The main app logic.
     */
    fun printRecordLabels() {
        runCatching {
            festivalRepository.getSortedByRecordLabel()
        }.onSuccess { labels ->
            labels.forEach { label ->
                println(label.name)
                label.bands.forEach { bandAttendance ->
                    println("\t${bandAttendance.band.name}")
                    bandAttendance.festivals.forEach { festival -> println("\t\t${festival.name}") }
                }
            }
        }.onFailure {
            printError(it)
        }
    }

    /**
     * Really basic error handling.
     */
    private fun printError(e: Throwable) {
        when (e) {
            is HttpException -> println("Http error occurred (${e.code()}) : ${e.message()}")
            else -> println("Error occurred: $e")
        }
    }

    companion object {
        @JvmStatic
        fun main(args: Array<String>) {
            // Start dependency injection framework.
            startKoin {
                modules(appModule)
            }
            LabelListing().printRecordLabels()
        }
    }
}