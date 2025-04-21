import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaGraduationCap,
  FaBriefcase,
  FaTools,
  FaUserTie,
} from "react-icons/fa";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  tools,
  framework,
  services,
  education,
} from "../../content_option";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="about-section">
        <Helmet>
          <meta charSet="utf-8" />
          <title>About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        {/* Header */}
        <Row className="text-center mb-5 fade-in">
          <Col>
            <h1 className="display-4 fw-bold">👋 About Me</h1>
            <p className="lead text-muted">{dataabout.title}</p>
            <hr className="custom-underline mx-auto" />
          </Col>
        </Row>

        {/* About Me Section */}
        <Row className="section-content mb-5 align-items-center">
          <Col lg={6}></Col>
          <Col lg={6}>
            <p className="about-text fade-in">{dataabout.aboutme}</p>
          </Col>
        </Row>

        {/* Education Section */}
        <SectionTitle icon={<FaGraduationCap />} title="Education" />
        <Row className="section-content mb-5">
          <Col>
            <div className="timeline">
              {education.map((item, idx) => (
                <TimelineItem
                  key={idx}
                  icon={item.logo}
                  title={item.school}
                  date={item.year}
                />
              ))}
            </div>
          </Col>
        </Row>

       

        {/* Skills Section */}
        <SectionTitle icon={<FaTools />} title="Skills" />
        <Row className="section-content mb-5">
          <Col>
            {skills.map((skill, idx) => (
              <SkillBar
                key={idx}
                name={skill.name}
                value={skill.value}
                icon={skill.icon}
              />
            ))}
          </Col>
        </Row>

        <SectionTitle icon={<FaTools />} title="Tools" />
<Row className="section-content mb-5">
  <Col>
    {tools.map((tool, idx) => (
      <SkillBar
        key={idx}
        name={tool.name}
        value={tool.value}
        icon={tool.icon}
      />
    ))}
  </Col>
</Row>


<SectionTitle icon={<FaTools />} title="Framework" />
<Row className="section-content mb-5">
  <Col>
    {framework.map((fw, idx) => (
      <SkillBar
        key={idx}
        name={fw.name}
        value={fw.value}
        icon={fw.icon}
      />
    ))}
  </Col>
</Row>
      </Container>
    </HelmetProvider>
  );
};

// Reusable Components
const SectionTitle = ({ icon, title }) => (
  <Row className="mb-4">
    <Col>
      <h3 className="section-title">
        {icon} {title}
      </h3>
    </Col>
  </Row>
);

const TimelineItem = ({ icon, title, date }) => (
  <div className="timeline-item fade-in">
    <img src={icon} alt={title} className="timeline-icon" />
    <div className="timeline-content">
      <h5>{title}</h5>
      <p>{date}</p>
    </div>
  </div>
);

const SkillBar = ({ name, value, icon }) => (
  <div className="skill-item fade-in mb-3">
    <div className="d-flex align-items-center mb-1">
      {icon && (
        <img
          src={icon}
          alt={name}
          style={{ width: "30px", marginRight: "10px" }}
        />
      )}
      <strong>{name}</strong>
    </div>
    <div className="skill-bar">
      <div className="skill-progress" style={{ width: `${value}%` }}>
        <span>{value}%</span>
      </div>
    </div>
  </div>
);
