import React from "react";
import { Route, Switch } from "react-router-dom";
import Tabs from "../Tabs/Tabs";
import Advertisement from "../Advertisement/Advertisement";
import TabAbout from "../Tabs/TabsItems/TabAbout";
import TabReview from "../Tabs/TabsItems/TabReview";
import TabActors from "../Tabs/TabsItems/TabActors";
import TabSites from "../Tabs/TabsItems/TabSites";
import TabPremieres from "../Tabs/TabsItems/TabPremieres";
import TabAchievements from "../Tabs/TabsItems/TabAchievements";
import TabFacts from "../Tabs/TabsItems/TabFacts";


const FullInfo = () => {
    return (
        <div class="full-info">
            <Tabs />
            <div class="full-content">
                <Switch>
                    <Route exact path="/" component={TabAbout}/>
                    <Route path="/reviews" component={TabReview}/>
                    <Route path="/premieres" component={TabPremieres}/>
                    <Route path="/actors" component={TabActors}/>
                    <Route path="/achievements" component={TabAchievements}/>
                    <Route path="/facts" component={TabFacts}/>
                    <Route path="/sites" component={TabSites}/>
                </Switch>
                <Advertisement />
            </div>
        </div>
    );
}

export default FullInfo;