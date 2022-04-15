import { Button, ButtonGroup, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid } from "@material-ui/core"
import { separateOperations } from "graphql"
import { useState } from "react"



function Header(){
    return(
        <header>
            <h1>welcome</h1>
        </header>
    )
}
function Nav(){
    return (
        <nav>
            <ol>
                <li>html</li>
                <li>css</li>
            </ol>
        </nav>
    )
}
function Article(){
    const[open,setopen]=useState(false)
    const onClickopen = ()=>{
        setopen(false)
    }
    return(
        <article>
            <h2>Welcome</h2>
            
            hello web!
            hello web!hello web!
            hello web!
            hello web!
            hello web!
            hello web!
            <ButtonGroup variant="contained">
            <Button variant="contained" onClick={open}>안녕</Button>
            <Button variant="contained">안녕2</Button>
            </ButtonGroup> 
            <Button variant="contained">안녕3333</Button><br>
            </br>
            <Dialog open={open} >
                <DialogTitle>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        여기는 내용이야
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button variant="contained" onClick={onClickopen}>안녕</Button>
                </DialogActions>
            </Dialog>
        </article>
    )
}

export default function App(){
    return (
        <div>
            <Container fixed>
 
                <Header></Header>
                <Grid container>
                    <Grid item xs={4}>
                        <Nav></Nav>
                    </Grid>
                    <Grid item xs={8}>

                        <Article></Article>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}