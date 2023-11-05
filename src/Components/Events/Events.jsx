import React from "react";
import "./Events.css";
import { Particles1 } from "./Particless";

export const Events = () => {
  return (
    <>
      <div className="events">
        <h1>EVENTS</h1>
      </div>
      <div className="particles-container">
        <Particles1 />
      </div>

      <div className="eventlist">
        <div className="row1 row">
          <div className="box box1 eleft " id="box-1">
            <button className="ebtn1 ebtn">READ MORE</button>
          </div>
          <div className="box box2 eright" id="box-2">
            <h2>LAUNCHPAD</h2>
            <p>
              College students would use pitch desk for presentation of Idea in
              stage 1 and Startups would use the pitch desk to earn fundings
              from investors in stage 2, both stages will have ppt
              presentations.
            </p>
          </div>
        </div>
        <div className="row2 row">
          <div className="box box3 eleft" id="box-3">
            <h2>QUEST-YOUTH</h2>
            <p>
              Innovation quiz would test the knowledge of our technocrats in the
              domains of startup, innovation and entrepreneurship. This event
              allows students to put on their innovation hats and explore
              abundant paths to success.
            </p>
          </div>

          <div className="box box4 eright " id="box-4">
            <button className="ebtn2 ebtn">READ MORE</button>
          </div>
        </div>
        <div className="row3 row">
          <div className="box box5 eleft " id="box-5">
            <button className="ebtn3 ebtn">READ MORE</button>
          </div>
          <div className="box box6 eright" id="box-6">
            <h2>STARTUP SPARK</h2>
            <p>
              College students would have the opportunity to take lectures from
              the ones who have been there and done that. They get to meet great
              entrepreneurs which might be the foundation stone to thier
              ventures.
            </p>
          </div>
        </div>
        <div className="row4 row">
          <div className="box box7 eleft" id="box-7">
            <h2>CULTURAL EVENT</h2>
            <p>
              With cultural nights adorned by various celebrity singers and
              evenings with celebrity comic specials Udhbav is all set to be a
              complete package of tech, innovation and entertainment!!
            </p>
          </div>
          <div className="box box8 eright " id="box-8">
            <button className="ebtn4 ebtn">READ MORE</button>
          </div>
        </div>
        <div className="row5 row">
          <div className="box box9 eleft " id="box-9">
            <button className="ebtn5 ebtn">READ MORE</button>
          </div>
          <div className="box box10 eright" id="box-10">
            <h2>VISIONARY VENTURES</h2>
            <p>
              Explore entrepreneurship through film-making. This event delves
              into startup and entrepreneurship journeys in a cinematic format,
              offering valuable insights into challenges and triumphs.
            </p>
          </div>
        </div>
        <div className="row6 row">
          <div className="box box11 eleft" id="box-11">
            <h2>BIZBLITZ</h2>
            <p>
              A creative fusion of fashion and food innovations. Attendees can
              explore stalls featuring the latest fashion trends and culinary
              delights, providing a delightful sensory experience.
            </p>
          </div>
          <div className="box box12 eright " id="box-12">
            <button className="ebtn6 ebtn">READ MORE</button>
          </div>
        </div>
        <div className="row7 row">
          <div className="box box13 eleft " id="box-13">
            <button className="ebtn7 ebtn">READ MORE</button>
          </div>
          <div className="box box14 eright" id="box-14">
            <h2>SEEDSTART SUMMIT</h2>
            <p>
              Participants get the opportunity to put up their stalls and
              display their product. Investors coming in can visit those stalls
              and even buy from there or sponsor their busines!!
            </p>
          </div>
        </div>
        <div className="row8 row">
          <div className="box box15 eleft" id="box-15">
            <h2>PITCH PERFECT</h2>
            <p>
              A session where industry experts, investors and startup founders
              give valuable insights from their entrepreneurial journey and
              interact with the students .
            </p>
          </div>
          <div className="box box16 eright " id="box-16">
            <button className="ebtn8 ebtn">READ MORE</button>
          </div>
        </div>
      </div>
    </>
  );
};
