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
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import {database} from "../../../Config/Firebase"
import CircularProgress from '@material-ui/core/CircularProgress';
import {Redirect} from "react-router-dom"

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
    },
    text1: {
        fontWeight: 'bold',
        fontSize: '20px'
    },
    [theme.breakpoints.down('xs')]: {
        img: {
        display:"none"
        },
        paper:{
            boxShadow:"none"
        }
    }
    }))
    export default function SirahNabawi () {
    const classes = useStyles()
    const [value, setValue] = React.useState('')
    const [error, setError] = React.useState(false)
    const [helperText, setHelperText] = React.useState('Pilih jawaban anda')
    const [nilai, setNilai] = React.useState(0)
    const [time, setTime] = React.useState(null)
    const [count, setCount] = React.useState(0)
    const [disable, setDisable] = React.useState(false)
    const [loading1, setLoading1] = React.useState(false)
    const [success, setSuccess] = React.useState(false)
    React.useEffect(() => {
        skor(value === '1' ? 1 : nilai + 1)
    }, [value])
    React.useEffect(() => {
        Time()
    }, [])
    const Time = () => {
        var timeleft = 150
        var downloadTimer = setInterval(function () {
        if (timeleft <= 0) {
            clearInterval(downloadTimer)
            setTime('Waktu habis')
            setHelperText('waktu anda telah habis!')
            setError(true)
            setDisable(true)
            setTimeout(() => {
            setCount(count + 10)
            }, 2000)
        } else {
            setTime(timeleft)
        }
        timeleft -= 1
        }, 1000)
    }
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
        setDisable(true)
        setTimeout(() => {
            setCount(count + 1)
            setDisable(false)
        }, 2000)
        setTimeout(() => {
            setHelperText('')
        }, 1000)
        //  skor()
        console.log('nilaiii', nilai)
        } else if (value === '0' || '2' || '3') {
        setHelperText('Jawaban anda salah !')
        setError(true)
        setValue(null)
        setDisable(true)
        setTimeout(() => {
            setCount(count + 1)
            setDisable(false)
        }, 2000)
        setTimeout(() => {
            setHelperText('')
        }, 1000)
        } else {
        setHelperText('Silakan pilih jawaban anda')
        setError(true)
        setTimeout(() => {
            setHelperText('')
        }, 1000)
        }
    }
    const handleSendDatabase = () =>{
        setLoading1(true)
        const dataNilai = {
            nama : localStorage.getItem("name"),
            nilaiUser : nilai + "0"
        }
        database
        .ref('/nilaiNabawi')
        .push({
            dataNilai
        }).then(res => {
            console.log("data masuk", res)
            setLoading1(false)
            setSuccess(true)
        
        }).catch(err => {
            alert("maaf server bermasalah")
            setLoading1(false)
        })
    }
    if(success === true ){
        return <Redirect to="/listsoal"/>
    }else if(!localStorage.getItem("uid")){
        return <Redirect to="/"/>
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
                <span
                    style={{
                    position: 'absolute',
                    left: '0',
                    color: '#6a6a6d',
                    margin: '10px'
                    }}
                >
                    {count > 9 ? null : 1 + count + ' dari 10 soal'}
                </span>
                {count > 9 ? null : (
                    <>
                    {' '}
                    <AccessTimeIcon /> {time}
                    </>
                )}
                </p>
            </Grid>
            <Grid item sm={6} xs={12}>
                <Paper style={{ textAlign: 'left' }} className={classes.paper}>
                <form style={{ margin: '20px' }} onSubmit={handleSubmit}>
                    {count > 9 ? (
                    <>
                        <p className={classes.text1}>
                        Hai {localStorage.getItem('name')}
                        </p>
                        <p>Nilai anda adalah {nilai + '0'}</p>
                        <Button
                        type='submit'
                        variant='outlined'
                        color='primary'
                        onClick={handleSendDatabase}
                        className={classes.button }
                        >
                        {loading1 === false ? "Selesai" : <CircularProgress variant="determinate" color="primary" />}
                        </Button>
                    </>
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
                                {disable === true ? (
                                <>
                                    {' '}
                                    <FormControlLabel
                                    value={res.jawab[0].value}
                                    control={<Radio color='primary' />}
                                    label={res.jawab[0].jawab}
                                    disabled
                                    />
                                    <FormControlLabel
                                    value={res.jawab[1].value}
                                    control={<Radio color='primary' />}
                                    label={res.jawab[1].jawab}
                                    disabled
                                    />
                                    <FormControlLabel
                                    value={res.jawab[2].value}
                                    control={<Radio color='primary' />}
                                    label={res.jawab[2].jawab}
                                    disabled
                                    />
                                    <FormControlLabel
                                    value={res.jawab[3].value}
                                    control={<Radio color='primary' />}
                                    label={res.jawab[3].jawab}
                                    disabled
                                    />{' '}
                                </>
                                ) : (
                                <>
                                    {' '}
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
                                    />{' '}
                                </>
                                )}
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
