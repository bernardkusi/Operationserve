import Head from "next/head";
import React, { useState } from "react";
import Layout from "../components/Layout";


const missions = ({imageshown,setimageshown,navopen,togglenav}) => {

  return (
    <Layout imageshown={imageshown} imagetext="Our mission and service" navopen={navopen} togglenav={togglenav}>
       <Head>
        <title>Operation Serve-missions and services</title>
      </Head>
      <>
        <div className="missionssection">
          <div className="page">
            <h3>Our Mission</h3>
            <h5 className="heading">Bring In-The recruiting</h5>
            <p>
              Enrolling Christians who are ready to labour in God’s vineyard. -
              Some events that exposes people into missions include
            </p>
            <br />

            <h5 className="heading">Bring Up-The training</h5>
            <p>
              Enrolling Christians who are ready to labour in God’s vineyard. -
              Some events that exposes people into missions include
            </p>
            <br />

            <h5 className="heading">Send Out-The commissioning</h5>
            <p>
              Dispatching and placing equipped laborers with the conviction to
              serve as witness of Jesus Christ (using quality, relevant and
              culturally appropriate methods).
            </p>
            <br />

            <h5 className="heading">Transform-The ministering</h5>
            <p>
              Catalyst to ignite Godly reaction and raising a new breed of
              Christ like generation. Through the leading if the Holy Ghost
              Legates have served as catalyst of transformation through
              Spiritual Initiative such as
            </p>
            <br />
          </div>
        </div>
        <div className="servicessection" id="services">
          <div className="page">
            <h3>What We Do</h3>
            <h5 className="heading">Operation Studd</h5>
            <p>
              These are high school leavers involved in short term missions.
              These ones also serve as volunteers in our Potter’s house training
              institution.
            </p>
            <br />

            <h5 className="heading">Office serve</h5>
            <p>
              This is equipping and training professionals to have a mind-set
              that allows them to be witness for Christ in wherever they find
              themselves. Professionals are now encouraged to commit at least
              3years of their working life into this project
            </p>
            <br />

            <h5 className="heading">Operation Serve</h5>
            <p>
              It blends ministry and community service into an effective
              catalyst for community transformation. OS recruits and equips
              tertiary school graduates to do their national service alongside
              missions in areas least reach with the gospel. People who sign up
              are trained in the Potters house institution and are sent in teams
              to areas where the gospel is least experience.
            </p>
            <br />

            <h5 className="heading">O.S discipleship camp</h5>
            <p>
              Indigenous missionaries from the fields we serve in, are
              discipled, trained and inspired to reach their own people with the
              gospel.
            </p>
            <br />

            <h5 className="heading">Potters house training</h5>
            <p>
              The vision of this institution is to pass on knowledge to God’s
              people that eventually will make them missionary. The institute
              receives over 45 spirit filled resource persons from different
              part of the world with very rich experiences in their various walk
              of life. Training cuts through six main faculties, namely: Culture
              and Ethics, Missions and Evangelism, Theology and Ministry,
              Leadership and Personal development, Social action and Psychology
              and Administration and Management. Under this institution are
              evaluation camps for missionaries, camps for disciples from the
              mission field and seminars to inspire people for missions.
            </p>
            <br />

            <h5 className="heading">
              Operation Serve Project Unreached, a.k.a Going beyond boarders
            </h5>
            <p>
              This is the international phase to reach unreached people groups
              in other nations worldwide.
            </p>
            <br />

            <h5 className="heading">Hudson Taylor Missions</h5>
            <p>
              Health workers mostly doctors are trained to use the first two
              years of their working life alongside missions .
            </p>
            <br />

            <h5 className="heading">Goforth missions</h5>
            <p>
              Teachers trained and inspired to be missionary even at their work
              place.
            </p>
            <br />

            <h5 className="heading">Operation Slessors</h5>
            <p>
              The marginalised are reach with the gospel and disciple to reach
              others with the gospel.
            </p>
            <br />
          </div>
        </div>
      </>
    </Layout>
  );
};

export default missions;
