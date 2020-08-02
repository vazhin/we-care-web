import React from 'react';
import Navbar from './navbar';
import ProfileSidebar from './sidebar';
import Profile from './profile/profile';
import ProfileFeed from './profile-feed/profile-feed';
import ProfileJournal from './profile-journal/profile-journal';
import ProfileMessages from './profile-messages/profile-messages';
import ProfileYourPosts from './profile-your-posts/profile-your-posts';
import AllMessages from './all-messages/all-messages';
import AllJournals from './all-journals/all-journals';
import { Switch, Route } from 'react-router-dom';

const ProfilePage = () => {
  return (
    <div className="h-screen bg-beige flex flex-col relative">
      <Navbar />
      <main className="flex lg:flex-row flex-col-reverse justify-between h-full overflow-y-auto overflow-x-hidden">
        <ProfileSidebar />
        <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/feed">
            <ProfileFeed />
          </Route>
          <Route exact path="/journal">
            <AllJournals />
          </Route>
          <Route exact path="/journal/1">
            <ProfileJournal />
          </Route>
          <Route exact path="/messages">
            <AllMessages />
          </Route>
          <Route path="/messages/HarryDavies">
            <ProfileMessages />
          </Route>
          <Route path="/your-posts">
            <ProfileYourPosts />
          </Route>
          <Route path="/">
            {/* temporary */}
            <Profile />
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default ProfilePage;
