import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import {ScoringResultWrapper, StatisticsWrapper} from "./styled";
import Slider from '@mui/material/Slider';
import {useEffect, useState} from "react";
import axios from "axios";

const headers = {
    'Content-Type': 'application/json',
}

function valuetext(value) {
    return `${value} Points`;
}

export const Statistics = () => {
    const [acceptedScore, setAcceptedScore] = useState(250);
    const [scoringStats, setScoringStats] = useState({scoresAbove: 0.00, scoredBelow: 0.00})

    useEffect(() => {
        setInterval(() => {
            axios.get(`/api/scoring/scoreRatio/${acceptedScore}`, {headers})
                .then(res => {
                    setScoringStats(res.data)
                })
                .catch(err => console.error(err))
        }, 1000)
    }, [])

    return (
        <StatisticsWrapper>
            <div>
                Accept scoring with value greather or equal to:
                <Slider
                    aria-label="Temperature"
                    defaultValue={acceptedScore}
                    getAriaValueText={valuetext}
                    valueLabelDisplay="auto"
                    step={50}
                    marks
                    min={0}
                    max={600}
                    onChange={e => setAcceptedScore(e.target.value)}
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
