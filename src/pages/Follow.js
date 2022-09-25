import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Followers from "../components/follow/Followers";
import Following from "../components/follow/Following";
import FollowHeader from "../components/header/FollowHeader";
import styled from "styled-components";
import { useQuery } from "react-query";
import { proflieAPI } from "../shared/api";

const Follow = () => {
  const { userid, select } = useParams();
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    if (select === "followers") {
      setTabIndex(0);
    } else if (select === "following") {
      setTabIndex(1);
    }
  }, [select]);

  const { data, isLoading, isError } = useQuery("getProfileData", () =>
    proflieAPI.otherProfile(userid)
  );
  const profileData = data?.data.data;
  const memberId = profileData?.memberId;

  const tabArray = [
    {
      key: "followers",
      tab: (
        <div
          className={tabIndex === 0 ? "select" : ""}
          onClick={() => setTabIndex(0)}
        >
          Followers
        </div>
      ),
      content: <Followers memberId={memberId} />,
    },
    {
        key: "following",
        tab: (
          <div
            className={tabIndex === 1 ? "select" : ""}
            onClick={() => setTabIndex(1)}
          >
            Following
          </div>
        ),
        content: <Following memberId={memberId} />,
      },
  ];

  if (isLoading) return <div>Loading..</div>;
  if (isError) return <div>Error</div>;

  return (
    <StyledContainer>
      <FollowHeader nickname={profileData?.nickname} userId={userid} />
      <StyledTabDiv>
        <StyledTab>
          {tabArray.map((item) => {
            return (
              <div key={item.key}>
                {item.tab}
              </div>
            );
          })}
        </StyledTab>
        {tabArray[tabIndex].content}
      </StyledTabDiv>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 100%;
`;

const StyledTabDiv = styled.div`
  position: absolute;
  width: 100%;
  top: 50px;
`;

const StyledTab = styled.div`
  display: flex;
  justify-content: space-around;
  cursor: pointer;
  div {
    padding: 0 0 10px 0;
    margin: 10px 0 0 0;
  }
  .select {
    font-weight: bold;
    border-bottom: 3px solid #1d9bf0;
  }
`;

export default Follow;
