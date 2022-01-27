import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import getImagefromNasaSite from "../../../actions/getImagefromNasaSite";
import Loading from "../Loading";
// import heart from "../../../../public/asset/heart.svg";
import { FetchImageWrapper, CardWrapper } from "./FetchImagesStyle";

const FetchImages = () => {
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getImagefromNasaSite().then((response) => {
      setPhotos(
        [...response.data].map((object) => {
          return {
            ...object,
            toggle: false,
            likebutton: "gray",
          };
        })
      );
    });
  }, []);

  const likeButtonclick = (e, index, toggle) => {
    if (toggle == false) {
      const photocopy = [...photos];
      photocopy[index]["toggle"] = true;
      photocopy[index]["likebutton"] = "#de5d83";
      setPhotos(photocopy);
    }
    if (toggle == true) {
      const photocopy2 = [...photos];
      photocopy2[index]["toggle"] = !toggle;
      photocopy2[index]["likebutton"] = "gray";
      return setPhotos(photocopy2);
    }
  };

  return (
    <FetchImageWrapper>
      {photos.length ? (
        photos.map((item, index) => {
          {
            console.log("CSDx", item);
          }
          return (
            <CardWrapper>
              <Card key="item.title">
                <Card.Title className="card-title-top">SpaceGallery</Card.Title>
                <Card.Img variant="top" className="card-image" src={item.url} />
                <Card.Body>
                  <Card.Title className="card-title">{item.title}</Card.Title>
                  <Card.Text>{item.explanation}✨</Card.Text>
                  <Button
                    variant="primary"
                    className="like-button"
                    onClick={(e) => {
                      likeButtonclick(e, index, item.toggle);
                    }}
                  >
                    <i
                      className="bi bi-heart-fill"
                      style={{
                        color: `${item.likebutton}`,
                      }}
                    ></i>
                  </Button>
                </Card.Body>
              </Card>
            </CardWrapper>
          );
        })
      ) : (
        <Loading />
      )}
    </FetchImageWrapper>
  );
};

export default FetchImages;
