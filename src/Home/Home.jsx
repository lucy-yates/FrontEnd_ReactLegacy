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
                            <h5>"LP's courses have revolutionized our studio's approach to music education, benefiting both instructors and students." </h5>
                            <p>Sarah, Music Director at XYZ Studios</p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <h5>"LP's courses have upskilled our team and enhanced their musical knowledge, leading to improved performance."</h5>
                            <p>Michael, CEO of Acoustic Sounds Inc.</p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <h5>"LP's engaging lessons have rejuvenated our music curriculum, inspiring students of all skill levels." </h5>
                            <p>Emma, Music Teacher at Harmony High School</p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <h5>"LP's practical insights and industry tips have elevated my productions to new heights."</h5>
                            <p>David, Freelance Music Producer</p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <h5>"LP's courses cover essential skills for success in the music industry, providing valuable support and encouragement."</h5>
                            <p>Alex, Aspiring Musician and Songwriter</p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <h5>"LP's user-friendly courses have helped me expand my musical knowledge and pursue my passions."</h5>
                            <p>Jessica, Music Enthusiast and Hobbyist</p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <h5>"LP's tutorials and exercises complement my university education, bridging theory and practical skills."</h5>
                            <p>Mark, Music Technology Student at ABC University</p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <h5>"LP's high-quality content keeps our team ahead of the curve in audio engineering and music production."</h5>
                            <p>Sophie, Owner of SoundScape Recording Studio</p>
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
