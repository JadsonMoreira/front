import * as React from 'react';
import { styled } from '@mui/material/styles';
import logo from '../assets/logo.jpeg'

import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import {  Alert, Box, Button,  Dialog, IconButton, Input,  TextField } from '@mui/material';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon style={{color: '#ffff56'}} sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const list = [
  {foto: logo},
  {foto: logo},
  {foto: logo},
  {foto: logo},
  {foto: logo},
]

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>('panel1');
  const [open, setOpen] = React.useState(false);
  const [contador, setContador] = React.useState(1);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const incrementarContador = () => {
    setContador((prevContador) => (prevContador >= 1 ? prevContador + 1 : 1));
  };

  const DincrementarContador = () => {
    setContador((prevContador) => (prevContador >= 1? prevContador -1: 1));
  };

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <Box>
            <Dialog 
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
            <Box sx={{ maxHeight: 'calc(100% - 50px)',
                       background: '#ffff56',}}>
                <Box style={{background: 'red', padding: '16px 20px',
                    borderTopRightRadius: '2px',
                    borderTopLeftRadius: '2px'}}>
                    <IconButton style={{float: 'right',
                        color: '#ffff56',
                        textShadow: 'none'}}  aria-label="Close">
                    <CloseIcon onClick={() => setOpen(false)} style={{color: '#ffff56', fontSize: '20px'}}/>
                    </IconButton>
                    <Typography id="modal-modal-title" variant="h6" color='#ffff56' component="h2">
                    Adição de Produto
                    </Typography>
                </Box>
           
                <Box style={{padding: '20px'}}>
                    <Typography variant='h6' id="modal-modal-description" style={{textAlign: 'center'}}>
                    Vegetariano 400g
                    </Typography>
                    <Typography variant='h6' id="modal-modal-description" style={{textAlign: 'center', margin: '10px'}}>
                    R$ 20,00
                    </Typography>

                    <center style={{marginBottom: '20px'}}>
                    <img src={logo} alt="" style={{width: '250px',height: '250px'}} />
                    </center>

                    <Alert variant="filled" style={{background: 'red', color: '#ffff56'}} severity="info">
                        ALGUMA OBSERVAÇÃO?</Alert>
                  
                </Box >
                   <Box style={{    alignItems: 'center',
                        display: 'flex',
                        marginBottom: '20px',
                        justifyContent: 'center', 
                        borderColor: 'none'
                        }}>
                   <TextField
                   color='error'
                        id="outlined-multiline-flexible"
                        multiline
                        style={{width: '45ch', borderColor: '#000'}}
                        rows={3}
                        placeholder='Adicione as observações aqui...'
                    />
                   </Box>
                <Box style={{paddingLeft: '20px'}}>
                    <Typography style={{marginBottom: '10px', fontSize:'15px'}} id="modal-modal-title" variant="h6"  component="h2">
                        Quantidade
                    </Typography>
                    
                    <Box style={{height: '30px'}}>
                            <IconButton onClick={DincrementarContador} aria-label="Close">
                                    <RemoveCircleOutlineIcon  style={{ fontSize: '20px', color: '#000'}}/>
                            </IconButton>
                            <TextField value={contador? contador: 1}  style={{width: '70%', borderBottom: 'none'}}
                                    id="standard-textarea"
                                    multiline
                                    variant="standard"
                                    />
                            <IconButton  onClick={incrementarContador} aria-label="Close">
                                    <ControlPointIcon style={{ fontSize: '20px', color: '#000'}}/>
                            </IconButton>
                    </Box>
                </Box>
                <center>
                <Button style={{marginTop: '30px',
                 marginBottom: '30px',
                 width: '85%', background: 'red',
                  color: '#ffff56'}}  variant="contained">Adicionar</Button>

                </center>
                {/* <Box style={{padding: '20px', }}>

                </Box> */}
            </Box>
            </Dialog>
         <Box
        style={{
          marginTop: '20px',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <img
          src={logo}
          style={{
            verticalAlign: 'middle',
            border: 0,
            width: '100px',
            aspectRatio: 'auto 100 / 100',
            height: '100px',
          }}
          alt="logo"
          title="logo"
        ></img>


      </Box>
        <Box style={{padding: '20px'}}>
        {/* <Alert style={{marginBottom: '20px'}}
        variant="outlined" severity="warning"><b>Aviso! </b>Restaurante encontra-se fechado no momento. Você poderá visualizar o cardápio, mas não conseguirá realizar o pedido.</Alert> */}
        <Accordion style={{background: '#ffff56', marginBottom: '20px',}} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary style={{background: 'red', borderTopRightRadius: '3px',
                  borderTopLeftRadius: '3px'}} aria-controls="panel1d-content" id="panel1d-header">
            <Typography style={{color: '#ffff56'}} >Yakisoba Simples</Typography>
          </AccordionSummary >

          {list.map((tag, index) => (
            <AccordionDetails onClick={handleOpen} style={{marginBottom: '20px'}}>
            <img src={logo} alt="" style={{width: '80px', marginRight: '10px', aspectRatio: 'auto 80 / 80', height: '80px', float: 'left'}} />
    
              <Typography variant='h5' marginTop='10px' marginBottom='10px' fontSize="17px"> Vegetariano 400g</Typography>
                <Typography variant='subtitle1' fontWeight='400' fontSize="10px"> so legumes</Typography>
              <strong><b style={{cursor: 'pointer', float: 'right'}}>R$ 20,00</b></strong>
            </AccordionDetails>
          ))}

        

    
        </Accordion>
      </Box>

    </Box>
  );
}
