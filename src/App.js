import './App.css';
import './index.css';
import React from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { Col, Container, Row, Image, Button } from 'react-bootstrap';
import Layer6 from './assets/images/Layer_6.png'
import Layer13 from './assets/images/Layer 13.png'
import Layer13copy from './assets/images/Layer 13 copy.png'
import Layer4 from './assets/images/Layer_4.png'
import Layer5 from './assets/images/Layer_5.png'
import Layer3 from './assets/images/Logo_Shark_Society.png'
import VectorSmartObject from './assets/images/Vector Smart Object.png'
import VectorSmartObject_0 from './assets/images/Vector Smart Object-1.png'
import WhatsAppImage2021091_6 from './assets/images/WhatsAppImage2021091_6.png'
import WhatsAppImage2021091_7 from './assets/images/WhatsAppImage2021091_7.png'
import WhatsAppImage2021091_8 from './assets/images/WhatsAppImage2021091_8.png'
import WhatsAppImage2021091_9 from './assets/images/WhatsAppImage2021091_9.png'
import VectorSmartObject_2 from './assets/images/VectorSmartObject_2.png'
import LogoSharkSociety from './assets/images/LogoSharkSociety.png'
import VectorSmartObject_3 from './assets/images/VectorSmartObject_3.png'
import VectorSmartObjectcop from './assets/images/VectorSmartObjectcop.png'
import VectorSmartObjectcop_0 from './assets/images/VectorSmartObjectcop_0.png'
import VectorSmartObjectcop_1 from './assets/images/VectorSmartObjectcop_1.png'
import VectorSmartObjectcop_2 from './assets/images/VectorSmartObjectcop_2.png'
import VectorSmartObjectcop_3 from './assets/images/VectorSmartObjectcop_3.png'
import VectorSmartObjectcop_4 from './assets/images/VectorSmartObjectcop_4.png'
import VectorSmartObjectcop_5 from './assets/images/VectorSmartObjectcop_5.png'
import VectorSmartObjectcop_6 from './assets/images/VectorSmartObjectcop_6.png'
import VectorSmartObjectcop_7 from './assets/images/VectorSmartObjectcop_7.png'
import VectorSmartObjectcop_8 from './assets/images/VectorSmartObjectcop_8.png'
import VectorSmartObjectcop_9 from './assets/images/VectorSmartObjectcop_9.png'
import VectorSmartObjectcop_10 from './assets/images/VectorSmartObjectcop_10.png'
import VectorSmartObjectcop_11 from './assets/images/VectorSmartObjectcop_11.png'
import VectorSmartObjectcop_12 from './assets/images/VectorSmartObjectcop_12.png'
import VectorSmartObjectcop_13 from './assets/images/VectorSmartObjectcop_13.png'
import Layer12 from './assets/images/Layer12.png'
import layer_10 from './assets/images/layer_10.png'
import layer_30 from './assets/images/layer_30.png'
import layer_50 from './assets/images/layer_50.png'
import layer_80 from './assets/images/layer_80.png'
import VectorSmartObjectcop_14 from './assets/images/VectorSmartObjectcop_14.png'
import VectorSmartObjectcop_15 from './assets/images/VectorSmartObjectcop_15.png'
import VectorSmartObjectcop_16 from './assets/images/VectorSmartObjectcop_16.png'
import VectorSmartObjectcop_17 from './assets/images/VectorSmartObjectcop_17.png'
import VectorSmartObjectcop_18 from './assets/images/VectorSmartObjectcop_18.png'
import RoundedRectangle3 from './assets/images/RoundedRectangle3.png'
import VectorSmartObjectcop_19 from './assets/images/VectorSmartObjectcop_19.png'
import VectorSmartObjectcop_20 from './assets/images/VectorSmartObjectcop_20.png'
import VectorSmartObjectcop_21 from './assets/images/VectorSmartObjectcop_21.png'
import VectorSmartObjectcop_22 from './assets/images/VectorSmartObjectcop_22.png'
import WhatsAppImage2021091_12 from './assets/images/WhatsAppImage2021091_12.png'
import Layer17 from './assets/images/Layer17.png'
import VectorSmartObject_5 from './assets/images/VectorSmartObject_5.png'
import Layer15 from './assets/images/Layer15.png'
import Layer15copy from './assets/images/Layer15copy.png'
import VectorSmartObject_6 from './assets/images/VectorSmartObject_6.png'
import VectorSmartObject_7 from './assets/images/VectorSmartObject_7.png'
import VectorSmartObject_8 from './assets/images/VectorSmartObject_8.png'
import VectorSmartObject_9 from './assets/images/VectorSmartObject_9.png'
import VectorSmartObjectcop_23 from './assets/images/VectorSmartObjectcop_23.png'
import Layer11copy from './assets/images/Layer11copy.png'
import WhatsAppImage2021091_14 from './assets/images/WhatsAppImage2021091_14.png'
import WhatsAppImage2021091_15 from './assets/images/WhatsAppImage2021091_15.png'
import WhatsAppImage2021091_16 from './assets/images/WhatsAppImage2021091_16.png'
import VectorSmartObjectcop_24 from './assets/images/VectorSmartObjectcop_24.png'
import VectorSmartObjectcop_25 from './assets/images/VectorSmartObjectcop_25.png'
import VectorSmartObjectcop_26 from './assets/images/VectorSmartObjectcop_26.png'
import VectorSmartObjectcop_27 from './assets/images/VectorSmartObjectcop_27.png'
import VectorSmartObjectcop_28 from './assets/images/VectorSmartObjectcop_28.png'
import VectorSmartObjectcop_29 from './assets/images/VectorSmartObjectcop_29.png'
import VectorSmartObjectcop_30 from './assets/images/VectorSmartObjectcop_30.png'
import VectorSmartObjectcop_31 from './assets/images/VectorSmartObjectcop_31.png'
import VectorSmartObjectcop_32 from './assets/images/VectorSmartObjectcop_32.png'
import VectorSmartObjectcop_33 from './assets/images/VectorSmartObjectcop_33.png'
import VectorSmartObjectcop_34 from './assets/images/VectorSmartObjectcop_34.png'
import VectorSmartObject_10 from './assets/images/VectorSmartObject_10.png'
import VectorSmartObject_11 from './assets/images/VectorSmartObject_11.png'
import ScreenShot20210919at from './assets/images/ScreenShot20210919at.png'
import Layer16 from './assets/images/Layer16.png'
import SHARKLAB2021 from './assets/images/SHARKLAB2021.png'
import mainVideo from './assets/videos/main.mp4'

