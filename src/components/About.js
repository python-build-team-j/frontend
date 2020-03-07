import React from 'react';
import './about.scss';

const About = () => {
    const team = [
        {
            name: 'Joshua Stevens',
            profile: 'https://github.com/JustSpokenCodes',
            img: './img/joshua-stevens.jpg',
            role: 'Software Engineer/ Front End Engineer'
        },
        {
            name: 'Ira Sanchez',
            profile: 'https://github.com/irasanchez',
            img: './img/ira-sanchez.jpg',
            role: 'Software Engineer/ Front End Engineer'
        },
        {
            name: 'Reese Kunz',
            profile: 'https://github.com/reesekunz',
            img: './img/reese-kunz.jpg',
            role: 'Software Engineer/Back End Engineer'
        },
        {
            name: 'Cory Hale',
            profile: 'https://github.com/CoryHale',
            img: './img/cory-hale.jpg',
            role: 'Software Engineer/Back End Engineer'
        },
    ];

    return (
        <div className="page-wrap">
            <section className='card'>
                <h1 className='card-title'>Building a Gold Mine</h1>
                <hr />
                <p>
                    Beware! For those that have gotten in this M.U.D on our app have been attacked by a Octopus with small tentacles and a Big Head! 
                </p>
                <p>
                    The languages that were used were Python, Django, React, and JavaScript. This project really put us on our toes due to the fact that we didnt have any prior knowldge on Django and only had two weeks to complete this dungeon game. With all of our challenges, we still were able to come together and make this game that you will be able to enjoy. As you see in the game, after a while, something <i>interesting</i> happens so remember to think effectively before going in a certain direction. 
                </p>
                <p>
                    GOOD LUCK YOU LOVER OF THE UNKOWN AND DARK ROOMS! (youll need it..)
                </p>
            </section>
            <section className='card'>
                <h1 className="card-title">Dungeon Builders</h1>
                <hr />
                <div className='team-cont'>
                    {
                        team.map(memb => {
                            return <div key={memb.name}>
                                <img className='profile-avi' src={memb.img} alt='team member' />
                                <p className='text-bold'>
                                    <a href={memb.profile} target="_blank" rel="noopener noreferrer"> 
                                    {memb.name}
                                    </a>
                                    <p className='about-role'>{memb.role}</p>
                                </p>
                            </div>
                        })
                    }
                </div>
            </section>
        </div>
    )
}

export default About;