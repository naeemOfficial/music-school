import React from "react";
import { useParams } from "react-router-dom";
import "typeface-lora";
import "typeface-open-sans";
import ASlider from "../../ASlider/ASlider";
import Form from "../../Form/Form";
import "./TeacherDetails.css";
import NotFound from "../../NotFound/NotFound";

const TeacherDetails = ({ reviews }) => {
  const { id } = useParams();
  const teacher = reviews.find((review) => review.id === parseInt(id, 10));

  if (!teacher) {
    return <NotFound></NotFound>;
  }

  const skills = [
    { name: "Violin", percentage: 87 },
    { name: "Piano", percentage: 75 },
    { name: "Cello", percentage: 72 },
    { name: "Voice", percentage: 95 },
  ];

  return (
    <div>
      <div className="flex max-w-7xl mx-auto gap-8 my-24">
        <img
          src={teacher.image}
          alt={teacher.name}
          className="w-[570px] h-[570px] object-cover"
        />
        <div>
          <h2 className="text-4xl font-lora mb-5">{teacher.name}</h2>
          <p className="text-[13px] font-sans leading-7 w-[570px] opacity-60">
            Sea meis movet voluptua ne, ea oportere argumentum cum. Has purto
            repudiandae id, ea conceptam percipitur usu. Sit solet philosophia
            at, cu legimus rationibus per. Mei ut tale cibo minimum, pri ei dico
            virtute. Eum ne facete interesset consequuntur, facer prompta vim
            at, semper omnesque concludaturque qui id. His in regione lucilius
            deterruisset, ea mutat similique eam, facilis blandit in qui. <br />{" "}
            <br />
            Sea meis movet voluptua ne, ea oportere argumentum cum. Has purto
            repudiandae id, ea conceptam percipitur usu. Sit solet philosophia
            at, cu legimus rationibus per. Mei ut tale cibo minimum, pri ei dico
            virtute. Eum ne facete interesset consequuntur, facer prompta vim
            at, semper omnesque concludaturque qui id. His in regione lucilius
            deterruisset, ea mutat similique eam, facilis blandit in qui.
          </p>
          <div className="text-[13px] mt-5">
            <div className="skill-box mb-3">
              <span className=" opacity-60">Violin</span>

              <div className="skill-bar">
                <div className="skill-per html">
                  <span className="tooltip">87%</span>
                </div>
              </div>
            </div>

            <div className="skill-box mb-3">
              <span className="opacity-60">Piano</span>

              <div className="skill-bar">
                <div className="skill-per css">
                  <span className="tooltip">75%</span>
                </div>
              </div>
            </div>

            <div className="skill-box mb-3">
              <span className="opacity-60">Cello</span>

              <div className="skill-bar">
                <div className="skill-per javascript">
                  <span className="tooltip">95%</span>
                </div>
              </div>
            </div>

            <div className="skill-box">
              <span className="opacity-60">Voice</span>

              <div className="skill-bar">
                <div className="skill-per nodejs">
                  <span className="tooltip">98%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ASlider></ASlider>
      <Form></Form>
    </div>
  );
};

export default TeacherDetails;