const getItems = () =>{
  return [{title:"Population2101", image: WhatsAppImage2021091_15}, 
  {title:"Normal Species", image: WhatsAppImage2021091_16}, 
  {title:"Commond Species", image: WhatsAppImage2021091_14},
  {title:"Rare SPecies", image: WhatsAppImage2021091_12},
  {title:"Population2101", image: WhatsAppImage2021091_15}, 
  {title:"Normal Species", image: WhatsAppImage2021091_16}, 
  {title:"Commond Species", image: WhatsAppImage2021091_14},
  {title:"Rare SPecies", image: WhatsAppImage2021091_12}]
}

const getTeams = () =>{
  return [{title:"borg : Lead Marketing Team @borgchain", image: WhatsAppImage2021091_15}, 
  {title:"ayu : Marketer  @jiims", image: WhatsAppImage2021091_16}, 
  {title:"kerol : graphic designer", image: WhatsAppImage2021091_14},
  {title:"rky : art director ", image: WhatsAppImage2021091_12},
  {title:"anath : advisor ", image: WhatsAppImage2021091_15}, 
  {title:"fx_astrid : dev ", image: WhatsAppImage2021091_16}]
}


function Card({
  onClick,
  selected,
  title,
  itemId,
  image
}) {
  const visibility = React.useContext(VisibilityContext)

  return (
    <div
      onClick={() => onClick(visibility)}
      tabIndex={0}
    >
      {!!selected ? <div className="scrol-card">

        <div className="scrol-selected"><Image src={RoundedRectangle3} /></div>
        <div className="scrol-image-selected"><Image src={image} /></div>
      </div> :
        <div className="scrol-card">
          <div className="scrol"><Image src={Layer12} /></div>
          <div className="scrol-image"><Image src={image} /></div>
        </div>
      }
      {/* <div className="scrol-title">{title}</div> */}
    </div>
  );
}


function TeamCard({
  onClick,
  selected,
  title,
  itemId,
  image
}) {
  const visibility = React.useContext(VisibilityContext)

  return (
    <div
      onClick={() => onClick(visibility)}
      tabIndex={0}
    >
        <div className="scrol-card" style={{height:"364px"}}>
        <Image src={image} />
        </div>
      <div className="scrol-title">{title}</div>
    </div>
  );
}


