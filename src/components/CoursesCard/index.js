import { Card, CardActions, CardContent, Button, Typography, Grid } from '@mui/material';

const CourseCard = () => {
    return (
        <Grid container spacing={3} px={2}>
            <Grid item md={12} xs={12} lg={12} sx={{ margin: "10px" }}>
                <Typography>All Courses Available Right Now ...</Typography>
            </Grid>
            <Grid item md={4} xs={12}>
                <Card>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Saylani Mass IT Training
                        </Typography>
                        <Typography variant="h5" component="div">
                            Web & Mobile Hybird Course
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            adjective
                        </Typography>
                        <Typography variant="body2">
                            1 ) HTML , 2 ) CSS , 3 ) JavaScript
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" variant='contained'>Enroll</Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item md={4} xs={12} >
                <Card>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Saylani Mass IT Training
                        </Typography>
                        <Typography variant="h5" component="div">
                            Web & Mobile Hybird Course
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            adjective
                        </Typography>
                        <Typography variant="body2">
                            1 ) HTML , 2 ) CSS , 3 ) JavaScript
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" variant='contained'>Enroll</Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item md={4} xs={12} >
                <Card>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Saylani Mass IT Training
                        </Typography>
                        <Typography variant="h5" component="div">
                            Web & Mobile Hybird Course
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            adjective
                        </Typography>
                        <Typography variant="body2">
                            1 ) HTML , 2 ) CSS , 3 ) JavaScript
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" variant='contained'>Enroll</Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item md={4} xs={12} >
                <Card>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Saylani Mass IT Training
                        </Typography>
                        <Typography variant="h5" component="div">
                            Web & Mobile Hybird Course
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            adjective
                        </Typography>
                        <Typography variant="body2">
                            1 ) HTML , 2 ) CSS , 3 ) JavaScript
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" variant='contained'>Enroll</Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item md={4} xs={12} >
                <Card>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Saylani Mass IT Training
                        </Typography>
                        <Typography variant="h5" component="div">
                            Web & Mobile Hybird Course
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            adjective
                        </Typography>
                        <Typography variant="body2">
                            1 ) HTML , 2 ) CSS , 3 ) JavaScript
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" variant='contained'>Enroll</Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>

    )
}

export default CourseCard;
