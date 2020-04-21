import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Navbar from '../../Navbar/Navbar'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormLabel from '@material-ui/core/FormLabel'
import Button from '@material-ui/core/Button'
import Data from './Data.json'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        margin: '10px'
    },
    img: {
        width: '400px',
        height: '400px',
        marginLeft: '140px',
        marginTop: '40px'
    }
    }))
    export default function MateriUmum () {
    const classes = useStyles()
    const [value, setValue] = React.useState('')
    const [error, setError] = React.useState(false)
    const [helperText, setHelperText] = React.useState('Pilih jawaban anda')
    const [nilai, setNilai] = React.useState(0)
    const [time, setTime] = React.useState(null)
    const [time2, setTime2] = React.useState(25)
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        skor(value === '1' ? 1 : nilai + 1)
    }, [value])

    React.useEffect(() => {
        var timeleft = time2
        var downloadTimer = setInterval(function () {
        if (timeleft <= 0) {
            clearInterval(downloadTimer)
            setTime('Waktu habis')
            setHelperText('waktu anda telah habis!')
            setError(true)
            setTime2(25)
            setTimeout(() => {
                setCount(count + 1) 
                }, 2000);
        } else {
            setTime('00:' + timeleft)
        }
        timeleft -= 1
        }, 1000)
    }, [])

    const skor = () => {
        if (value === '1') {
        setNilai(nilai + 1)
        }
    }
    const handleRadioChange = event => {
        setValue(event.target.value)
        setHelperText(' ')
        setError(false)
    
    }
    const handleSubmit = event => {
        event.preventDefault()
        if (value === '1') {
        setHelperText('Jawaban kamu benar')
        setError(false)
        setValue(null)
        setTime2(25)
        setTimeout(() => {
        setCount(count + 1) 
        }, 2000);
        setTimeout(() => {
            setHelperText('')   
        },1000);
        
        //  skor()
        console.log('nilaiii', nilai)
        } else if (value === '0' || '2' || '3') {
        setHelperText('Jawaban anda salah !')
        setError(true)
        setValue(null)
        setTime2(25)
        setTimeout(() => {
            setCount(count + 1) 
            }, 2000);
        setTimeout(() => {
            setHelperText('')  
        },1000);
        } else {
        setHelperText('Silakan pilih jawaban anda')
        setError(true)
        setTimeout(() => {
            setHelperText('')  
            
        },1000);
        }
        
    }

    return (
        <>
        <Navbar />
        <div className={classes.root}>
            <Grid container>
            <Grid style={{ marginTop: '80px' }} item xs={12}>
                <p
                style={{
                    textAlign: 'right',
                    margin: '10px',
                    color: '#6a6a6d',
                    fontWeight: 'bold'
                }}
                id='countdown'
                >
                {' '}
                {time}
                </p>
            </Grid>
            <Grid item sm={6} xs={12}>
                <Paper style={{ textAlign: 'left' }} className={classes.paper}>
                <form style={{ margin: '20px' }} onSubmit={handleSubmit}>
                    {count === 10 ? (
                    <p>Selesai</p>
                    ) : (
                    <>
                        {' '}
                        {Data[`Soal${count}`].map((res, index) => (
                        <>
                            <FormControl
                            component='fieldset'
                            error={error}
                            className={classes.formControl}
                            >
                            <FormLabel
                                key={res.id}
                                style={{ color: '#6a6a6d' }}
                                component='legend'
                            >
                                {res.soal}
                            </FormLabel>
                            <RadioGroup
                                style={{ marginTop: '30px' }}
                                aria-label='quiz'
                                name='quiz'
                                value={value}
                                onChange={handleRadioChange}
                            >
                                <FormControlLabel
                                value={res.jawab[0].value}
                                control={<Radio color='primary' />}
                                label={res.jawab[0].jawab}
                                />
                                <FormControlLabel
                                value={res.jawab[1].value}
                                control={<Radio color='primary' />}
                                label={res.jawab[1].jawab}
                                />
                                <FormControlLabel
                                value={res.jawab[2].value}
                                control={<Radio color='primary' />}
                                label={res.jawab[2].jawab}
                                />
                                <FormControlLabel
                                value={res.jawab[3].value}
                                control={<Radio color='primary' />}
                                label={res.jawab[3].jawab}
                                />
                            </RadioGroup>
                            <FormHelperText>{helperText}</FormHelperText>
                            <Button
                                type='submit'
                                variant='outlined'
                                color='primary'
                                className={classes.button}
                            >
                                Lanjutkan
                            </Button>
                            </FormControl>
                        </>
                        ))}
                    </>
                )}
                </form>
                </Paper>
            </Grid>
            <Grid item sm={6} xs={12}>
                <img
                className={classes.img}
                src={require('../../../Assets/book.png')}
                alt=''
                />
            </Grid>
            </Grid>
        </div>
        </>
    )
}
