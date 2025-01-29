// Import necessary libraries and components
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Avatar } from "@/components/ui/avatar";

// Mock Data for Demo
const mockProfiles = [
  {
    id: 1,
    name: "Alice",
    bio: "Love hiking and reading!",
    profilePic: "https://via.placeholder.com/100",
    goal: "Serious Relationship",
  },
  {
    id: 2,
    name: "Bob",
    bio: "Foodie and aspiring chef.",
    profilePic: "https://via.placeholder.com/100",
    goal: "Friendship",
  },
];

// Profile Component
function Profile({ profile }) {
  return (
    <Card className="p-4 m-2">
      <Avatar src={profile.profilePic} alt={profile.name} className="w-16 h-16 mb-4" />
      <h2 className="text-xl font-bold">{profile.name}</h2>
      <p>{profile.bio}</p>
      <p className="text-sm text-gray-500">Goal: {profile.goal}</p>
      <Button className="mt-2">Send Message</Button>
    </Card>
  );
}

// Home Component
function Home() {
  const [search, setSearch] = useState("");

  const filteredProfiles = mockProfiles.filter(profile =>
    profile.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to Lavas Dating App</h1>
      <Input
        type="text"
        placeholder="Search Profiles"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredProfiles.map(profile => (
          <Profile key={profile.id} profile={profile} />
        ))}
      </div>
    </div>
  );
}

// App Component
function App() {
  return (
    <Router>
      <div>
        <nav className="p-4 bg-blue-600 text-white">
          <Link to="/" className="text-lg font-bold">Home</Link>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/profile/:id" component={Profile} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
