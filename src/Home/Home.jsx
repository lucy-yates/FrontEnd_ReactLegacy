import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TeamPhoto from './TeamPhoto.png';
import Login from './Login';
import { Card, ListGroup, ListGroupItem, Carousel } from 'react-bootstrap';

function Home() {
    const [isLoggedIn, setLoggedIn] = useState(false);

    const handleLogin = () => {
        setLoggedIn(!isLoggedIn);
    };

    return (
        <div className="container mt-4">
            {isLoggedIn ? (
                <div>
                    
                    <Carousel>
                        <Carousel.Item>
                            <h5>"Be the change that you wish to see in the world." </h5>
                            <p>Mahatma Gandhi</p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <h5>"The purpose of our lives is to be happy."</h5>
                            <p>Dalai Lama</p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <h5>"Embrace the elegant dance of code, for in its intricate choreography, we find the symphony of innovation" </h5>
                            <p>Jordan Harrison</p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <h5>"In the unpredictable symphony of technology, my webcam dances to its own glitchy rhythm"</h5>
                            <p>Piers B.</p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <h5>"The greatest glory in living lies not in never falling, but in rising every time we fall."  </h5>
                            <p>Nelson Mandela</p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <h5>"Work harder, or else."</h5>
                            <p><i>Estranged</i> CEO Lucy Yates</p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <h5>"It does not matter how slowly you go, as long as you do not stop."</h5>
                            <p>Confucius</p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <h5>"Life's a journey, and I'm the captain of my own ship. No limits, no boundaries, just unstoppable energy. Mr. Worldwide, making every moment count!""</h5>
                            <p>Pitbull</p>
                        </Carousel.Item>
                        
                        
                    </Carousel>

                  
                    <Card border="danger" border-10>
                        <Card.Body>
                            <Card.Title><h1>About Us: LP</h1></Card.Title>
                            <Card.Text>
                            Welcome to LP, where the convergence of passion for software engineering and an appreciation for the extraordinary has given birth to a unique online shopping experience.
                            </Card.Text>
                            <Card.Text>
                            Our story unfolds with Lucy and Liam, two aspiring software engineers who embarked on a transformative journey through a software reskilling cohort at Lloyds Banking Group. Under the tutelage of the infamous trainer, Jordan Harrison, a formidable software engineer, they sharpened their skills and delved into the intricacies of coding.
                            </Card.Text>
                            <Card.Text>
                            Initially aiming to pursue careers as software engineers for Lloyds Banking Group, Lucy and Liam's path took an unexpected turn. Undaunted by the twists of fate, they banded together and ventured into entrepreneurship, carving out a niche in the vast digital landscape.
                            </Card.Text>
                            <Card.Text>
                            However, fate had other plans in store. When Liam departed from the company, leaving Lucy in need of a partner, amazing software engineer Paige stepped in to save the day. Together, Lucy and Paige reimagined the company, renaming it LP in honor of their partnership.
                            </Card.Text>
                            <Card.Text>
                            The success of LP has been nothing short of phenomenal, growing rapidly from its modest beginnings. What sets us apart is not just the diversity of our offerings but the dedication and passion that Lucy and Paige infuse into every line of code. Our online shop is a testament to their unwavering commitment to deliver a seamless and enjoyable shopping experience.
                            </Card.Text>
                            <Card.Text>
                            At LP, we believe in pushing boundaries, embracing the extraordinary, and challenging the status quo. Our team may be small, but our ambitions are grand. We invite you to explore our digital emporium, where innovation meets curiosity, and discover treasures that transcend the ordinary.
                            </Card.Text>
                            <Card.Text>
                                Thank <b>you</b> for being a part of our journey. Your adventure begins here at LP.
                            </Card.Text>
                            <Card.Title><h2>Company Updates:</h2></Card.Title>
                            <ListGroup>
                                <ListGroupItem>- Attendance to the Easter Weekend team excursion has become <u>mandatory</u>. Disciplinary action may be taken against non-attendees.</ListGroupItem>
                                <ListGroupItem>- We would like to remind everyone, including our estranged CEO Lucy Yates, that it is against UK employee law to engage in any activity that inflicts physical harm or discomfort on staff members, even as a means of addressing efficiency concerns.</ListGroupItem>
                                <ListGroupItem>- Please can we remind all employees that speaking to the press regarding estranged CEO Lucy Yates is strictly prohibited and will carry disciplinary action.</ListGroupItem>
                            </ListGroup>
                            <br></br>
                            <Card.Title> <h2>Upcoming Events:</h2></Card.Title>
                            <ListGroup>
                                <ListGroupItem> 13/03/2024 - Scheduled chanting for estranged CEO Lucy Yates </ListGroupItem>
                                <ListGroupItem> 14/03/2024 - Cupcake sale in honour of Jordan Harrison </ListGroupItem>
                                <ListGroupItem> 29/03/2024 - 30/03/2024 - Team excursion <b>(MANDATORY)</b></ListGroupItem>
                                <ListGroupItem> 25/05/2024 - Bring your Child to work day for the birthday of estranged CEO Lucy Yates</ListGroupItem>
                                <ListGroupItem> 19/10/2024 - Celebration of life for lost CEO Liam McNabola on their birthday </ListGroupItem>
                                <ListGroupItem> 25/12/2024 - One Man Panto! - Celebrate Christmas Day in <i>style</i> with guest speaker Andrew Clark(e) hosting a Christmas panto! <b>(MANDATORY)</b></ListGroupItem>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </div>
            ) : (
                <Card border="danger" border-3>
                    <Card.Body className="text-center">
                        <Card.Title><h1><b>REMINDER </b>to stay vigilant when logging in: </h1></Card.Title>
                        <ListGroup>
                            <ListGroupItem>Secure Your Surroundings: Be cautious of your environment and ensure privacy when logging in. Avoid public spaces for sensitive logins.</ListGroupItem>
                            <ListGroupItem>Check for Suspicious Activity: Before entering credentials, verify the authenticity of the website or platform. Report any unusual prompts or requests.</ListGroupItem>
                            <ListGroupItem>Protect Your Passwords: Avoid sharing passwords and update them regularly. Strong, unique passwords are your first line of defense.</ListGroupItem>
                            <ListGroupItem>Report Anomalies Promptly: If you notice anything unusual during the login process or suspect unauthorized access, report it immediately to our IT team.</ListGroupItem>
                        </ListGroup>
                        <img src={TeamPhoto} style={{ height: 300, width: 300, display: 'block', margin: 'auto' }} alt="Team" className="mx-auto d-block" />
                        <Login onLogin={handleLogin} />
                    </Card.Body>
                </Card>
            )}
            <br />
        </div>
    );
}

export default Home;
