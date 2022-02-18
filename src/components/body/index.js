import React from 'react'
import './body.css';
import About from './about/index';
import Redirection from './redirection';
import Large from './largeflex';
import ThingsToDo from './ThingsToDo';
import LearningPath from './Learningpath';
import LearnBuild from './LearnBuild';
function Body() {
    return <div className='body'>
        <section id='about'>
            <About />
        </section>
        <section id='redirect'>
            <Redirection />
        </section>
       
        <section id='Learnpath'>
            <LearningPath />
        </section>
        <section id='Learnpath'>
            <Large />
        </section>
        <section id='ThingsToDo'>
            <ThingsToDo />
        </section>
        <section id='LearnAndBuild'>
            <LearnBuild />
        </section>
    </div>
}

export default Body