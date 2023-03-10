import { useParams } from "react-router-dom";

const profileData = {
    seoyoung:{
        name:'윤서영',
        description:
        'Frontend Engineer @ Laftel Inc. 재밌는 것만 골라서 하는 개발자'
    },
    gildong: {
        name: '홍길동',
        description: '전래동화의 주인공'
    }
};

const Profile = () => {
    const {username} = useParams();
    console.log(username);
    const profile = profileData[username];
    if(!profile){
        return <div>존재하지 않는 유저입니다.</div>;
    }
    return (
        <div>
            <h3>
                {username}({profile.name})
            </h3>
            <p>{profile.description}</p>
        </div>
    );
};

export default Profile;