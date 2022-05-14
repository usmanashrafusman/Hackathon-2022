import { Card, CardActions, CardContent, Button, Typography, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCourses } from '../../axios/courseRequests';
import useAxios from '../../axios/httpServices';
import EnrollCouseDialog from '../EnrollCouseDialog';
const CourseCard = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false)
    const handleClose = () => {
        setIsOpen(false)
    }
    const handleOpen = () => {
        setIsOpen(true)
    }
    const [{ data, loading, error }, executegetCourses] = useAxios(getCourses(), {
        manual: true
    })
    useEffect(() => {
        executegetCourses().then((res) => {
            console.log(res.data)
        }).catch((err) => {
            console.log(err)
        })

    }, [])
    return (
        <>
            <EnrollCouseDialog isOpen={isOpen} handleClose={handleClose} />
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
                            <Button size="small" variant='contained' onClick={handleOpen}>Enroll</Button>
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
            </Grid></>

    )
}

export default CourseCard;
