import { Facebook, Instagram } from "@mui/icons-material";
import { Box, Container, Grid, Typography, Link } from "@mui/material";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';



export default function Footer() {
    return (
        <Box  id="footer">
        <Box
        sx={{
          backgroundColor: 'red',
          // position: 'fixed',
          p: 6,
        }}
        component="footer"
      >
        <Container maxWidth="sm">
        <Grid style={{display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'}} item xs={12} sm={4}>
              <Typography variant="h6"  style={{color: '#ffff56'}} gutterBottom>           
                  Siga-nos - 
              </Typography>
              <Link href="https://www.facebook.com/" color="inherit">
                <Facebook  style={{color: '#ffff56'}}  />
              </Link>
              <Link
                href="https://www.instagram.com/"
                color="inherit"
                sx={{ pl: 1, pr: 1 }}
              >
                <Instagram  style={{color: '#ffff56'}} />
              </Link>
              <Link href="https://www.twitter.com/" color="inherit">
                <WhatsAppIcon style={{color: '#ffff56'}} />
              </Link>
            </Grid>
         
          <Typography variant="body2"  style={{color: '#ffff56'}} align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://your-website.com/">
              Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Container>
      </Box>
      </Box>
    )
}