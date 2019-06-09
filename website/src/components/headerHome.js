import React from "react";
import { Button, Carousel, CarouselItem, CarouselControl } from "reactstrap";

import HeaderHomeStyles from "./headerHome.module.scss";

const items = [
    {
        title: "Reporting for duty",
        offsetTitle: "Astro",
    },
    {
        title: "Slide 2",
        offsetTitle: "1234",
    },
    {
        title: "Slide 3",
        offsetTitle: "Aasd",
    },
];

class HeaderHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            previousControl: items.length,
            nextControl: 2,
        };

        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
        this.getNextOrPreviousIndex = this.getNextOrPreviousIndex.bind(this);
        this.renderIndexToControls = this.renderIndexToControls.bind(this);
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        this.renderIndexToControls(true);
    }

    previous() {
        if (this.animating) return;
        this.renderIndexToControls(false);
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.renderIndexToControls();
    }

    getNextOrPreviousIndex(next) {
        let index = this.state.activeIndex;
        if (next) {
            index =
                this.state.activeIndex === items.length - 1
                    ? 0
                    : this.state.activeIndex + 1;
        } else {
            index =
                this.state.activeIndex === 0
                    ? items.length - 1
                    : this.state.activeIndex - 1;
        }

        return index;
    }

    renderIndexToControls(next) {
        const activeIndex = this.getNextOrPreviousIndex(next);
        let previousControl = activeIndex <= 0 ? items.length : activeIndex;
        let nextControl = activeIndex >= items.length - 1 ? 1 : activeIndex + 2;

        this.setState({
            activeIndex,
            previousControl,
            nextControl,
        });
    }

    render() {
        const { activeIndex } = this.state;

        const slides = items.map(item => {
            return (
                <CarouselItem
                    className="col-sm-12 h-100"
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.title}
                >
                    <div className="container h-100">
                        <div className="row h-100 align-items-center">
                            <div className="col-lg-7 offset-lg-1">
                                <h1 className="text-uppercase mb-4 position-relative">
                                    <span
                                        className={`${
                                            HeaderHomeStyles.offsetTitle
                                        } offset-title text-uppercase`}
                                    >
                                        {item.offsetTitle}
                                    </span>
                                    <span
                                        className={`${
                                            HeaderHomeStyles.title
                                        } heading`}
                                    >
                                        {item.title}
                                    </span>
                                </h1>
                                <Button className="btn-lg" color="secondary">
                                    Discover More
                                </Button>
                            </div>
                        </div>
                    </div>
                </CarouselItem>
            );
        });

        return (
            <div className="container-fluid h-100">
                <Carousel
                    className="row h-100"
                    activeIndex={activeIndex}
                    next={this.next}
                    previous={this.previous}
                    pause="hover"
                    slide={true}
                    interval={10000}
                >
                    {slides}
                    <CarouselControl
                        direction="prev"
                        directionText={this.state.previousControl.toString()}
                        onClickHandler={this.previous}
                    />
                    <CarouselControl
                        direction="next"
                        directionText={this.state.nextControl.toString()}
                        onClickHandler={this.next}
                    />
                </Carousel>
            </div>
        );
    }
}

export default HeaderHome;
