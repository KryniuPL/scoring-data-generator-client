import {Box} from "@mui/material";
import Chart from "chart.js/auto";
import {Line} from "react-chartjs-2";
import 'chartjs-adapter-luxon';
import StreamingPlugin from 'chartjs-plugin-streaming';
import {ChartWrapper} from "./styled";
import {useEffect} from "react";
import {Statistics} from "./Statistics";

Chart.register(StreamingPlugin)

export const ScoringChart = () => {
    const data = {
        datasets: [
            {
                label: 'Credit Scoring',
                backgroundColor: '#1976d2',
                borderColor: '#1976d2',
                cubicInterpolationMode: 'monotone',
                data: []
            }
        ]
    };

    const options = {
        scales: {
            x: {
                type: 'realtime',
                realtime: {
                    duration: 20000,
                    refresh: 1000,
                    delay: 2000,
                }
            },
            y: {
                title: {
                    display: true,
                    min: 0,
                    max: 600,
                    text: 'Scoring points'
                }
            }
        },
        interaction: {
            intersect: false
        }
    }


    useEffect(() => {
        const socket = new WebSocket("ws://localhost:8090/api/scoring");

        socket.onopen = () => console.log('Socket opened')
        socket.onclose = () => console.log('Socket closed')
        socket.onmessage = (message) => {
            const scoring = JSON.parse(message.data);

            data.datasets.forEach(dataset => {
                dataset.data.push({
                    x: new Date(scoring.dateTime),
                    y: scoring.scoring
                });
            });
        }

        return () => socket.close();
    }, [])

    return (
        <ChartWrapper>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Line
                    data={data}
                    options={options}
                />
            </Box>
            <Statistics />
        </ChartWrapper>
    )
}
