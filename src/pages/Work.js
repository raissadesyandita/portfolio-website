import React, { useState } from "react";
import { 
    Container,
    Row, Col,
    Popover, PopoverHeader, PopoverBody 
} from "reactstrap";
import FunD from "../images/FUNd-logo.png";
import Website from "../images/website.png";
import Application from "../images/application.png";


const Work = (props) => {

    const[popoverOpen, setPopoverOpen] = useState(false);
    const toggle = () => setPopoverOpen(!popoverOpen);

    return (
        <>
        <Container
            className="themed-container" 
            fluid={true}
            style={{
                height: "1500px",
                backgroundColor: "lightgray",
            }}
        >
            <br />
            <br />
            <hr 
                style={{
                    borderColor: "50px solid lightgray"
                }}
            />
            <h2
                className="work-sub"
            >
                Latest Project :
            </h2>
            <img 
                className="project-title"
                src={FunD}
                alt="fund"
                id="Popover1"
                type="button" 
            />
            <Popover
                placement="right"
                isOpen={popoverOpen}
                target="Popover1"
                toggle={toggle}
            >
                <PopoverHeader
                    className="popover-style"
                >
                    Why using FUNd?
                </PopoverHeader>
                <PopoverBody
                    className="popover-style"
                >
                    With FUNd, track your entertainment subscription expenses & set budget limit every month, therefore you shouldn’t be worried about either overdue or over budget. As an addition, you can track the historical expenses as well.
                </PopoverBody>
            </Popover>
            <h3
                className="project-tagline"
            >
                Track your expenses with fun.
            </h3>
            {/* <h2
                className="project-description"
            >
                With FUNd, track your subscription expenses & set budget limit every month, therefore you shouldn’t be worried about either overdue or over budget. As an addition, you can track the historical expenses as well.
            </h2> */}
            <Container
                className="ui-design"
            >
                {/* <h4>UI Design</h4> */}
                <Row>
                    <Col>
                    <img
                        className="website-ui"
                        src={Website}
                        alt="web-ui"
                    />
                    </Col>
                    <Col>
                    <img
                        className="application-ui"
                        src={Application}
                        alt="mob-ui"
                    />
                    </Col>
                </Row>
            </Container>
        </Container>
        </>
    )
}


export default Work;