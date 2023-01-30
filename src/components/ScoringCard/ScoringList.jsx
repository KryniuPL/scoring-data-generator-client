import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";

const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'rgb(23,28,36)',
};

export const ScoringList = ({scoringPoints}) => {

    if (!scoringPoints || !scoringPoints.length) {
        return null;
    }

    return (
        <List sx={style} component="nav" aria-label="mailbox folders">
            {scoringPoints.map((number, index) => <Item key={index} number={number} scoringPoints={scoringPoints}/>)}
        </List>
    )
}

const Item = ({number, scoringPoints}) => (
    <div key={number}>
        <ListItem >
            <ListItemText primary={number}/>
        </ListItem>
        {(scoringPoints.indexOf(number) !== scoringPoints.length -1) && <Divider />}
    </div>
)
