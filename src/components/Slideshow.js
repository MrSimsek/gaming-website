import React from "react";
import styled from "styled-components";

const Section = styled.section``;

const SlideshowContainer = styled.div`
  padding-top: 2em;
  padding-bottom: 2em;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Slides = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  width: 100%;
`;

const Slide = styled.div`
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.73)
    ),
    url(${({ imageUrl }) => imageUrl});
  background-size: cover;
  color: white;
  padding-bottom: 55px;
  width: 770px;
  height: 391px;
  display: ${({ isCurrent, isPrev, isNext }) =>
    isCurrent || isPrev || isNext ? "flex" : "none"};
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.1;
  letter-spacing: -0.32px;
  text-align: center;
  color: #c5d2e3;
  border-radius: 25px;
  margin: 1em;
  position: ${({ isNext, isPrev }) =>
    isPrev || isNext ? "absolute" : "relative"};
  top: ${({ isNext, isPrev }) => (isPrev || isNext ? "20px" : "0")};
  bottom: 0;
  left: ${({ isPrev, isNext }) =>
    isPrev ? "-220px" : isNext ? "1080px" : "0"};
  z-index: ${({ isNext, isPrev }) => (isPrev || isNext ? "-10" : "0")};
  height: ${({ isNext, isPrev }) => (isPrev || isNext ? "360px" : "391px")};
  opacity: ${({ isNext, isPrev }) => (isPrev || isNext ? "0.4" : "1")};
  transform: ${({ isNext, isPrev }) =>
    isPrev
      ? "perspective(1500px) rotateY(45deg)"
      : isNext
      ? "perspective(1500px) rotateY(-45deg)"
      : "none"};
  transition: left 0.3s ease-in-out;
`;

const Shadow = styled.div`
  margin: auto;
  width: 756px;
  height: 8px;
  border-radius: 17.5px;
  -webkit-filter: blur(4px);
  filter: blur(4px);
  background-image: linear-gradient(
    to right,
    rgba(28, 28, 30, 0),
    rgba(0, 0, 0, 0.5) 37%,
    rgba(0, 0, 0, 0.25) 72%,
    rgba(28, 28, 30, 0)
  );
`;

const Dots = styled.div`
  position: absolute;
  bottom: 35px;
  display: flex;
  flex-direction: row;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  background-color: ${({ active }) => (active ? "#fafafa" : "grey")};
  border-radius: 50%;
  margin: 5px;
`;

const SlideNavigateButton = styled.button`
  border: none;
  background: none;
  margin: 0 67px;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.57;
  letter-spacing: -0.22px;
  text-align: center;
  color: #c5d2e3;
  border-radius: 5px;
  border: solid 1px #c5d2e3;
  cursor: pointer;
  padding: 5px 15px;
  background-color: #1c1c1e;

  &:hover {
    color: #1c1c1e;
    background-color: #c5d2e3;
  }
`;

const IMAGES = [
  {
    id: 1,
    imageUrl:
      "https://cdn.zeplin.io/5ee9c3b9cc2c462aa1abc981/assets/34479FD7-5998-4B08-9711-E04B00D3E405.png",
    text: "Valhahalalalal alkasdkasjda"
  },
  {
    id: 2,
    imageUrl:
      "https://www.powerpyx.com/wp-content/uploads/the-last-of-us-2-wallpaper.jpg",
    text:
      "Become a legendary Viking warrior raised on tales of battle and glory."
  },
  {
    id: 3,
    imageUrl:
      "https://images.pushsquare.com/3d2e6274c6162/ghost-of-tsushima-gold.900x.jpg",
    text: "Japan war sword HIIIIASDASAHSA"
  }
];

export default function Slideshow() {
  const [current, setCurrent] = React.useState(2);
  const [images, setImages] = React.useState([]);

  React.useEffect(() => {
    setImages(IMAGES);
  }, []);

  const nextPage = () =>
    current < images.length ? setCurrent(current + 1) : setCurrent(1);
  const prevPage = () =>
    current > 1 ? setCurrent(current - 1) : setCurrent(images.length);

  return (
    <Section>
      <SlideshowContainer>
        <Slides>
          <SlideNavigateButton onClick={prevPage}>PREV</SlideNavigateButton>
          {images.map(({ id, imageUrl, text }) => (
            <Slide
              key={id}
              isCurrent={current === id}
              imageUrl={imageUrl}
              isPrev={current - 1 === id}
              isNext={current + 1 === id}>
              {current === id ? text : ""}
            </Slide>
          ))}
          <SlideNavigateButton onClick={nextPage}>NEXT</SlideNavigateButton>
          <Dots>
            {images.map(({ id }) => (
              <Dot key={id} active={current === id} />
            ))}
          </Dots>
        </Slides>
        <Shadow />
      </SlideshowContainer>
    </Section>
  );
}
