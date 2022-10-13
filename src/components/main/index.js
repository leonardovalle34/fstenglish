import React from "react";
import "./styles.css"
import {CardImg,Card,CardBody,CardTitle,CardText} from "reactstrap"
import img1 from "../../imgs/sofaconfort300.png"
import img2 from "../../imgs/imgindex300.png"
import Header from "../header";
import Depoimentos from "./depoimentos";

const Main = ()=>{
    const styles1 = {
        backgroundColor : "#031626",
        color : "#FFF",
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '30px',
        fontSize: "2rem",
        borderRadius : 0, 
    }

    const styles2={
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'flex-end',
        padding: '83px',
        fontSize: "2rem"
    }
    const stylesFather={
        display: 'flex',
        flexDirection: 'row',
        maxWidth: '890px',
        alignItems: 'center'
    }
    return (
        <>
            <Header/>
            <Card className="my" style={styles1}>
                <div className="father" style={stylesFather}> 
                    <CardImg
                    alt="no conforto de casa"
                    src={img1}
                    style={{
                        height: 300,
                        width : 300,
                    }}
                    top
                    
                    />
                    <CardBody className="titfather">
                        <CardTitle tag="h5" className="tit">
                            <strong>Estude inglês no conforto da sua casa!</strong>
                        </CardTitle>
                        <CardText className="titfather">
                            <small className="text-muted">
                            <strong>100% real, 100% funcional!</strong>
                            </small>
                        </CardText>
                    </CardBody>
                </div>
            </Card>
            <Card className="my-2 div2" style={styles2}>
                <CardBody className="titfather">
                <CardText>
                    <small className="text-muted">
                    <ul>
                        <li><strong>Aulas totalmente Online e Pesonalizadas</strong></li>
                        <li><strong>Aulas ao vivo</strong></li>
                        <li><strong>Professores nativos</strong></li>
                        <li><strong>Marque suas aulas de acordo com a sua disponibilidade!</strong></li>
                        <li><strong>Aplicativos próprios para facilitar seu aprendizado!</strong></li>
                        <li><strong>Material incluso</strong></li>
                        <li><strong>Aulas onde você estiver!</strong></li>
                    </ul>
                    </small>
                    <p className="solicite">Solicite uma aula experimental e veja você mesmo</p>
                </CardText>
                </CardBody>
                <CardImg
                    alt="aula ao vivo"
                    src={img2}
                    style={{
                        height: 300,
                        width : 300
                    }}
                    right
                
                />
            </Card>
        </>
    )
}

export default Main 