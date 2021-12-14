import React from 'react'
import { Card, CardContent, CardHeader , Typography, List, ListItem} from '@mui/material'
import Divider from '@mui/material/Divider';

const Recap = (props) => {
    return (
        <Card>
            <CardContent>
            <Typography>
                You are : 
            </Typography>
                <List>
                    <ListItem>
                         { props.person.gender !== '' ? (" Gender : " + props.person.gender) : '' }
                    </ListItem>
                    <Divider variant="middle" component="li" />
                    <ListItem>
                    { props.person.age !== 0 ? (" Age : " + props.person.age) : '' }
                    </ListItem>
                    <Divider variant="middle" component="li" />
                    <ListItem>
                    { props.person.job !== '' ? (" Job : " + props.person.job) : '' }
                    </ListItem>
                </List>
                <Typography>
                    You want to talk about :
                </Typography>
                <List>
                
                    <ListItem>
                    { props.person.subject !== '' ? (" Subject : " + props.person.subject) : '' }
                    </ListItem>
                    <Divider variant="middle" component="li" />
                    <ListItem>
                    { props.person.emotion !== '' ? (" Emotion : " + props.person.emotion) : '' }
                    </ListItem>
                </List>
            </CardContent>
        </Card>
    )
}

export default Recap
