import Head from "next/head";
import Layout from "../components/Layout";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

export default function Home({ navopen, togglenav }) {
  return (
    <Layout navopen={navopen} togglenav={togglenav}>
      <Head>
        <title>Operation Serve-Home</title>
      </Head>
      <>
        <div id="home">
          <div className="hero">
            <h1 className="intro">
              Welcome To <br />
              <span> Operation Serve</span>
            </h1>
            <h3 className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <a href="#" className="click">
              Call Us Now
            </a>
          </div>
        </div>

        <div className="aboutsection">
          <div className="page">
            <h3>What We Do</h3>
            <h5 className="heading">Who we are.</h5>
            <p>
              Operation serve is a mission agency that trains and equips
              Christians to serve as missionaries in wherever they find
              themselves. It offers a dynamic and relevant edge to rural, urban
              and international missions. It weaves evangelism, discipleship and
              community empowerment into a beautiful fabric which prompts
              transformation.
            </p>
            <h5 className="heading">What We Do</h5>
            <p>
              To bring spiritual and social transformation to communities
              through the power of Christ. At the heart of Operation serve is
              the desire to honour God intimately before corporately. We believe
              one’s personal relationship with God will outflow into a longing
              to please God with our substance and labour in the field.{" "}
            </p>
          </div>
        </div>

        <div className="page">
          <div className="swiper">
            <Swiper
              spaceBetween={0}
              
              // slidesPerView={3}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide className="slide">Slide 1</SwiperSlide>
              <SwiperSlide className="slide">Slide 2</SwiperSlide>
              <SwiperSlide className="slide">Slide 3</SwiperSlide>
              <SwiperSlide className="slide">Slide 4</SwiperSlide>
              ...
            </Swiper>
          </div>
        </div>

        <div className="historysection" id="history">
          <div className="page">
            <h3>Our History</h3>
            <p>
              The OS story began in January 2012 during a mission trip organized
              by Excellent Youth Outreach to Gbedema, a village in the Fumbisi
              district of the Upper East Region. After the missions trip, three
              of the team members (who later served as the OS Coordinating Team)
              continued to Tamale in the Northern Region. Some of the
              communities visited were Zamashegu, Nabila, and Jingba. It was
              disheartening to discover that some of these communities had no
              schools, while others did not have one educated person. Nabila for
              example, had a school building, but no teachers. <br />
              It was here that a burden was received by Richess Okai who shared
              it with her friends Kate Azumah and Ato Manful to send Christian
              National Service personnel to some of these communities to serve
              their spiritual and educational needs. It was later discovered
              that many other communities had no schools and churches, and were
              largely unreached with the Gospel of Jesus Christ.
              <br />
              <br />
              On returning to Accra, the team began work towards forming and
              running the OS idea. A number of knowledgeable and experienced
              people were invited to give their input. Consequently, a 3-week
              training package was put together for the first training which
              came off in August 2012.
              <br />
              <br />
              It had six signees in all. Since its inception to date, more than
              130 personnel (known in OS circles as ‘legates’) from five African
              countries have been trained and dispatched to serve in several
              communities, particularly in Northern Ghana. Most legates serve as
              teacher missionaries.
              <br />
              <br />
              The faithfulness of God has expanded this ministry into different
              segment to bless the nations.
            </p>
          </div>
        </div>

        <div className="contactsection" id="leadership">
          <div className="page">
            <h3>Our Leardership</h3>
            <p>
              Operation serve believes in the power of team work and hence our
              culture has been to work in teams at every level of leadership.
              The ministry from 2012 to 2018 had a team of 3 main coordinators
              namely; Richess Okai, Ato Manful and Kate Azumah with Richess
              serving as lead coordinator.
            </p>
            <br />
            <p>
              Presently the team running the ministry have evolved to have most
              key members being people that once served on the mission field as
              legates.
            </p>
            <br />
            <p>
              Each division of OS has a coordinator and a team that runs. The
              various coordinators come together to form the EMBASSY.
            </p>
            <h4 className="heading">Present Staff</h4>
            <ul className="stafflist">
              <li>
                <p className="staffname">Mrs. Richess Okai</p>
                <p className="staffposition">International lead coordinator.</p>
              </li>
              <li>
                <p className="staffname">Ps. Selwyn Okai</p>
                <p className="staffposition">Lead Chaplain</p>
              </li>
            </ul>
            <h4 className="heading">Volunterring Staff</h4>
            <p>
              Operation Serve Global thrives on the system of volunteerism.
              Presently there are about 20peope serving as volunteers from
              various walks of life. <br />
              Each volunteer works in a team of at most five people and these
              very faithful men and women have worked diligently to support the
              growth of the ministry.
            </p>
            <h4 className="heading">Patrons and mentors</h4>
            <p>
              Our mentors serve as counsellors to this ministry. By them the
              lord has brought direction to this ministry.
            </p>
            <ul className="stafflist">
              <li>
                <p className="staffname">Dr. Mrs. Lilian Ayete-Nyampong</p>
                <p className="staffposition">
                  Director Research Department, CHRAJ
                </p>
              </li>
              <li>
                <p className="staffname">Rev Ray Mensah</p>
                <p className="staffposition">
                  President of Ghana Evangelical and Missions Association
                </p>
              </li>
              <li>
                <p className="staffname">Rev. Dr. Samuel Ayete-Nyampong</p>
                <p className="staffposition">
                  Former clerk of general assembly, Presbyterian church of Ghana
                  (2012-2019).
                </p>
              </li>
              <li>
                <p className="staffname">Ps John Croffet</p>
                <p className="staffposition">
                  Founder Excellent Youth Outreach.
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="contactsection" id="contact">
          <div className="page">
            <h3>Contact Us</h3>
            <p>Get in touch with us through any of the following platforms</p>
            <table>
              <tbody>
                <tr>
                  <td>Email</td>
                  <td>Operationserve@gmail.com</td>
                </tr>
                <tr>
                  <td>Telephone</td>
                  <td>0592724408/0592724408</td>
                </tr>
                <tr>
                  <td>Facebook</td>
                  <td>Operationserve</td>
                </tr>
                <tr>
                  <td>Instagram</td>
                  <td>Operationserve</td>
                </tr>
                <tr>
                  <td>Location</td>
                  <td>UG Campus</td>
                </tr>
              </tbody>
            </table>
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.43135023063!2d-0.19841308569500524!3d5.650567334263379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9c7ebaeabe93%3A0xd78257e67498c1a0!2sUniversity%20of%20Ghana!5e0!3m2!1sen!2sgh!4v1663650741563!5m2!1sen!2sgh"
                width={"100%"}
                height={"100%"}
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
}
