import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "../src/styles.css";
import {
  Form,
  Button,
  Row,
  Card,
  Nav,
  ListGroup,
  Col,
  Container,
} from "react-bootstrap";

import logo from "../src/assets/imgs/logo.png";
import CarouselTop from "./components/CarouselTop";
import Header2 from "./components/Header2";
import CursoContainerHeader from "./components/CursoContainerHeader";
import Swiper from "./components/Swiper";
import CarouselItemComp from "./components/CarouselItemComp";

import imgodontologia from "../src/assets/imgs/odontologia.jpg";
import imgemfermagem from "../src/assets/imgs/emfermagem.jpg";
import imgempedagogia from "../src/assets/imgs/pedagogia.jpg";
import imgempsicologia from "../src/assets/imgs/psicologia.jpg";
import imgemdireito from "../src/assets/imgs/direito.jpg";
import imagemadministracao from "../src/assets/imgs/administracao.jpg";
import imagemsi from "../src/assets/imgs/si.jpg";
import imagemcontabeis from "../src/assets/imgs/contabeis.jpg";
import imagemengenhariacivil from "../src/assets/imgs/engenhariacivil.jpg";
import imagemengenhariaproducao from "../src/assets/imgs/engenhariaproducao.jpg";

import CardCurso from "./components/CardCurso";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const cursosBiologicas = [
    {
      nome: "Emfermagem",
      img: imgemfermagem,
      mec: 2,
      tipo: "Bacharelado",
      periodo: "Noturno",
      duracao: "60 meses",
      descricao:
        "A Enfermagem é uma profissão voltada para os cuidados de saúde focada no indivíduo, famílias e comunidades para que possam promover manter ou recuperar a saúde e a qualidade de vidas ideais. Enfermeiros, Técnicos de Enfermagem e Auxiliar de Enfermagem, podem ser diferenciados de outros prestadores de cuidados de saúde pela sua abordagem ao atendimento ao paciente, treinamento e escopo da prática.",
    },
    {
      nome: "Odontologia",
      img: imgodontologia,
      mec: 4,
      tipo: "Bacharelado",
      periodo: "Noturno",
      duracao: "60 meses",
      descricao:
        "A Odontologia é a ciência que se dedica ao estudo e ao tratamento dos dentes, dos ossos da face, da gengiva, da língua, da mordida e da articulação da mandíbula com o crânio. Também busca criar e melhorar procedimentos que aumentem a autoestima dos pacientes.O profissional estará apto e consciente para manter educação continuada durante todo tempo de sua atuação profissional, atualizando-se mediante novas tecnologias e conhecimentos produzidos a fim de inseri-los na sua prática cotidiana laboral.",
    },

    {
      nome: "Psicologia",
      img: imgempsicologia,
      mec: 4,
      tipo: "Bacharelado",
      periodo: "Noturno",
      duracao: "60 meses",
      descricao: "",
    },
  ];
  const cursosHumanas = [
    {
      nome: "Direito",
      img: imgemdireito,
      mec: 3,
      tipo: "Bacharelado",
      periodo: "Noturno",
      duracao: "60 meses",
      descricao: "",
    },
    {
      nome: "Administração",
      img: imagemadministracao,
      mec: 3,
      tipo: "Bacharelado",
      periodo: "Noturno",
      duracao: "60 meses",
      descricao: "",
    },
    {
      nome: "Pedagogia",
      img: imgempedagogia,
      mec: 4,
      tipo: "Licenciatura",
      periodo: "Noturno",
      duracao: "48 meses",
      descricao: "",
    },
  ];
  const cursosExatas = [
    {
      nome: "Sistemas de Informação",
      img: imagemsi,
      mec: 4,
      tipo: "Bacharelado",
      periodo: "Noturno",
      duracao: "48 meses",
      descricao: "",
    },
    {
      nome: "Engenharia de Produção",
      img: imagemengenhariaproducao,
      mec: 4,
      tipo: "Bacharelado",
      periodo: "Noturno",
      duracao: "60 meses",
      descricao: "",
    },
    {
      nome: "Engenharia Civil",
      img: imagemengenhariacivil,
      mec: 4,
      tipo: "Bacharelado",
      periodo: "Noturno",
      duracao: "60 meses",
      descricao: "",
    },
    {
      nome: "Ciências Contábeis",
      img: imagemcontabeis,
      mec: 4,
      tipo: "Bacharelado",
      periodo: "Noturno",
      duracao: "48 meses",
      descricao: "",
    },
  ];
  const areas = [
    ["Humanas", cursosHumanas],
    ["Biológicas", cursosBiologicas],
    ["Exatas", cursosExatas],
  ];

  return (
    <div className="App">
      <div style={{ height: "0px" }}>
        <Header></Header>
      </div>
      <CarouselTop />
      <Header2 />
      {areas.map((area) => {
        return (
          <div>
            <div className="carouselheader" id={area[0]}>
              {area[0]}
            </div>
            <Row className="rowcursos">
              {area[1].map((curso) => {
                console.log(curso);
                return (
                  <Col align="center">
                    <CardCurso curso={curso}></CardCurso>
                  </Col>
                );
              })}
            </Row>
          </div>
        );
      })}

      <div className="footer">
        <Row>
          <Col md={2}><div className="pt-5"><img src={logo} className="logo"></img></div></Col>
          <Col md={10}>
            <p className="pt-5">0800 283 2400 </p>
            <p>
              Av. Wenceslau Bráz, 1.018 - Lagoinha São Sebastião do Paraíso/MG -
              CEP: 37.950-000
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
