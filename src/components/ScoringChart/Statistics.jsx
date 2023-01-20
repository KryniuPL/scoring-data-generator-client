import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import {ScoringResultWrapper, StatisticsWrapper} from "./styled";
import Slider from '@mui/material/Slider';
import {useEffect, useRef, useState} from "react";
import axios from "axios";

const headers = {
    'Content-Type': 'application/json',
}

function valuetext(value) {
    return `${value} Points`;
}

export const Statistics = () => {
    const [scoringStats, setScoringStats] = useState({scoresAbove: 0.00, scoredBelow: 0.00})
    const intervalRef = useRef(null)

    const onSliderChange = (e) => {
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            axios.get(`/api/scoring/scoreRatio/${e.target.value}`, {headers})
                .then(res => {
                    setScoringStats(res.data)
                })
                .catch(err => console.error(err))
        }, 5000);
    }

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            axios.get(`/api/scoring/scoreRatio/250`, {headers})
                .then(res => setScoringStats(res.data))
                .catch(err => console.error(err))
        }, 5000);

        return () => {
            clearInterval(intervalRef.current);
        };
    }, [])

    return (
        <StatisticsWrapper>
            <div>
                Accept scoring with value greather or equal to:
                <Slider
                    aria-label="Temperature"
                    defaultValue={250}
                    getAriaValueText={valuetext}
                    valueLabelDisplay="auto"
                    step={50}
                    marks
                    min={0}
                    max={600}
                    onChange={onSliderChange}
                />
            </div>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <ScoringResultWrapper>
                    <ThumbUpOffAltIcon color={'success'} sx={{marginRight: '4px'}}/>
                    <span>Accepted scorings: {(scoringStats.scoresAbove * 100).toFixed(2)} %</span>
                </ScoringResultWrapper>

                <ScoringResultWrapper style={{marginLeft: '12px'}}>
                    <ThumbDownOffAltIcon color={'error'} sx={{marginRight: '4px'}}/>
                    <span>Refused scorings: {(scoringStats.scoredBelow * 100).toFixed(2)} %</span>
                </ScoringResultWrapper>
            </div>

        </StatisticsWrapper>
    )
}
