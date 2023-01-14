import {Box} from "@mui/material";
import {AnalyticsDashboardWrapper} from "./styled";
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import {ScoringChart} from "../ScoringChart";

export const AnalyticsDashboard = ({startDisplaying}) => {
    return (
        <AnalyticsDashboardWrapper>
            {startDisplaying ? <ScoringChart/> : <Loader/>}
        </AnalyticsDashboardWrapper>
    )
}

const Loader = () => (
    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <QueryStatsIcon sx={{height: '100px !important', width: '100px !important'}}/>
        <span style={{padding: '12px'}}>
            Analytics Charts will be displayed after completion of data generation form on the left
        </span>
    </Box>
)
