import React, { Component } from 'react';
import './aboutStyle.css';
import Photographer from '../images/photographer.jpeg';
import CountUp from 'react-countup';

class About extends Component {
    render() {
        return (
            <div className="aboutContainer">
                <section className="photographer">
                    <img src={Photographer} alt="photographer"/>
                </section>
                <div className="desc-skills">
                    <h1 className="aboutMe"> About me</h1>
                    <p id="about-text">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                    </p>
                    <p id="about-text">Pellentesque eu lectus vel sapien sagittis imperdiet sed nec lectus. Nunc mollis porta vulputate. Nunc augue ipsum, hendrerit fringilla ullamcorper a, dictum a eros. Nunc nec justo pellentesque, imperdiet ipsum et, pharetra elit. Suspendisse lacus nibh, aliquet et volutpat non, interdum eget odio. Sed condimentum pharetra ipsum. Mauris et risus eu elit sagittis efficitur. Mauris ac lobortis libero.</p>
               
                    <ul id="projects">
                        <li><h2 className="aboutNum"><CountUp duration={5} end={461} /> </h2> finished projects</li>
                        <li><h2 className="aboutNum"><CountUp duration={5} end={461} /> </h2> finished projects</li>
                        <li><h2 className="aboutNum"><CountUp duration={5} end={161} /> </h2>  Satisfied customers</li>
                        <li><h2 className="aboutNum"><CountUp duration={5} end={290} /></h2> working hours</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default About;
