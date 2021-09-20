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
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

          <Route exact path="/" component={Home} />
          <Route exact path="/proj1" component={Proj1} />
          <Route exact path="/proj2" component={Proj2} />
          <Route exact path="/proj3" component={Proj3} />
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
    <h1>Project 2</h1>
  )
}

function Proj3() {
  return (
    <h1>Project 3</h1>
  )
}

export default App;