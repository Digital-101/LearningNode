import React, { useState } from 'react';
import { View, Text, TextInput, Image, Button, FlatList, StyleSheet } from 'react-native';

const mockProfiles = [
  { id: 1, name: "Alice", bio: "Love hiking and reading!", profilePic: "https://via.placeholder.com/100", goal: "Serious Relationship" },
  { id: 2, name: "Bob", bio: "Foodie and aspiring chef.", profilePic: "https://via.placeholder.com/100", goal: "Friendship" }
];

const ProfileCard = ({ profile }) => (
  <View style={styles.card}>
    <Image source={{ uri: profile.profilePic }} style={styles.avatar} />
    <Text style={styles.name}>{profile.name}</Text>
    <Text>{profile.bio}</Text>
    <Text style={styles.goal}>Goal: {profile.goal}</Text>
    <Button title="Send Message" onPress={() => alert(`Message sent to ${profile.name}`)} />
  </View>
);

const App = () => {
  const [search, setSearch] = useState("");
  const filteredProfiles = mockProfiles.filter(profile =>
    profile.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Lavas Dating App</Text>
      <TextInput
        style={styles.searchBox}
        placeholder="Search Profiles"
        value={search}
        onChangeText={setSearch}
      />
      <FlatList
        data={filteredProfiles}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <ProfileCard profile={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  searchBox: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10
  },
  card: {
    padding: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 10
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 10
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  goal: {
    fontSize: 12,
    color: 'gray'
  }
});

export default App;
