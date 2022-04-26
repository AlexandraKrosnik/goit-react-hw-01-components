import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import user from "../data/user.json"
import data from "../data/data.json"

export const App = () => {
  return (  
    <div className="main">
      <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
      />  
      <div className="statistics">
        <Statistics
          title="Upload stats"
          stats={data}          
        />
        <Statistics          
          stats={data}          
        />
      </div>
     
      
    </div>
   
  );
};
