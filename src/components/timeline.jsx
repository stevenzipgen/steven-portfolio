import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@material-ui/icons/Work';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import CategoryIcon from '@material-ui/icons/Category';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';

class Timeline extends React.Component {
    render() {
        return (
            <section id="work" className="portfolio-mf sect-pt4 route">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="title-box text-center">
                                <h1 className="title">Experience</h1>
                                <div className="line-mf"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        // contentStyle={{ background: 'white', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '20px solid  white' }}
                        date="June 2020 - present"
                        iconStyle={{ background: '#0EC0D7', color: '#fff' }}
                        icon={<LocalHospitalIcon />}>
                        <h3 className="vertical-timeline-element-title">Technical Leader</h3>
                        <h4 className="vertical-timeline-element-subtitle">AIHealth - NSW Health</h4>
                        <p>Architecture management and development of mental care apps using ReactJS, .NET, Azure and Dynamics CRM</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="July 2019 - November 2019"
                        iconStyle={{ background: '#0EC0D7', color: '#fff' }}
                        icon={<CategoryIcon fontSize="large" />}>
                        <h3 className="vertical-timeline-element-title">Software implementer</h3>
                        <h4 className="vertical-timeline-element-subtitle">Harris Community Centre – Uniting</h4>
                        <p>Implementation of projects to encourage the community to share toys and become more environmentally aware</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="April 2016 - May 2018"
                        iconStyle={{ background: '#0EC0D7', color: '#fff' }}
                        icon={<PhoneInTalkIcon />}>
                        <h3 className="vertical-timeline-element-title">HITSS – Claro</h3>
                        <h4 className="vertical-timeline-element-subtitle">Software Engineer</h4>
                        <p>Analysis, support and development of requirements for management systems, Web service interfaces and business validations for telecommunications solutions with .NET and Oracle technologies</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="November 2014 - April 2016"
                        iconStyle={{ background: '#0EC0D7', color: '#fff' }}
                        icon={<EmojiTransportationIcon />}>
                        <h3 className="vertical-timeline-element-title">Busqo</h3>
                        <h4 className="vertical-timeline-element-subtitle">Web developer</h4>
                        <p>Development and maintenance of In-House and Marketplace apps, process automation and Web service integrations for the insurance broker business, using .NET, Azure, AWS, Selenium, Web crawlers, SQL Server and MySql</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="February 2013 - November 2014"
                        iconStyle={{ background: '#0EC0D7', color: '#fff' }}
                        icon={<LocalHospitalIcon />}>
                        <h3 className="vertical-timeline-element-title">CNT Sistemas de informacion</h3>
                        <h4 className="vertical-timeline-element-subtitle">Junior developer</h4>
                        <p>Maintenance and development of requirements for hospitals management system based in ASP.NET with WCF services and SQL Server </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </section>
        );
    }
}

export default Timeline;