import {
  HashRouter,
  Route,
  Link
} from "react-router-dom";

import React from 'react';

import {Container, Navbar, Nav, Card} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Intro from './Images/intro.jpg';
import London from './Images/london.jpg';
import Ben from './Images/bigben.jpg';
import Shard from './Images/shard.jpg';
import Shinto from './Images/shinto.jpg';
import SkyTree from './Images/skytree.jpg';
import Tokyo from './Images/tokyo.jpg';

import ClipBoard from './Images/clipboard.png';
import CoffeeTableRemote from './Images/coffee_table_with_remote.png';
//import CouchSign from './Images/couch_with_spawnable_sign.png'
import DeskFlash from './Images/desk_with_flash.png';
import Doorway from './Images/doorway.png';
//import KitchenArea from './Images/kitchen_area.png';
import LightSwitch from './Images/light_switch.png';
import Project2Main from './Images/project2_main.png';
import ShelfDogLight from './Images/shelf_with_dog_and_flickeringlight.png';
import FlashLightSpawn from './Images/spawnable_sign.png';
import TablePhone from './Images/table_with_phone.png';
import TVStand from './Images/tv_with_stand.png';

import YoutubeEmbed from "./YoutubeEmbed";

import styled from "styled-components";

const cardWidth ={
        width: '18rem',
        height: '30rem'
    };

const cardImg = {
    width: '18rem',
    height: '18rem',
    objectFit: 'cover'
};

const StyledLink = styled(Link) `
  height: 2rem;
  width: 10rem;
  font-size: 1em;
  color: white;
  padding: .25em 1em;
  border-radius: .3rem;
  display: block;
  background-color: #4287f5;
  text-align: center;
  text-decoration: none;
  margin-top: 1em;

  &:hover{
    background-color: #3676d9;
    color: white;
    cursor: pointer;
  }
`;

function App() {
  return (
    <HashRouter basename='/'>
        <Navbar bg="dark" variant='dark' expand="lg">
          <Container>
            <LinkContainer to='/'>
              <Navbar.Brand>John L.</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className='mr-auto'>
                <LinkContainer to="/">
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/proj1">
                  <Nav.Link>Project 1</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/proj2">
                  <Nav.Link>Project 2</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/proj3">
                  <Nav.Link>Project 3</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/studentchoice">
                    <Nav.Link> Student Choice</Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

          <Route exact path="/" component={Home} />
          <Route exact path="/proj1" component={Proj1} />
          <Route exact path="/proj2" component={Proj2} />
          <Route exact path="/proj3" component={Proj3} />
          <Route exact path="/studentchoice" component={StudentChoice}/>
    </HashRouter>
  );
}

function Home() {
  return (
    <div class='page_space'>
        <div class='home_cont'>
                <Card style={cardWidth}>
                    <Card.Img variant='top' src={Intro} style={cardImg}/>
                    <Card.Body>
                        <Card.Title>Project 1</Card.Title>
                        <Card.Text>
                            An AR program that displays AR knickknacks for Tokyo and London using Vuforia and Unity
                        </Card.Text>
                        <StyledLink to='/proj1'>Go To Project 1</StyledLink>
                    </Card.Body>
                </Card>
                <Card style={cardWidth}>
                    <Card.Img variant='top' src={Project2Main} style={cardImg}/>
                    <Card.Body>
                        <Card.Title>Project 2</Card.Title>
                        <Card.Text>
                            A VR program with various interactable objects that is aimed at combatting a fear of the dark
                        </Card.Text>
                        <StyledLink to='/proj2'>Go To Project 2</StyledLink>
                    </Card.Body>
                </Card>
        </div>
    </div>
  )
}

