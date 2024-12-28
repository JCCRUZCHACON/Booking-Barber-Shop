const BookingForm = () => (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Reserva tu Cita</h2>
      <form>
        <input type="text" placeholder="Nombre" className="w-full mb-4 p-2 border rounded" />
        <input type="email" placeholder="Correo" className="w-full mb-4 p-2 border rounded" />
        <select className="w-full mb-4 p-2 border rounded">
          <option>Selecciona un servicio</option>
          <option>Corte de cabello</option>
          <option>Arreglo de barba</option>
          <option>Paquete completo</option>
        </select>
        <input type="datetime-local" className="w-full mb-4 p-2 border rounded" />
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Reservar</button>
      </form>
    </div>
  );
  export default BookingForm;
  