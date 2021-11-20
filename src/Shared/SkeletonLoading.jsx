import React from "react";
import { Card, Col, } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
/**
 * Skeleton Colors
 */
const baseColor = "#3399ff0d";
const highlightColor = "#ffffff15";
function SekeletonMovieCard() {
  return (
      <Col xs={1} md={4} lg={3}>
        <Card className="border-0 p-0 bg-transparent">
          <Skeleton
            className="a-r-3"
            baseColor={baseColor}
            highlightColor={highlightColor}
          />
        </Card>
        <Card.Body className="p-0 mt-1">
          <Skeleton
            height={70}
            baseColor={baseColor}
            highlightColor={highlightColor}
          />
        </Card.Body>
      </Col>
  );
}

export { SekeletonMovieCard };