function Proj1() {
  return (
    <div class='documentation'>
    <body class="c11">
        <p class="c15 title" id="h.d82yflia9c7u">
            <span class="c12">Project 1</span>
        </p>
        <h2 class="c9" id="h.l807xdtk9y8a">
            <span class="c5">Youtube Video</span>
        </h2>
        <YoutubeEmbed embedId="9_oSPcFGjbQ" />
        <h2 class="c9" id="h.l807xdtk9y8a">
            <span class="c5">Introduction</span>
        </h2>
        <p class="c10">
            <div class="body_container">
              <span class="c3 body_content">In order to use the project (as long as you have an android phone), you have to download the apk file from the releases section on the Github repository. You can download this directly from your phone &rsquo;s browser, go to your downloads folder, click on the file and it should begin to install. You will likely need to allow app installs from outside sources as well as allow your browser of choice to install apps. After the install, the app will be ready to run. Click on it and it will likely prompt you if you wanna allow camera permissions, select yes. Now all you have to do is present the two cubes (merge and class cubes linked below) and the two knick-knacks will be overlaid onto them. There are two main things that can be done with these knick-knacks besides just viewing them. You can move them around to view all the different sides and see what the weather is for the location being represented, and you can flip them upside down and then back up and this will spin the eight ball that &#39;s located on one of the sides of its respective cube. You will hear a success sound when the eight ball is successfully spun.</span>
              <div class="body_img_container">
                <img src={Intro} class='body_img' alt="Intro"/>
              </div>
            </div>
            <p class="c4 c14">
                <span class="c3"></span>
            </p>
            <span class='c3'>Download the images for the cube from here: </span>
            <span class='c0'>
                <a class='c2' href='https://drive.google.com/file/d/1t1p5h6GoyuHMjzZVCXqVKomhcH0JRcfz/view?usp=sharing' target='_blank' rel="noopener noreferrer">https://drive.google.com/file/d/1t1p5h6GoyuHMjzZVCXqVKomhcH0JRcfz/view?usp=sharing</a>
            </span>
        </p>
        <h2 class="c9" id="h.9080ky5k2so5">
            <span class="c5">Github Link</span>
        </h2>
        <p class="c10">
            <span class="c0">
                <a class="c2" href="https://github.com/jtlaughton/428Project1" target='_blank' rel="noopener noreferrer">https://github.com/jtlaughton/428Project1</a>
            </span>
        </p>
        <h2 class="c9" id="h.y6c703pq4tsi">
            <span class="c5">Resources Used</span>
        </h2>
        <h4 class="c7" id="h.6u56cvieiqw">
            <span class="c8">Imported And Used</span>
        </h4>
        <ol class="c1 lst-kix_o8d8hxjxkgs0-0 start" start="1">
            <li class="c6 li-bullet-0">
                <span>Cherry Blossom Tree, &quot;Sakura Tree 2 &quot;(</span>
                <span class="c0">
                    <a class="c2" href="https://skfb.ly/6D8zn" target='_blank' rel="noopener noreferrer">https://skfb.ly/6D8zn</a>
                </span>
                <span>) by proxy_doug is licensed under Creative Commons Attribution (</span>
                <span class="c0">
                    <a class="c2" href="http://creativecommons.org/licenses/by/4.0" target='_blank' rel="noopener noreferrer">http://creativecommons.org/licenses/by/4.0/</a>
                </span>
                <span class="c3">).</span>
            </li>
        </ol>
        <p class="c4 c14">
            <span class="c3"></span>
        </p>
        <ol class="c1 lst-kix_o8d8hxjxkgs0-0" start="2">
            <li class="c6 li-bullet-0">
                <span>Goku, &quot;son_goku_and_kintoun_nimbus &quot;(</span>
                <span class="c0">
                    <a class="c2" href="https://skfb.ly/6ZKCT" target='_blank' rel="noopener noreferrer">https://skfb.ly/6ZKCT</a>
                </span>
                <span>) by FnAf_GoD21 is licensed under Creative Commons Attribution (</span>
                <span class="c0">
                    <a class="c2" href="http://creativecommons.org/licenses/by/4.0/" target='_blank' rel="noopener noreferrer">http://creativecommons.org/licenses/by/4.0/</a>
                </span>
                <span class="c3">).</span>
            </li>
        </ol>
        <p class="c4 c14">
            <span class="c3"></span>
        </p>
        <ol class="c1 lst-kix_o8d8hxjxkgs0-0" start="3">
            <li class="c6 li-bullet-0">
                <span>Vending Machine, &quot;Vending Machine &quot;(</span>
                <span class="c0">
                    <a class="c2" href="https://skfb.ly/6DqWF" target='_blank' rel="noopener noreferrer">https://skfb.ly/6DqWF</a>
                </span>
                <span>) by Adrian Crisandy is licensed under Creative Commons Attribution (</span>
                <span class="c0">
                    <a class="c2" href="http://creativecommons.org/licenses/by/4.0/" target='_blank' rel="noopener noreferrer">http://creativecommons.org/licenses/by/4.0/</a>
                </span>
                <span class="c3">
                    ).
                </span>
            </li>
        </ol>
        <p class="c4 c14">
            <span class="c3"></span>
        </p>
        <ol class="c1 lst-kix_o8d8hxjxkgs0-0" start="4">
            <li class="c6 li-bullet-0">
                <span>Background Music Tokyo, &ldquo;Traditional Japanese Music &rdquo;(</span>
                <span class="c0">
                    <a class="c2" href="https://www.youtube.com/watch?v=gdJIE9lzNIQ" target='_blank' rel="noopener noreferrer">https://www.youtube.com/watch?v=gdJIE9lzNIQ</a>
                </span>
                <span class="c3">) by E Taylor</span>
            </li>
        </ol>
        <p class="c4 c14">
            <span class="c3"></span>
        </p>
        <ol class="c1 lst-kix_o8d8hxjxkgs0-0" start="5">
            <li class="c6 li-bullet-0">
                <span>London Bus, &ldquo;London Bus &rdquo;(</span>
                <span class="c0">
                    <a class="c2" href="https://sketchfab.com/3d-models/london-bus-88c9461b93ba43faaac11fdfcf0d50b6" target='_blank' rel="noopener noreferrer">https://sketchfab.com/3d-models/london-bus-88c9461b93ba43faaac11fdfcf0d50b6</a>
                </span>
                <span class="c3">
                    ) by nickknacks
                </span>
            </li>
        </ol>
        <p class="c4 c14">
            <span class="c3"></span>
        </p>
        <ol class="c1 lst-kix_o8d8hxjxkgs0-0" start="6">
            <li class="c6 li-bullet-0">
                <span>Buckingham Palace, &ldquo;Cartoon Low Poly Buckingham Palace &rdquo;(</span>
                <span class="c0">
                    <a class="c2" href="https://sketchfab.com/3d-models/cartoon-low-poly-buckingham-palace-14ca6e8847f440d3a882699a26935351" target='_blank' rel="noopener noreferrer">https://sketchfab.com/3d-models/cartoon-low-poly-buckingham-palace-14ca6e8847f440d3a882699a26935351</a>
                </span>
                <span class="c3">
                    ) by antonmoek
                </span>
            </li>
        </ol>
        <p class="c4 c14">
            <span class="c3"></span>
        </p>
        <ol class="c1 lst-kix_o8d8hxjxkgs0-0" start="7">
            <li class="c6 li-bullet-0">
                <span>Phone Booth, &quot;Simplified london red booth for diorama &quot;(</span>
                <span class="c0">
                    <a class="c2" href="https://skfb.ly/o77vB" target='_blank' rel="noopener noreferrer">https://skfb.ly/o77vB</a>
                </span>
                <span>) by sabinoplane is licensed under CC Attribution-NonCommercial-ShareAlike (</span>
                <span class="c0">
                    <a class="c2" href="http://creativecommons.org/licenses/by-nc-sa/4.0/" target='_blank' rel="noopener noreferrer">http://creativecommons.org/licenses/by-nc-sa/4.0/</a>
                </span>
                <span class="c3">
                    ).
                </span>
            </li>
        </ol>
        <p class="c4 c14">
            <span class="c3"></span>
        </p>
        <ol class="c1 lst-kix_o8d8hxjxkgs0-0" start="8">
            <li class="c6 li-bullet-0">
                <span>Background Music London, &ldquo;String Quintet in E Major, G. 275: III. Minuetto &rdquo;(</span>
                <span class="c0">
                    <a class="c2" href="https://www.youtube.com/watch?v=CQ5epC4wcb8" target='_blank' rel="noopener noreferrer">https://www.youtube.com/watch?v=CQ5epC4wcb8</a>
                </span>
                <span class="c3">) by Gyorgy Eder</span>
            </li>
        </ol>
        <p class="c4 c14">
            <span class="c3"></span>
        </p>
        <ol class="c1 lst-kix_o8d8hxjxkgs0-0" start="9">
            <li class="c6 li-bullet-0">
                <span>London Scene Image, &ldquo; Coat of Arms of The City of London&rdquo; (</span>
                <span class="c0">
                    <a class="c2" href="https://en.wikipedia.org/wiki/Flag_of_the_City_of_London#/media/File:Coat_of_Arms_of_The_City_of_London.svg" target='_blank' rel="noopener noreferrer">https://en.wikipedia.org/wiki/Flag_of_the_City_of_London#/media/File:Coat_of_Arms_of_The_City_of_London.svg</a>
                </span>
                <span class="c3">) by Sodacan</span>
            </li>
        </ol>
        <p class="c4 c14">
            <span class="c3"></span>
        </p>
        <ol class="c1 lst-kix_o8d8hxjxkgs0-0" start="10">
            <li class="c6 li-bullet-0">
                <span>Tokyo Scene Image, &ldquo; Flag of Japan&rdquo; (</span>
                <span class="c0">
                    <a class="c2" href="https://en.wikipedia.org/wiki/Flag_of_Japan#/media/File:Flag_of_Japan.svg" target='_blank' rel="noopener noreferrer">https://en.wikipedia.org/wiki/Flag_of_Japan#/media/File:Flag_of_Japan.svg</a>
                </span>
                <span class="c3">) by Anomie</span>
            </li>
        </ol>
        <h4 class="c7" id="h.9z5iwn5neab5">
            <span class="c8">Imported Not Used</span>
        </h4>
        <ol class="c1 lst-kix_u104vsh7lyvm-0 start" start="1">
            <li class="c6 li-bullet-0">
                <span>Other Vending Machine, &quot;Japan Vending Machine Soft Drink &quot;(</span>
                <span class="c0">
                    <a class="c2" href="https://skfb.ly/6RRxZ" target='_blank' rel="noopener noreferrer">https://skfb.ly/6RRxZ</a>
                </span>
                <span>) by ditovirnantio is licensed under Creative Commons Attribution (</span>
                <span class="c0">
                    <a class="c2" href="http://creativecommons.org/licenses/by/4.0/" target='_blank' rel="noopener noreferrer">http://creativecommons.org/licenses/by/4.0/</a>
                </span>
                <span class="c3">).</span>
            </li>
        </ol>
        <p class="c4 c14">
            <span class="c3"></span>
        </p>
        <ol class="c1 lst-kix_u104vsh7lyvm-0" start="2">
            <li class="c6 li-bullet-0">
                <span>Other Cherry Blossom Tree, &quot;Sakura tree &quot;(</span>
                <span class="c0">
                    <a class="c2" href="https://skfb.ly/6RPDE" target='_blank' rel="noopener noreferrer">https://skfb.ly/6RPDE</a>
                </span>
                <span>) by TatianaDevos is licensed under CC Attribution-NonCommercial-NoDerivs (</span>
                <span class="c0">
                    <a class="c2" href="http://creativecommons.org/licenses/by-nc-nd/4.0/" target='_blank' rel="noopener noreferrer">http://creativecommons.org/licenses/by-nc-nd/4.0/</a>
                </span>
                <span class="c3">).</span>
            </li>
        </ol>
        <h4 class="c7" id="h.3px62rbpsmav">
            <span class="c8">Designed By Me</span>
        </h4>
        <div class='designed_cont'>
            <div class="designed_text_area">
                <ol class="c1 lst-kix_6qazel6xpy2b-0 start" start="1">
                    <li class="c6 li-bullet-0">
                        <span class="c3">
                            Tokyo Sky Tree
                        </span>
                    </li>
                </ol>
                <p class="c4 c13">
                    <span class="c3"></span>
                </p>
                <ol class="c1 lst-kix_6qazel6xpy2b-0 start" start="2">
                    <li class="c6 li-bullet-0">
                        <span class="c3">
                            Shinto Gate
                        </span>
                    </li>
                </ol>
                <p class="c4 c13">
                    <span class="c3"></span>
                </p>
                <ol class="c1 lst-kix_6qazel6xpy2b-0 start" start="3">
                    <li class="c6 li-bullet-0">
                        <span class="c3">
                            Big Ben
                        </span>
                    </li>
                </ol>
                <p class="c4 c13">
                    <span class="c3"></span>
                </p>
                <ol class="c1 lst-kix_6qazel6xpy2b-0 start" start="4">
                    <li class="c6 li-bullet-0">
                        <span class='c3'>The Shard</span>
                    </li>
                </ol>
            </div>
            <div class="designed_img_area">
                <div class='original_model_container'>
                    <div class='grid_img_cont_1'>
                        <img src={SkyTree} class="grid_img" alt='Sky Tree'/>
                        <span class='caption'>Tokyo Sky Tree</span>
                    </div>
                    <div class='grid_img_cont_2'>
                        <img src={Shinto} class="grid_img" alt='Sky Tree'/>
                        <span class='caption'>Shinto Gate</span>
                    </div>
                    <div class='grid_img_cont_3'>
                        <img src={Ben} class="grid_img" alt='Sky Tree'/>
                        <span class='caption'>Big Ben</span>
                    </div>
                    <div class='grid_img_cont_4'>
                        <img src={Shard} class="grid_img" alt='Sky Tree'/>
                        <span class='caption'>The Shard</span>
                    </div>                   
                </div>
            </div>
        </div>
        <p class="c4 c13">
            <span class="c3"></span>
        </p>
        <h2 class="c9" id="h.a73gkhrn4s05">
            <span class="c5">Model Representation</span>
        </h2>
        <p class="c10">
            <div class='body_container'>
                <span class="c3 body_content">Starting with the London scene, most of the models are famous buildings in London, such as The Shard, Buckingham Palace, and The Big Ben. These represent London for one because they are located in London, but also because the buildings themselves are fairly synonymous with London, specifically Big Ben and Buckingham Palace. In addition to those buildings, the other two models represented here are a bus and a London-style phone booth. These models I feel represent London because they &rsquo;re fairly common associations with the city. Many people when they think of London think of the unique red phone booths and the unique style of bus that they have in the city. The background music is sort of stereotypical fancy music and the main reason this was used was because of the comedic association with Britain and fanciness as well as the use of Buckingham Palace which is the residence of the Royal family.</span>
                <div class='body_img_container'>
                    <img src={London} class='body_img' alt="London"/>
                </div>
            </div>
        </p>
        <p class="c4">
            <span class="c3"></span>
        </p>
        <p class="c10">
            <div class='body_container'>
                <span class="c3 body_content">Moving on to the Tokyo scene only one of the models is a recognizable landmark which is the Tokyo Skytree, and the main reason for that was because this scene was meant more to capture some of the more on the ground experiences. To demonstrate this I used models like the cherry blossom tree, a Shinto gate, and a vending machine. The cherry blossom tree was used because it &rsquo;s commonly associated with Japan as a whole, however, there are some famous parks in Tokyo where they &rsquo;re quite common such as Ueno Park, the Shinto gate was used to signify all the shrines that can be found throughout the city, and the vending machine was to represent the many vending machines that can be found throughout Japan, especially in urban areas like Tokyo. The other two models (the Skytree and Goku) were meant to more explicitly tie the scene to Tokyo with the Skytree is a fairly famous landmark/building in the city and Goku being a famous character from the anime Dragon Ball which was animated by Tokyo based company Toei Animation. The background song is a more traditional Japanese song and was used to tie into the more traditional aspects of the scene like the cherry blossom tree and the Shinto gate.</span>
                <div class='body_img_container'>
                    <img src={Tokyo} class='body_img' alt='Tokyo'/>
                </div>
            </div>
        </p>
        <h2 class="c9" id="h.ohq66f1ocrl0">
            <span class="c5">Potential Popularity</span>
        </h2>
        <p class="c10">
            <span class="c3">This project was sort of a proof of concept for one potential use case of AR and certainly showed some potential. I definitely think this could become somewhat popular especially with younger people, who have a much more digital presence already. There will of course always be people who want physical objects (myself included), despite this, there is something to be said about having many of your mementos from traveling all in one digital space. However, I think this would definitely only really be popular with AR glasses because it &#39;s much more immersive than looking through a smartphone. If this was through a smartphone, it would feel much more separated and lose a lot of the reality aspect that would come with a pair of glasses.</span>
        </p>
        <p class="c4">
            <span class="c3"></span>
        </p>
        <p class="c10">
            <span class="c3">I think the object that would benefit the most from being physically enhanced in this manner is some sort of keychain. That way it can always be with you, it wouldn &rsquo;t be cumbersome to carry around, and it would be harder to lose. There are two ways that this can then be implemented with something like a keychain. It could be that the app is set up to AR enhance one keychain and you can gesture to change what knick-knack is being presented through some form of a menu. This has the benefit of reducing the number of physical items you need and also putting everything in one convenient place, however, this would definitely be a tougher sell to people who like to own physical things. The second option is to have one unique keychain per location and have a scene be drawn around it instead of overlaid on top of it. This could then potentially attract people who want to have physical objects, but still have an AR benefit to it. The main problem here is that it eliminates a big benefit of going the AR route which is saving space. If you have to have a bunch of different little objects you certainly use less space than something like a snow globe collection, but you still take up significantly more space than one single keychain. So if something like this was to be implemented I definitely see this following the route of the first option.</span>
        </p>
        <p class="c4">
            <span class="c3"></span>
        </p>
        <p class="c10">
            <span class="c3">However, another major problem pops up when using only one AR-enhanced keychain or similar object, and that is how to make money off of it. Sure a company would make money off of the sale of the central keychain, but that would probably only really cover the cost of making the App/program, and wouldn &rsquo;t cover the cost of designing and potentially animating all the different scenes. The main solution to this is to charge per model/scene, but this might be a tough sell because a lot of people don &rsquo;t like to pay for digital-only things except for full-blown experiences like video games. An advertisement-funded model could work, but with ads dominating the user &rsquo;s field of view in an AR glasses platform, it might make the product much more annoying than say if it was on a phone.</span>
        </p>
        <p class="c4">
            <span class="c3"></span>
        </p>
        <p class="c10">
            <span class="c3">In conclusion, the idea definitely has potential, but there are various problems that stand in its path. These range from how to actually go about deploying the App to how to make money off of it. </span>
        </p>
    </body>
    </div>
  )
}

