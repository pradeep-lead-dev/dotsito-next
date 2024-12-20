"use client"
import React from "react";
import { Collapse } from "antd";

const { Panel } = Collapse;

export default function Faq3({ serviceDetails, isMobile }) {
  return (
    <Collapse 
      accordion 
      className=""
      style={{ marginBottom: "1rem", marginTop: '16px' }}
    >
      {serviceDetails?.questions.map((question, index) => (
        <Panel
          key={index}
          style={{padding: !isMobile ?'.5rem' : '0'}}
          header={
            <li style={{ fontWeight: "none", textAlign: "left" }}>
              {question?.question}
            </li>
          }
        >
          <li className="" style={{padding: '1rem'}}>{question?.answer}</li>
        </Panel>
      ))}
    </Collapse>
  );
}
