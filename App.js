// Import a library to help create a Component
import React from 'react';
import { View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a Component
const App = () => (
    <View style={{ flex: 1 }}>
        <Header>Albums</Header>
        <AlbumList />
    </View>
);

// Export App component to index.js
export default App;
