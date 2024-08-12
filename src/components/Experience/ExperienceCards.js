import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ExperienceCards(props) {
  return (
    <Card className="project-card-view" style={{ maxWidth: '40rem', height: '50rem' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '14rem' }}>
        <Card.Img
          variant="top"
          src={props.imgPath}
          alt="card-img"
          style={{ width: '70%', height: 'auto', objectFit: 'contain' }}
        />
      </div>
      <Card.Body>
        <Card.Title style={{ fontSize: '0.95rem', whiteSpace: 'pre-line' }}>{props.title}</Card.Title>
        <Card.Text style={{ fontSize: '0.8rem', textAlign: "justify" }}>
          {props.description.split('.').map((sentence, index) => (
            <React.Fragment key={index}>
              {sentence.trim()}
              {sentence && '.'}
              <br />
            </React.Fragment>
          ))}
        </Card.Text>

        <Card.Text >{props.date} </Card.Text>
        {/* <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button> */}
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Website"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ExperienceCards;
