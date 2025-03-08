new Vue({
  el: '#app',
  data() {
    return {
      products: [
        { 
          "id": 1, 
          "name": "Netflix (1 dispositivo)", 
          "prices": { "1 mes": 5, "2 meses": 9, "3 meses": 13, "4 meses": 17, "6 meses": 25, "12 meses": 44 },
          "image": "netflix_1_dispositivo.jpg",
          "paymentAccounts": ["Cuenta Principal: 12345", "Cuenta Secundaria: 67890"]
        },
        { 
          "id": 2, 
          "name": "Netflix (2 dispositivos)", 
          "prices": { "1 mes": 8.5, "2 meses": 16, "3 meses": 22, "4 meses": 28, "6 meses": 40, "12 meses": 72 },
          "image": "netflix_2_dispositivos.jpg",
          "paymentAccounts": ["Cuenta Principal: 23456", "Cuenta Secundaria: 78901"]
        },
        // Agregar el resto de productos de manera similar...
      ],
      customer: {
        name: '',
        email: '',
        phone: '',
        receipt: null // Para subir comprobante
      }
    };
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      this.customer.receipt = file;
    },
    submitForm(productId) {
      const product = this.products.find(p => p.id === productId);
      console.log('Producto seleccionado:', product);
      console.log('Datos del cliente:', this.customer);
      alert("Formulario enviado!");
    }
  },
  template: `
    <div>
      <h1>Productos Streaming</h1>
      <div class="products-container">
        <div class="product" v-for="product in products" :key="product.id">
          <img :src="product.image" :alt="product.name" />
          <h3>{{ product.name }}</h3>
          <div v-for="(price, duration) in product.prices" :key="duration">
            <p>{{ duration }}: ${{ price }}</p>
          </div>
          
          <div>
            <p><strong>Cuentas de pago:</strong></p>
            <ul>
              <li v-for="account in product.paymentAccounts" :key="account">{{ account }}</li>
            </ul>
          </div>

          <div>
            <h4>Datos del cliente:</h4>
            <label for="name">Nombre:</label>
            <input type="text" id="name" v-model="customer.name" />
            
            <label for="email">Correo electrónico:</label>
            <input type="email" id="email" v-model="customer.email" />
            
            <label for="phone">Teléfono:</label>
            <input type="text" id="phone" v-model="customer.phone" />
          </div>

          <div>
            <label for="receipt">Sube tu comprobante:</label>
            <input type="file" id="receipt" @change="handleFileUpload" />
          </div>

          <button @click="submitForm(product.id)">Enviar</button>
        </div>
      </div>
    </div>
  `,
  styles: `
    .products-container {
      display: flex;
      flex-wrap: wrap;
    }
    .product {
      width: 300px;
      margin: 15px;
      padding: 20px;
      border: 1px solid #ddd;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    .product img {
      width: 100%;
      height: auto;
      border-radius: 8px;
    }
    .product input {
      display: block;
      margin: 10px 0;
      padding: 8px;
      width: 100%;
      border-radius: 4px;
      border: 1px solid #ccc;
    }
    .product button {
      background-color: #28a745;
      color: white;
      padding: 10px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    .product button:hover {
      background-color: #218838;
    }
  `
});