function App() {
  const [items, setItems] = React.useState(getItems);
  const [teams, setTeams] = React.useState(getTeams);
  const [selected, setSelected] = React.useState([]);
  const [position, setPosition] = React.useState(0);


  const isItemSelected = (id) => !!selected.find((el) => el === id);

  const handleClick = (id) => ({ getItemById, scrollToItem }) => {
    const itemSelected = isItemSelected(id)

    setSelected((currentSelected) =>
      itemSelected
        ? currentSelected.filter((el) => el !== id)
        : currentSelected.concat(id)
    );
  }
  return (
    <Container fluid>
      <div className="background">
        <Row className="Layer6"><Image src={Layer6} /></Row>
        <Row className="Layer13"><Image src={Layer13} /></Row>
        <Row className="Layer13copy"><Image src={Layer13copy} /></Row>
        <Row className="Layer4"><Image src={Layer4} /></Row>
        <Row className="Layer5"><Image src={Layer5} /></Row>
        <Row className="Layer3"><Image src={Layer3} width="200px" style={{ with: "200px", borderRadius: "50%" }} /></Row>
        <Row className="connect-metamask"><Button className="connect"variant="primary">Connect Metamask</Button></Row>
        <Row className="minting-button"><Button className="connect-minting"variant="primary">Minting</Button></Row>
        <Row className="VectorSmartObject"><Image src={VectorSmartObject} /></Row>
        <Row className="VectorSmartObject_0"><Image src={VectorSmartObject_0} /></Row>
        <Row className="WhatsAppImage2021091_6"><Image src={WhatsAppImage2021091_6} /></Row>
        <Row className="WhatsAppImage2021091_7"><Image src={WhatsAppImage2021091_7} /></Row>
        <Row className="WhatsAppImage2021091_8"><Image src={WhatsAppImage2021091_8} /></Row>
        <Row className="WhatsAppImage2021091_9"><Image src={WhatsAppImage2021091_9} /></Row>
        <Row className="VectorSmartObject_2"><Image src={VectorSmartObject_2} /></Row>
        <Row className="LogoSharkSociety"><Image src={LogoSharkSociety} /></Row>
        <Row className="VectorSmartObject_3"><Image src={VectorSmartObject_3} /></Row>
        <Row className="VectorSmartObjectcop"><Image src={VectorSmartObjectcop} /></Row>
        <Row className="VectorSmartObjectcop_0"><Image src={VectorSmartObjectcop_0} /></Row>
        <Row className="VectorSmartObjectcop_1"><Image src={VectorSmartObjectcop_1} /></Row>
        <Row className="VectorSmartObjectcop_2"><Image src={VectorSmartObjectcop_2} /></Row>
        <Row className="VectorSmartObjectcop_3"><Image src={VectorSmartObjectcop_3} /></Row>
        <Row className="VectorSmartObjectcop_4"><Image src={VectorSmartObjectcop_4} /></Row>
        <Row className="VectorSmartObjectcop_5"><Image src={VectorSmartObjectcop_5} /></Row>
        <Row className="VectorSmartObjectcop_6"><Image src={VectorSmartObjectcop_6} /></Row>
        <Row className="VectorSmartObjectcop_7"><Image src={VectorSmartObjectcop_7} /></Row>
        <Row className="VectorSmartObjectcop_8"><Image src={VectorSmartObjectcop_8} /></Row>
        <Row className="VectorSmartObjectcop_9"><Image src={VectorSmartObjectcop_9} /></Row>
        <Row className="VectorSmartObjectcop_10"><Image src={VectorSmartObjectcop_10} /></Row>
        <Row className="VectorSmartObjectcop_11"><Image src={VectorSmartObjectcop_11} /></Row>
        <Row className="VectorSmartObjectcop_12"><Image src={VectorSmartObjectcop_12} /></Row>
        <Row className="VectorSmartObjectcop_13"><Image src={VectorSmartObjectcop_13} /></Row>
        <Row className="Layer12">
          <ScrollMenu>
            {items.map(( item, id) => (
              <Card
                itemId={id} // NOTE: itemId is required for track items
                title={item.title}
                image={item.image}
                key={id}
                onClick={handleClick(id)}
                selected={isItemSelected(id)}
              />)
            )}

          </ScrollMenu>
        </Row>
        {/* <Row className="Layer12"><Image src={Layer12} /></Row>
        <Row className="Layer12copy"><Image src={Layer12copy} /></Row>
        <Row className="Layer12copy2"><Image src={Layer12copy2} /></Row>
        <Row className="Layer12copy3"><Image src={Layer12copy3} /></Row> */}
        {/* <Row className="Population2101"><Image src={Population2101} /></Row> */}
        <Row className="layer_10"><Image src={layer_10} style={{ filter: 'invert(1)' }} /></Row>
        <Row className="layer_30"><Image src={layer_30} style={{ filter: 'invert(1)' }} /></Row>
        <Row className="layer_50"><Image src={layer_50} style={{ filter: 'invert(1)' }} /></Row>
        <Row className="layer_80"><Image src={layer_80} /></Row>
        {/* <Row className="NormalSpecies"><Image src={NormalSpecies} /></Row>
        <Row className="CommondSpecies"><Image src={CommondSpecies} /></Row>
        <Row className="RareSpiecies"><Image src={RareSpiecies} /></Row> */}
        <Row className="VectorSmartObjectcop_14"><Image src={VectorSmartObjectcop_14} /></Row>
        <Row className="VectorSmartObjectcop_15"><Image src={VectorSmartObjectcop_15} /></Row>
        <Row className="VectorSmartObjectcop_16"><Image src={VectorSmartObjectcop_16} /></Row>
        <Row className="VectorSmartObjectcop_17"><Image src={VectorSmartObjectcop_17} /></Row>
        <Row className="VectorSmartObjectcop_18"><Image src={VectorSmartObjectcop_18} /></Row>

        <Row className="VectorSmartObjectcop_19"><Image src={VectorSmartObjectcop_19} /></Row>
        <Row className="VectorSmartObjectcop_20"><Image src={VectorSmartObjectcop_20} /></Row>
        <Row className="VectorSmartObjectcop_21"><Image src={VectorSmartObjectcop_21} /></Row>
        <Row className="VectorSmartObjectcop_22"><Image src={VectorSmartObjectcop_22} /></Row>
        {/* <Row className="WhatsAppImage2021091_11"><Image src={WhatsAppImage2021091_11} /></Row> */}
        {/* <Row className="WhatsAppImage2021091_12"><Image src={WhatsAppImage2021091_12} /></Row> */}
        <Row className="WhatsAppImage2021091_13">
        <video autoPlay loop muted playsInline className="video-container">
                                        <source src={mainVideo}
                                                type='video/mp4'/>
                                    </video></Row>
        <Row className="WhoAreWeSharkSociety">
          <div style={{ alignSelf: 'center' }}>Who Are We?</div>
          <div className="whatweare">Shark society is an unique one of a kind Non_Fungible Token (NFT) on Ethereum Blockchain.
            By mining the shark society, you become a shark owner of one of the only 5000 sharksthat can ever be minted</div></Row>
        <Row className="SharkSocietyisanuniq"><div className="whatweare">Shark society is an unique one of a kind Non_Fungible Token (NFT) on Ethereum Blockchain.
          By mining the shark society, you become a shark owner of one of the only 5000 sharksthat can ever be minted</div></Row>
        <Row className="StartYourCollection">Start Your Collection</Row>
        <Row className="AboutUsFNQRoadMap">
          <div style={{ color: '#015c74', marginRight: '35px' }}>About Us</div>
          <div><Image src={Layer17} /></div>
          <div style={{ color: '#015c74', marginRight: '35px', marginLeft: '35px' }}>FAQ</div>
          <div><Image src={Layer17} /></div>
          <div style={{ color: '#015c74', marginLeft: '35px' }}>Road Map</div>

        </Row>
        <Row className="TheInitialRoadMap">Road Map</Row>
        <Row className="VectorSmartObject_5"><Image src={VectorSmartObject_5} /></Row>
        <Row className="GETREADYTOBEEATEN_0">" GET READY TO BE EATEN!</Row>
        <Row className="FAQHowmuchdoeseachSh">
          <div className="FAQ">FAQ</div>

          <div className="question">How much does each SharkSociety cost?</div>
          <div className="answer">Each SharkSociety will be minted at0.04 ETH!</div>
          <div className="answer">If you buy bulk (more than 8 NFT per mint) you can get it at 0.03 ETH</div>
          <Image src={Layer11copy} />


          <div className="question">How much does each SharkSociety cost?</div>
          <div className="answer">Each SharkSociety will be minted at0.04 ETH!</div>
          <div className="answer">If you buy bulk (more than 8 NFT per mint) you can get it at 0.03 ETH</div>
          <Image src={Layer11copy} />



          <div className="question">How much does each SharkSociety cost?</div>
          <div className="answer">Each SharkSociety will be minted at0.04 ETH!</div>
          <div className="answer">If you buy bulk (more than 8 NFT per mint) you can get it at 0.03 ETH</div>
          <Image src={Layer11copy} />



          <div className="question">How much does each SharkSociety cost?</div>
          <div className="answer">Each SharkSociety will be minted at0.04 ETH!</div>
          <div className="answer">If you buy bulk (more than 8 NFT per mint) you can get it at 0.03 ETH</div>
          <Image src={Layer11copy} />



          <div className="question">How much does each SharkSociety cost?</div>
          <div className="answer">Each SharkSociety will be minted at0.04 ETH!</div>
          <div className="answer">If you buy bulk (more than 8 NFT per mint) you can get it at 0.03 ETH</div>
          <Image src={Layer11copy} />



          <div className="question">How much does each SharkSociety cost?</div>
          <div className="answer">Each SharkSociety will be minted at0.04 ETH!</div>
          <div className="answer">If you buy bulk (more than 8 NFT per mint) you can get it at 0.03 ETH</div>
          <Image src={Layer11copy} />
        </Row>
        <Row className="TheSharkTeam">Shark Team</Row>
        <Row className="SmartContract">Smart Contract</Row>
        <Row className="Layer15"><Image src={Layer15} /></Row>
        <Row className="Layer15copy"><Image src={Layer15copy} /></Row>
        <Row className="VectorSmartObject_6"><Image src={VectorSmartObject_6} style={{ filter: 'invert(1)' }} /></Row>
        <Row className="VectorSmartObject_7"><Image src={VectorSmartObject_7} style={{ filter: 'invert(1)' }} /></Row>
        <Row className="VectorSmartObject_8"><Image src={VectorSmartObject_8} /></Row>
        <Row className="VectorSmartObject_9"><Image src={VectorSmartObject_9} /></Row>
        <Row className="VectorSmartObjectcop_23"><Image src={VectorSmartObjectcop_23} style={{ filter: 'invert(1)' }} /></Row>
        {/* <Row className="WhatsAppImage2021091_14"><Image src={WhatsAppImage2021091_14} /></Row>
        <Row className="WhatsAppImage2021091_15"><Image src={WhatsAppImage2021091_15} /></Row>
        <Row className="WhatsAppImage2021091_16"><Image src={WhatsAppImage2021091_16} /></Row> */}
        {/* <Row className="WhatsAppImage2021091_17"><Image src={WhatsAppImage2021091_17} /></Row>
        <Row className="WhatsAppImage2021091_18"><Image src={WhatsAppImage2021091_18} /></Row> */}
        <Row className="WhatsAppImage2021091_19">
        <ScrollMenu>
            {teams.map(( item, id) => (
              <TeamCard
                itemId={id} // NOTE: itemId is required for track items
                title={item.title}
                image={item.image}
                key={id}
                onClick={handleClick(id)}
                selected={isItemSelected(id)}
              />)
            )}

          </ScrollMenu>
        </Row>
        {/* <Row className="WhatsAppImage2021091_20"><Image src={WhatsAppImage2021091_20} /></Row> */}
        <Row className="VectorSmartObjectcop_24"><Image src={VectorSmartObjectcop_24} /></Row>
        <Row className="VectorSmartObjectcop_25"><Image src={VectorSmartObjectcop_25} /></Row>
        <Row className="VectorSmartObjectcop_26"><Image src={VectorSmartObjectcop_26} /></Row>
        <Row className="VectorSmartObjectcop_27"><Image src={VectorSmartObjectcop_27} /></Row>
        <Row className="VectorSmartObjectcop_28"><Image src={VectorSmartObjectcop_28} /></Row>
        <Row className="VectorSmartObjectcop_29"><Image src={VectorSmartObjectcop_29} /></Row>
        <Row className="VectorSmartObjectcop_30"><Image src={VectorSmartObjectcop_30} /></Row>
        <Row className="VectorSmartObjectcop_31"><Image src={VectorSmartObjectcop_31} /></Row>
        <Row className="VectorSmartObjectcop_32"><Image src={VectorSmartObjectcop_32} /></Row>
        <Row className="VectorSmartObjectcop_33"><Image src={VectorSmartObjectcop_33} /></Row>
        <Row className="VectorSmartObjectcop_34"><Image src={VectorSmartObjectcop_34} /></Row>
        <Row className="VectorSmartObject_10"><Image src={VectorSmartObject_10} /></Row>
        <Row className="VectorSmartObject_11"><Image src={VectorSmartObject_11} /></Row>
        <Row className="ScreenShot20210919at" ><Image src={ScreenShot20210919at}/></Row>
        <a className="MI" href="www.google.com" target="_blank"></a>
        <a className="twitter" href="www.twitter.com" target="_blank"></a>
        <a className="MI2" href="www.google.com" target="_blank"></a>
        <Row className="Layer16"><Image src={Layer16} /></Row>
        <Row className="SHARKLAB2021"><Image src={SHARKLAB2021} /></Row>

      </div>
    </Container>
  );
}

export default App;
