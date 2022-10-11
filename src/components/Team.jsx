import _ from "lodash";

export const Team = (props) => {
  const team = _.shuffle(props.data);
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Meet the Team</h2>
          <p>
            Meet our amazing team. We employ the best in the industry so as to
            get a mix of both...
          </p>
        </div>
        <div id="row">
          {props.data
            ? team.slice(0, 4).map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
                  <div className="thumbnail">
                    {" "}
                    <img
                      src={d.img}
                      alt="..."
                      className="team-img"
                      style={{
                        width: "100%",
                        height: "24rem",
                        objectFit: "cover",
                      }}
                    />
                    <div className="caption">
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
