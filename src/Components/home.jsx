import { Container, Grid } from '@mui/material';
import '../CSS/home.css'
import bg from '../Assets/Images/bg.png';

const Home = () => {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={6} md={4}>
                    <img className="home-bg" src={bg} alt="home-bg"></img>
                </Grid>
                <Grid item xs={6} md={8}>
                    <p className="home-text">Your Personal <br /> Contact Diary</p>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Home;