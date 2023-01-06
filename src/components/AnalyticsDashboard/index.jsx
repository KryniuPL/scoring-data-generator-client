import {Box, CircularProgress} from "@mui/material";
import {AnalyticsDashboardWrapper} from "./styled";
import QueryStatsIcon from '@mui/icons-material/QueryStats';

export const AnalyticsDashboard = ({startDisplaying}) => (
    <AnalyticsDashboardWrapper>
        {startDisplaying ? <BenchPlaceholder/> : <Loader/>}
    </AnalyticsDashboardWrapper>
)

const BenchPlaceholder = () => (
    <Box sx={{display: 'flex'}}>
        <CircularProgress sx={{height: '100px !important', width: '100px !important'}}/>
    </Box>
)

const Loader = () => (
    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <QueryStatsIcon sx={{height: '100px !important', width: '100px !important'}}/>
        <span style={{padding: '12px'}}>
            Analytics Charts will be displayed after completion of data generation form on the left
        </span>
    </Box>
)