function Proj2() {
  return (
    <div className="documentation">
        <body class="c11">
        <p class="c15 title" id="h.5f9t7jq13nkp">
            <span class="c12">Project 2</span>
        </p>
        <h2 class="c9" id="h.94gya2l4qaot">
            <span class="c5">Youtube Video</span>
        </h2>
        <YoutubeEmbed embedId="Gc8xB4LL36M" />
        <h2 class="c9" id="h.94gya2l4qaot">
            <span class="c5">Introduction</span>
        </h2>
        <p class="c10">
            <span class="c3">Before anything, in order to get the application running you should follow the build instructions below. After you &rsquo;ve booted into the application you will find yourself in a dark offspace. This is because the phobia that I decided to go with is the fear of the dark. I went with a fear of the dark because I personally was scared of the dark for a very long time, and wanted to create an application that captured aspects of that fear in both the general sense, as well as some aspects that heightened my fear specifically in the past. </span>
        </p>
        <p class="c4 c14">
            <span class="c3"></span>
        </p>
        <p class="c10">
            <div class="body_container">
              <span class="c3 body_content">There are quite a few things that can be done in the application. The first thing the user is likely to notice is a light coming from the table behind them. The user can then navigate to this table by using the left pointer (left thumbstick) and clicking the thumbstick to teleport. The user should then see a flashlight that they can pick up and turn on and off with the A button. Next to the flashlight is a clipboard that the user can pick up as well, that informs the user that they can indeed pick up the flashlight. Next to the table there &rsquo;s a button that the user can activate with the pointer on the right controller (right thumb stick), and it spawns in a new flashlight. After the user picks up the flashlight they can move around the space, and find various other things to do. One of them is opening a door to the left of the table with the flashlight. They can open the door with their right pointer and inside they &rsquo;ll find a shelf with a Great Dane that &rsquo;s interactable. This is a reference to a Scooby Doo toy I had that used to make noise without batteries in my closet, and was one of the things that contributed to my fear of the dark. Another thing that the user can do is go up to the flashing phone. The user can then pick it up and press A. This will turn off the phone, which switches off the light and turns off the dial tone. Next to the table, where the phone was, there is a light switch. The user can turn on and off the lights when pointing at it with the right thumbstick. I recommend keeping the lights off, however, if your intention is to help your fear of the dark. The user can also head up the ramp, and they &rsquo;ll see a TV at the end of the upper level. By the TV, on the coffee table, is a remote that can turn on and off the TV if the user is grabbing it and they press the A button. Next to the couch is another button that can be activated by the right pointer, and this spawns in a new remote.</span>
              <div class="body_img_container">
                <img src={Project2Main} class='body_img' alt="Intro"/>
              </div>
            </div>
        </p>
        <p class="c4 c14">
            <span class="c3"></span>
        </p>
        <p class="c10">
            <span class="c3">I believe that this application can help users with a fear of the dark because it captures many aspects that can make that fear worse in the moment. This includes ominous background music, noises that can be somewhat unsettling particularly in the dark (the dial tone and tv static), as well as only having a flashlight which limits what the user can see making the unlit area part of the unknown, which I feel is a big part of a fear of the dark. However, as the user explores they discover that the source of these sounds is all relatively innocuous. The phone is just a phone and the TV is a TV after all. Another aspect of the application that I believe helps users with a fear of the dark is the fact that it &rsquo;s an application and the graphics are particularly unrealistic (mostly simple shapes). This gives the user the ability to safely simulate their fear of the dark in a less real environment, and can help them get more used to the concept of darkness without being in actual darkness.</span>
        </p>
        <h2 class="c9" id="h.94gya2l4qaot">
            <span class="c5">Build Instructions</span>
        </h2>
        <p class="c10">
            <span class="c3">Connect the Quest headset to your computer via a USB cable. In the headset make sure to allow the device to access data. If the option doesn’t show up, go to quick settings on the left, then to settings on top right of quick settings, and scroll down to Developer and turn on USB Connection Dialog. Now in the Unity editor make sure the main scene is open. A mostly unlit office should be viewable if you are in the correct scene. If not, in the project view to the right of the game view navigate to Assets->Scenes and double click ScareCoOffices. Now navigate to build settings via File -> Build Settings. Click on the android section in the list on the left. Make sure to switch platform to android by clicking the button on the bottom right of the Build Settings window. Now the Quest device you connected should show up under the Run Device list. Now click Build and Run. When the build is finished you can unplug the headset and put it on. In the Quest you navigate to Apps, click on the drop down at the top, and find the Unknown Sources section. From here you can run the application. </span>
        </p>
        <h2 class="c9" id="h.94gya2l4qaot">
            <span class="c5">Github Link</span>
        </h2>
        <p class="c10">
            <span class="c0">
                <a class="c2" href="https://github.com/jtlaughton/CS428Project2" target='_blank' rel="noopener noreferrer">https://github.com/jtlaughton/CS428Project2</a>
            </span>
        </p>
        <h2 class="c9" id="h.gpx2uztxrbfj">
            <span class="c5">Resources Used</span>
        </h2>
        <h4 class="c7" id="h.pl3d5bxsvh9k">
            <span class="c8">Web Models (Satisfies 15 Web Models)</span>
        </h4>
        <ol class="c1 lst-kix_o8d8hxjxkgs0-0 start" start="1">
            <li class="c6 li-bullet-0">
                <span class="c3">TV Stand, &quot;Low Poly Style TV Stand &quot;(</span>
                <span class="c2">
                    <a class="c0" href="https://www.google.com/url?q=https://sketchfab.com/3d-models/low-poly-style-tv-stand-5f1c9e89090e4c079abddbb850afe159&amp;sa=D&amp;source=editors&amp;ust=1634552450539000&amp;usg=AOvVaw0HSNjCtNgY2M_1VKvnqsyx">https://sketchfab.com/3d-models/low-poly-style-tv-stand-5f1c9e89090e4c079abddbb850afe159</a>
                </span>
                <span class="c3">&nbsp;) by Digitalis Reality (</span>
                <span class="c2">
                    <a class="c0" href="https://www.google.com/url?q=https://sketchfab.com/digitalisreality&amp;sa=D&amp;source=editors&amp;ust=1634552450540000&amp;usg=AOvVaw1g7yH4zOBphYU9OeVGRnyI">https://sketchfab.com/digitalisreality</a>
                </span>
                <span class="c3">&nbsp;) licensed under CC-BY-4.0 (</span>
                <span class="c2">
                    <a class="c0" href="https://www.google.com/url?q=http://creativecommons.org/licenses/by/4.0/&amp;sa=D&amp;source=editors&amp;ust=1634552450540000&amp;usg=AOvVaw1g-ntzty364ybfVRHzu222">http://creativecommons.org/licenses/by/4.0/</a>
                </span>
                <p class="c4 c14">
                    <span class="c3"></span>
                </p>
            </li>
            <li class="c6 li-bullet-0">
                <span class="c3">Coffee Table, &quot;Lowpoly Coffee table &quot;(</span>
                <span class="c2">
                    <a class="c0" href="https://www.google.com/url?q=https://sketchfab.com/3d-models/lowpoly-coffee-table-24bda8a15d4e4f16b5fca86c153aa8b5&amp;sa=D&amp;source=editors&amp;ust=1634552450540000&amp;usg=AOvVaw2UZJ2RQT8YilH_9x6XDbCL">https://sketchfab.com/3d-models/lowpoly-coffee-table-24bda8a15d4e4f16b5fca86c153aa8b5</a>
                </span>
                <span class="c3">&nbsp;) by Petra K (</span>
                <span class="c2">
                    <a class="c0" href="https://www.google.com/url?q=https://sketchfab.com/petrakot&amp;sa=D&amp;source=editors&amp;ust=1634552450540000&amp;usg=AOvVaw2fECgRry3bMsOeFs7bpZNA">https://sketchfab.com/petrakot</a>
                </span>
                <span class="c3">&nbsp;) licensed under CC-BY-4.0 (</span>
                <span class="c2">
                    <a class="c0" href="https://www.google.com/url?q=http://creativecommons.org/licenses/by/4.0/&amp;sa=D&amp;source=editors&amp;ust=1634552450541000&amp;usg=AOvVaw1E1ZmYmbQBegP0yf9d0WFF">http://creativecommons.org/licenses/by/4.0/</a>
                </span>
                <p class="c4 c14">
                    <span class="c3"></span>
                </p>
            </li>
            <li class="c6 li-bullet-0">
                <span class="c3">Metal Shelf,&quot;Metal Simple Shelf &quot;(https://sketchfab.com/3d-models/metal-simple-shelf-04424177a85045d7907a0ca26d1b05fa) by Inglemere (</span>
                <span class="c2">
                    <a class="c0" href="https://www.google.com/url?q=https://sketchfab.com/Inglemere&amp;sa=D&amp;source=editors&amp;ust=1634552450541000&amp;usg=AOvVaw1pMNf-ZQBmsW2SNMI5Qn9a">https://sketchfab.com/Inglemere</a>
                </span>
                <span class="c3">&nbsp;) licensed under CC-BY-4.0 (</span>
                <span class="c2">
                    <a class="c0" href="https://www.google.com/url?q=http://creativecommons.org/licenses/by/4.0/&amp;sa=D&amp;source=editors&amp;ust=1634552450541000&amp;usg=AOvVaw1E1ZmYmbQBegP0yf9d0WFF">http://creativecommons.org/licenses/by/4.0/</a>
                </span>
                <p class="c4 c14">
                    <span class="c3"></span>
                </p>
            </li>
            <li class="c6 li-bullet-0">
                <span class="c3">Phone, &quot;Phone from Poly by Google &quot;(</span>
                <span class="c2">
                    <a class="c0" href="https://www.google.com/url?q=https://sketchfab.com/3d-models/phone-from-poly-by-google-9901c7cce9d74a48bd15c9bb290b6fce&amp;sa=D&amp;source=editors&amp;ust=1634552450541000&amp;usg=AOvVaw0Djcg5LB2bpzr1yTPccaXg">https://sketchfab.com/3d-models/phone-from-poly-by-google-9901c7cce9d74a48bd15c9bb290b6fce</a>
                </span>
                <span class="c3">&nbsp;) by IronEqual (</span>
                <span class="c2">
                    <a class="c0" href="https://www.google.com/url?q=https://sketchfab.com/ie-niels&amp;sa=D&amp;source=editors&amp;ust=1634552450542000&amp;usg=AOvVaw3AI78gpW9bEunmuyRLWL5B">https://sketchfab.com/ie-niels</a>
                </span>
                <span class="c3">&nbsp;) licensed under CC-BY-4.0 (</span>
                <span class="c2">
                    <a class="c0" href="https://www.google.com/url?q=http://creativecommons.org/licenses/by/4.0/&amp;sa=D&amp;source=editors&amp;ust=1634552450542000&amp;usg=AOvVaw01yteqP9R5K58xONvS-ldj">http://creativecommons.org/licenses/by/4.0/</a>
                </span>
                <p class="c4 c14">
                    <span class="c3"></span>
                </p>
            </li>
            <li class="c6 li-bullet-0">
                <span class="c3">Great Dane, &ldquo;Low Poly Great Dane Dog &rdquo;(</span>
                <span class="c2">
                    <a class="c0" href="https://www.google.com/url?q=https://sketchfab.com/3d-models/low-poly-cartoon-great-dane-dog-5c53f2187f7a455f9a67d37dca77b92a&amp;sa=D&amp;source=editors&amp;ust=1634552450542000&amp;usg=AOvVaw3qYZpKHrDGoZCdqrRqCH0C">https://sketchfab.com/3d-models/low-poly-cartoon-great-dane-dog-5c53f2187f7a455f9a67d37dca77b92a</a>
                </span>
                <span class="c3">&nbsp;) by chroma3d (</span>
                <span class="c2">
                    <a class="c60" href="https://www.google.com/url?q=https://sketchfab.com/vendol21&amp;sa=D&amp;source=editors&amp;ust=1634552450542000&amp;usg=AOvVaw1RTzGJu0Ld8tnLSV9htpWq">https://sketchfab.com/vendol21</a>
                </span>
                <p class="c4 c14">
                    <span class="c3"></span>
                </p>
            </li>
            <li class="c6 li-bullet-0">
                <span class="c17">The Following Are All From This Asset Pack: &ldquo;</span>
                <span class="c3">Low Poly Modular Office Pack &rdquo;(</span>
                <span class="c2">
                    <a class="c0" href="https://www.google.com/url?q=https://assetstore.unity.com/packages/3d/environments/urban/low-poly-modular-office-pack-183564&amp;sa=D&amp;source=editors&amp;ust=1634552450543000&amp;usg=AOvVaw1DVdz7ItYAq0H1SLdzhwaK">https://assetstore.unity.com/packages/3d/environments/urban/low-poly-modular-office-pack-183564</a>
                </span>
                <span class="c3">&nbsp;) by Soup Games(</span>
                <span class="c2">
                    <a class="c0" href="https://www.google.com/url?q=https://assetstore.unity.com/publishers/34585&amp;sa=D&amp;source=editors&amp;ust=1634552450543000&amp;usg=AOvVaw2Eh9ligQT1guzVYt7ps_e1">https://assetstore.unity.com/publishers/34585</a>
                </span>
                <p class="c4 c14">
                    <span class="c3"></span>
                </p>
            </li>
        </ol>
        <ol class="c99 lst-kix_vll4c6mjz9d1-1 start" start="1">
            <li class="c22 li-bullet-0">
                <span class="c3">
                    Couch, &ldquo;sofa2_r &rdquo;<br/>
                </span>
                <p class="c4 c14">
                    <span class="c3"></span>
                </p>
            </li>
            <li class="c22 li-bullet-0">
                <span class="c3">
                    Meeting Table, &ldquo;table_meeting &rdquo;<br/>
                </span>
                <p class="c4 c14">
                    <span class="c3"></span>
                </p>
            </li>
            <li class="c22 li-bullet-0">
                <span class="c3">
                    Regular Table, &ldquo;table02 &rdquo;<br/>
                </span>
                <p class="c4 c14">
                    <span class="c3"></span>
                </p>
            </li>
            <li class="c22 li-bullet-0">
                <span class="c3">
                    Clip Board, &ldquo;clipboard &rdquo;<br/>
                </span>
                <p class="c4 c14">
                    <span class="c3"></span>
                </p>
            </li>
            <li class="c22 li-bullet-0">
                <span class="c3">
                    Books, &ldquo;books01 &rdquo;<br/>
                </span>
                <p class="c4 c14">
                    <span class="c3"></span>
                </p>
            </li>
            <li class="c22 li-bullet-0">
                <span class="c3">
                    Trash Can, &ldquo;bin_full &rdquo;<br/>
                </span>
                <p class="c4 c14">
                    <span class="c3"></span>
                </p>
            </li>
            <li class="c22 li-bullet-0">
                <span class="c3">
                    Low Cabinet, &ldquo;cabinet01 &rdquo;<br/>
                </span>
                <p class="c4 c14">
                    <span class="c3"></span>
                </p>
            </li>
            <li class="c22 li-bullet-0">
                <span class="c3">
                    Tall Cabinet, &ldquo;cabinet06 &rdquo;<br/>
                </span>
                <p class="c4 c14">
                    <span class="c3"></span>
                </p>
            </li>
            <li class="c22 li-bullet-0">
                <span class="c3">
                    Fridge, &ldquo;kitchen02 &rdquo;<br/>
                </span>
                <p class="c4 c14">
                    <span class="c3"></span>
                </p>
            </li>
            <li class="c22 li-bullet-0">
                <span class="c3">Sink, &ldquo;kitchen01 &rdquo;</span>
            </li>
        </ol>
        <h4 class="c7" id="h.9fhk4njw0vx7">
            <span class="c8">Sounds</span>
        </h4>
        <ol class="c99 lst-kix_vrwumvjobevb-0 start" start="1">
            <li class="c6 li-bullet-0">
                <span class="c3">Rain Sounds, &ldquo;Light rain looping &rdquo;(</span>
                <span class="c2">
                    <a class="c0" href="https://www.google.com/url?q=https://mixkit.co/free-sound-effects/rain/&amp;sa=D&amp;source=editors&amp;ust=1634552450544000&amp;usg=AOvVaw1usCrWDzOr67xSOthNfQI5">https://mixkit.co/free-sound-effects/rain/</a>
                </span>
                <span class="c3">
                    ) by Mixkit<br/>
                </span>
                <p class="c4 c14">
                    <span class="c3"></span>
                </p>
            </li>
            <li class="c6 li-bullet-0">
                <span class="c3">Dial Tone, &ldquo;Dial phone tone &rdquo;(</span>
                <span class="c2">
                    <a class="c0" href="https://www.google.com/url?q=https://mixkit.co/free-sound-effects/tones/&amp;sa=D&amp;source=editors&amp;ust=1634552450545000&amp;usg=AOvVaw2nXydQoJdNF_Xtl5Fneh2r">https://mixkit.co/free-sound-effects/tones/</a>
                </span>
                <span class="c3">
                    ) by Mixkit<br/>
                </span>
                <p class="c4 c14">
                    <span class="c3"></span>
                </p>
            </li>
            <li class="c6 li-bullet-0">
                <span class="c3">Flash Light Thud, &ldquo;Metal tool drop &rdquo;(</span>
                <span class="c2">
                    <a class="c0" href="https://www.google.com/url?q=https://mixkit.co/free-sound-effects/metal/&amp;sa=D&amp;source=editors&amp;ust=1634552450545000&amp;usg=AOvVaw1rGmOzUfG__edEyoWevyh5">https://mixkit.co/free-sound-effects/metal/</a>
                </span>
                <span class="c3">
                    ) by Mixkit<br/>
                </span>
                <p class="c4 c14">
                    <span class="c3"></span>
                </p>
            </li>
            <li class="c6 li-bullet-0">
                <span class="c3">TV Static, &ldquo;TV static free sound effect &rdquo;(</span>
                <span class="c2">
                    <a class="c0" href="https://www.google.com/url?q=https://www.youtube.com/watch?v%3DlHO4VScoBoo&amp;sa=D&amp;source=editors&amp;ust=1634552450545000&amp;usg=AOvVaw1mvbuk4Cvmp76BmvWEPWzi">https://www.youtube.com/watch?v=lHO4VScoBoo</a>
                </span>
                <span class="c3">) by Dar Golan</span>
            </li>
        </ol>
        <h4 class="c7" id="h.e03n54c9e6wu">
            <span class="c8">Tutorials</span>
        </h4>
        <ol class="c99 lst-kix_177z9ckr90fj-0 start" start="1">
            <li class="c6 li-bullet-0">
                <span class="c3">Flickering Light, &ldquo;How To Make A Flickering Light &rdquo;(</span>
                <span class="c2">
                    <a class="c0" href="https://www.google.com/url?q=https://www.youtube.com/watch?v%3DiCCFPOdUaNI&amp;sa=D&amp;source=editors&amp;ust=1634552450546000&amp;usg=AOvVaw1v64ZptAsZo8McwQUgR2wy">https://www.youtube.com/watch?v=iCCFPOdUaNI</a>
                </span>
                <span class="c3">) by Electronic Brain</span>
            </li>
        </ol>
        <h2 class="c9" id="h.bt43yib1e0xz">
            <span class="c5">Project Requirements</span>
        </h2>
        <div class="bullet-image-cont">
            <div class="bullet-content-area">
        <h4 class="c7" id="h.c6n1aufoo3i9">
            <span class="c8">Designed By Me</span>
        </h4>
        <ol class="c99 lst-kix_muomznq9uyx-0 start" start="1">
            <li class="c6 li-bullet-0">
                <span class="c3">The Flashlight</span>
            </li>
            <li class="c6 li-bullet-0">
                <span class="c3">The Remote</span>
            </li>
            <li class="c6 li-bullet-0">
                <span class="c3">The TV</span>
            </li>
            <li class="c6 li-bullet-0">
                <span class="c3">The Light Switch</span>
            </li>
            <li class="c6 li-bullet-0">
                <span class="c3">The Door area</span>
            </li>
        </ol>
        <h4 class="c7" id="h.95unlperjm45">
            <span class="c8">Grabbable</span>
        </h4>
        <ol class="c99 lst-kix_nvweb4yheyqy-0 start" start="1">
            <li class="c6 li-bullet-0">
                <span class="c3">The Phone</span>
            </li>
            <li class="c6 li-bullet-0">
                <span class="c3">The Flashlight</span>
            </li>
            <li class="c6 li-bullet-0">
                <span class="c3">The Remote</span>
            </li>
            <li class="c6 li-bullet-0">
                <span class="c3">The Great Dane</span>
            </li>
            <li class="c6 li-bullet-0">
                <span class="c3">The Clipboard</span>
            </li>
        </ol>
        <h4 class="c7" id="h.dqy227xpk699">
            <span class="c8">Spawnable</span>
        </h4>
        <ol class="c99 lst-kix_huxnmdeb9cj0-0 start" start="1">
            <li class="c6 li-bullet-0">
                <span class="c3">The Flashlight</span>
            </li>
            <li class="c6 li-bullet-0">
                <span class="c3">The Remote</span>
            </li>
        </ol>
        <h4 class="c7" id="h.w1phyplz4hdq">
            <span class="c8">Reactive Sounds</span>
        </h4>
        <ol class="c99 lst-kix_cfkaumoq0hfy-0 start" start="1">
            <li class="c6 li-bullet-0">
                <span class="c3">TV Static</span>
            </li>
            <li class="c6 li-bullet-0">
                <span class="c3">Flashlight Thud</span>
            </li>
            <li class="c6 li-bullet-0">
                <span class="c3">Rain By Window</span>
            </li>
            <li class="c6 li-bullet-0">
                <span class="c3">The Phone Dial Tone</span>
            </li>
        </ol>
        <h4 class="c7" id="h.lsocfbniyt9m">
            <span class="c8">Ambient Sound</span>
        </h4>
        <ol class="c99 lst-kix_ivgsw4t62x9w-0 start" start="1">
            <li class="c6 li-bullet-0">
                <span class="c3">Ominous background music</span>
            </li>
        </ol>
        <h4 class="c7" id="h.gn6kl2ic0lxp">
            <span class="c8">Animation</span>
        </h4>
        <ol class="c99 lst-kix_k2mr6eph9pcw-0 start" start="1">
            <li class="c6 li-bullet-0">
                <span class="c3">Door Opening</span>
            </li>
            <li class="c6 li-bullet-0">
                <span class="c3">Blinking Phone Light</span>
            </li>
            <li class="c6 li-bullet-0">
                <span class="c3">Light Switch</span>
            </li>
        </ol>
        <h4 class="c7" id="h.1loskd6rd4e3">
            <span class="c8">Lighting Scheme</span>
        </h4>
        <ol class="c99 lst-kix_g3tcpbp05wfg-0 start" start="1">
            <li class="c6 li-bullet-0">
                <span class="c3">Changed to a more warm color when on and added moonlighting</span>
            </li>
        </ol>
        <h4 class="c7" id="h.yizremvpwsc1">
            <span class="c8">Unique Lights</span>
        </h4>
        <ol class="c99 lst-kix_qmcivcp6ajw3-0 start" start="1">
            <li class="c6 li-bullet-0">
                <span class="c3">Flashlight</span>
            </li>
            <li class="c6 li-bullet-0">
                <span class="c3">TV Glow</span>
            </li>
            <li class="c6 li-bullet-0">
                <span class="c3">Blinking Phone Light</span>
            </li>
            <li class="c6 li-bullet-0">
                <span class="c3">Flickering Light</span>
            </li>
        </ol>
        </div>
        <div class="image-stack">
            <div class='image-cont'>
                <img src={DeskFlash} class="other-body-img" alt='Sky Tree'/>
                <span class='caption'>Flash Light And Meeting Table</span>
            </div>
            <div class='image-cont'>
                <img src={CoffeeTableRemote} class="other-body-img" alt='Sky Tree'/>
                <span class='caption'>Coffee Table And Remote</span>
            </div>
            <div class='image-cont'>
                <img src={TVStand} class="other-body-img" alt='Sky Tree'/>
                <span class='caption'>TV And TV Stand</span>
            </div>
            <div class='image-cont'>
                <img src={LightSwitch} class="other-body-img" alt='Sky Tree'/>
                <span class='caption'>Light Switch</span>
            </div>
            <div class='image-cont'>
                <img src={TablePhone} class="other-body-img" alt='Sky Tree'/>
                <span class='caption'>Phone Table And Trash Bin</span>
            </div>
            </div>

            <div class="image-stack">
            <div class='image-cont'>
                <img src={Doorway} class="other-body-img" alt='Sky Tree'/>
                <span class='caption'>Doorway</span>
            </div>
            <div class='image-cont'>
                <img src={ShelfDogLight} class="other-body-img" alt='Sky Tree'/>
                <span class='caption'>Metal Shelf With Greate Dane And Flickering Light</span>
            </div>
            <div class='image-cont'>
                <img src={ClipBoard} class="other-body-img" alt='Sky Tree'/>
                <span class='caption'>Clip Board</span>
            </div>
            <div class='image-cont'>
                <img src={FlashLightSpawn} class="other-body-img" alt='Sky Tree'/>
                <span class='caption'>Clip Board</span>
            </div>
            
        </div>
        </div>
        <h2 class="c9" id="h.zijhgv2n5g5r">
            <span class="c5">Frame Rate</span>
        </h2>
        <p class="c10">
            <span class="c3">Since I wasn &rsquo;t able to finish the project until Saturday, and I added things to the application since Thursday that would have definitely affected the frame rate, I wasn &rsquo;t able to get any representative frame rate data.</span>
        </p>
        <h2 class="c9" id="h.a16vr4mhtuzg">
            <span class="c5">Simulator Vs The Real Thing</span>
        </h2>
        <p class="c10">
            <span class="c3">VR can be a truly immersive experience. It dominates your vision and you can easily lose sense of the real world. This creates a lot of real wonderful experiences, and we got a little taste of making some of these experiences with this project. That &rsquo;s why it becomes all the more evident that you can &rsquo;t truly experience these pieces of media through a simulator.</span>
        </p>
        <p class="c4 c14">
            <span class="c3"></span>
        </p>
        <p class="c10">
            <span class="c3">The problem with the simulator is that it almost completely eliminates all sense of immersion. Even with regular videogames one can get very immersed in the experience. Games like </span>
            <span class="c3">Fallout</span>
            <span class="c3">&nbsp;and </span>
            <span class="c3">Dark Souls</span>
            <span class="c3">&nbsp;can create worlds and experiences that are truly immersive despite being interacted with a controller or a keyboard and mouse. The simulator on the other hand breaks even that connection between controller and character and makes for a truly separated experience. By having the player move around the controller models and interact with the world through them you create an extra layer of separation. In VR you are the character, in a regular video game you are directly controlling a character. In the simulator you &rsquo;re moving some objects around the space in order to &ldquo;pick &rdquo;things up and activate things. This degree of separation is further amplified by having the player stop moving in order to move the controllers around the space. This is a very unnatural form of interacting. Humans in the real world are constantly moving to some extent, and when they pick something up many movements are happening in order to make that intent a reality. This is basically completely recreated inside VR with the exception of actually picking something up being a button. In standard videogames this is more or less represented by having the player press a simple button when looking at something and usually an animation accompanies it. In the simulation it &rsquo;s more or less like you &rsquo;re toggling between different states instead of being in some form of constant motion.</span>
        </p>
        <p class="c4 c14">
            <span class="c3"></span>
        </p>
        <p class="c10">
            <span class="c3">Now this doesn &rsquo;t mean the simulator doesn &rsquo;t have its uses. The main use for the simulator is the developing angle. It allows you to test various aspects of your VR game/application without having access to a headset all the time. This means that if you only have a headset at the office for example, or you &rsquo;re developing away from home, you have the ability to get some work done. However, in the end you &rsquo;re still going to want to test in VR at various points in development because that &rsquo;s the only true way to know if your application is immersive because of that degree of separation that comes with using the simulator.</span>
        </p>
        <p class="c4 c14">
            <span class="c3"></span>
        </p>
        <p class="c10">
            <span class="c3">All in all, while the simulator definitely has its uses in the developing space, it simply doesn &rsquo;t even compare to the immersion that comes from playing in actual VR or even some video games. The wall it puts up between you and the scene you &rsquo;re in puts it squarely in the development tool category.</span>
        </p>
        </body>
    </div>
  )
}

function Proj3() {
  return (
    <h1>Project 3</h1>
  )
}

function StudentChoice(){
    return(
        <div className="documentation">
            <body class="c11">
                <p class="c15 title" id="h.5f9t7jq13nkp">
                    <span class="c12">Student Choice Topic: Deracine</span>
                </p>
                <p class="c10">
                    <span class="c3"> Deracine is a PlayStation VR adventure game by FromSoftware. The goal of the game is to solve a mystery as a fairy. To do this you have to solve various simple puzzles and explore the various rooms of the boarding school that the game takes place in.</span>
                </p>
            </body>
        </div>
    )
}

export default App;