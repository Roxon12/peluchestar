const express = require('express');
const app = express();
const port = 3000;

const productos = [
  { 
    "id": 1, 
    "name": "Netflix (1 dispositivo)", 
    "prices": { "1 mes": 5, "2 meses": 9, "3 meses": 13, "4 meses": 17, "6 meses": 25, "12 meses": 44 },
    "image": "netflix_1_dispositivo.jpg"
  },
  { 
    "id": 2, 
    "name": "Netflix (2 dispositivos)", 
    "prices": { "1 mes": 8.5, "2 meses": 16, "3 meses": 22, "4 meses": 28, "6 meses": 40, "12 meses": 72 },
    "image": "netflix_2_dispositivos.jpg"
  },
  { 
    "id": 3, 
    "name": "Netflix (4 dispositivos)", 
    "prices": { "1 mes": 14.5, "2 meses": 28, "3 meses": 42 },
    "image": "netflix_4_dispositivos.jpg"
  },
  { 
    "id": 4, 
    "name": "Disney+ Premium (1 dispositivo)", 
    "prices": { "1 mes": 3.5 },
    "image": "disney_plus_1_dispositivo.jpg"
  },
  { 
    "id": 5, 
    "name": "Disney+ Premium (2 dispositivos)", 
    "prices": { "1 mes": 6 },
    "image": "disney_plus_2_dispositivos.jpg"
  },
  { 
    "id": 6, 
    "name": "Zapping (1 dispositivo)", 
    "prices": { "1 mes": 3.95, "4 meses": 9 },
    "image": "zapping_1_dispositivo.jpg"
  },
  { 
    "id": 7, 
    "name": "Amazon Prime (1 dispositivo)", 
    "prices": { "1 mes": 2.75, "3 meses": 6 },
    "image": "amazon_prime_1_dispositivo.jpg"
  },
  { 
    "id": 8, 
    "name": "Amazon Prime (4 dispositivos)", 
    "prices": { "1 mes": 5.5, "3 meses": 15 },
    "image": "amazon_prime_4_dispositivos.jpg"
  },
  { 
    "id": 9, 
    "name": "Max (1 dispositivo)", 
    "prices": { "1 mes": 2 },
    "image": "max_1_dispositivo.jpg"
  },
  { 
    "id": 10, 
    "name": "Max (Cuenta completa)", 
    "prices": { "1 mes": 3.5 },
    "image": "max_cuenta_completa.jpg"
  },
  { 
    "id": 11, 
    "name": "Crunchyroll (Cuenta completa)", 
    "prices": { "1 mes": 4.5 },
    "image": "crunchyroll_cuenta_completa.jpg"
  },
  { 
    "id": 11, 
    "name": "Crunchyroll (1 pantalla)", 
    "prices": { "1 mes": 2.00 },
    "image": "crunchyroll_cuenta_completa.jpg"
  },
  { 
    "id": 12, 
    "name": "El Canal del Fútbol (Cuenta completa)", 
    "prices": { "1 mes": 4.5 },
    "image": "canal_del_futbol_cuenta_completa.jpg"
  },
  { 
    "id": 13, 
    "name": "Pornhub (Cuenta completa)", 
    "prices": { "1 mes": 4.5 },
    "image": "pornhub_cuenta_completa.jpg"
  },
  { 
    "id": 14, 
    "name": "Paramount+ (Cuenta personal)", 
    "prices": { "1 mes": 4, "3 meses": 7 },
    "image": "paramount_plus_cuenta_personal.jpg"
  },
  { 
    "id": 15, 
    "name": "Paramount+ (Cuenta completa)", 
    "prices": { "1 mes": 4.5 },
    "image": "paramount_plus_cuenta_completa.jpg"
  },
  { 
    "id": 16, 
    "name": "Vix (1 dispositivo)", 
    "prices": { "1 mes": 2 },
    "image": "vix_1_dispositivo.jpg"
  },
  { 
    "id": 17, 
    "name": "YouTube Premium (1 dispositivo)", 
    "prices": { "1 mes": 2.75 },
    "image": "youtube_premium_1_dispositivo.jpg"
  },
  { 
    "id": 18, 
    "name": "Apple Music, Spotify, Deezer (Cuenta personal)", 
    "prices": { "1 mes": 3.5, "2 meses": 4.5, "3 meses": 7 },
    "image": "apple_music_spotify_deezer_cuenta_personal.jpg"
  },
  { 
    "id": 19, 
    "name": "Canva (Cuenta completa)", 
    "prices": { "1 mes": 2, "2 meses": 3, "3 meses": 5, "6 meses": 8, "12 meses": 10 },
    "image": "canva_cuenta_completa.jpg"
  },
  { 
    "id": 20, 
    "name": "Capcut Pro (Cuenta completa)", 
    "prices": { "1 mes": 4, "2 meses": 5, "3 meses": 7.5, "6 meses": 10 },
    "image": "capcut_pro_cuenta_completa.jpg"
  },
  { 
    "id": 21, 
    "name": "Combos Streaming (1 dispositivo)", 
    "prices": { "1 mes": 6 },
    "image": "combos_streaming_1_dispositivo.jpg"
  },
  { 
    "id": 22, 
    "name": "Mega Combos Streaming", 
    "prices": { "1 mes": 7, "3 meses": 8, "12 meses": 9 },
    "image": "mega_combos_streaming.jpg"
  },
  { 
    "id": 23, 
    "name": "Antivirus Avast (1 año)", 
    "prices": { "1 mes": 20 },
    "image": "antivirus_avast_1_ano.jpg"
  },
  { 
    "id": 24, 
    "name": "Antivirus ESET (1 año)", 
    "prices": { "1 mes": 23 },
    "image": "antivirus_eset_1_ano.jpg"
  },
  { 
    "id": 25, 
    "name": "Antivirus Kaspersky (1 año)", 
    "prices": { "1 mes": 20 },
    "image": "antivirus_kaspersky_1_ano.jpg"
  },
  { 
    "id": 26, 
    "name": "Antivirus McAfee (1 año)", 
    "prices": { "1 mes": 18 },
    "image": "antivirus_mcafee_1_ano.jpg"
  },
  { 
    "id": 27, 
    "name": "Licencias Microsoft Windows 10 Pro", 
    "prices": { "1 mes": 14 },
    "image": "licencia_windows_10_pro.jpg"
  },
  { 
    "id": 28, 
    "name": "Licencias Windows 11 Pro", 
    "prices": { "1 mes": 14 },
    "image": "licencia_windows_11_pro.jpg"
  },
  { 
    "id": 29, 
    "name": "Licencias Office 2016", 
    "prices": { "1 mes": 15 },
    "image": "licencia_office_2016.jpg"
  },
  { 
    "id": 30, 
    "name": "Licencias Office 2019", 
    "prices": { "1 mes": 15 },
    "image": "licencia_office_2019.jpg"
  },
  { 
    "id": 31, 
    "name": "Licencias Office 2021", 
    "prices": { "1 mes": 27 },
    "image": "licencia_office_2021.jpg"
  },
  { 
    "id": 32, 
    "name": "Licencias Office 365", 
    "prices": { "1 mes": 17 },
    "image": "licencia_office_365.jpg"
  },
  { 
    "id": 33, 
    "name": "Flujo TV (1 dispositivo)", 
    "prices": { "1 mes": 2.50 },
    "image": "flujo_tv_1_dispositivo.jpg"
  },
  { 
    "id": 34, 
    "name": "Flujo TV (3 conexiones)", 
    "prices": { "1 mes": 7, "3 meses": 20, "6 meses": 35, "12 meses": 60 },
    "image": "flujo_tv_3_conexiones.jpg"
  },
  { 
    "id": 35, 
    "name": "IPTV (1 dispositivo)", 
    "prices": { "1 mes": 8, "2 meses": 15, "3 meses": 20, "6 meses": 40, "12 meses": 70 },
    "image": "iptv_1_dispositivo.jpg"
  },
  { 
    "id": 36, 
    "name": "Recargas de Videojuegos (Apple iTunes)", 
    "prices": { "5": 7.5, "10": 12.5, "25": 28 },
    "image": "recargas_videojuegos_apple_itunes.jpg"
  },
  { 
    "id": 37, 
    "name": "Recargas de Videojuegos (Playstation)", 
    "prices": { "10": 12.5, "25": 28, "50": 54 },
    "image": "recargas_videojuegos_playstation.jpg"
  },
  { 
    "id": 38, 
    "name": "Diamantes Free Fire", 
    "prices": { "110": 1.5, "341": 4, "572": 6, "1166": 12, "2398": 23.5, "6160": 55 },
    "image": "diamantes_free_fire.jpg"
  },
  { 
    "id": 39, 
    "name": "Diamantes PUBG Mobile", 
    "prices": { "60": 1.5, "325": 6, "660": 11.25, "1800": 27.5, "3850": 54, "8100": 105 },
    "image": "diamantes_pubg_mobile.jpg"
  },
  { 
    "id": 40, 
    "name": "Robux Roblox", 
    "prices": { "10": 11.5, "25": 26.5, "50": 53.5 },
    "image": "robux_roblox.jpg"
  }
];

// Ruta para enviar productos al frontend
app.get('/productos', (req, res) => {
  res.json(productos);
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

// Middleware para servir archivos estáticos
app.use(express.static("public"));

// Ruta principal
app.get("/", (req, res) => {
    res.send("Bienvenido a la tienda de insumos de barbería 'El Michel'!");
});

// Ruta para obtener todos los productos
app.get("/productos", (req, res) => {
    res.json(productos);
});

// Ruta para obtener un producto por ID
app.get("/productos/:id", (req, res) => {
    const producto = productos.find(p => p.id === parseInt(req.params.id));
    if (producto) {
        res.json(producto);
    } else {
        res.status(404).send("Producto no encontrado");
    }
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
    const express = require("express");
    const path = require("path");
    
    const app = express();
    
    // Servir archivos estáticos desde la carpeta 'images' y el resto del frontend
    app.use(express.static(path.join(__dirname, "images")));
    app.use(express.static(path.join(__dirname, "public"))); // Asegúrate de que tu HTML esté en 'public'
    
    // Ruta principal
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "public", "index.html"));
    });
    
    // Inicia el servidor
    const PORT = 3000;
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
    });
