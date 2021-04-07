package com.energyaustralia.eatest.repository

import com.energyaustralia.eatest.api.Band
import com.energyaustralia.eatest.api.FestivalService
import com.energyaustralia.eatest.api.MusicFestival
import com.energyaustralia.eatest.models.BandFestivalAttendance
import com.energyaustralia.eatest.models.RecordLabel

/**
 * Festival repository.
 * Gets data from [FestivalService]. May also implement caching and additional transformations.
 */
class FestivalRepository(private val festivalService: FestivalService) {
    companion object {
        private const val NO_LABEL = "No label"
    }

    fun getAll(): List<MusicFestival> {
        return festivalService.getFestivals()
    }

    fun getSortedByRecordLabel(): List<RecordLabel> {
        val festivals = getAll()

        // Sort festivals by band.
        val bands = sortedMapOf<Band, MutableList<MusicFestival>>(compareBy { it.name })
        festivals
            .filter { it.name != null }
            .forEach { fest ->
                fest.bands.forEach { band ->
                    bands.getOrPut(band) { mutableListOf() }.add(fest)
                }
            }

        // Sort bands by label.
        return bands
            .map { bandFestivals ->
                BandFestivalAttendance(bandFestivals.key, bandFestivals.value.sortedBy { it.name })
            }
            .groupByTo(sortedMapOf()) { (it.band.recordLabel ?: NO_LABEL).ifBlank { NO_LABEL } }
            .map { labelBands ->
                RecordLabel(labelBands.key, labelBands.value)
            }
    }
}