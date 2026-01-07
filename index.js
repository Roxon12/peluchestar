const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(require('cors')());

app.get('/', (req, res) => {
    res.send("Bienvenido a MotoGoEsme API");
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
import MapView from 'react-native-maps';

export default function HomeScreen() {
    return (
        <MapView
            style={{ flex: 1 }}
            initialRegion={{
                latitude: -0.1807,
                longitude: -78.4678,
                latitudeDelta: 0.1,
                longitudeDelta: 0.1,
            }}
        />
    );
}
