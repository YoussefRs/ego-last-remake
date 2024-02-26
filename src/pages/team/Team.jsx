import React from "react";
import SubHeader from "../../components/global/sub-header/SubHeader";

import team1 from "../../assets/images/team/team-1.jpg";
import team2 from "../../assets/images/team/team-2.jpg";
import team3 from "../../assets/images/team/team-3.jpg";
import TeamMember from "../../components/team/team-member/TeamMember";

const Team = () => {
  const teamData = [
    {
      image: team1,
      name: "Principal M.A. Sattar",
      title: "Mohammad Shahjahan",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquam, tellus id pellentesque viverra, metus lacus lobortis augue, sed malesuada urna sapien id orci. Maecenas pharetra mauris quis tincidunt egestas. Sed condimentum felis quis nulla varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam diam diam, porttitor quis mollis non, suscipit id tellus. Nullam a ultrices sem, vel tincidunt felis. Sed eu suscipit erat. Nam malesuada, leo porta rhoncus blandit, ipsum tellus fringilla mi, ac pretium nisl turpis sit amet purus. Mauris pellentesque tincidunt lacus commodo lobortis. Nulla consectetur scelerisque molestie.",
    },
    {
      image: team2,
      name: "Prof. Md Mostafizur Rhaman",
      title: "Advisor, Shyamoli Ideal Polytechnic Institute",
      description:
        "Pellentesque eu bibendum massa. Morbi et metus adipiscing libero lobortis accumsan ac eget turpis. Duis vehicula, velit sit amet vehicula gravida, nibh dui cursus risus, eget tristique tortor dolor id ligula. Integer id iaculis ante. In massa dolor, consequat quis sodales vel, cursus sed ligula. Sed neque est, pharetra ac enim ut, dignissim molestie tellus. Cras luctus est sit amet dui condimentum, eu varius tellus molestie. Curabitur eleifend faucibus pharetra. Mauris non elit dui.",
    },
    {
      image: team3,
      name: "Mohammad Shahjahan",
      title: "Director, Shyamoli Ideal Polytechnic Institute",
      description:
        "Donec justo magna, mattis a ipsum in, pretium aliquet dolor. Vestibulum rhoncus dolor placerat diam laoreet dictum. Integer auctor augue eget nibh ultrices, vitae fermentum est vehicula. Nullam suscipit metus felis. Ut arcu ante, mollis quis urna in, facilisis placerat leo. Duis auctor diam at quam laoreet, vitae blandit mi fermentum. Fusce mollis pellentesque sem, non eleifend nisl. Suspendisse nisi nulla, consectetur sed pellentesque vitae.",
    },
  ];
  return (
    <div className="content container">
      <div className="page-wrapper">
        <SubHeader
          title={"Leadership Team"}
          path={[{ url: "/", label: "Home" }]}
          current={"Leadership Team"}
        />
        <div className="page-content">
          <div className="row page-row">
            <div className="team-wrapper col-lg-8 col-md-7 col-12">
              {teamData.map((mmbr, i) => (
                <TeamMember
                  key={i}
                  image={mmbr.image}
                  name={mmbr.name}
                  title={mmbr.title}
                  description={mmbr.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
