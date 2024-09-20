class CartaElement extends HTMLElement {
  constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
          <style>
              #miId {
                  background: #f5f5f5;
                  border: 2px solid #ccc;
                  color: #333;
                  margin: 12px;
                  padding: 16px;
                  display: flex;
                  flex-direction: column;
                  gap: 16px;
                  font-family: Arial, sans-serif;
              }
              h1 {
                  color: #ff6347;
              }
              .section {
                  padding: 10px;
                  border: 1px solid #ddd;
                  background-color: #fff;
                  border-radius: 8px;
              }
              .section h2 {
                  margin: 0 0 8px 0;
                  color: #4682b4;
              }
              .section p {
                  margin: 0;
              }
          </style>
          <div id="miId"><center>
              <h1>Mi Tarjeta Personal</h1>
              </center>
              <div class="section">
                  <h2>Información Personal</h2>
                  <p>Nombre: jhorman jesus castellanos morales</p>
                  <p>Edad: 28 años</p>
                  <p>Ciudad: tibu</p>
              </div>
              <div class="section">
                  <h2>Hobbies</h2>
                  <p>- Leer libros</p>
                  <p>- Jugar fútbol</p>
                  <p>- Programar en JavaScript</p>
                  <p>- ver anime</p>
              </div>
          </div>
      `;
  }

  connectedCallback() {
      console.log("El componente ha sido añadido al DOM");
  }

  disconnectedCallback() {
      console.log("El componente ha sido eliminado del DOM");
  }
}

customElements.define("carta-element", CartaElement);
